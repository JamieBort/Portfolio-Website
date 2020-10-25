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
    var ExpertLanguage = 0, IntermediateLanguage = 0, LearningLanguage = 0;
    var ExpertFL = 0, IntermediateFL = 0, LearningFL = 0;
    var ExpertDatabase = 0, IntermediateDatabase = 0, LearningDatabase = 0;
    var ExpertSCP = 0, IntermediateSCP = 0, LearningSCP = 0;
    var ExpertMPI = 0, IntermediateMPI = 0, LearningMPI = 0;

    var One = 0, Two = 0, Three = 0;

    for (var key in object) {

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

    console.log(One, Two, Three);
    // One = 0, Two = 0, Three = 0;
    // console.log("===============================");
    var Language = Math.max(ExpertLanguage, IntermediateLanguage, LearningLanguage);    
    console.log("Language: ", Language);
    // console.log("ExpertLanguage:", ExpertLanguage);
    // console.log("IntermediateLanguage:", IntermediateLanguage);
    // console.log("LearningLanguage: ", LearningLanguage);

    // console.log("===============================");
    var FL = Math.max(ExpertFL, IntermediateFL, LearningFL);
    console.log("Frameworks and Libraries", FL);
    // console.log("ExpertLanguage:", ExpertFL);
    // console.log("IntermediateLanguage:", IntermediateFL);
    // console.log("LearningLanguage: ", LearningFL);

    // console.log("===============================");
    var Databases = Math.max(ExpertDatabase, IntermediateDatabase, LearningDatabase);
    console.log("Databases", Databases);
    // console.log("ExpertLanguage:", ExpertDatabase);
    // console.log("IntermediateLanguage:", IntermediateDatabase);
    // console.log("LearningLanguage: ", LearningDatabase);

    // console.log("===============================");
    var SCP = Math.max(ExpertSCP, IntermediateSCP, LearningSCP);
    console.log("Software & Cloud Platforms", SCP);
    // console.log("ExpertLanguage:", ExpertSCP);
    // console.log("IntermediateLanguage:", IntermediateSCP);
    // console.log("LearningLanguage: ", LearningSCP);

    // console.log("===============================");
    var MPI = Math.max(ExpertMPI, IntermediateMPI, LearningMPI);
    console.log("Methodologies, Practices, & IDEs", MPI);
    // console.log("ExpertLanguage:", ExpertMPI);
    // console.log("IntermediateLanguage:", IntermediateMPI);
    // console.log("LearningLanguage: ", LearningMPI);
};
objectCountFunction(skillSets2);