const resources = {
    "name": {
        "name": "name",
        "URL": "Expert",
        "section": "www.awebsite.com",
        "attributes": {
            "first": "first",
            "second": "second",
            "third": "third",
        },
    },
    "flexbox_froggy": {
        "name": "Flexbox Froggy",
        "URL": "https://flexboxfroggy.com/",
        "section": "UI",
        "attributes": {
            "first": "first",
            "second": "second",
            "third": "third",
        },
    },
    "google": {
        "name": "Google",
        "URL": "www.google.com",
        "section": "UI",
        "attributes": {
            "first": "fourth",
            "second": "fifth",
            "third": "sixth",
        },
    },
};

// Using this:
// https://zellwk.com/blog/looping-through-js-objects/
// found from this internet search: javascript iterate through part of objects

var list = document.getElementById("list");
for (var key in resources) {
    var h2 = document.createElement("h2");
    h2.innerHTML = key;
    list.appendChild(h2);
    for (var key2 in resources[key]) {
        if (resources[key].hasOwnProperty("URL")) {
            var h3 = document.createElement("h3");
            // h3.innerHTML = resources[key][key2];
            h3.innerHTML = resources[key]["URL"];
            list.appendChild(h3);
            // for (var key3 in resources[key]) {
            //     var p = document.createElement("p");
            //     p.innerHTML = resources[key][key2][key3];
            //     list.appendChild(p);
            // }
        }
    }
}

var json = {
    "items": {
        "title1": "sample 1",
        "author1": "author 1"
    },
    "items2": {
        "title2": "sample 2",
        "author2": "author 2"
    },
    "items3": {
        "title3": "sample 3",
        "author3": "author 3"
    },
};

// var abc = document.getElementById("abc");
// for (var key1 in json) {
//     // console.log(key1);
//     var h3 = document.createElement("h3");
//     h3.innerHTML = key1;
//     abc.appendChild(h3);
//     for (var key2 in json[key1]) {
//         console.log(key2);
//         var h5 = document.createElement("h5");
//         h5.innerHTML = key2;
//         abc.appendChild(h5);
//     }
// }