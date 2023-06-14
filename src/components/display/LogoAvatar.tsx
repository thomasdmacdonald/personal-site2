import React from 'react';
import Image, { type StaticImageData } from 'next/image';

import aws from 'src/assets/images/tech_logos/aws.png';
import dynamodb from 'src/assets/images/tech_logos/dynamodb.png';
import flask from 'src/assets/images/tech_logos/flask.png';
import mui from 'src/assets/images/tech_logos/mui.png';
import postgre from 'src/assets/images/tech_logos/postgre.png';
import python from 'src/assets/images/tech_logos/python.png';
import react from 'src/assets/images/tech_logos/react.png';
import s3 from 'src/assets/images/tech_logos/s3.png';
import typescript from 'src/assets/images/tech_logos/typescript.png';
import pytorch from 'src/assets/images/tech_logos/pytorch.png';
import sklearn from 'src/assets/images/tech_logos/sklearn.png';

interface Props {
  logo: string
}

const images = new Map<string, StaticImageData>([
  ['aws', aws],
  ['dynamodb', dynamodb],
  ['flask', flask],
  ['mui', mui],
  ['postgre', postgre],
  ['python', python],
  ['react', react],
  ['s3', s3],
  ['typescript', typescript],
  ['pytorch', pytorch],
  ['sklearn', sklearn],
]);

const LogoAvatar: React.FC<Props> = ({ logo }) => {
  const img = images.get(logo);
  if (!img) {
    return (
      <div className="flex items-center justify-center h-12 w-12 neuShadowOut bg-red rounded-full mr-4" />
    );
  }

  return (
    <div className="flex items-center justify-center h-12 w-12 neuShadowOut bg-red rounded-full mr-4">
      <Image src={img} alt={`Logo for ${logo}`} className="h-8 w-8" />
    </div>
  );
};

export default LogoAvatar;
