// For the skills table


// array of objects
const skillSets = [
    {
        "item": "HTML5",
        "strength": "Expert",
        "type": "Language",
    },
    {
        "item": "CSS3",
        "strength": "Expert",
        "type": "Language",
    },
    {
        "item": "Python",
        "strength": "Intermediate",
        "type": "Language",
    },
    {
        "item": "Bash",
        "strength": "Expert",
        "type": "Language",
    },
    {
        "item": "Java",
        "strength": "Intermediate",
        "type": "Language",
    },
    {
        "item": "Git",
        "strength": "Expert",
        "type": "Language",
    },
    {
        "item": "C Sharp",
        "strength": "Learning/Some Experience",
        "type": "Language",
    },
    {
        "item": "PHP",
        "strength": "Want to learn",
        "type": "Language",
    },
    {
        "item": "R",
        "strength": "Want to learn",
        "type": "Language",
    },
    {
        "item": "React.js",
        "strength": "Intermediate",
        "type": "Frameworks and Libraries",
    },
    {
        "item": "React Native",
        "strength": "Intermediate",
        "type": "Frameworks and Libraries",
    },
    {
        "item": "Angular",
        "strength": "Learning/Some Experience",
        "type": "Frameworks and Libraries",
    },
    {
        "item": "Spring Boot",
        "strength": "Intermediate",
        "type": "Frameworks and Libraries",
    },
    {
        "item": ".NET",
        "strength": "Learning/Some Experience",
        "type": "Frameworks and Libraries",
    },
    {
        "item": "D3.js",
        "strength": "Learning/Some Experience",
        "type": "Frameworks and Libraries",
    },
    {
        "item": "Node.js",
        "strength": "Intermediate",
        "type": "Frameworks and Libraries",
    },
    {
        "item": "Mustache-Express MVC",
        "strength": "Intermediate",
        "type": "Frameworks and Libraries",
    },
    {
        "item": "SQL",
        "strength": "Intermediate",
        "type": "Databases",
    },
    {
        "item": "MongoDB",
        "strength": "Learning/Some Experience",
        "type": "Databases",
    },
    {
        "item": "PostreSQL",
        "strength": "Learning/Some Experience",
        "type": "Databases",
    },
    {
        "item": "Mongoose",
        "strength": "Learning/Some Experience",
        "type": "Databases",
    },
    {
        "item": "Jira",
        "strength": "Expert",
        "type": "Software & Cloud Platforms",
    },
    {
        "item": "Confluence",
        "strength": "Expert",
        "type": "Software & Cloud Platforms",
    },
    {
        "item": "Maple",
        "strength": "Intermediate",
        "type": "Software & Cloud Platforms",
    },
    {
        "item": "Matlab",
        "strength": "Intermediate",
        "type": "Software & Cloud Platforms",
    },
    {
        "item": "Linux",
        "strength": "Want to learn",
        "type": "Software & Cloud Platforms",
    },
    {
        "item": "AWS",
        "strength": "Want to learn",
        "type": "Software & Cloud Platforms",
    },
    {
        "item": "Heroku",
        "strength": "Want to learn",
        "type": "Software & Cloud Platforms",
    },
    {
        "item": "Apache Maven",
        "strength": "Want to learn",
        "type": "Software & Cloud Platforms",
    },
    {
        "item": "Visual Studio Code",
        "strength": "Expert",
        "type": "Methodologies, Practices, & IDEs",
    },
    {
        "item": "Intellij",
        "strength": "Expert",
        "type": "Methodologies, Practices, & IDEs",
    },
    {
        "item": "Kanban",
        "strength": "Want to learn",
        "type": "Methodologies, Practices, & IDEs",
    },
    {
        "item": "Agile",
        "strength": "Intermediate",
        "type": "Methodologies, Practices, & IDEs",
    },
    {
        "item": "Scrum",
        "strength": "Intermediate",
        "type": "Methodologies, Practices, & IDEs",
    },
    {
        "item": "Xcode",
        "strength": "Intermediate",
        "type": "Methodologies, Practices, & IDEs",
    },
    {
        "item": "Android Studio",
        "strength": "Intermediate",
        "type": "Methodologies, Practices, & IDEs",
    },
    {
        "item": "Test Driven Development (TDD)",
        "strength": "Intermediate",
        "type": "Methodologies, Practices, & IDEs",
    },
    {
        "item": "AJAX",
        "strength": "Learning/Some Experience",
        "type": "Software Topics",
    },
    {
        "item": "GraphQL",
        "strength": "Learning/Some Experience",
        "type": "Software Topics",
    },
    {
        "item": "Soap APIs",
        "strength": "Learning/Some Experience",
        "type": "Software Topics",
    },
    {
        "item": "RESTful Routes",
        "strength": "Intermediate",
        "type": "Software Topics",
    },
    {
        "item": "Event Listeners",
        "strength": "Intermediate",
        "type": "Software Topics",
    },
    {
        "item": "DOM manipulation",
        "strength": "Intermediate",
        "type": "Software Topics",
    },
    {
        "item": "Template Literals",
        "strength": "Intermediate",
        "type": "Software Topics",
    },
];
// object of objects
const skillSets2 = {
    "HTML5": {
        "strength": "Expert",
        "type": "Language",
    },
    "CSS3": {
        "strength": "Expert",
        "type": "Language",
    },
    "Python": {
        "strength": "Intermediate",
        "type": "Language",
    },
    "Bash": {
        "strength": "Expert",
        "type": "Language",
    },
    "Java": {
        "strength": "Intermediate",
        "type": "Language",
    },
    "Git":
    {
        "strength": "Expert",
        "type": "Language",
    },
    "C Sharp":
    {
        "strength": "Learning/Some Experience",
        "type": "Language",
    },
    "PHP": {
        "strength": "Want to learn",
        "type": "Language",
    },
    "R": {
        "strength": "Want to learn",
        "type": "Language",
    },
    "React.js": {
        "strength": "Intermediate",
        "type": "Frameworks and Libraries",
    },
    "React Native": {
        "strength": "Intermediate",
        "type": "Frameworks and Libraries",
    },
    "Angular": {
        "strength": "Learning/Some Experience",
        "type": "Frameworks and Libraries",
    },
    "Spring Boot": {
        "strength": "Intermediate",
        "type": "Frameworks and Libraries",
    },
    ".NET": {
        "strength": "Learning/Some Experience",
        "type": "Frameworks and Libraries",
    },
    "D3.js": {
        "strength": "Learning/Some Experience",
        "type": "Frameworks and Libraries",
    },
    "Node.js": {
        "strength": "Intermediate",
        "type": "Frameworks and Libraries",
    },
    "Mustache-Express MVC": {
        "strength": "Intermediate",
        "type": "Frameworks and Libraries",
    },
    "SQL": {
        "strength": "Intermediate",
        "type": "Databases",
    },
    "MongoDB": {
        "strength": "Learning/Some Experience",
        "type": "Databases",
    },
    "PostreSQL": {
        "strength": "Learning/Some Experience",
        "type": "Databases",
    },
    "Mongoose": {
        "strength": "Learning/Some Experience",
        "type": "Databases",
    },
    "Jira": {
        "strength": "Expert",
        "type": "Software & Cloud Platforms",
    },
    "Confluence": {
        "strength": "Expert",
        "type": "Software & Cloud Platforms",
    },
    "Maple": {
        "strength": "Intermediate",
        "type": "Software & Cloud Platforms",
    },
    "Matlab": {
        "strength": "Intermediate",
        "type": "Software & Cloud Platforms",
    },
    "Linux": {
        "strength": "Want to learn",
        "type": "Software & Cloud Platforms",
    },
    "AWS": {
        "strength": "Want to learn",
        "type": "Software & Cloud Platforms",
    },
    "Heroku": {
        "strength": "Want to learn",
        "type": "Software & Cloud Platforms",
    },
    "Apache Maven": {
        "strength": "Want to learn",
        "type": "Software & Cloud Platforms",
    },
    "Visual Studio Code": {
        "strength": "Expert",
        "type": "Methodologies, Practices, & IDEs",
    },
    "Intellij": {
        "strength": "Expert",
        "type": "Methodologies, Practices, & IDEs",
    },
    "Kanban": {
        "strength": "Want to learn",
        "type": "Methodologies, Practices, & IDEs",
    },
    "Agile": {
        "strength": "Intermediate",
        "type": "Methodologies, Practices, & IDEs",
    },
    "Scrum": {
        "strength": "Intermediate",
        "type": "Methodologies, Practices, & IDEs",
    },
    "Xcode": {
        "strength": "Intermediate",
        "type": "Methodologies, Practices, & IDEs",
    },
    "Android Studio": {
        "strength": "Intermediate",
        "type": "Methodologies, Practices, & IDEs",
    },
    "Test Driven Development (TDD)": {
        "strength": "Intermediate",
        "type": "Methodologies, Practices, & IDEs",
    },
    "AJAX": {
        "strength": "Learning/Some Experience",
        "type": "Software Topics",
    },
    "GraphQL": {
        "strength": "Learning/Some Experience",
        "type": "Software Topics",
    },
    "Soap APIs": {
        "strength": "Learning/Some Experience",
        "type": "Software Topics",
    },
    "RESTful Routes": {
        "strength": "Intermediate",
        "type": "Software Topics",
    },
    "Event Listeners": {
        "strength": "Intermediate",
        "type": "Software Topics",
    },
    "DOM manipulation": {
        "strength": "Intermediate",
        "type": "Software Topics",
    },
    "Template Literals": {
        "strength": "Intermediate",
        "type": "Software Topics",
    },
};

// import {skillSets} from '../skill_sets.json';
// import skillSets from '../skill_sets.json';
// var skillSets = require('../skill_sets.json');
// import * as skillSets from '../skill_sets.json';
// import * as skillSets from './skill_sets.json';
// import skillSets from './skill_sets.json';
// var skillSets = require('./skill_sets.json');
// var mydata = JSON.parse(skillSets);



// Need to iterate through the skill_sets.json object. If a sub-object has 'Language' as 'type' and 'Expert' as 'strength', then value for 'name' needs to go in the cell occupied by the row 'Expert' and the column 'Language'.

// console.log(skill_sets.json);
// console.log(skillSets);
// console.log(skillSets[0]);
// console.log(skillSets[2].item);
// var myArray = [];
// for (let index = 0; index < skillSets.length; index++) {
//     const element = skillSets[index].item;
//     myArray.push(skillSets[index].item);
//     console.log(element);
// }
// console.log(myArray);

// fetch(skillSets)
//   .then(response => response.json())
//   .then(json => console.log(json));

// (function(){
//     console.log(skillSets); // {"a" : "b", "c" : "d"}
//  })();



// ******************************************************
//             The below is for table.html
// from: https://stackoverflow.com/q/50996553/8210460
//            and this associated codepen:
//       https://codepen.io/JamieBort/pen/yLJVQdM
// ******************************************************

data = {
    "Q1": [1, 2, 3, 2],
    "Q2": [5, 6, 7, 6],
    "Q3": [9, 10, 11, 10],
    'Q4': [], // test case 1: no data
    'Q5': [1], // test case 2: only answer field
    'Q6': ['A', 'B', 'C'],// test case 3: for string
    'Q7': ['TEST'] // test case 4: for answer(string) only
};
// For Q4, Q5, you can added some extra codes to uses default values intead, or ignore this row.

// formmat the data first, add some validators if neccessary
function formatAdapter(data) {
    return Object.entries(data).map((item) => {
        let newItem = {}
        newItem[item[0]] = {
            'options': item[1].slice(0, item[1].length - 1),
            'answer': item[-1]
        } // assuming the last element is the answer, [0:last] is the options
        return [item[0], item[1].slice(0, item[1].length - 1), item[1].slice(-1)[0]]
    })
}
let formmatedData = formatAdapter(data)

var tbody = document.getElementById('tbody');

// generate the header
tbody.innerHTML += "<tr>" +
    "<th id='q'>" + "Question" + "</th>" +
    "<th id='o'>" + "Options" + "</th>" +
    "<th id='ca'>" + "Correct Answer" + "</th>" +
    "</tr>"

// generate the rows(Html) for each questions
let rowHtmls = formmatedData.map((item) => {
    let row = '<tr><td rowspan="' + (item[1].length || 1) + '">' + item[0] + '</td>'
        + '<td>' + item[1][0] + '</td>'
        + '<td rowspan="' + (item[1].length || 1) + '">' + item[2] + '</td></tr>'
    row += item[1].slice(1).reduce((pre, cur) => {
        return pre + '<tr><td>' + cur + '</td></tr>'
    }, '');
    console.log(row);
    console.log(item[1]);
    return row
})

// combine header(html) and rows(html)
tbody.innerHTML += rowHtmls.reduce((pre, cur) => {
    return pre + cur
}, '')

// ******************************************************
//             The above is for table.html
// from: https://stackoverflow.com/q/50996553/8210460
// ******************************************************

// ******************************************************
//             My take on the above.
// ******************************************************

// generate the header
tbody2.innerHTML += `<tr>
                        <th>blank</th>
                        <th>Language</th>
                        <th>Frameworks & Libraries</th>
                        <th>Databases</th>
                        <th>Software & Cloud Platforms</th>
                        <th>Methodologies, Practices, & IDEs</th>
                    </tr>`;

// I need to count how many expert for each column. Then choose the greatest among them.
// Then do the same for intermediate.
// And again for Learning/Some Experience.

objectCountFunction = (object) => {
    console.log("takes an object and spits out a number.");

    for (var key in object) {
        // for expert
        const count =[];
        var languageCount, Software_Cloud_PlatformsCount, Methodologies_Practices_IDECount;
        if (object[key].strength === "Expert") {
            // console.log(key);
            // console.log(object[key]);
            console.log(object[key].type);
        };
    }
    // for (var key in object) {console.log(key, skillSets2.key);};
};
objectCountFunction(skillSets2);






// generate the rows(Html) for each skill level
let rowHtmls2 = ['<tr><td rowspan="3">Q1</td><td>1</td><td rowspan="3">2</td></tr><tr><td>2</td></tr><tr><td>3</td></tr>', '<tr><td rowspan="3">Q2</td><td>5</td><td rowspan="3">6</td></tr><tr><td>6</td></tr><tr><td>7</td></tr>'];

// first compile some arrays of each
// console.log(skillSets2);
// console.log(skillSets2[".NET"]);
// console.log(skillSets2.HTML5.type);
// if (skillSets2.HTML5.strength == "Expert") { console.log("Expert!!") };

// console.log(formmatedData);
// formmatedData.map((item) => {console.log(item)});
// console.log(rowHtmls);
// console.log(row);

// export table.js;