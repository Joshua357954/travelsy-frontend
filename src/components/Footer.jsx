import React from "react";
import { PiCaretCircleDownThin } from "react-icons/pi";

export default function Footer() {
  return (
    <footer class="bg-white py-8">
      <div className="sm:w-[80%] w-[90%]  mx-auto">
        <div class="container mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-6 ">
            {/* <!-- Column 1 --> */}
            <div>
              <h4 class="text-lg font-bold mb-2 text-gray-700">
                Need Travelsy Help?
              </h4>
              <ul class="space-y-2 text-gray-600 text-[1.02rem]">
                <li>
                  <a href="#" class="hover:underline">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Other Services
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Column 2 --> */}
            <div>
              <h4 class="text-lg font-bold mb-2 text-gray-700">Quick Links</h4>
              <ul class="space-y-2 text-gray-600 text-[1.02rem]">
                <li>
                  <a href="#" class="hover:underline">
                    Mailing List
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Got Questions? Call us 24/7!
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Column 3 --> */}
            <template>
              <div>
                <h4 class="text-lg font-bold mb-2 text-gray-700">
                  Your Account
                </h4>
                <ul class="space-y-2 text-gray-600 text-[1.02rem]">
                  <li>
                    <a href="#" class="hover:underline">
                      Sign Up for our mailing lists
                    </a>
                  </li>
                  <li>
                    <a href="tel:+254716909815" class="hover:underline">
                      Call Us: +254 716909 815
                    </a>
                  </li>
                </ul>
              </div>
            </template>

            {/* <!-- Column 4 --> */}
            <div>
              <h4 class="text-lg font-bold mb-2 text-gray-700">Careers</h4>
              <ul class="space-y-2 text-gray-600 text-[1.02rem]">
                <li>
                  <a href="#" class="hover:underline">
                    Rewards Program
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Camping Locations
                  </a>
                </li>
                <li>
                  <a href="mailto:info@travelsy.com" class="hover:underline">
                    Email Us:{" "}
                    <a
                      href="mailto:info@travelsy.com"
                      className="text-blue-400"
                    >
                      info@travelsy.com
                    </a>
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Column 4 --> */}
            <ul className="w-full">
              <h4 class="text-lg font-bold mb-2 text-gray-700">Mailing List</h4>
              <p className=" text-gray-600 text-[1.02rem] leading-7">
                Signup for our mailing list and get the latest offers straight
                to your inbox enjoy promotional offers
              </p>
              <form className="flex mt-1 w-full ">
                <input
                  placeholder="Your Email"
                  className="border border-gray-400 p-[.65rem] w-full"
                />
                <button
                  type="submit"
                  className="bg-orange-600 px-2 py-1 text-white"
                >
                  Subscribe
                </button>
              </form>
            </ul>

            {/* <!-- Column 5 --> */}
            <div>
              <h4 class="text-lg font-bold mb-2 text-gray-700">Terms Of Use</h4>
              <ul class="space-y-2 text-gray-600 text-[1.02rem]">
                <li>
                  <a href="#" class="hover:underline">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Activities
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Privacy Statement
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Legal
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Second row: Single Link Category --> */}
            <div class="">
              <h4 class="text-lg font-bold mb-2 text-gray-700">
                Hire Equipment
              </h4>
              <ul class="space-y-2 text-gray-600 text-[1.02rem]">
                <li>
                  <a href="#" class="hover:underline">
                    Your Email
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Subscribe
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Give Us Feedback
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <hr className="py-[.5px] bg-gray-300 mt-8" />

      <div className="w-full py-5 mt-8">
        <div className="w-[94%] sm:w-[80%]  mx-auto flex flex-col sm:flex-row justify-between items-center sm:gap-8 gap-y-10 flex-wrap ">
          <h1 className="font-semibold text-lg">Travelsy</h1>

          <div className="flex flex-col sm:flex-row  justify-between items-center sm:gap-5 gap-y-8 flex-wrap">
            {/* Credit Images */}
            <div className="flex sm:gap-6 gap-4 items-center w-full">
              <img
                src="/mpesa.png"
                className="w-[80%] h-[80%] sm:w-[100%] sm:h-[100%]"
              />
              <img
                src="/discover.png"
                className="w-[80%] h-[80%] sm:w-[100%] sm:h-[100%]"
              />
              <img
                src="/visa.png"
                className="w-[80%] h-[80%] sm:w-[100%] sm:h-[100%]"
              />
              <img
                src="/export.png"
                className="w-[80%] h-[80%] sm:w-[100%] sm:h-[100%]"
              />
              <img
                src="/mastercard.png"
                className="w-[80%] h-[80%] sm:w-[100%] sm:h-[100%]"
              />
            </div>
            <div className="flex gap-2 items-center p-2 border border-gray-700 w-fit">
              <img src="/us-flag.png" className="w-4 h-3" />
              <p>English (United States)</p>
              <PiCaretCircleDownThin />
            </div>

            <div className="flex gap-2 items-center p-2 border w-fit  border-gray-700">
              <p>KES</p>
              <PiCaretCircleDownThin />
            </div>
          </div>
        </div>
      </div>

      <hr className="py-[.5px] bg-gray-300 mt-8" />
      <div className="flex flex-col gap-6 sm:flex-row justify-between w-[80%] mx-auto mt-8">
        <p>
          Copyright © 2019 <b className="text-gray-700">Travelsy Ltd.</b> All
          rights reserved
        </p>
        <p>Made in Kenya by Ralak</p>
      </div>
    </footer>
  );
}
