import Opatest from '../assets/opatest.png';

export default function Testimonials() {
  return (
    <section className="py-12">
      <h2 className="text-center text-2xl font-semibold mb-10">
        What our clients say
      </h2>
      <div className="flex gap-6 overflow-x-auto px-4 md:px-0 scrollbar-hide">
        <div className="min-w-[280px] md:min-w-0 md:w-1/3 bg-white border shadow rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={Opatest}
              className="w-12 h-12 rounded-full object-cover"
              alt="avatar"
            />
            <div>
              <h3 className="font-semibold">Carla Samantoes-Diego</h3>
              <p className="text-sm text-gray-500">12.09.2021</p>
            </div>
          </div>
          <div className="flex gap-1 mb-3">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-yellow-500 text-lg">★</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PHD Helga George. Be sure of
            our quality - the freshest batches of this season. Non-GMO, Heirloom
            - our seeds were tested and have the best germination ratings.
          </p>
        </div>
        <div className="min-w-[280px] md:min-w-0 md:w-1/3 bg-white border shadow rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={Opatest}
              className="w-12 h-12 rounded-full object-cover"
              alt="avatar"
            />
            <div>
              <h3 className="font-semibold">Carla Samantoes-Diego</h3>
              <p className="text-sm text-gray-500">12.09.2021</p>
            </div>
          </div>
          <div className="flex gap-1 mb-3">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-yellow-500 text-lg">★</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PHD Helga George...
          </p>
        </div>
        <div className="min-w-[280px] md:min-w-0 md:w-1/3 bg-white border shadow rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={Opatest}
              className="w-12 h-12 rounded-full object-cover"
              alt="avatar"
            />
            <div>
              <h3 className="font-semibold">Carla Samantoes-Diego</h3>
              <p className="text-sm text-gray-500">12.09.2021</p>
            </div>
          </div>
          <div className="flex gap-1 mb-3">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-yellow-500 text-lg">★</span>
            <span className="text-yellow-500 text-lg">★</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs...
          </p>
        </div>
      </div>
    </section>
  );
}
