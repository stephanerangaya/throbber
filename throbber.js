var index = 1;
var running = true;

setInterval(function () {
  var path = "/" + index + ".png";
  chrome.browserAction.setIcon({
    path: running ? path : "/26.png",
  });
  if (index === 41) {
    index = 1;
  } else {
    index = index + 1;
  }

  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == "complete") {
      running = false;
    }
    if (changeInfo.status == "loading") {
      running = true;
    }
  });
}, 4000 / 41);
