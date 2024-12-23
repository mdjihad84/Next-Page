import WorldBook1 from "../../Images/WorldBook1.png";
import WorldBook2 from "../../Images/WorldBook2.png";
import WorldBook3 from "../../Images/WorldBook3.png";

const Services = () => {
  return (
    <div className="my-10">
      <div>
        <h2 className="text-5xl font-bold text-center my-20">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 justify-items-center">
        <div className="p-4 rounded-lg w-[285px] text-center shadow-md hover:scale-105 transition-transform duration-300">
          <img
            src={WorldBook1}
            alt="Book"
            className="w-[150px] h-auto rounded-md mx-auto"
          />
          <h3 className="text-lg font-bold mt-2">Free Shipping</h3>
          <div className="my-2">
            <i className="text-yellow-400 fa-solid fa-star"></i>
            <i className="text-yellow-400  fa-solid fa-star"></i>
            <i className="text-yellow-400  fa-solid fa-star"></i>
            <i className="text-yellow-400  fa-solid fa-star"></i>
            <i className="text-yellow-400 fa-solid fa-star"></i>
          </div>
          <p className="text-gray-600">
            Enjoy free shipping on all orders within the country.
          </p>
        </div>
        <div className="p-4 rounded-lg w-[285px] text-center shadow-md hover:scale-105 transition-transform duration-300">
          <img
            src={WorldBook2}
            alt="Book"
            className="w-[150px] h-auto rounded-md mx-auto"
          />
          <h3 className="text-lg font-bold mt-2">Free Shipping</h3>
          <div className="my-2">
            <i className="text-yellow-400 fa-solid fa-star"></i>
            <i className="text-yellow-400  fa-solid fa-star"></i>
            <i className="text-yellow-400  fa-solid fa-star"></i>
            <i className="text-yellow-400  fa-solid fa-star"></i>
            <i className="text-yellow-400  fa-solid fa-star"></i>
          </div>
          <p className="text-gray-600">
            Enjoy free shipping on all orders within the country.
          </p>
        </div>
        <div className="p-4 rounded-lg w-[285px] text-center shadow-md hover:scale-105 transition-transform duration-300">
          <img
            src={WorldBook3}
            alt="Book"
            className="w-[150px] h-auto rounded-md mx-auto"
          />
          <h3 className="text-lg font-bold mt-2">Free Shipping</h3>
          <div className="my-2">
            <i className="text-yellow-400 fa-solid fa-star"></i>
            <i className="text-yellow-400  fa-solid fa-star"></i>
            <i className="text-yellow-400  fa-solid fa-star"></i>
            <i className="text-yellow-400 fa-solid fa-star"></i>
            <i className="text-yellow-400 fa-solid fa-star"></i>
          </div>
          <p className="text-gray-600">
            Enjoy free shipping on all orders within the country.
          </p>
        </div>
        <div className="p-4 rounded-lg w-[285px] text-center shadow-md hover:scale-105 transition-transform duration-300">
          <img
            src={WorldBook1}
            alt="Book"
            className="w-[150px] h-auto rounded-md mx-auto shadow-md hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-lg font-bold mt-2">Free Shipping</h3>
          <div className="my-2">
            <i className="text-yellow-400 fa-solid fa-star"></i>
            <i className="text-yellow-400  fa-solid fa-star"></i>
            <i className="text-yellow-400  fa-solid fa-star"></i>
            <i className="text-yellow-400  fa-solid fa-star"></i>
            <i className="text-yellow-400 fa-solid fa-star"></i>
          </div>
          <p className="text-gray-600">
            Enjoy free shipping on all orders within the country.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
