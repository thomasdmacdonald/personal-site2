import React from 'react';
import { type NextPage } from 'next';

import p1 from 'src/assets/images/project_photos/personal site (1).png';
import p2 from 'src/assets/images/project_photos/personal site (2).png';
import p3 from 'src/assets/images/project_photos/personal site (3).png';
import PageHeader from '~/components/text/PageHeader';
import Carousel from '~/components/display/Carousel';

const Projects: NextPage = () => (
  <div style={{ marginLeft: '10%' }} className="w-4/5 pt-28 mb-20">
    <PageHeader>Projects</PageHeader>
    <Carousel images={[p1, p2, p3]} width="700px" />
  </div>
);

export default Projects;
