var createProperties = {
    title: "Open with Instagram",
    contexts: ["selection"],
    onclick: function () {
        browser
            .tabs.executeScript({
                code: `window.getSelection().toString().trim()`
            })
            .then(function (selection) {
                browser.tabs.create({
                    url: `https://instagram.com/${selection}/`,
                    active: true,
                });
            });
    },
};

var callback = function () {
    console.log("context menu created");
};

browser.contextMenus.create(createProperties, callback);

