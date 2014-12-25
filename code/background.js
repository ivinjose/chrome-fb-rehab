chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(changeInfo.status == "loading"){
        if( tab.url.search('https://www.facebook.com') != -1 ){
            chrome.tabs.update(tabId, {'url': chrome.extension.getURL('home.html')}, function(tab) {});
        }
    }

});

// chrome.tabs.onActivated.addListener(function(activeInfo) {
//     // how to fetch tab url using activeInfo.tabid
//     chrome.tabs.get(activeInfo.tabId, function(tab){
//         alert(tab.url);
//     });
// });
//
