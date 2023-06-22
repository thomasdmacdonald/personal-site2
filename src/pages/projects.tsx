import React from 'react';
import { type NextPage } from 'next';

import p1 from 'src/assets/images/project_photos/personal-site (1).png';
import p2 from 'src/assets/images/project_photos/personal-site (2).png';
import p3 from 'src/assets/images/project_photos/personal-site (3).png';
import korean1 from 'src/assets/images/project_photos/korean (1).jpg';
import korean2 from 'src/assets/images/project_photos/korean (2).png';

import { type StaticImageData } from 'next/image';
import Head from 'next/head';
import PageHeader from '~/components/text/PageHeader';
import Carousel from '~/components/display/Carousel';
import BoldText from '~/components/text/BoldText';
import PageAnimationWrapper from '~/components/wrapper/PageAnimationWrapper';

interface Props {
  images: StaticImageData[],
  width: string,
  name: string,
  title: string,
  github: string,
  body: (string | React.JSX.Element)[],
  reverse: boolean
}

const ProjectSection : React.FC<Props> = ({
  images, width, name, title, body, reverse, github,
}) => (
  <div className={`flex flex-col mb-32 ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
    <div className="mr-0 lg:mr-8 mb-6">
      <Carousel images={images} width={width} />
    </div>
    <div className="mr-0 lg:mr-8">
      <div className="mb-6">
        <p className="text-3xl font-bold">{name}</p>
        <p className="text-lg font-bold">{title}</p>
        <a href={github} className="text-stone-700 italic break-all" target="_blank" rel="noreferrer">{github}</a>
      </div>
      {body.map((text) => (
        <p className="mb-4">{text}</p>
      ))}
    </div>
  </div>
);

const projectData = [
  {
    images: [p1, p2, p3],
    width: '500px',
    name: 'This website!',
    title: 'A personal portfolio website made with Next.js',
    github: 'https://github.com/thomasdmacdonald/personal-site2',
    body: [
      <>
        This site is made with ❤️ using
        {' '}
        <BoldText>React</BoldText>
        ,
        {' '}
        <BoldText>TypeScript</BoldText>
        , and
        {' '}
        <BoldText>Next.js</BoldText>
        .
        {' '}
        <BoldText>Tailwind</BoldText>
        {' '}
        is used for styling, and everything is hosted on
        {' '}
        <BoldText>Vercel</BoldText>
        .
      </>,
      <>
        The site is designed by me in a
        {' '}
        <BoldText>neumorphic</BoldText>
        {' '}
        style,
        which is meant to simulate elements rising from and being set into a
        paper-like background by using clever shadowing to trick the eyes.
        Though I love the style,
        it tends not to be popular in modern UI design as it can sometimes lack contrast,
        or be hard to parse for colour-blind people.
      </>,
    ],
    reverse: true,
  },
  {
    images: [],
    width: '400px',
    name: 'Polyglot',
    title: 'A Google Assistant app for language learning',
    github: 'https://github.com/language-thing-ruhacks-2019',
    body: [
      <>
        With the app, you can ask your
        {' '}
        <BoldText>Google Assistant</BoldText>
        {' '}
        to
        teach you vocab words in any language you want.
        Using the
        {' '}
        <BoldText>Google Translate API</BoldText>
        , your assistant will quiz you
        on words from your target language, and give you your score after.
      </>,
      <>
        The server for the assistant was made using
        {' '}
        <BoldText>Node.js</BoldText>
        , and the translation microservice was made using
        {' '}
        <BoldText>C#</BoldText>
        . The project is hosted on
        {' '}
        <BoldText>Firebase</BoldText>
        , and Google&apos;s
        {' '}
        <BoldText>DialogueFlow</BoldText>
        {' '}
        provided the natural language processing needed to work with Google Assistant.
      </>,
      <>
        This project won best use of
        {' '}
        <BoldText>Google Cloud Platform</BoldText>
        {' '}
        at a
        {' '}
        <BoldText>Major League Hack</BoldText>
        {' '}
        hackathon.
      </>,
    ],
    reverse: true,
  },
  {
    images: [korean1, korean2],
    width: '400px',
    name: 'Korean Vocabulary Extension',
    title: 'A Chrome extension for learning Korean',
    github: 'https://github.com/thomasdmacdonald/VocabAssistantExtension',
    body: [
      <>
        Back in university I decided to study Korean,
        and found myself wanting to get more exposure to the alphabet.
      </>,
      <>
        So I created a
        {' '}
        <BoldText>Chrome extension</BoldText>
        {' '}
        that would change
        all my vocabulary words from English to Korean while surfing the web.
        The extension will convert romanized Korean into the Korean alphabet, Hangeul,
        and all vocab words are stored in your Google account so you can access them
        on any device.
      </>,
      <>
        The extension is made with
        {' '}
        <BoldText>Javascript</BoldText>
        {' '}
        and styled with plain
        {' '}
        <BoldText>HTML</BoldText>
        {' '}
        and
        {' '}
        <BoldText>CSS</BoldText>
        .
      </>,
    ],
    reverse: true,
  },
];

const Projects: NextPage = () => (
  <>
    <Head>
      <title>Projects</title>
      <meta name="Projects page" content="Projects page for portfolio website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PageAnimationWrapper>
      <main style={{ marginLeft: '10%' }} className="w-4/5 pt-28 mb-20">
        <PageHeader>Projects</PageHeader>
        {projectData.map(({
          images, width, name, title, body, reverse, github,
        }) => (
          <ProjectSection
            images={images}
            width={width}
            name={name}
            title={title}
            body={body}
            reverse={reverse}
            github={github}
          />
        ))}
      </main>
    </PageAnimationWrapper>
  </>
);

export default Projects;
