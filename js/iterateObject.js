// Scrach file to create a function to iterate through the object. For the skills table.

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

objectCountFunction = (object) => {
    var ExpertLanguage = 0;
    var IntermediateLanguage = 0;
    var LearningLanguage = 0;
    var countingVariable = 0;
    test = (test_parameters) => {
        // var countingVariable = 0;
        if (object[key].type == test_parameters[0] && object[key].strength == test_parameters[1]) {
            // var countingVariable = 0;
            console.log("object[key].type:", object[key].type);
            console.log("object[key].strength:", object[key].strength);
            console.log("countingVariable:", countingVariable);
            countingVariable++;
        }
        return countingVariable;
    };

    // for (var key in object) {
    //     ExpertLanguage = test(["Language", "Expert"]);
    //     IntermediateLanguage = test(["Language", "Intermediate"]);
    //     // LearningLanguage = test(["LanLanguageguge", "Learning/Some Experience"]);
    // }

    for (var i = 0; i<object.length; i++){console.log(object[key])};

    console.log("===============================");
    console.log("ExpertLanguage:", ExpertLanguage);
    console.log("IntermediateLanguage:", IntermediateLanguage);
    console.log("LearningLanguage: ", LearningLanguage);
    // console.log("countingVariable:", countingVariable);
};
objectCountFunction(skillSets2);