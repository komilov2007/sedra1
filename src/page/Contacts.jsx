import { memo } from 'react';
import Header from '../components/Header';
import SeedraInfo from '../components/Sedra';
import Testimonials from '../components/Testimonials';

const Contacts = () => {
  return (
    <div>
      <SeedraInfo />
      <Testimonials />
    </div>
  );
};

export default memo(Contacts);
