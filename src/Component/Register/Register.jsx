import { Helmet } from "react-helmet-async";
import Lottie from "react-lottie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import animationData from "../../assets/lottie.json";

const Register = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Example validation logic
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
      toast.error("Please fill in all fields!");
      return;
    }

    // Simulating a successful Register
    toast.success("Registration successful!");
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
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
              Register
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
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
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
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
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
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              {/* Confirm Password Input */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* Register Button */}
              <button
                type="submit"
                className="w-full py-3 bg-yellow-400 text-white rounded-lg font-bold hover:hover:bg-yellow-500 transition duration-300 shadow-md"
              >
                Register
              </button>
            </form>
            {/* Forgot Password */}
            <p className="text-center text-gray-500 mt-4 text-sm">
              Forgot your password?{" "}
              <a
                href="/Login"
                className="text-blue-600 font-medium hover:underline"
              >
                Login
              </a>
            </p>
            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="h-px flex-1 bg-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="h-px flex-1 bg-gray-300"></div>
            </div>
            {/* Social Media Buttons */}
            <div className="flex justify-center space-x-4">
              {[
                {
                  href: "https://www.facebook.com/jahidulislam.jihad.773124/",
                  icon: "fa-facebook-f",
                },
                { href: "https://x.com/jahidul16956", icon: "fa-twitter" },
                { href: "https://github.com/mdjihad84", icon: "fa-github" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 hover:bg-blue-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition duration-300 shadow-md"
                >
                  <i className={`fab ${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

// import { Helmet } from "react-helmet-async";
// import Lottie from "react-lottie";
// import animationData from "../../assets/lottie.json";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useState } from "react";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle Register button click
//   const handleRegister = (e) => {
//     e.preventDefault();

//     const { name, email, password, confirmPassword } = formData;

//     // Basic validation
//     if (!name || !email || !password || !confirmPassword) {
//       toast.error("All fields are required!", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       return;
//     }

//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match!", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       return;
//     }

//     // Success message
//     toast.success("Registration successful!", {
//       position: "top-center",
//       autoClose: 3000,
//     });

//     // Clear form (Optional)
//     setFormData({
//       name: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Next-Page | Register</title>
//       </Helmet>
//       <div className="min-h-screen flex flex-col lg:flex-row">
//         {/* Left Section - Lottie Animation */}
//         <div className="w-full lg:w-1/2 flex justify-center items-center">
//           <Lottie options={defaultOptions} height={300} width={300} />
//         </div>

//         {/* Right Section - Form */}
//         <div className="flex-1 flex items-center justify-center p-8">
//           <div className="max-w-md w-full">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
//               Register
//             </h1>
//             <p className="text-center text-gray-500 mb-8">
//               Register to access your account and explore our services.
//             </p>
//             <form>
//               {/* Name Input */}
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   className="w-full px-4 py-3 bg-gray-100 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
//                   aria-label="Name"
//                 />
//               </div>
//               {/* Email Input */}
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                   className="w-full px-4 py-3 bg-gray-100 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
//                   aria-label="Email"
//                 />
//               </div>
//               {/* Password Input */}
//               <div className="mb-6">
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Enter your password"
//                   className="w-full px-4 py-3 bg-gray-100 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
//                   aria-label="Password"
//                 />
//               </div>
//               {/* Confirm Password Input */}
//               <div className="mb-6">
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   placeholder="Confirm your password"
//                   className="w-full px-4 py-3 bg-gray-100 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
//                   aria-label="Confirm Password"
//                 />
//               </div>
//               {/* Register Button */}
//               <button
//                 onClick={handleRegister}
//                 className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition duration-300 shadow-md"
//               >
//                 Register
//               </button>
//             </form>
//             {/* Forgot Password */}
//             <p className="text-center text-gray-500 mt-4 text-sm">
//               Forgot your password?{" "}
//               <a href="#" className="text-blue-600 font-medium hover:underline">
//                 Reset it here
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* Toast Container */}
//       <ToastContainer />
//     </>
//   );
// };

// export default Register;
