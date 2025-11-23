import React from 'react';
import { products } from '../data/Products';
import { Link } from 'react-router-dom';
import { RiStarSLine } from 'react-icons/ri';

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[1220px] gap-20">
        {products.map((p) => (
          <Link
            to={`/product/${p.id}`}
            key={p.id}
            className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition border cursor-pointer"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-60 object-contain"
            />
            <div className="mt-4">
              <p className="text-sm flex text-gray-500">
                <RiStarSLine /> <RiStarSLine />
                <RiStarSLine />
                <RiStarSLine />
                <RiStarSLine />
                (123)
              </p>

              <h3 className="font-semibold text-[#1c1c1c] mt-1 text-sm leading-snug">
                {p.title}
              </h3>

              <p className="text-lg font-bold mt-2">${p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
