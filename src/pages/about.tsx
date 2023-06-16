import React, { useEffect, useRef } from 'react';
import { type NextPage } from 'next';
import {
  AcademicCapIcon,
} from '@heroicons/react/24/solid';

import Head from 'next/head';
import PageHeader from '~/components/text/PageHeader';
import LogoAvatar from '~/components/display/LogoAvatar';
import BoldText from '~/components/text/BoldText';

const aboutBlurb = [
  <>
    With years experience working in fast-paced startup environments,
    I&apos;ve learned to balance my love for writing efficient and well-engineered systems,
    with knowing when to move fast and get
    {' '}
    <BoldText>@!#%</BoldText>
    {' '}
    done.
    I love taking products from the drawing board to users&apos; hands,
    and am always working to improve my knowledge, speed, skill, and discretion while developing.
  </>,
  "Here are some of the skills I've devloped on my journey as a software engineer:",
];

const frontendBlurb = [
  <>
    <BoldText>React</BoldText>
    {' '}
    is my go-to tool for creating responsive and functional web apps quickly and efficiently.
    I&apos;m proficient in
    {' '}
    <BoldText>HTML</BoldText>
    {' '}
    and
    {' '}
    <BoldText>CSS</BoldText>
    ,
    and have used
    {' '}
    <BoldText>Material UI</BoldText>
    ,
    {' '}
    <BoldText>Tailwind</BoldText>
    , and
    {' '}
    <BoldText>Boostrap</BoldText>
    {' '}
    for styling.
  </>,
];

const backendBlurb = [
  <>
    I&apos;ve worked on both monolith and microservice backends,
    mainly creating and maintaining
    {' '}
    <BoldText>REST apis</BoldText>
    . I have professional experience with
    {' '}
    <BoldText>Flask</BoldText>
    ,
    as well as personal experience with
    {' '}
    <BoldText>Node.js</BoldText>
    {' '}
    and
    {' '}
    <BoldText>Express</BoldText>
    .
  </>,
];

const databaseBlurb = [
  <>
    Whether writing queries for traditional SQL databases like
    {' '}
    <BoldText>PostgreSQL</BoldText>
    ,
    working with noSQL options like
    {' '}
    <BoldText>DynamoDB</BoldText>
    , or even using raw file stores like
    {' '}
    <BoldText>S3</BoldText>
    ,
    I&apos;m comfortable with most database options.
  </>,
];

const mlBlurb = [
  <>
    I loved AI before it was cool (ok, maybe not),
    but I have experience with ML and data engineering projects
    using frameworks like
    {' '}
    <BoldText>Scikit Learn</BoldText>
    {' '}
    and
    {' '}
    <BoldText>PyTorch</BoldText>
    .
    With a minor in
    {' '}
    <BoldText>statistics</BoldText>
    {' '}
    from UofT, I have
    both theoretical and practical knowledge of classical AI and deep learning alike.
  </>,
];

const devopsBlurb = [
  <>
    I&apos;ve worked with a wide range of cloud services on
    {' '}
    <BoldText>AWS</BoldText>
    ,
    from deploying and hosting servers,
    to creating and deploying cloud functions,
    managing user pools,
    creating and managing databases,
    working on CI/CD pipelines, and much more.
  </>,
];

const SKEW_DEGS = 15;
const FADE_IN_OFFSET = 50;
function skewCard(
  event: MouseEvent,
  card: React.RefObject<HTMLDivElement>,
  container: React.RefObject<HTMLDivElement>,
) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  if (!card.current || !container.current) return;

  const boundingRect = container.current?.getBoundingClientRect();
  if (
    mouseY < boundingRect.bottom + FADE_IN_OFFSET
    && mouseY > boundingRect.top - FADE_IN_OFFSET
    && mouseX < boundingRect.right + FADE_IN_OFFSET
    && mouseX > boundingRect.left - FADE_IN_OFFSET
  ) {
    const middleX = boundingRect.right - ((boundingRect.right - boundingRect.left) / 2);
    const middleY = boundingRect.bottom - ((boundingRect.bottom - boundingRect.top) / 2);
    const offsetX = ((mouseX - middleX)
    / ((boundingRect.right - boundingRect.left) / 2)) * SKEW_DEGS;
    const offsetY = ((mouseY - middleY)
    / ((boundingRect.bottom - boundingRect.top) / 2)) * SKEW_DEGS;

    const isInXBound = mouseX < boundingRect.right && mouseX > boundingRect.left;
    const isInYBound = mouseY < boundingRect.bottom && mouseY > boundingRect.top;
    const distanceX = Math.min(
      boundingRect.right + FADE_IN_OFFSET - mouseX,
      mouseX - (boundingRect.left - FADE_IN_OFFSET),
    );
    const distanceY = Math.min(
      boundingRect.bottom + FADE_IN_OFFSET - mouseY,
      mouseY - (boundingRect.top - FADE_IN_OFFSET),
    );
    const skewX = Math.min(offsetY, SKEW_DEGS) * (isInYBound ? 1 : (distanceY / FADE_IN_OFFSET));
    const skewY = -Math.min(offsetX, SKEW_DEGS) * (isInXBound ? 1 : (distanceX / FADE_IN_OFFSET));
    card.current.style.transform = `perspective(5000px) rotateX(${skewX}deg) rotateY(${skewY}deg)`;
  } else {
    card.current.style.transform = 'perspective(5000px) rotateX(0deg) rotateY(0deg)';
  }
}

interface AboutSectionProps {
  header: string,
  body: (string | React.JSX.Element)[],
  logos: string[],
}
const AboutSection : React.FC<AboutSectionProps> = ({ header, body, logos }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleCardMove = (e: MouseEvent) => skewCard(e, cardRef, containerRef);
  useEffect(() => {
    document.addEventListener('mousemove', handleCardMove);
    return () => {
      document.removeEventListener('mousemove', handleCardMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col flex-grow">
      <div
        className="flex flex-col flex-grow bg-neu neuShadowIn rounded-xl p-6"
        ref={cardRef}
        style={{
          minHeight: '25rem',
          transform: 'perspective(5000px) rotateX(0) rotateY(0)',
        }}
      >
        <div className="flex flex-row items-center flex-wrap">
          <p className="text-3xl font-bold mr-4 mb-4">{header}</p>
          <div className="flex flex-row mb-4">
            {
              logos.map((logo) => <LogoAvatar key={logo} logo={logo} />)
            }
          </div>
        </div>
        {body.map((text) => (
          <p key={header} className="text-xl mb-2">{text}</p>
        ))}
      </div>
    </div>
  );
};
const gridData = [
  {
    header: 'Frontend',
    body: frontendBlurb,
    logos: ['react', 'typescript', 'mui'],
  },
  {
    header: 'Backend',
    body: backendBlurb,
    logos: ['python', 'flask'],
  },
  {
    header: 'Databases',
    body: databaseBlurb,
    logos: ['postgre', 'dynamodb', 's3'],
  },
  {
    header: 'Machine Learning',
    body: mlBlurb,
    logos: ['pytorch', 'sklearn'],
  },
  {
    header: 'Dev Ops',
    body: devopsBlurb,
    logos: ['aws'],
  },
];

const About: NextPage = () => (
  <>
    <Head>
      <title>About</title>
      <meta name="About page" content="About page for portfolio website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main style={{ marginLeft: '10%' }} className="w-4/5 pt-28 mb-20">
      <div className="flex flex-col md:flex-row justify-between">
        <PageHeader>About</PageHeader>
        <div className="rounded-full neuShadowOut flex flex-row items-center py-2 pr-12 pl-12 sm:pl-2 mb-8">
          <div className="rounded-full neuShadowIn p-2 mr-2 invisible absolute sm:visible sm:relative">
            <AcademicCapIcon className="h-16 text-stone-600" />
          </div>
          <div>
            <p className="text-lg font-bold">University of Toronto</p>
            <p className="text-sm font-bold">2017-2021, High Distinction</p>
            <p className="text-sm text-stone-700">Computer Science Specialist</p>
            <p className="text-sm text-stone-700">Statistics Minor</p>
          </div>
        </div>
      </div>
      {aboutBlurb.map((text, i) => (
        <p key={i} className="text-lg mb-4">{text}</p>
      ))}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg-grid-cols-3 xl:grid-cols-3 gap-10 mt-8">
        {gridData.map(({ header, body, logos }) => (
          <AboutSection key={header} header={header} body={body} logos={logos} />
        ))}
      </div>
    </main>
  </>
);

export default About;
