// static/js/search-init.js
(function() {
  'use strict';
  
  const modal = document.getElementById('search-modal');
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  const status = document.getElementById('search-status');
  const closeBtn = document.getElementById('search-close');
  const sidebarBtn = document.getElementById('sidebar-search-btn');
  
  let initialized = false;
  let initPromise = null;
  
  async function initPagefind() {
    if (initialized) return Promise.resolve();
    if (initPromise) return initPromise;
    
    status.textContent = 'Loading index...';
    
    initPromise = (async () => {
      try {
        let waited = 0;
        while (!window.__PagefindLoaded && waited < 10000) {
          await new Promise(r => setTimeout(r, 100));
          waited += 100;
        }
        
        if (!window.__PagefindAPI || !window.__PagefindAPI.search) {
          console.error('Pagefind API not available:', {
            loaded: window.__PagefindLoaded,
            api: window.__PagefindAPI
          });
          throw new Error('Pagefind module failed to load');
        }
        
        initialized = true;
        console.log('✓ Pagefind ready for search');
      } catch (e) {
        console.error('Pagefind init failed:', e);
        status.textContent = '⚠ Search unavailable';
        initPromise = null;
      }
    })();
    
    return initPromise;
  }
  
  function openModal() {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(function() {
      if (input) { input.focus(); input.select(); }
    }, 100);
  }
  
  function closeModal() {
    if (!modal) return;
    if (input && document.activeElement === input) { input.blur(); }
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    if (input) input.value = '';
    if (results) results.innerHTML = '';
    if (status) status.textContent = '';
  }
  
  if (sidebarBtn) sidebarBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });
  
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openModal(); }
    if (e.key === '/' && document.activeElement && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') { e.preventDefault(); openModal(); }
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) { closeModal(); }
  });
  
  if (input) {
    input.addEventListener('input', async function(e) {
      const query = e.target.value.trim();
      if (!query) { if (results) results.innerHTML = ''; if (status) status.textContent = initialized ? '✓ Ready' : ''; return; }
      
      if (!initialized) {
        if (status) status.textContent = 'Loading...';
        await initPagefind();
      }
      
      if (!initialized) return;
      
      if (status) status.textContent = 'Searching...';
      
      try {
        // Pagefind 1.4.0: search() returns an object with results array
        const searchResponse = await window.__PagefindAPI.search(query);
        
        // Handle different response structures
        const searchResults = searchResponse.results || searchResponse || [];
        
        // Ensure it's an array
        const resultsArray = Array.isArray(searchResults) ? searchResults : [];
        
        if (status) status.textContent = resultsArray.length + ' result' + (resultsArray.length !== 1 ? 's' : '');
        if (!results) return;
        
        if (resultsArray.length === 0) {
          results.innerHTML = '<div style="padding:1rem;text-align:center;color:#888">No results found</div>';
          return;
        }
        
        const items = await Promise.all(resultsArray.map(async function(r) {
          const data = await r.data();
          return '<a href="' + data.url + '" class="search-result-item-pf"><span class="search-result-title-pf">' + (data.meta?.title || 'Untitled') + '</span><span class="search-result-summary-pf">' + (data.excerpt || '') + '</span></a>';
        }));
        
        results.innerHTML = items.join('');
      } catch (err) {
        console.error('Search failed:', err);
        console.log('Search response:', await window.__PagefindAPI.search(query).catch(() => 'error'));
        if (status) status.textContent = '⚠ Error';
        if (results) results.innerHTML = '<div style="padding:1rem;color:#c00">Search failed</div>';
      }
    });
  }
})();