import ManImg from "../../Images/Man.png";

const About = () => {
  return (
    <section id="Popular" className="px-6 md:px-12 md:py-20">
      {/* About Us Section */}
      <div className="flex flex-col items-center text-center my-16">
        <h2 className="text-4xl md:text-5xl font-bold">About Us</h2>
        <p className="w-full max-w-lg mt-4 text-gray-700 text-base font-medium">
          As a web development service, we leverage collaborative perspectives
          and strengths to create inclusive.
        </p>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-[17px] hidden lg:block md:text-5xl lg:w-[515px] lg:text-4xl font-semibold text-gray-800 leading-tight">
            Building Stronger Communities through Collaboration and Empowerment
          </h1>
          <p className="mt-[-40px] lg:mt-4 text-justify leading-7 md:leading-8 text-gray-600 text-base md:text-lg max-w-xl">
            Through collaborative perspectives, we create inclusive environments
            where everyone has the opportunity to thrive. This approach fosters
            personal growth, strengthens society, and empowers individuals to
            reach their full potential.
          </p>
          <div className="mt-4 py-6 lg:py-4">
            <a
              href="/books"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center items-center">
          <img
            src={ManImg}
            alt="Illustration of community empowerment"
            className="w-full max-w-lg rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
