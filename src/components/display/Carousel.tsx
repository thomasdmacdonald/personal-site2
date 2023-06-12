import Image, { type StaticImageData } from 'next/image';
import React, { useState } from 'react';
import {
  ChevronLeftIcon, ChevronRightIcon,
} from '@heroicons/react/24/solid';

interface Props {
  images: StaticImageData[],
  width: string
}

const Carousel : React.FC<Props> = ({ images, width }) => {
  const [imageCount, setImageCount] = useState(0);

  return (
    <div className="overflow-hidden relative neuShadowOut rounded-lg" style={{ width }}>
      <div className="absolute inset-0 flex items-center justify-between p-4 z-50">
        {imageCount === 0 ? <div /> : (
          <button
            type="button"
            className="h-7 w-7 relative rounded-full bg-white bg-opacity-50 hover:bg-opacity-70 transition-colors duration-200"
            onClick={() => setImageCount(imageCount - 1)}
          >
            <ChevronLeftIcon className="h-6 absolute top-0.5 right-1" />
          </button>
        )}
        {imageCount === images.length - 1 ? <div /> : (
          <button
            type="button"
            className="h-7 w-7 relative rounded-full bg-white bg-opacity-50 hover:bg-opacity-70"
            onClick={() => setImageCount(imageCount + 1)}
          >
            <ChevronRightIcon className="h-6 absolute top-0.5 left-1" />
          </button>
        )}
      </div>

      <div className="absolute bottom-4 right-0 left-0 rounded-full z-50">
        <div className="flex item-center justify-center items-center gap-2">
          {images.map((_, i) => (
            <div className={`transition-all w-2 h-2 bg-white rounded-full ${imageCount === i ? 'p-1' : 'bg-opacity-50'}`} />
          ))}
        </div>
      </div>

      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${imageCount * 100}%)` }}
      >
        {images.map((image) => <Image src={image} style={{ width }} alt="Image for project" />)}
      </div>
    </div>
  );
};

export default Carousel;
