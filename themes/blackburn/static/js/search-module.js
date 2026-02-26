// static/js/search-module.js
(async () => {
  try {
    const module = await import('/pagefind/pagefind.js');
    
    window.__PagefindAPI = module;
    window.__PagefindLoaded = true;
    console.log('✓ Pagefind module loaded', module);
    console.log('✓ __PagefindAPI.search exists:', typeof module.search);
    console.log('✓ __PagefindLoaded:', window.__PagefindLoaded);
    
    if (module.init) {
      await module.init();
      console.log('✓ Pagefind initialized');
    }
  } catch (e) {
    console.error('❌ Pagefind load failed:', e);
    window.__PagefindLoadError = e;
  }
})();