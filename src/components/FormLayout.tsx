import React, { useState, ReactNode } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { IconType } from "react-icons";
import { FaPlus } from "react-icons/fa6";
import { useFormContext } from "../context/FormContext.js";
import { motion } from "framer-motion";

interface FormSectionProps {
  title: string;
  section: string;
  Icon: IconType;
  children: ReactNode;
}

const FormLayout: React.FC<FormSectionProps> = ({
  title,
  section,
  Icon,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Fonction pour basculer l'état d'ouverture/fermeture
  const toggleSection = () => {
    setIsOpen((prev) => !prev);
  };

  const { setIsEditing, setEditingData } = useFormContext();

  // Variants pour l'animation
  const variants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-full rounded-2xl bg-white py-5 shadow">
      {/* Header cliquable avec titre et icône */}
      <div
        className="flex cursor-pointer items-center justify-between px-5"
        onClick={toggleSection}
      >
        <div className="flex items-center">
          <Icon className="mr-2 text-xl" />

          <span className="text-base font-semibold text-custom-ultra-black md:text-lg">
            {title}
          </span>
        </div>

        {isOpen ? (
          <FiChevronUp className="h-6 w-6 text-gray-600" />
        ) : (
          <FiChevronDown className="h-6 w-6 text-gray-600" />
        )}
      </div>

      {/* Contenu qui se déplie avec animation */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={`${isOpen ? "mt-6" : "mt-0"} space-y-6 overflow-hidden`}
      >
        <div className="cursor-pointer border-y-2 border-custom-light-black/60 p-5">
          {children}
        </div>

        <div className="flex w-full items-center justify-center">
          <button
            onClick={() => {
              setIsEditing((prev) => ({
                ...prev,
                [section.toLowerCase()]: true,
              }));

              setEditingData(null); // Réinitialise les données d'édition
            }}
            className="flex items-center justify-center gap-2 rounded-full border border-custom-light-black px-4 py-2 text-base font-medium text-custom-ultra-black"
          >
            <FaPlus />

            {title}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default FormLayout;
