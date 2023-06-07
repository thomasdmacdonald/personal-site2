import React from 'react';
import Image from 'next/image';

import aws from 'src/assets/images/tech_logos/aws.png';
import dynamodb from 'src/assets/images/tech_logos/dynamodb.png';
import flask from 'src/assets/images/tech_logos/flask.png';
import mui from 'src/assets/images/tech_logos/mui.png';
import postgre from 'src/assets/images/tech_logos/postgre.png';
import python from 'src/assets/images/tech_logos/python.png';
import react from 'src/assets/images/tech_logos/react.png';
import s3 from 'src/assets/images/tech_logos/s3.png';
import typescript from 'src/assets/images/tech_logos/typescript.png';

interface Props {
  logo: string
}

const images = {
  aws,
  dynamodb,
  flask,
  mui,
  postgre,
  python,
  react,
  s3,
  typescript,
};

const LogoAvatar: React.FC<Props> = ({ logo }) => (
  <div className="flex items-center justify-center h-12 w-12 neuShadowOut bg-red rounded-full mr-4">
    <Image src={images[logo]} alt={`Logo for ${logo}`} className="h-8 w-8" />
  </div>
);

export default LogoAvatar;
