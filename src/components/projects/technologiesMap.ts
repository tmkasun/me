import muiIcon from "../../../resources/projects/icons/mui.ico";
import reactIcon from "../../../resources/projects/icons/react.ico";
import vercelIcon from "../../../resources/projects/icons/vercel.ico";
import awsIcon from "../../../resources/projects/icons/aws.webp";
import aws2Icon from "../../../resources/projects/icons/aws2.ico";
import azureIcon from "../../../resources/projects/icons/azure.ico";
import reactqIcon from "../../../resources/projects/icons/reactq.png";
import pythonIcon from "../../../resources/projects/icons/python.ico";
import rtlIcon from "../../../resources/projects/icons/rtl.png";
import cypressIcon from "../../../resources/projects/icons/cypress.png";
import cppIcon from "../../../resources/projects/icons/cpp.png";
import tsIcon from "../../../resources/projects/icons/ts.ico";
import nextjsIcon from "../../../resources/projects/icons/nextjs.ico";
import pwaIcon from "../../../resources/projects/icons/pwa.svg";
import flaskIcon from "../../../resources/projects/icons/flask.png";
import sql from "../../../resources/projects/icons/sql.png";

import { StaticImageData } from "next/image";

const techMap: {
    [key: string]: {
        name: string;
        icon: StaticImageData;
        description: string;
        lightIcon?: StaticImageData;
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
