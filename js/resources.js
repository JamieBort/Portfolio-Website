const resources = {
    "random_website": {
        "name": "random website name",
        "URL": "https://www.random.com/",
        "section": "games",
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
            "first": "fourth",
            "second": "fifth",
            "third": "sixth",
        },
    },
    "google": {
        "name": "Google",
        "URL": "www.google.com",
        "section": "back end",
        "attributes": {
            "first": "seventh",
            "second": "eight",
            "third": "nineth",
        },
    },
    "google2": {
        "name": "Google",
        "URL": "www.google.com",
        "section": "User Experience stuff",
        "attributes": {
            "first": "seventh",
            "second": "eight",
            "third": "nineth",
        },
    },
    "google3": {
        "name": "Google",
        "URL": "www.google.com",
        "section": "Interview stuff",
        "attributes": {
            "first": "seventh",
            "second": "eight",
            "third": "nineth",
        },
    },
    "g4oogle": {
        "name": "Google",
        "URL": "www.google.com",
        "section": "Java stuff",
        "attributes": {
            "first": "seventh",
            "second": "eight",
            "third": "nineth",
        },
    },
    "goog5le": {
        "name": "Google",
        "URL": "www.google.com",
        "section": "Best Practices stuff",
        "attributes": {
            "first": "seventh",
            "second": "eight",
            "third": "nineth",
        },
    },
    "go2ogle": {
        "name": "Google",
        "URL": "www.google.com",
        "section": "Writing a readme file",
        "attributes": {
            "first": "seventh",
            "second": "eight",
            "third": "nineth",
        },
    },
    "goo3gle": {
        "name": "Google",
        "URL": "www.google.com",
        "section": "CSS stuff",
        "attributes": {
            "first": "seventh",
            "second": "eight",
            "third": "nineth",
        },
    },
    "goo1gle": {
        "name": "Google",
        "URL": "www.google.com",
        "section": "Interview prep stuff",
        "attributes": {
            "first": "seventh",
            "second": "eight",
            "third": "nineth",
        },
    },

};




// Using this:
// https://zellwk.com/blog/looping-through-js-objects/
// found from this internet search: javascript iterate through part of objects
// maybe this:
// https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object

var list = document.getElementById("list");
for (var first_key in resources) {
    var div = document.createElement("div");
    // give the div the resource_div attribute
    div.className="resource_div";
    list.appendChild(div);

    var h2 = document.createElement("h2");
    h2.className="resource_title";
    h2.innerHTML = first_key;
    div.appendChild(h2);

    var p = document.createElement("p");
    p.innerHTML = resources[first_key]["name"];
    div.appendChild(p);

    var p = document.createElement("p");
    p.innerHTML = resources[first_key]["URL"];
    div.appendChild(p);

    var p = document.createElement("p");
    p.innerHTML = resources[first_key]["section"];
    div.appendChild(p);

    for (var abc in resources[first_key]["attributes"]) {
        var li = document.createElement("li");
        li.innerHTML = resources[first_key]["attributes"][abc];
        div.appendChild(li);
    }
}