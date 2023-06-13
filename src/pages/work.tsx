import React from 'react';
import { type NextPage } from 'next';
import PageHeader from '~/components/text/PageHeader';

interface TitleProps {
  date: string,
  company: string,
  title: string,
  className: string
}

const WorkTitle : React.FC<TitleProps> = ({
  date, company, title, className,
}) => (
  <div className={`flex flex-col ${className}`}>
    <div className="mr-8 mt-1 mb-4 w-44 h-12 text-sm font-bold neuShadowIn rounded-full relative flex flex-shrink-0 justify-center items-center">{date}</div>
    <p className="pr-10 text-left lg:text-right text-xl font-bold">{company}</p>
    <p className="pr-10 text-left lg:text-right text-md font-bold mb-4">{title}</p>
  </div>
);

interface SectionProps {
  first?: boolean
  last?: boolean
  date: string
  title: string
  company: string
  about: string[]
}
const WorkSection : React.FC<SectionProps> = ({
  company, title, date, about, first, last,
}) => (
  <div className="flex flex-row">
    <WorkTitle company={company} date={date} title={title} className="invisible absolute lg:relative lg:visible" />
    <div className="relative pl-8 pb-10 flex grow flex-col">
      <WorkTitle company={company} date={date} title={title} className="visible relative lg:absolute lg:invisible" />
      <div className={`absolute top-0 left-0 w-2 h-full bg-primary${first ? ' rounded-t-full' : ''}${last ? ' rounded-b-full' : ''}`} />
      <div className="absolute top-4 -left-2 rounded-full h-6 w-6 bg-neu neuShadowIn border-2 border-primary" />
      <div className="neuShadowOut p-4 mt-1 rounded-lg flex flex-col">
        {about.map((text, i) => (
          <p className="font-8 mb-2" key={i}>{text}</p>
        ))}
      </div>
    </div>
  </div>
);

const workData = [
  {
    about: [
      'Built and expanded our core product web app, a React based analytics dashboard and recommendation tool for allocating digital ad spend.'
      + 'Owned multiple pages and features, using Material UI and CSS for styling, and react-vis for data visualization. Features include log in/sign'
      + 'up pages, new customer orientation flows, data analytics dashboards, file upload features, and recommendation generators.'
      + 'Used AWS Cognito to handle user authentication and to manage userpools between clients.'
      + 'Created REST endpoints with Flask to send data to the frontend, using Redux to store and manage state across the app.'
      + 'Tested frontend (Cypress) and backend (Pytest) code with unit and integration tests to ensure code quality.',
      'The features and pages I created are used every day by customers, and were shown to investors to secure rounds of funding.'
      + 'Created a microservice to collect users’ authentication information for advertising services, to allow for automated data fetching.'
      + 'Interfaced with 10+ public APIs to create frontend and backend authentication flows, using React and Flask.'
      + 'Created an API Gateway with Flask to handle responses from these APIs, and added measures to protect against malicious requests.'
      + 'Stored user credentials securely in DynamoDB, and wrote Python scripts to validate credential status to prevent missing data.'
      + 'Reduced client correspondence time by 30% and aided future automated processes by getting data access programmatically.',
    ],
    title: 'Software Engineer',
    company: 'OutPoint',
    date: '07/2023 - Present',
    first: true,
  },
  {
    about: [
      'Built and expanded our core product web app, a React based analytics dashboard and recommendation tool for allocating digital ad spend.'
      + 'Owned multiple pages and features, using Material UI and CSS for styling, and react-vis for data visualization. Features include log in/sign'
      + 'up pages, new customer orientation flows, data analytics dashboards, file upload features, and recommendation generators.'
      + 'Used AWS Cognito to handle user authentication and to manage userpools between clients.'
      + 'Created REST endpoints with Flask to send data to the frontend, using Redux to store and manage state across the app.'
      + 'Tested frontend (Cypress) and backend (Pytest) code with unit and integration tests to ensure code quality.',
      'The features and pages I created are used every day by customers, and were shown to investors to secure rounds of funding.'
      + 'Created a microservice to collect users’ authentication information for advertising services, to allow for automated data fetching.'
      + 'Interfaced with 10+ public APIs to create frontend and backend authentication flows, using React and Flask.'
      + 'Created an API Gateway with Flask to handle responses from these APIs, and added measures to protect against malicious requests.'
      + 'Stored user credentials securely in DynamoDB, and wrote Python scripts to validate credential status to prevent missing data.'
      + 'Reduced client correspondence time by 30% and aided future automated processes by getting data access programmatically.',
    ],
    title: 'Frontend Developer',
    company: 'Centivizer',
    date: '05/2021 - 09/2021',
  },
  {
    about: [
      'Developed a series of web based video games in React for use in research studies, with game functionality handled entirely frontend.',
      'Created video game prototypes from Figma mocks using Bootstrap, including UI, game logic, data collection, and authentication.',
      'Connected with REST API’s to perform data storage and to process user metrics.',
      'Assisted in porting the website to mobile devices via a progressive web app.',
      'Video games were used in psychological studies conducted by the University of Toronto and Western University.',
    ],
    title: 'Web Developer',
    company: 'Centivizer',
    date: '05/2020 - 09/2020',
    last: true,
  },
];

const Work: NextPage = () => (
  <div style={{ marginLeft: '10%' }} className="w-4/5 pt-28 mb-20">
    <PageHeader>Professional Experience</PageHeader>
    {
      workData.map(({
        about, title, company, date, first, last,
      }) => (
        <WorkSection
          key={company + title}
          about={about}
          company={company}
          date={date}
          title={title}
          first={!!first}
          last={!!last}
        />
      ))
    }
  </div>
);

export default Work;
