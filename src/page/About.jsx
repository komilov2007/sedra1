import { memo } from 'react';
import Products from './Products';

const About = () => {
  return (
    <div>
      <Products />
    </div>
  );
};

export default memo(About);
