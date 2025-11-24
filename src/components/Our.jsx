import React from 'react';
import Opa from '../assets/opa.png';
import Barg from '../assets/barg.png';

export default function BlogSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-[#1c1c1c]">Our blog.</h2>
        <button className="px-5 py-2 border border-[#3ea05b] text-[#3ea05b] rounded-xl hover:bg-[#e8f5e9] transition font-medium">
          Go to our blog
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#eef6ee] p-6 rounded-3xl shadow flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <p className="text-gray-500 text-sm mb-2">12.09.2021</p>
            <h3 className="text-xl font-semibold text-[#1c1c1c] mb-3 leading-snug">
              How to plant spinach correctly in winter
            </h3>
            <p className="text-gray-600 text-sm max-w-sm mb-4">
              In most areas, successive sowing can be done from early spring
              until early winter, but more often during hotter months…
            </p>
            <button className="px-5 py-2 bg-white border rounded-xl text-[#3ea05b] font-medium hover:bg-gray-100 transition">
              Read
            </button>
          </div>

          <img src={Opa} className="w-48 h-auto object-contain" />
        </div>
        <div className="bg-[#eef0f7] p-6 rounded-3xl shadow flex flex-col justify-between">
          <div>
            <p className="text-gray-500 text-sm mb-2">12.09.2021</p>
            <h3 className="text-xl font-semibold text-[#1c1c1c] mb-3 leading-snug">
              How to plant spinach correctly in winter
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              In most areas, successive sowing can be done from early spring
              until early winter, but more often during hotter months…
            </p>
            <button className="px-5 py-2 bg-white border rounded-xl text-[#3ea05b] font-medium hover:bg-gray-100 transition">
              Read
            </button>
          </div>
          <img src={Opa} className="w-52 h-auto object-contain self-end" />
        </div>
        <div className="bg-[#f2f4f3] p-6 rounded-3xl shadow">
          <p className="text-gray-500 text-sm mb-2">12.09.2021</p>
          <h3 className="text-lg font-semibold text-[#1c1c1c] leading-snug mb-3">
            How to plant spinach correctly in winter
          </h3>
          <img src={Barg} className="w-40 h-20 object-cover rounded-xl" />
          <button className="mt-4 px-5 py-2 bg-white border rounded-xl text-[#3ea05b] font-medium hover:bg-gray-100 transition">
            Read
          </button>
        </div>
        <div className="bg-[#f2f4f3] p-6 rounded-3xl shadow">
          <p className="text-gray-500 text-sm mb-2">12.09.2021</p>
          <h3 className="text-lg font-semibold text-[#1c1c1c] leading-snug mb-3">
            How to plant spinach correctly in winter
          </h3>
          <img src={Barg} className="w-40 h-20 object-cover rounded-xl" />
          <button className="mt-4 px-5 py-2 bg-white border rounded-xl text-[#3ea05b] font-medium hover:bg-gray-100 transition">
            Read
          </button>
        </div>
      </div>
    </section>
  );
}
