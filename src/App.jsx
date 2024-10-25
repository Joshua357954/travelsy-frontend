import { useState } from "react";
import { IoCaretUp, IoSearchOutline as Search } from "react-icons/io5";
import { LuBookmark as Bookmark } from "react-icons/lu";
import { PiCaretDown as Down } from "react-icons/pi";
import "./App.css";
import Grid_Select from "./components/Grid_Select";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* NavBar */}
      <Navbar />

      {/* Line */}
      <hr className="bg-gray-500 py-[.3px]" />

      {/* Main Content */}
      <main className="w-[80%] mx-auto">
        <header className="pt-20">
          <h1 className="font-serif sm:text-6xl text-5xl  font-medium">
            Find An <br />
            Experience
          </h1>

          <p className="mt-6 text-gray-600 text-[1.07rem]">
            To find the best experiences. we will ask you a few questions and{" "}
            <br /> show you experiences based on your prefrence
          </p>

          <div>
            <p className="text-gray-800 mt-10 font-semibold">
              How much time do you have?
            </p>

            <ul className="flex items-center text-gray-700 gap-x-6 gap-y-5 mt-4 flex-wrap">
              <li className="">
                <input type="checkbox" className="mr-1" /> A weekend
              </li>
              <li>
                <input type="checkbox" className="mr-1" /> A week
              </li>
              <li>
                <input type="checkbox" className="mr-1" /> A month
              </li>
              <li>
                <input type="checkbox" className="mr-1" /> A few days, specify
              </li>
            </ul>
          </div>

          <p className="mt-10 text-gray-800 font-semibold">
            What are your interests?
          </p>
        </header>

        {/*  Grid Section */}
        <Grid_Select />
      </main>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
