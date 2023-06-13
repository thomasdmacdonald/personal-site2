import React from 'react';
import { type NextPage } from 'next';

import p1 from 'src/assets/images/project_photos/personal site (1).png';
import p2 from 'src/assets/images/project_photos/personal site (2).png';
import p3 from 'src/assets/images/project_photos/personal site (3).png';
import { type StaticImageData } from 'next/image';
import PageHeader from '~/components/text/PageHeader';
import Carousel from '~/components/display/Carousel';

interface Props {
  images: StaticImageData[],
  width: string,
  name: string,
  title: string,
  body: string[],
  reverse: boolean
}

const ProjectSection : React.FC<Props> = ({
  images, width, name, title, body, reverse,
}) => (
  <div className={`flex flex-col mb-10 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
    <div className="mr-8 mb-6">
      <Carousel images={images} width={width} />
    </div>
    <div className="mr-8">
      <p className="text-3xl font-bold">{name}</p>
      <p className="text-lg font-bold mb-6">{title}</p>
      {body.map((text) => (
        <p>{text}</p>
      ))}
    </div>
  </div>
);

const projectData = [
  {
    images: [p2, p1, p3],
    width: '700px',
    name: 'This website!',
    title: 'A personal portfolio website made with next.js',
    body: [
      'I made this site with next and react',
      'I customed designed the components in a neumorphic style so that it looks cool',
      'Tailwind for the styling',
    ],
    reverse: false,
  },
  {
    images: [p2, p1, p3],
    width: '700px',
    name: 'This website!',
    title: 'A personal portfolio website made with next.js',
    body: [
      'I made this site with next and react',
      'I customed designed the components in a neumorphic style so that it looks cool',
      'Tailwind for the styling',
    ],
    reverse: true,
  },
];

const Projects: NextPage = () => (
  <div style={{ marginLeft: '10%' }} className="w-4/5 pt-28 mb-20">
    <PageHeader>Projects</PageHeader>
    {projectData.map(({
      images, width, name, title, body, reverse,
    }) => (
      <ProjectSection
        images={images}
        width={width}
        name={name}
        title={title}
        body={body}
        reverse={reverse}
      />
    ))}
  </div>
);

export default Projects;
