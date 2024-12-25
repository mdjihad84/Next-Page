import WorldBook1 from "../../Images/WorldBook1.png";
import WorldBook2 from "../../Images/WorldBook2.png";
import WorldBook3 from "../../Images/WorldBook3.png";

const Popular = () => {
  return (
    <section id="Popular" className="px-12 md:py-20">
      <div>
        <h2 className="text-[30px] lg:text-5xl font-bold text-center my-16 lg:my-20">
          Popular Book
        </h2>
      </div>
      <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-xl lg:w-[480px] lg:text-5xl md:text-5xl font-bold text-gray-800 leading-tight">
            Our best and popular selling books
          </h1>
          <p className="lg:w-[501px] my-6 text-gray-600 text-[16px] lg:text-lg leading-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
          <div className="mt-6">
            <a
              href="/books"
              className="bg-yellow-400 text-white px-10 py-3 rounded-lg hover:bg-yellow-500 transition"
            >
              See More
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center items-center gap-4">
          {/* Left Column */}
          <div className="flex flex-col space-y-4">
            <img
              src={WorldBook1}
              alt="World Book 1"
              className="w-[250px] rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={WorldBook2}
              alt="World Book 2"
              className="w-[250px] rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* Right Column */}
          <div className="flex justify-center">
            <img
              src={WorldBook3}
              alt="World Book 3"
              className="w-4/5 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
