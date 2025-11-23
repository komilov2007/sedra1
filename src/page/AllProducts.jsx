import { memo } from 'react';
import ProductGrid from '../components/Product';

const AllProducts = () => {
  return (
    <div>
      <ProductGrid />
    </div>
  );
};

export default memo(AllProducts);
