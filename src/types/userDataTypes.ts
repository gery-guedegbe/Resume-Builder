export type UserData = {
  personalInformation: {
    fullName: string;
    jobTitle: string;
    dateOfBirth: string;
    email: string;
    phone: string;
    address: string;
    gender: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    profilePicture: string;
    linkedin: string;
    github: string;
    website: string;
    x: string;
    facebook: string;
    instagram: string;
  };
  summary: string;
  experience: {
    id: string;
    jobTitle: string;
    company: string;
    startDate: string;
    endDate?: string;
    city: string;
    country: string;
    responsibilities: string;
  }[];
  education: {
    id: string;
    degree: string;
    institution: string;
    startDate: string;
    endDate: string;
    location: string;
    country: string;
    achievements: string;
  }[];
  skills: {
    id: string;
    skill: string;
    level: string;
    numericValue: number;
  }[];
  languages: {
    id: string;
    language: string;
    level: string;
    numericValue: number;
  }[];
  certifications: {
    id: number;
    title: string;
    issuingOrganization: string;
    issueDate: string;
    expirationDate: string | null;
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    role: string;
    startDate: string;
    endDate: string;
  }[];
  hobbies: { id: string; hobbie: string }[];
  references: {
    id: number;
    name: string;
    position: string;
    company: string;
    email: string;
    phone: string;
  }[];
};
