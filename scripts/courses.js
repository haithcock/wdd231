const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const doc = document;

createCoursesCard(courses);
displayCourseWork(courses);

const alllink = doc.querySelector("#all");
const cselink = doc.querySelector("#cse");
const wddlink = doc.querySelector("#wdd");

alllink.addEventListener('click', () => {
    console.clear();
    let allcourses = courses;
    createCoursesCard(allcourses);
    displayCourseWork(allcourses);
})

cselink.addEventListener('click', () => {
    console.clear();
    let csecourses = courses.filter(courses => courses.subject.includes('CSE'));
    createCoursesCard(csecourses);
    displayCourseWork(csecourses);
})

wddlink.addEventListener('click', () => {
    console.clear();
    let wddcourses = courses.filter(courses => courses.subject.includes("WDD"));
    createCoursesCard(wddcourses);
    displayCourseWork(wddcourses);
})

function displayCourseWork(courses) {
    let creditTotal = 0;

    doc.querySelector("#course-container").innerHTML = "";

    let info = doc.createElement("div");
    info.classList.add("course-container");

    courses.forEach(course => {
        creditTotal += course.credits;

        let classtitle = `${course.subject} ${course.number} - ${course.title}`;
        let classcredits = course.credits;

        let infoText = doc.createElement("p");
        infoText.classList.add("courses");
        infoText.innerHTML = `${classtitle}`;

        let creditText = doc.createElement("p");
        creditText.innerHTML = `${classcredits} credits`;

        doc.querySelector("#course-container").appendChild(infoText);
        doc.querySelector("#course-container").appendChild(creditText);
    })

    let infoText = doc.createElement("p");
    infoText.classList.add("courses");
    infoText.innerHTML = `Total Credits`;

    let creditText = doc.createElement("p");
    creditText.innerHTML = `${creditTotal} credits`;

    doc.querySelector("#course-container").appendChild(infoText);
    doc.querySelector("#course-container").appendChild(creditText);
}

function createCoursesCard(filteredcourses) {
   

    doc.querySelector(".container").innerHTML = "";

    filteredcourses.forEach(course => {

 
        let done = course.completed;
     

        let card = doc.createElement("div");
        card.classList.add("card");

        let coursename = doc.createElement("p");
        if (done == true) {
            coursename.classList.add("done");
        }
        else {
            coursename.classList.add("notdone");
        }

        let courseNameStr = `${course.subject}${course.number}`
        coursename.innerHTML = courseNameStr;

        card.appendChild(coursename);
        doc.querySelector(".container").appendChild(coursename);
    })
}
