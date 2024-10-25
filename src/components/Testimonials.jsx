import React from "react";
import { PiCaretRightThin, PiCaretLeftThin } from "react-icons/pi";

const testimonialsData = [
  {
    title: "A Wonderful Journey",
    content:
      "Travelsy made my first solo trip an unforgettable experience! The support and care provided were exceptional. I can’t wait to book my next adventure with them.",
    name: "Emily Johnson",
    image: "/hm (2).jpg",
  },
  {
    title: "Incredible Service",
    content:
      "From booking to the actual trip, everything was smooth and hassle-free. The staff were friendly, and the accommodations were top-notch. I’ve recommended Travelsy to all my friends!",
    name: "Michael Lee",
    image: "/hm (1).jpg",
  },
  {
    title: "Memorable Experience",
    content:
      "Travelsy planned the perfect family vacation for us. Every detail was taken care of, from the activities to the logistics. We had a stress-free, fun-filled holiday!",
    name: "Shaggi Martinez",
    image: "/hm (3).jpg",
  },
  // Add more testimonials here as needed
];

export default function Testimonials() {
  return (
    <section className="mt-16 bg-gray-100 py-16 md:py-32 w-full ">
      <div className=" sm:w-[80%] w-[90%] mx-auto flex items-center justify-between flex-col sm:flex-row">
        
        {/* Testimonial Header */}
        <div className="flex flex-col items-center gap-5 md:gap-9 text-center sm:text-left   min-w-80 sm:items-start ">
          
          <p className="uppercase text-gray-500 text-sm text-center">Testimonials</p>

          <h1 className="font-serif font-semibold text-2xl md:text-3xl text-gray-800 leading-snug">
            What <br /> customers <br />{" "}
            <span className="text-orange-600">say about us .</span>
          </h1>

          <div className="flex justify-center md:justify-start px-2 py-2 items-center gap-5 bg-white rounded w-fit mx-auto md:mx-0">
            <PiCaretLeftThin className="text-xl text-gray-500" />{" "}
            <p className="text-xl mb-1 text-gray-400">/</p>
            <PiCaretRightThin className="text-xl text-gray-400" />
          </div>
        </div>

        {/* Scrollable Testimonials */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory mt-8 scrollbar-hide w-full">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 w-80 md:w-80 flex flex-col justify-between bg-white border-gray-400 p-5 rounded h-auto md:h-80 gap-5"
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-bold font-serif mt-4">
                  {testimonial.title}
                </h1>
                <p className="text-sm md:text-base">{testimonial.content}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-gray-500 w-9 h-9 rounded-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <p className="text-sm">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
