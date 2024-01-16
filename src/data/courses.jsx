import { uuidv4 } from "../util";
const courseData = [
  {
    id: uuidv4(),
    name: "Web Development Basics",
    shift:[3, 2],
    summarize: "Learn the fundamentals of web development.",
    category_id: "cat-1234",
    chapters: [
      {
        id: uuidv4(),
        name: "Introduction to HTML",
        summarize: "Understanding the basics of HTML.",
        lessons: [
          {
            id: uuidv4(),
            name: "HTML Structure",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sint neque id rem magnam, alias optio temporibus quos vel quis esse similique asperiores obcaecati. Labore nobis temporibus exercitationem ut dicta!",
          },
          {
            id: uuidv4(),
            name: "HTML Tags",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sint neque id rem magnam, alias optio temporibus quos vel quis esse similique asperiores obcaecati. Labore nobis temporibus exercitationem ut dicta!",
          },
          // Add more lessons as needed
        ],
      },
      {
        id: uuidv4(),
        name: "Introduction to CSS",
        shift:[1, 3],
        summarize: "Styling web pages with CSS.",
        lessons: [
          {
            id: uuidv4(),
            name: "CSS Selectors",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sint neque id rem magnam, alias optio temporibus quos vel quis esse similique asperiores obcaecati. Labore nobis temporibus exercitationem ut dicta!",
          },
          {
            id: uuidv4(),
            name: "CSS Box Model",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sint neque id rem magnam, alias optio temporibus quos vel quis esse similique asperiores obcaecati. Labore nobis temporibus exercitationem ut dicta!",
          },
          // Add more lessons as needed
        ],
      },
      // Add more chapters as needed
    ],
  },
  {
    id: uuidv4(),
    name: "JavaScript Fundamentals",
    shift:[3, 1],
    summarize: "Introduction to programming with JavaScript.",
    category_id: "cat-2234",
    chapters: [
      {
        id: uuidv4(),
        name: "Basic JavaScript Syntax",
        summarize: "Understanding the basics of JavaScript syntax.",
        lessons: [
          {
            id: uuidv4(),
            name: "Variables and Data Types",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sint neque id rem magnam, alias optio temporibus quos vel quis esse similique asperiores obcaecati. Labore nobis temporibus exercitationem ut dicta!",
          },
          {
            id: uuidv4(),
            name: "Control Flow",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sint neque id rem magnam, alias optio temporibus quos vel quis esse similique asperiores obcaecati. Labore nobis temporibus exercitationem ut dicta!",
          },
          // Add more lessons as needed
        ],
      },
      // Add more chapters as needed
    ],
  },
  // Add more courses as needed
];

export default courseData;
