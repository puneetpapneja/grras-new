import Awards from 'components/awards';
import LearningOptions from 'components/learning-options';
import Slider from 'components/slider';
import Testimonials from 'components/testimonials';
import UniqueOffering from 'components/unique-offerings';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Slider />
      <LearningOptions />
      <UniqueOffering />
      <Testimonials />
      <Awards />
    </>
  );
};

export default HomePage;
