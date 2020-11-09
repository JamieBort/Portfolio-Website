// For the skills table


// array of objects
const First_Skillset_Object = [
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
const Skillsets = {
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

// Need to iterate through the skill_sets.json object. If a sub-object has 'Language' as 'type' and 'Expert' as 'strength', then value for 'name' needs to go in the cell occupied by the row 'Expert' and the column 'Language'.

// ******************************************************
//             The below is for table.html
// from: https://stackoverflow.com/q/50996553/8210460
//            and this associated codepen:
//       https://codepen.io/JamieBort/pen/yLJVQdM
// ******************************************************

// data = {
//     "Q1": [1, 2, 3, 2],
//     "Q2": [5, 6, 7, 6],
//     "Q3": [9, 10, 11, 10],
//     'Q4': [], // test case 1: no data
//     'Q5': [1], // test case 2: only answer field
//     'Q6': ['A', 'B', 'C'],// test case 3: for string
//     'Q7': ['TEST'] // test case 4: for answer(string) only
// };
// For Q4, Q5, you can added some extra codes to uses default values intead, or ignore this row.

// formmat the data first, add some validators if neccessary
// function formatAdapter(data) {
//     return Object.entries(data).map((item) => {
//         let newItem = {}
//         newItem[item[0]] = {
//             'options': item[1].slice(0, item[1].length - 1),
//             'answer': item[-1]
//         } // assuming the last element is the answer, [0:last] is the options
//         return [item[0], item[1].slice(0, item[1].length - 1), item[1].slice(-1)[0]]
//     })
// }
// let formmatedData = formatAdapter(data)

// var tbody_1 = document.getElementById('tbody_1');

// generate the header
// tbody_1.innerHTML += "<tr>" +
//     "<th id='q'>" + "Question" + "</th>" +
//     "<th id='o'>" + "Options" + "</th>" +
//     "<th id='ca'>" + "Correct Answer" + "</th>" +
//     "</tr>"

// generate the rows(Html) for each questions
// let rowHtmls_1 = formmatedData.map((item) => {
//     let row = '<tr><td rowspan="' + (item[1].length || 1) + '">' + item[0] + '</td>'
//         + '<td>' + item[1][0] + '</td>'
//         + '<td rowspan="' + (item[1].length || 1) + '">' + item[2] + '</td></tr>'
//     row += item[1].slice(1).reduce((pre, cur) => {
//         return pre + '<tr><td>' + cur + '</td></tr>'
//     }, '');
//     console.log(row);
//     console.log(item[1]);
//     return row
// })

// combine header(html) and rows(html)
// tbody_1.innerHTML += rowHtmls_1.reduce((pre, cur) => {
//     return pre + cur
// }, '')

// ******************************************************
//             The above is for table.html
// from: https://stackoverflow.com/q/50996553/8210460
// ******************************************************


// ******************************************************
//             My take on the above.
// ******************************************************


var tbody = document.getElementById('tbody');

// generate the header
tbody.innerHTML += `<tr>
                        <th></th>
                        <th scope="col">Language</th>
                        <th scope="col">Frameworks & Libraries</th>
                        <th scope="col">Databases</th>
                        <th scope="col">Software & Cloud Platforms</th>
                        <th scope="col">Methodologies, Practices, & IDEs</th>
                    </tr>`;

// I need to count how many 'Expert' for each column. Then make note of the number that is the greatest.
// Then do the same for 'Intermediate'.
// And again for 'Learning/Some Experience'.


objectCountFunction = (object) => {
    var ExpertLanguage = 0, IntermediateLanguage = 0, LearningLanguage = 0;
    var ExpertFL = 0, IntermediateFL = 0, LearningFL = 0;
    var ExpertDatabase = 0, IntermediateDatabase = 0, LearningDatabase = 0;
    var ExpertSCP = 0, IntermediateSCP = 0, LearningSCP = 0;
    var ExpertMPI = 0, IntermediateMPI = 0, LearningMPI = 0;

    var One = 0, Two = 0, Three = 0;

    for (var key in object) {

        // NOTE: This commented out code is an attempt to condense the if() functions below.
        // // var One = 0, Two = 0, Three = 0;
        // var array = ["Language", "Frameworks and Libraries", "Databases", "Software & Cloud Platforms", "Methodologies, Practices, & IDEs"];
        // for (var i = 0; i < 2; i++) {
        //     //     // var One = 0, Two = 0, Three = 0;
        //     if (object[key].type == array[i]) {
        //         //         console.log("i: ", i, "array[i]: ", array[i], "One: ", One, "Two: ", Two, "Three: ", Three);
        //         //         // var One = 0, Two = 0, Three = 0;
        //         //         // console.log(array[i]);
        //         if (object[key].strength == "Expert") { One++; }
        //         if (object[key].strength == "Intermediate") { Two++; }
        //         if (object[key].strength == "Learning/Some Experience") { Three++; }

        //         // console.log(One, Two, Three);
        //     }
        //     console.log(One, Two, Three);
        //     One = 0, Two = 0, Three = 0;
        // }
        // // One = 0, Two = 0, Three = 0;
        // // console.log(One,Two,Three);

        if (object[key].type == "Language") {
            if (object[key].strength == "Expert") { ExpertLanguage++; }
            if (object[key].strength == "Intermediate") { IntermediateLanguage++; }
            if (object[key].strength == "Learning/Some Experience") { LearningLanguage++; }
        }

        if (object[key].type == "Frameworks and Libraries") {
            if (object[key].strength == "Expert") { ExpertFL++; }
            if (object[key].strength == "Intermediate") { IntermediateFL++; }
            if (object[key].strength == "Learning/Some Experience") { LearningFL++; }
        }

        if (object[key].type == "Databases") {
            if (object[key].strength == "Expert") { ExpertDatabase++; }
            if (object[key].strength == "Intermediate") { IntermediateDatabase++; }
            if (object[key].strength == "Learning/Some Experience") { LearningDatabase++; }
        }

        if (object[key].type == "Software & Cloud Platforms") {
            if (object[key].strength == "Expert") { ExpertSCP++; }
            if (object[key].strength == "Intermediate") { IntermediateSCP++; }
            if (object[key].strength == "Learning/Some Experience") { LearningSCP++; }
        }

        if (object[key].type == "Methodologies, Practices, & IDEs") {
            if (object[key].strength == "Expert") { ExpertMPI++; }
            if (object[key].strength == "Intermediate") { IntermediateMPI++; }
            if (object[key].strength == "Learning/Some Experience") { LearningMPI++; }
        }
        // console.log(One,Two,Three);
        // One = 0, Two = 0, Three = 0;
    }

    // console.log("One, Two, Three: ",One, Two, Three);
    // One = 0, Two = 0, Three = 0;
    // console.log("===============================");
    var Language = Math.max(ExpertLanguage, IntermediateLanguage, LearningLanguage);    
    console.log("Language: ", Language);
    // console.log("===============================");
    var FL = Math.max(ExpertFL, IntermediateFL, LearningFL);
    console.log("Frameworks and Libraries", FL);
    // console.log("===============================");
    var Databases = Math.max(ExpertDatabase, IntermediateDatabase, LearningDatabase);
    console.log("Databases", Databases);
    // console.log("===============================");
    var SCP = Math.max(ExpertSCP, IntermediateSCP, LearningSCP);
    console.log("Software & Cloud Platforms", SCP);
    // console.log("===============================");
    var MPI = Math.max(ExpertMPI, IntermediateMPI, LearningMPI);
    console.log("Methodologies, Practices, & IDEs", MPI);
};
// objectCountFunction(Skillsets);


// generate the rows(Html) for each questions
// let rowHtmls = formmatedData.map((item) => {
//     let row = '<tr><td rowspan="' + (item[1].length || 1) + '">' + item[0] + '</td>'
//         + '<td>' + item[1][0] + '</td>'
//         + '<td rowspan="' + (item[1].length || 1) + '">' + item[2] + '</td></tr>'
//     row += item[1].slice(1).reduce((pre, cur) => {
//         return pre + '<tr><td>' + cur + '</td></tr>'
//     }, '');
//     console.log(row);
//     console.log(item[1]);
//     return row;
// });

// first step: hardcode the table
// let rowHtmls = formmatedData.map((item) => {
    let row =   '<tr>'+
                    '<th scope="row" rowspan="2">Excellent</th>'+
                    '<td>HTML5</td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td>Jira</td>'+
                    '<td>Visual Studio</td>'+
                '</tr>'+
                '<tr>'+
                    
                    '<td>CSS3</td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td>Confluence</td>'+
                    '<td>InteliJ</td>'+
                '</tr>'+


                '<tr>'+
                    '<th scope="row" rowspan="6">Intermediate</th>'+
                    '<td>JavaScript</td>'+
                    '<td>Angular</td>'+
                    '<td>SQL</td>'+
                    '<td>Maple</td>'+
                    '<td>Test Driven Devlopment (TDD)</td>'+
                '</tr>'+
                '<tr>'+
                    
                    '<td>ES6</td>'+
                    '<td>Express.js</td>'+
                    '<td></td>'+
                    '<td>Matlab</td>'+
                    '<td>Agile</td>'+
                '</tr>'+
                '<tr>'+
                    
                    '<td>Java</td>'+
                    '<td>Mustache-Express MVC</td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td>Scrum</td>'+
                '</tr>'+
                '<tr>'+
                    
                    '<td>GitHub/Git</td>'+
                    '<td>Node.js</td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td>Xcode</td>'+
                '</tr>'+
                '<tr>'+
                    
                    '<td>Bash</td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td>Android Studio</td>'+
                '</tr>'+
                '<tr>'+
                    
                    '<td>Python</td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td></td>'+
                    '<td></td>'+
                '</tr>'+
                
                
                '<tr>'+
                    // '<th scope="row"  rowspan="3">Learning/Some Experience</th>'+
                    '<th scope="row"  rowspan="3">Some Experience</th>'+
                    '<td>C Sharp</td>'+
                    '<td>.Net</td>'+
                    '<td>MongoDB</td>'+
                    '<td></td>'+
                    '<td></td>'+
                '</tr>'+                
                '<tr>'+
                    
                    '<td></td>'+
                    '<td>DS.js</td>'+
                    '<td>PostgreSQL</td>'+
                    '<td></td>'+
                    '<td></td>'+
                '</tr>'+
                    
                    '<td></td>'+
                    '<td></td>'+
                    '<td>Mongoose</td>'+
                    '<td></td>'+
                    '<td></td>'+
                '</tr>';

                

//     row += item[1].slice(1).reduce((pre, cur) => {
//         return pre + '<tr><td>' + cur + '</td></tr>'
//     }, '');
//     console.log("row: ", row);
//     // console.log("item[1]", item[1]);
//     return row;
// });

tbody.innerHTML += row;

// combine header(html) and rows(html)
// tbody.innerHTML += rowHtmls.reduce((pre, cur) => {
//     return pre + cur
// }, '')