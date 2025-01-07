import { Helmet } from "react-helmet-async";
import Lottie from "react-lottie";
import animationData from "../../assets/Animation.json";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../../firebase.init";

const Register = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   // console.log(email, password);

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //       alert("user register  successfully");
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       console.log(errorMessage);
  //       alert("email already in use");
  //     });
  // };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, {
          displayName: name,
        });
        // .then(() => {
        //   // Profile updated!
        //   // ...
        // })
        // .catch((error) => {
        //   const errorMessage = error.message;
        //   console.log("Profile updated", errorMessage);
        // });
        console.log(user);
        alert("user register  successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert("auth/email-already-in-use");
      });
  };

  return (
    <>
      <Helmet>
        <title>Next-Page | Register</title>
      </Helmet>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Section - Lottie Animation */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-md w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
              Register now
            </h1>
            <p className="text-center text-gray-500 mb-8">
              Register to access your account and explore our services.
            </p>
            <form onSubmit={handleRegister}>
              {/* Name Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
                  aria-label="Name"
                />
              </div>
              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
                  aria-label="Email"
                />
              </div>
              {/* Password Input */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
                  aria-label="Password"
                />
              </div>
              {/* Confirm Password Input */}
              {/* <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
               
                  placeholder="Confirm your password"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
                  aria-label="Confirm Password"
                />
              </div> */}
              {/* Register Button */}
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-800 transition duration-300 shadow-md">
                Register
              </button>
            </form>
            {/* Forgot Password */}
            <p className="text-center text-gray-500 mt-4 text-sm">
              Already have an account?{" "}
              <a
                href="/Login"
                className="text-blue-600 font-medium hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
