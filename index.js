var createProperties = {
    title: "Search with MyAnimeList",
    contexts: ["selection"],
    onclick: function () {
        browser
            .tabs.executeScript({
                code: `window.getSelection().toString().trim()`
            })
            .then(function (selection) {
                if (selection == "") {
                    console.error("Can't read selection.");
                    return;
                }
                var encodedSelection = encodeURIComponent(selection);

                browser.tabs.create({
                    url: `https://myanimelist.net/search/all?q=${encodedSelection}&cat=all`,
                    active: true,
                });
            });
    },
};

var callback = function () {
    console.log("context menu created");
};

browser.contextMenus.create(createProperties, callback);

