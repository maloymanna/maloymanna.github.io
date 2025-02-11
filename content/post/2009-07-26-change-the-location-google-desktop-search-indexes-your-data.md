---
author: biguru
comments: true
date: 2009-07-26 11:15:03+00:00
layout: post
link: https://biguru.wordpress.com/2009/07/26/change-the-location-google-desktop-search-indexes-your-data/
slug: change-the-location-google-desktop-search-indexes-your-data
title: Change the location Google Desktop Search indexes your data
wordpress_id: 34
tags:
- bo
- BOBJ
- business intelligence
- Business Objects explorer
- data_dir
- google
- google desktop
- google desktop search
- information explosion
- Polestar
- registry
---

Desktop search has become an important component of our everyday work.   

With the amount of [information explosion](http://blogs.zdnet.com/Gardner/?p=3091), it is only natural that users and enterprises move towards enabling desktop (and enterprise) search for users – subject of course to appropriate security and access controls. BI vendors have moved into this new business space that has opened up and seems to be one of the most promising. While Business Objects had announced support for the Google Search appliance and Google Desktop [back in 2006](http://www1.sap.com/about/newsroom/businessobjects/20060515_006446.epx), their most important announcement lately has been the launch of the [Business Objects Explorer](http://www1.sap.com/solutions/sapbusinessobjects/large/intelligenceplatform/bi/search-navigation/explorer/explorer-non-accelerated/index.epx) (formerly known as Polestar) product. More about that in a later post…

[Google Desktop Search](http://desktop.google.com/) is one of the most widely used desktop search appliances.  One would expect it to have an intelligent installer as well. Unfortunately, it doesn’t allow you to either choose the installation directory or the location for the search index. It installs in your system drive without providing any means to modify it from the Options setting. This can be quite annoying and frustrating if your system drive is not set up with a huge amount of space, as the Google Desktop search index will expand soon and hog a lot of space (up to 2 GB) on the system drive. I will show a tip here on how you can get around this issue by modifying the location of the Google Desktop search index to change it from the default system drive and without having to rebuild the index.

1. Right click and exit Google Desktop.

![Exit_Google_Desktop](/post/exit_google_desktop.png)

2. Open Windows Explorer and navigate to `C:\Documents and Settings\<username>Local Settings\Application Data\Google\<google desktop search>`

![Navigate_To_Google_Desktop_Search_Folder](/post/navigate_to_google_desktop_search_folder.png)

Note: If you’re unable to see “Local Settings” – (it’s a hidden folder) – change your folder options from Tools – View – Show hidden files and folders.

3. Move the `<google desktop search>` folder to a different drive, e.g. `D:\ Google Desktop\<google desktop search>`

4. Open the Windows registry editor from Start – Run – typing regedit – Hit Enter.

5. Navigate to HKEY_CURRENT_USER\Software\Google\Google Desktop.

6. Select the “data_dir” key in right pane, double-click to change its value to the new location of the `<google desktop search index>`

![Modify_Registry_Google_Desktop_data_dr](/post/modify_registry_google_desktop_data_dr.png)

7. Exit the registry editor.

8. Restart Google Desktop Search.
