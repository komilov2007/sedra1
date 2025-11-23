import React from 'react';
import Barg from '../assets/barg.png';
import Kokat from '../assets/kokat.png';
export default function HeroSection() {
  return (
    <section className="w-full bg-[] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center rounded-3xl bg-[#e7f0e7] p-10 gap-10 shadow-md">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-[#1c1c1c] leading-tight">
            SEEDRA Basil Seeds for <br /> Indoor and Outdoor Planting
          </h1>

          <p className="text-[#4b4b4b] mt-4 leading-relaxed">
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom – our seeds were tested and have the best
            germination ratings. Your easy growing experience is our guarantee.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <span className="text-3xl font-bold text-[#1c1c1c]">$12.56</span>
            <span className="text-lg line-through text-gray-400">$15.56</span>
          </div>
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-[#3ea05b] text-white rounded-xl font-semibold shadow hover:bg-[#348b4e] transition">
              Add to card
            </button>
            <button className="px-6 py-3 bg-white text-[#1c1c1c] rounded-xl font-semibold shadow hover:bg-gray-100 transition">
              Discover
            </button>
          </div>
        </div>
        <div className="flex-1 relative flex justify-center">
          <img
            src={Kokat}
            className="w-[349px] absolute left-50 top-[-140px]  h-auto object-contain drop-shadow-xl"
          />{' '}
          <img src={Barg} className="mb-[-145px] mr-[-300px] mr-9" alt="" />
        </div>
      </div>
      <div className="bg-[#fbfffa] rounded-2xl shadow mt-6 p-6 text-center max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold text-[#1c1c1c]">We sell seeds</h2>
        <p className="text-[#4b4b4b] mt-1">
          that always sprout and gardening supplies which never break
        </p>
      </div>
    </section>
  );
}
