import { ClassAttributes, ComponentType, ImgHTMLAttributes } from 'react';
import { ExtraProps } from 'react-markdown';

const ABOUT_ME_CONTENT = `# 👋 Hi! I'm Anna Marek-Loew

![Profile Picture](/profile_picture.jpg)

**Full-Stack Software Developer** with 7 years of experience designing, developing, and maintaining web applications across the entire development lifecycle.


&nbsp; Proficient in **front-end & back-end technologies**, specializing in **React/Redux**, **NodeJS/NextJS/Express**, and **cloud services using AWS**. Adept at leading technical teams in agile environments and collaborating with product, design, and business to deliver high-quality software solutions on time.


&nbsp; Passionate about creating **customer-focused features and workflows**, including **AI agents**, by writing clean, efficient code and continuously improving development processes.`;

const WORK_EXPERIENCE_CONTENT = `# 💼 Work Experience


## **Software Development Engineer V – GoDaddy**
**June 2018 – Present**


#### **Current Role**
- Tech Lead & Full-Stack Developer for **Afternic.com** & **Domain Academy Tools**
- Architect & maintain infrastructure using **AWS CDK, ECS, ECR, DynamoDB**, and more
- Maintain **NextJS/React & Express applications**
- Lead adoption and creation of **AI tools and workflows** for developers and customers
- SME on **Authentication platform integrations** (login, federation, OAuth)
- Oversee UX design feasibility, ideation, and experimentation
- Lead developer for **Domain Investors Experience Org's React components** and **GitHub Action libraries**
- Contributor to GoDaddy's **internal AWS Guild**


#### **Past Roles**
- Full-Stack Developer for **Afternic.com**
- Maintained and retired **legacy PHP codebase**
- Migrated new designs to **NextJS/React**
- Led migration into AWS from internally hosted Kubernetes
- Transitioned deployments from **Sceptre to CDK**
- Led acquisition and migration of **Domain Academy Tools** into AWS/NextJS/Express/React
- Rewrote **WhoIs results page** from C# to NextJS/React
- Developed **internal tools** for customer care representatives and developers


---
## **Technical Intern – GoCanvas**
**November 2013 – May 2018**
- Redesigned and maintained **online Help Section**
- Designed **mobile app tests**
- Implemented **web tests using Selenium in Java**


---
## **Mathematics Researcher – Coe College**
**Summer 2016 & Summer 2017**
- **2016:** Researched and programmed **End View puzzle solutions**
- **2017:** Researched **compositional operators on the Hardy Space**
- 📄 [Publication](https://scholar.rose-hulman.edu/rhumj/vol21/iss1/1/)


---
## **Computer Science Researcher – Coe College**
**Summer 2016**
- Developed a **digital signage solution**
- Implemented using **Google Forms, Sheets, Calendars & Apps Script**`;

const EDUCATION_CONTENT = `# 🎓 Education


## **Iowa State University, Ames, Iowa**
**Master's of Human Computer Interaction**
_Aug 2019 – Dec 2021_


---
## **Coe College, Cedar Rapids, Iowa**
**Bachelor of Arts – Double Major: Mathematics & Computer Science**
_Aug 2015 – May 2018_
- **Honors:** Phi Beta Kappa, Phi Kappa Phi
- **Activities:** Computer Science Club (President), Math Club (Vice President)`;

export enum SECTIONS {
  ABOUT_ME = 'about-me',
  WORK_EXPERIENCE = 'work-experience',
  EDUCATION = 'education',
  PROJECTS = 'projects',
}

const PROJECTS_CONTENT = `# 🚀 Projects


Coming soon...`;

export const SECTIONS_CONFIG: {
  [key in SECTIONS]: {
    fileName: string;
    content: string;
    components?: { [key: string]: ComponentType<any> };
  };
} = {
  [SECTIONS.ABOUT_ME]: {
    fileName: 'about-me.md',
    content: ABOUT_ME_CONTENT,
    components: {
      img: (
        props: ClassAttributes<HTMLImageElement> &
          ImgHTMLAttributes<HTMLImageElement> &
          ExtraProps,
      ) => (
        <span className="flex justify-center mb-4">
          <img {...props} className="max-w-70 rounded-full" />
        </span>
      ),
    },
  },
  [SECTIONS.WORK_EXPERIENCE]: {
    fileName: 'work-experience.md',
    content: WORK_EXPERIENCE_CONTENT,
  },
  [SECTIONS.EDUCATION]: {
    fileName: 'education.md',
    content: EDUCATION_CONTENT,
  },
  [SECTIONS.PROJECTS]: {
    fileName: 'projects.md',
    content: PROJECTS_CONTENT,
  },
};
