interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image"
    asset:{
        _ref: string
        _type: "reference"
    }
}

interface File {
    _type: "file"
    asset:{
        _ref: string
        _type: "reference"
    }
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    name: string;
    phoneNumber: string;
    profilePic: Image;
    resume: File;
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress: Number;
    title: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: Number;
    title: string;
}

export interface Education extends SanityBody {
    _type: "education";
    courseTitle: string;
    schoolImage: Image;
    school: string
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyStudyingHere: boolean;
    points: string[];
    priority: Number;
}

export interface Experience extends SanityBody {
    _type: "experience";
    companyName: string;
    companyImage: Image;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
    priority: Number;
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
    priority: Number;
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}

