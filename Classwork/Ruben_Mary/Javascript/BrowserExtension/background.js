chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request.directive) {
        case "popup-click":
            chrome.tabs.executeScript(null, { 
                file: "contentscript.js", 
                allFrames: true 
            });
            sendResponse({}); 
            break;
        default:
            alert("Unmatched request of '" + request + "' from script to background.js from " + sender);
    }
});
