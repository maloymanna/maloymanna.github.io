---
author: biguru
comments: true
date: 2008-03-20 05:36:18+00:00
layout: post
link: https://biguru.wordpress.com/2008/03/19/whats-new-in-xcelsius-2008-top-10-features/
slug: whats-new-in-xcelsius-2008-top-10-features
title: What's new in Xcelsius 2008 - Top 10 features
wordpress_id: 6
categories:
- SAP BusinessObjects
tags:
- business objects
- SAP
- xcelsius
---

Business Objects has just released the updated [Xcelsius 2008](http://www.businessobjects.com/product/catalog/xcelsius/default.asp) after a long [beta program](http://www.businessobjects.com/campaigns/xcelsius/contest/). What are the top new features of this exciting data visualization and dashboard tool? Let's find out the top 10:

1. **Copy-Paste** - Productivity is bound to increase through collaborative development now as it is possible to copy-paste components between XLF files.  
2. **Filtered Rows** - Selector components like List box and combo-box now include a new option in the insert-options list. This is the "Filtered rows" option, automatically removing duplicates. In the previous version, this worked only with the Filter component.  ![Filtered Rows option in selector components](/post/filteredrows.jpg?w=500)  
3. **Color-scheme** - The new-look Xcelsius 2008 has some amazing pre-built color schemes, including "auto-matching" of colors and allowing color configuration of backgrounds, text, buttons, charts, selectors, single value components, maps and scroll bars. A notch above the existing Xcelsius with its garish and glossy color schemes. 3 new themes - Admiral, iTheme and Nova have also been added to the existing set.  
4. **History component** - This is a very useful new feature which captures a single-cell value and inserts it into a contiguous row/column of data, thus allowing the designer to track changes based on data refreshes, user selections etc. Used with XML Data connection, this can be used for exporting data snapshots out of Xcelsius.  
5. **Trend Analyzer component** - This component automatically inserts linear, logarithmic calculations into charts, tables, and other components at runtime. You can choose the order of the polynomial. Alternatively, you can let Xcelsius decide the best fit for the trend.  
![Trend Analyzer component](/post/trendanalyzer.jpg?w=500)  
6. **Dual Y-Axis option** - A long standing wish of the Xcelsius developer community, the secondary axis charting has now been made available on line, column, stacked column, bar, stacked bar, combination, chart, area, and stacked area charts. Earlier, the workarounds included using multiple copies of the chart and overlaying them with clever formatting and dynamic visibility.  
7. **Alerts in selector components** - This feature allows configuring selectors e.g. combo-box, list-box etc to display alerts icon for each label. It also has a new "Middle values are good" option for percent alerts in the color-order section.  
8. **Data Manager** - A redesigned development interface now includes a new Data Manager, which consolidates the various possible external data sources including QaaWS, XML data, portal, Live Office, XML maps, flash variables, crystal reports, Adobe Life cycle data services and web services. There is also a general option available to import data from a spreadsheet in the Business Objects Enterprise.  
9. **Slick new IDE** - The new IDE is created using Adobe Flex and includes an embedded Excel sheet which improves productivity by allowing the designer to make changes to the model within the IDE, rather than Alt-Tab-bing between Excel and Xcelsius. There are several one-touch Quick-views available - the integrated workspace, canvas only, Excel only and both canvas-and-Excel. And all those floating bars can be pinned or auto-hidden. While dragging and dropping, scroll arrows appear over the toolbars, and it takes a little while to adjust to the way you can dock these bars.  
10. **Component management** - Has been made easier in that you can select individual components within a group and modify its properties, including sending it back or forward within the group. Hiding and locking of components and groups have also been made very easy.  

_**What's more:**_  

* It is no longer a pain to go through the uninstall-reinstall process to add a license. You can update your trial by entering the license from Help - License Manager.  
* New containers like the Panel component with scroll bars and the Tab component make it easy to build component-heavy visualizations without having to worry too much about precious screen space or rely too much on dynamic visibility.  
* You can build your own custom components using [Adobe Flex](http://www.adobe.com/products/flex/) with the Xcelsius SDK.  

Get the [Xcelsius 2008 with a 60 day developer keycode](http://diamond.businessobjects.com/node/18827) at [Diamond](http://diamond.businessobjects.com/xcelsius/sdk) where you can also download the [Xcelsius 2008 Component SDK](http://diamond.businessobjects.com/node/18831).

_**What's less:**_  

* Even with the redesign, Xcelsius retains its memory-hogging issues. A blank XLF with an embedded Excel easily takes up around 300 MB RAM, out of which 80MB is of the Excel alone.  
* A Switch-To/Retry dialog is common during launching Xcelsius, so much so that hiding it has been made a part of File - Preferences - Excel Options - "Always Hide" checkbox.  
![Excel Options - Hide the Switch To / Retry dialog](/post/exceloptions.jpg)  
* The Export icons are difficult to make sense of and have inconsistent tool-tips (Powerpoint, PDF and Word do not have any, while Outlook and Business Objects platform do.)  
* Installation is to "C:\Program Files\" by default without letting you select any location. If you wish to change the location, you'll need to modify a registry entry as [David Taylor points out in his blog](http://neverknewthat.wordpress.com/2008/03/07/let-me-change-my-installation-location/).  

I hope to tinker around a bit more with the new look Xcelsius 2008 and find out how it does in the performance and scalability departments - aspects which become increasingly important gaging by the enthusiasm of enterprises embracing it as a tool for dashboards and scorecards.  

~biguru  
