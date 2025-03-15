import React, { useRef, useState, RefObject } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ModelsData } from "../constant/index";

const Carrousel: React.FC = () => {
  const carouselRef: RefObject<HTMLDivElement> = useRef(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const navigate = useNavigate();

  const scrollToElement = (index: number) => {
    const container = carouselRef.current;
    if (container) {
      const containerWidth = container.offsetWidth;

      const itemWidth = container.scrollWidth / ModelsData.length;

      const scrollPosition =
        itemWidth * index - containerWidth / 2 + itemWidth / 2;

      container.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    let newIndex = currentIndex;

    if (direction === "left") {
      newIndex = Math.max(currentIndex - 1, 0);
    } else if (direction === "right") {
      newIndex = Math.min(currentIndex + 1, ModelsData.length - 1);
    }

    setCurrentIndex(newIndex);
    scrollToElement(newIndex);
  };

  const handleSelectModel = (id: string) => {
    navigate("/create-cv", { state: { selectedModel: id } });
  };

  return (
    <div className="relative w-full">
      <button
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/10 p-3 shadow-lg backdrop-blur-xl"
        onClick={() => handleScroll("left")}
      >
        <AiOutlineLeft className="text-customTextPrimary text-xl" />
      </button>

      <div
        ref={carouselRef}
        className="flex w-full gap-4 overflow-x-scroll scroll-smooth scrollbar-hide"
      >
        {ModelsData.map((model, index) => (
          <motion.div
            key={model.id}
            onClick={() => handleSelectModel(model.id)}
            className={`flex h-full w-full max-w-sm flex-shrink-0 cursor-pointer flex-col items-center justify-center gap-6 overflow-hidden p-4 shadow-md hover:shadow-lg ${
              currentIndex === index ? "scale-105" : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <img
              src={model.image}
              alt={model.title}
              className="h-64 w-64 rounded-3xl object-cover lg:h-80 lg:w-80"
            />

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-custom-ultra-black lg:text-xl">
                {model.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <button
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white/10 p-3 shadow-lg backdrop-blur-xl"
        onClick={() => handleScroll("right")}
      >
        <AiOutlineRight className="text-customTextPrimary text-xl" />
      </button>
    </div>
  );
};

export default Carrousel;
