// import { UserData } from "../types/userDataTypes";
// import profile_picture from "../assets/images/profile_picture.jpg";
import resume_img from "../assets/images/resume.jpg";

// const userData: UserData[] = [
//   {
//     personalInformation: {
//       firstName: "John",
//       lastName: "Doe",
//       jobTitle: "Frontend Developer",
//       dateOfBirth: "1990-01-01",
//       email: "johndoe@example.com",
//       phone: "+1234567890",
//       address: {
//         street: "123 Main St",
//         city: "Metropolis",
//         state: "NY",
//         postalCode: "10001",
//         country: "USA",
//       },
//       profilePicture: profile_picture,
//       linkedIn: "https://linkedin.com/in/johndoe",
//       github: "https://github.com/johndoe",
//       website: "johndoe.com",
//     },
//     summary:
//       "Results-oriented software engineer with over 10 years of experience in developing high-quality web and mobile applications. Adept at working in collaborative environments and committed to continuous learning and professional development.",
//     experience: [
//       {
//         jobTitle: "Senior Software Engineer",
//         company: "Tech Innovators Inc.",
//         startDate: "2018",
//         endDate: "2022",
//         location: "New York, NY",
//         responsibilities: [
//           "Lead a team of 10 engineers in developing scalable web applications.",
//           "Implement best practices for software development, including code reviews and testing.",
//           "Collaborate with cross-functional teams to define project requirements and deliverables.",
//           "Mentor junior developers and conduct technical training sessions.",
//         ],
//       },
//       {
//         jobTitle: "Software Engineer",
//         company: "Web Solutions Ltd.",
//         startDate: "2015",
//         endDate: "2018",
//         location: "Boston, MA",
//         responsibilities: [
//           "Developed and maintained web applications using JavaScript, React, and Node.js.",
//           "Participated in the full software development lifecycle, from concept to deployment.",
//           "Worked closely with designers and product managers to create user-friendly interfaces.",
//           "Optimized application performance and ensured high availability.",
//         ],
//       },
//       {
//         jobTitle: "Junior Software Developer",
//         company: "StartUp Co.",
//         startDate: "2012",
//         endDate: "2015",
//         location: "San Francisco, CA",
//         responsibilities: [
//           "Assisted in the development of mobile applications for iOS and Android platforms.",
//           "Wrote clean, maintainable code and performed debugging and testing.",
//           "Collaborated with senior developers to learn best practices and improve coding skills.",
//           "Contributed to the development of internal tools and libraries.",
//         ],
//       },
//     ],
//     education: [
//       {
//         degree: "Master of Science in Computer Science",
//         institution: "University of California, Berkeley",
//         startDate: "2010",
//         endDate: "2012",
//         location: "Berkeley, CA",
//         achievements: [
//           "Graduated with honors.",
//           "Completed a thesis on scalable web application architectures.",
//         ],
//       },
//       {
//         degree: "Bachelor of Science in Computer Science",
//         institution: "University of Michigan",
//         startDate: "2006",
//         endDate: "2010",
//         location: "Ann Arbor, MI",
//         achievements: [
//           "Dean's List for 6 semesters.",
//           "Member of the Computer Science Club.",
//         ],
//       },
//     ],
//     skills: [
//       { skill: "PHP", level: "40" },
//       { skill: "JavaScript", level: "80" },
//       { skill: "React", level: "90" },
//       { skill: "Node.js", level: "60" },
//       { skill: "Python", level: "60" },
//       { skill: "Django", level: "70" },
//       { skill: "HTML", level: "90" },
//       { skill: "CSS", level: "90" },
//       { skill: "Git", level: "60" },
//       { skill: "Agile methodologies", level: "50" },
//       { skill: "Problem-solving", level: "80" },
//     ],
//     languages: [
//       { language: "English", proficiency: "Native" },
//       { language: "Spanish", proficiency: "Professional working proficiency" },
//     ],
//     certifications: [
//       {
//         title: "Certified JavaScript Developer",
//         issuingOrganization: "JavaScript Institute",
//         issueDate: "2017-08-01",
//         expirationDate: null,
//       },
//       {
//         title: "AWS Certified Solutions Architect",
//         issuingOrganization: "Amazon Web Services",
//         issueDate: "2019-05-01",
//         expirationDate: "2022-05-01",
//       },
//     ],
//     projects: [
//       {
//         title: "E-commerce Platform",
//         description:
//           "Developed a scalable e-commerce platform for a leading retailer, enabling them to handle over 1 million transactions per day.",
//         technologies: ["React", "Node.js", "MongoDB"],
//         role: "Lead Developer",
//         startDate: "2020-01-01",
//         endDate: "2020-12-31",
//       },
//       {
//         title: "Mobile Banking App",
//         description:
//           "Created a secure and user-friendly mobile banking app for a major financial institution, resulting in a 25% increase in mobile transactions.",
//         technologies: ["React Native", "Python", "Django"],
//         role: "Senior Developer",
//         startDate: "2019-01-01",
//         endDate: "2019-12-31",
//       },
//     ],
//     hobbies: [
//       "Reading technology blogs",
//       "Hiking",
//       "Playing the guitar",
//       "Traveling",
//     ],
//     references: [
//       {
//         name: "Jane Smith",
//         position: "CTO",
//         company: "Tech Innovators Inc.",
//         email: "janesmith@techinnovators.com",
//         phone: "+1987654321",
//       },
//       {
//         name: "Michael Brown",
//         position: "Project Manager",
//         company: "Web Solutions Ltd.",
//         email: "michaelbrown@websolutions.com",
//         phone: "+1098765432",
//       },
//     ],
//   },
// ];

// Définition du type pour les articles
interface Models {
  id: string;
  image: string;
  title: string;
  date: string;
}

// Données pour le carrousel
export const ModelsData: Models[] = [
  {
    id: "Model1",
    image: resume_img,
    title: "Modèle CV 1",
    date: "2023-01-01",
  },
  {
    id: "Model2",
    image: resume_img,
    title: "Modèle CV 2",
    date: "2023-02-01",
  },
  {
    id: "Model3",
    image: resume_img,
    title: "Modèle CV 3",
    date: "2023-03-01",
  },
];

// export default userData;
