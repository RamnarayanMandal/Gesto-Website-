import React from 'react';
import { Carousel as MaterialCarousel } from "@material-tailwind/react";
import { CardClined } from './CardClinde';

const CustomCarousel = () => {
  return (
    <div className='flex w-full justify-center content-center'>
    <MaterialCarousel transition={{ duration: 2 }} className="rounded-xl w-9/12">
      <CardClined />
      <CardClined />
      <CardClined />
    </MaterialCarousel>
    </div>
  );
};

export default CustomCarousel;
