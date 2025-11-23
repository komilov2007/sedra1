import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/Products';
import { RiStarSLine } from 'react-icons/ri';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);

  if (!product) {
    return <p className="text-center py-10 text-xl">Product not found </p>;
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-96 object-contain rounded-xl"
        />
        <div>
          <h1 className="text-3xl font-bold text-[#1c1c1c]">{product.title}</h1>

          <p className="text-yellow-500 flex text-lg mt-2">
            <RiStarSLine />
            <RiStarSLine />
            <RiStarSLine />
            <RiStarSLine />
            <RiStarSLine /> (123)
          </p>

          <p className="text-3xl font-bold mt-5">${product.price}</p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            {product.description || 'No description available.'}
          </p>

          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700">
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
}
