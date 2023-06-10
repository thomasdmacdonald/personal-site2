import React, { useEffect, useRef } from 'react';
import { type NextPage } from 'next';
import PageHeader from '~/components/text/PageHeader';
import LogoAvatar from '~/components/display/logoAvatar';

const aboutBlurb = [
  'Being a software developer is the perfect way of satisfying my love for creating efficient and elegant systems, as well as getting to see real people use those systems in their everyday life.',
  "From my time working at start ups, I've learned to balance writing well-engineered and beautiful code with shipping fast and getting @$!% done.",
  "I love taking products from the drawing board and putting them in to users' hands, and am always working to improve my knowledge, speed, and skill while developing.",
];

const frontendBlurb = [
  'React is my go-to tool for creating responsive and functional web apps quickly and efficiently. I\'m proficient in HTML and CSS, and have used Material UI, Tailwind, and Boostrap for styling.',
];

const backendBlurb = [
  'I have experience working on monolith and microservice backends in frameworks like Flask and Express, ',
];

const databaseBlurb = [
  'I\'m familiar with writing queries for traditional SQL databases like Postgres, as well as working with noSQL options like dynamodb, or even raw file stores like S3.',
];

const mlBlurb = [
  'I loved machine learning before it was cool (ok, maybe not), and have experience with data engineering projects as well as with frameworks liek Scikit Learn and PyTorch. Through my degree from UofT, I have advanced stats and calc knowledge, and have taken a wide range of ML courses.',
];

const devopsBlurb = [
  'I\'ve worked with a wide range of cloud services, from deploying and hosting servers, creating and deploying cloud functions, managing user pools, creating and managing databases, working on CI/CD pipelines.',
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
  body: string[],
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
    <div ref={containerRef}>
      <div
        className="bg-neu neuShadowIn rounded-xl h-96 p-6"
        ref={cardRef}
        style={{
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
    logos: [],
  },
  {
    header: 'Dev ops',
    body: devopsBlurb,
    logos: ['aws'],
  },
];

const About: NextPage = () => (
  <div style={{ marginLeft: '10%' }} className="w-4/5 pt-28 mb-20">
    <PageHeader>About</PageHeader>
    {aboutBlurb.map((text, i) => (
      <p key={i} className="text-lg mb-2">{text}</p>
    ))}
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg-grid-cols-3 xl:grid-cols-3 gap-10 mt-8">
      {gridData.map(({ header, body, logos }) => (
        <AboutSection key={header} header={header} body={body} logos={logos} />
      ))}
    </div>
  </div>
);

export default About;
