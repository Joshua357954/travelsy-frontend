import { useState } from "react";
import { FaCheck } from "react-icons/fa";

function Grid_Select() {
  const gridItems = [
    {
      id: 1,
      imgSrc: "/phix (1).jpeg",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1",
      text: "aba",
    },
    {
      id: 2,
      imgSrc: "/phix (1).jpg",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      text: "kano",
    },
    {
      id: 3,
      imgSrc: "/phix (1).webp",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      text: "ariaria",
    },
    {
      id: 4,
      imgSrc: "/phix (2).jpeg",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      text: "borno",
    },
    {
      id: 5,
      imgSrc: "/phix (2).jpg",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      text: "sychells",
    },
    {
      id: 6,
      imgSrc: "/phix (3).jpg",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      text: "adamawa",
    },
    {
      id: 7,
      imgSrc: "/phix (4).jpg",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1",
      text: "imo",
    },
    {
      id: 8,
      imgSrc: "/phix (5).jpg",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1",
      text: "platue",
    },
    {
      id: 9,
      imgSrc: "/phix (6).jpg",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
      bgColor: "bg-red-300",
      text: "akwaibom",
    },
  ];

  const [visibleOverlays, setVisibleOverlays] = useState({});

  const toggleOverlay = (id) => {
    setVisibleOverlays((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <section className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3 md:grid-rows-auto ">
        {gridItems.map((item) => (
          <div
            key={item.id}
            className={`relative w-full h-40 col-span-1 row-span-1 ${
              item.colSpan
            } ${item.rowSpan} ${item.bgColor || "bg-gray-100"} cursor-pointer`}
            onClick={() => toggleOverlay(item.id)}
          >
            <span className="z-9 text-outline absolute inset-0 flex items-center mt-11 justify-center font-serif text-white font-bold capitalize text-lg">
              {item.text}
            </span>

            {item.imgSrc ? (
              <img
                src={item.imgSrc}
                className="w-full h-full object-cover"
                alt={`Grid Item ${item.id}`}
              />
            ) : null}

            <div
              className={`absolute top-0 left-0 w-full h-full bg-orange-500 bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ${
                visibleOverlays[item.id]
                  ? "opacity-100"
                  : "opacity-0 hover:opacity-100"
              }`}
            >
              <div className="flex text-white flex-col items-center gap-4">
                <span>
                  <FaCheck />
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <button className="px-8 sm:px-12 py-2 bg-orange-500 text-white text-sm mt-8 w-full sm:w-auto">
        Set
      </button>
    </>
  );
}

export default Grid_Select;
