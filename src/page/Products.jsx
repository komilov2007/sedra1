import { memo } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/Hero';
import ProductGrid from '../components/Product';
import Our from '../components/Our';
import Testimonials from '../components/Testimonials';
import SeedraInfo from '../components/Sedra';

const Products = () => {
  return (
    <div>
      <HeroSection />
      <ProductGrid />
      <Our />
      <Testimonials />
      <SeedraInfo />
    </div>
  );
};

export default memo(Products);
