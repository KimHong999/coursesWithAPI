import { uuidv4 } from "../util";
const courseData = [
  {
    id: uuidv4(),
    name: "Web Development Basics",
    tags:[3, 2],
    summary: "Learn the fundamentals of web development.",
    category_id: "cat-1234",
    chapters: [
      {
        id: uuidv4(),
        name: "Introduction to HTML",
        summary: "Understanding the basics of HTML.",
        lessons: [
          {
            id: uuidv4(),
            name: "HTML Structure",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sint neque id rem magnam, alias optio temporibus quos vel quis esse similique asperiores obcaecati. Labore nobis temporibus exercitationem ut dicta!",
          },
          {
            id: uuidv4(),
            name: "HTML tagss",
            content:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sint neque id rem magnam, alias optio temporibus quos vel quis esse similique asperiores obcaecati. Labore nobis temporibus exercitationem ut dicta!",
          },
          // Add more lessons as needed
        ],
      },
      {
        id: uuidv4(),
        name: "Introduction to CSS",
        tags:[1, 3],
        summary: "Styling web pages with CSS.",
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
    tags:[3, 1],
    summary: "Introduction to programming with JavaScript.",
    category_id: "cat-2234",
    chapters: [
      {
        id: uuidv4(),
        name: "Basic JavaScript Syntax",
        summary: "Understanding the basics of JavaScript syntax.",
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
