import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Products from './page/Products';
import About from './page/About';
import Blog from './page/Blog';
import Contacts from './page/Contacts';
import AllProducts from './page/AllProducts';
import ProductGrid from './components/Product';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/all" element={<AllProducts />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="/" element={<ProductGrid />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
};

export default memo(App);
