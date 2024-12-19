import React from "react";
import Lottie from "lottie-react";
import reader from "../../assets/reader.json";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link, useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Home = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="flex flex-col items-center justify-between lg:flex-row px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl">
        <h6 className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-yellow-400">
          On Sale!
        </h6>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          A reader lives a <br className="hidden md:block" /> thousand lives{" "}
          <span className="inline-block text-blue-400">before he dies</span>
        </h2>
        <p className="lg:w-[488px] mb-6 text-sm sm:text-base md:text-lg text-gray-700">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man who
          does not read good books is no better than the man who can’t.
        </p>
        <div className="flex flex-col items-center md:flex-row">
          <Link to="/books" className=" md:w-auto md:mr-4">
            <div className="inline-flex items-center h-12 px-6 mb-3 font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-blue-400 hover:bg-blue-700 justify-center w-full">
              <span className="mr-3">Visit Store</span>
              <ShoppingCartIcon className="w-5 text-gray-100" />
            </div>
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700">
            Learn More
          </Link>
        </div>
      </div>

      {/* Animation Section */}
      <div className="relative lg:w-1/2 ">
        <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
          <Lottie animationData={reader} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Home;
