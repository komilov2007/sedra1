import Opasedra from '../assets/opasedrs.png';
export default function SeedraInfo() {
  return (
    <section className="py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6">
            Seedra helps to grow fast and efficient
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PHD Helga George
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your easy growing experience is our guarantee. Spinach common
            culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
            risotto, and more.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Proudly sourced in the USA - our garden seeds are grown, harvested,
            and packaged in the USA. We support local farmers and are happy to
            produce this American-made product!
          </p>
        </div>
        <div className="flex justify-center relative">
          <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border-[14px] border-green-300 flex items-center justify-center">
            <img
              src={Opasedra}
              alt="farmer"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
