const muiIcon = "/images/projects/icons/mui.ico";
const reactIcon = "/images/projects/icons/react.ico";
const vercelIcon = "/images/projects/icons/vercel.ico";
const aws2Icon = "/images/projects/icons/aws2.ico";
const azureIcon = "/images/projects/icons/azure.ico";
const reactqIcon = "/images/projects/icons/reactq.png";
const pythonIcon = "/images/projects/icons/python.ico";
const rtlIcon = "/images/projects/icons/rtl.png";
const cypressIcon = "/images/projects/icons/cypress.png";
const cppIcon = "/images/projects/icons/cpp.png";
const tsIcon = "/images/projects/icons/ts.ico";
const nextjsIcon = "/images/projects/icons/nextjs.ico";
const pwaIcon = "/images/projects/icons/pwa.svg";
const flaskIcon = "/images/projects/icons/flask.png";
const sql = "/images/projects/icons/sql.png";
const awsIcon = "/images/projects/icons/aws.webp";

import  { StaticImageData } from "next/image";

const techMap: {
    [key: string]: {
        name: string;
        icon: string;
        description: string;
        lightIcon?: string;
    };
} = {
    mui: {
        name: "Material UI",
        icon: muiIcon,
        description: "Material Design for React.",
    },

    react: {
        name: "ReactJS",
        icon: reactIcon,
        description: "ReactJS web framework",
    },
    vercel: {
        name: "Vercel",
        icon: vercelIcon,
        description: "Vercel is a free hosting platform for React apps",
    },
    aws: {
        name: "Amazon Web Services",
        icon: awsIcon,
        lightIcon: aws2Icon,
        description:
            "AWS is a cloud computing platform that provides computing, storage, and other services",
    },
    azure: {
        name: "Azure",
        icon: azureIcon,
        description: "Azure is a cloud computing platform",
    },
    reactq: {
        name: "React Query",
        icon: reactqIcon,
        description:
            "ReactQuery is a library for React that simplifies the use of data fetching and caching",
    },
    python: {
        name: "Python",
        icon: pythonIcon,
        description: "Material Design for React",
    },
    rtl: {
        name: "React Testing Library",
        icon: rtlIcon,
        description:
            "React Testing Library is a library for testing React components",
    },
    cypress: {
        name: "Cypress JS",
        icon: cypressIcon,
        description: "Cypress is a testing framework for React",
    },
    cpp: {
        name: "C++",
        icon: cppIcon,
        description: "C++ is a programming language",
    },
    ts: {
        name: "TypeScript",
        icon: tsIcon,
        description: "TypeScript is a programming language",
    },
    nextjs: {
        name: "NextJS",
        icon: nextjsIcon,
        description: "NextJS is a framework for React",
    },
    pwa: {
        name: "PWA",
        icon: pwaIcon,
        description: "PWA is a progressive web application",
    },
    flask: {
        name: "Flask",
        icon: flaskIcon,
        description: "Flask is a microframework for Python",
    },
    sql: {
        name: "SQL",
        icon: sql,
        description: "SQL is a relational database management system",
    }
};
export default techMap;
