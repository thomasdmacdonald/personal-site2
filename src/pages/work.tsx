import React from 'react';
import { type NextPage } from 'next';
import Head from 'next/head';
import PageHeader from '~/components/text/PageHeader';
import BoldText from '~/components/text/BoldText';

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
  about: (string | React.JSX.Element) []
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
      {about.length ? (
        <div className="neuShadowOut p-4 mt-1 rounded-lg flex flex-col">
          {about.map((text, i) => (
            <p className="font-8 mb-2" key={i}>
              <div className="h-2 w-2 mb-0.5 ml-4 mr-3 rounded-full bg-primary inline-block" />
              {text}
            </p>
          ))}
        </div>
      ) : <div className="h-40" />}
    </div>
  </div>
);

const workData = [
  {
    about: [],
    title: 'Software Engineer II',
    company: 'OutPoint',
    date: '07/2023 - Present',
    first: true,
  },
  {
    about: [
      <>
        Built and expanded our core product web app,
        a
        {' '}
        <BoldText>React</BoldText>
        {' '}
        based analytics dashboard and recommendation tool for allocating digital ad spend.
        I owned multiple pages and features, including sign up/sign in, new customer flows,
        analytics dashboards, and recommendation generators.
        Created
        {' '}
        <BoldText>REST</BoldText>
        {' '}
        endpoints in
        {' '}
        <BoldText>Flask</BoldText>
        {' '}
        to serve the app.
      </>,
      <>
        Created a
        {' '}
        <BoldText>microservice</BoldText>
        {' '}
        to collect users’
        authentication information for advertising services, to allow for automated data fetching.
        Interfaced with 10+ public
        {' '}
        <BoldText>APIs</BoldText>
        {' '}
        (Google, Facebook, Bing, ect.)
        to create authentication flows, and created an API
        {' '}
        <BoldText>gateway</BoldText>
        {' '}
        to handle API responses
        and protect against attacks.
      </>,
      <>
        Created a system in
        {' '}
        <BoldText>Python</BoldText>
        {' '}
        to automatically fetch, process,
        and validate user financial data, for use by
        {' '}
        <BoldText>machine learning</BoldText>
        {' '}
        engineers.
        Wrote scripts to generate validated, up-to-date,
        and properly processed datasets quickly, with few input parameters needed,
        and scheduled cloud functions to fetch new data daily.
      </>,
      <>
        Assisted machine learning engineers by improving model infrastructure and data pipelines.
        Created
        {' '}
        <BoldText>Python</BoldText>
        {' '}
        scripts which eliminated the need for approx.
        1000 lines of
        {' '}
        <BoldText>Apache Airflow</BoldText>
        {' '}
        config files per machine learning model,
        reducing model setup time by 2+ hours per client.
      </>,
      <>
        Deployed and managed cloud infrastructure to serve our product to worldwide customers,
        and to run data pipelines and ML models.
        Rolled out new versions of the frontend and backend of our web app using
        AWS
        {' '}
        <BoldText>Elastic Beanstalk</BoldText>
        ,
        {' '}
        <BoldText>Code Pipeline</BoldText>
        , and
        {' '}
        <BoldText>Route 53</BoldText>
        .
        Stored and fetched large datasets with AWS
        {' '}
        <BoldText>RDS</BoldText>
        ,
        {' '}
        <BoldText>DynamoDB</BoldText>
        {' '}
        and
        {' '}
        <BoldText>S3</BoldText>
        ,
        for internal use in modelling, or to be displayed externally.
      </>,
    ],
    title: 'Software Engineer',
    company: 'OutPoint',
    date: '07/2021 - 06/2023',
  },
  {
    about: [
      <>
        Developed a series of web based video games in
        {' '}
        <BoldText>React</BoldText>
        {' '}
        for use in research studies,
        with game functionality handled entirely frontend, connecting to a backend for
        user metric storage via
        {' '}
        <BoldText>REST api</BoldText>
        .
        Created video game prototypes from Figma mocks using
        {' '}
        <BoldText>Bootstrap</BoldText>
        ,
        and helped port the site to mobile via a
        {' '}
        <BoldText>progressive web app</BoldText>
        .
      </>,
      <>
        Video games were used in published psychological and neurological studies
        conducted by the
        {' '}
        <BoldText>University of Toronto</BoldText>
        {' '}
        and
        {' '}
        <BoldText>Western University</BoldText>
        .
      </>,
    ],
    title: 'Frontend Developer',
    company: 'Centivizer',
    date: '05/2020 - 09/2020',
  },
  {
    about: [
      <>
        Developed video game prototypes using vanilla
        {' '}
        <BoldText>Javascript</BoldText>
        {' '}
        for use in research studies.
      </>,
      <>
        Game prototypes were successful in testing, and later developed into a full game suite.
      </>,
    ],
    title: 'Web Developer',
    company: 'Centivizer',
    date: '05/2019 - 09/2019',
    last: true,
  },
];

const Work: NextPage = () => (
  <>
    <Head>
      <title>Work</title>
      <meta name="Work page" content="Work experience page for portfolio website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
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
  </>
);

export default Work;
