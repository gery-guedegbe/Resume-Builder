import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { GoDotFill } from "react-icons/go";
import { useGlobalContext } from "../context/GlobalContext.js";

// Composant fonctionnel pour afficher le modèle
const Model1: React.FC = () => {
  const { userData } = useGlobalContext();

  return (
    <div className="mx-auto flex h-full w-full flex-col items-center justify-start gap-14 border bg-white p-8 font-cursive">
      <div className="avoid-break flex w-full items-end justify-between">
        <h1
          translate="no"
          className="flex w-1/2 text-left text-2xl font-bold text-gray-800"
        >
          Hello. I'm {userData.personalInformation.fullName}
          ,<br /> Passionate {userData.personalInformation.jobTitle}
        </h1>

        <div className="flex justify-center gap-3">
          <div className="flex flex-col items-end justify-between">
            <div className="flex flex-col items-center justify-between">
              <div className="flex h-0 w-0 items-center justify-center border-b-[16px] border-l-[16px] border-r-[16px] border-t-[16px] border-custom-model1-color text-lg font-bold text-white">
                P
              </div>

              <div className="border-l-[6px] border-r-[6px] border-t-[6px] border-custom-model1-color border-l-transparent border-r-transparent"></div>
            </div>

            <div className="flex flex-col items-end justify-center">
              <span
                translate="no"
                className="text-sm font-normal text-custom-model1-color"
              >
                Portfolio
              </span>

              <p className="text-sm font-semibold text-custom-model1-color">
                {userData.personalInformation.website}
              </p>
            </div>
          </div>

          <div>
            <QRCodeSVG
              value={userData.personalInformation.website}
              size={80}
              bgColor="#ffffff"
              fgColor="#1f2937"
            />
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-2 place-content-between gap-10">
        <div className="avoid-break flex flex-col gap-8 text-left">
          <div className="max-w-xs text-sm font-normal text-custom-model1-color">
            {userData.summary}
          </div>

          <div className="new-page flex flex-col gap-4">
            <h2 className="text-2xl font-bold uppercase text-custom-model1-color">
              CONTACT
            </h2>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal text-custom-model1-color">{`${userData.personalInformation.address}, ${userData.personalInformation.street}, ${userData.personalInformation.city}`}</p>

              <p className="text-sm font-normal text-custom-model1-color">{`${userData.personalInformation.state}, ${userData.personalInformation.country}`}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-normal text-custom-model1-color">
                Phone: {userData.personalInformation.phone}
              </p>

              <p className="text-sm font-normal text-custom-model1-color">
                Mail: {userData.personalInformation.email}
              </p>

              <p className="text-sm font-normal text-custom-model1-color">
                Web: {userData.personalInformation.website}
              </p>

              <p className="text-sm font-normal text-custom-model1-color">
                Linkedin: {userData.personalInformation.linkedin}
              </p>
            </div>
          </div>

          <div className="avoid-break flex flex-col gap-4">
            <h2
              translate="no"
              className="text-2xl font-bold uppercase text-custom-model1-color"
            >
              Education
            </h2>

            {userData.education.map((education) => (
              <div key={education.id} className="mt-4 flex flex-col gap-1">
                <h3 className="text-xl font-semibold">{education.degree}</h3>

                <div className="flex flex-col gap-1">
                  <p className="text-sm font-normal text-custom-model1-color">
                    {education.institution}
                  </p>

                  <p className="text-sm font-normal text-custom-model1-color">{`${education.startDate} - ${education.endDate}`}</p>

                  <ul className="list-inside list-disc text-sm font-normal text-custom-model1-color">
                    <li>{education.achievements}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="avoid-break flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Skills</h2>

            <ul className="list-inside space-y-2 text-sm font-normal text-custom-model1-color">
              {userData.skills.map((skill) => {
                // Calcul du nombre d'étoiles pleines (chaque étoile représente 20%)
                const filledStars = Math.round(skill.numericValue / 20);

                return (
                  <li
                    key={skill.id}
                    className="text-sm font-normal text-custom-model1-color"
                  >
                    <div className="inline-flex items-center gap-4">
                      <span>{skill.skill}: </span>

                      <div className="inline-flex items-center">
                        {/* Affiche 5 étoiles en fonction du niveau */}
                        {[1, 2, 3, 4, 5].map((point) => (
                          <span
                            key={point}
                            className={`text-lg ${
                              point <= filledStars
                                ? "text-gray-800"
                                : "text-gray-300"
                            }`}
                          >
                            <GoDotFill />
                          </span>
                        ))}
                      </div>

                      {/* <div className="text-sm text-gray-500 ml-2">
                        {skill.level}% 
                      </div> */}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {userData.hobbies && (
            <div className="avoid-break flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">Hobbies</h2>

              {userData.hobbies.map((hob) => (
                <ul className="list-inside space-y-2 text-sm font-normal text-custom-model1-color">
                  <li
                    key={hob.id}
                    className="text-sm font-normal text-custom-model1-color"
                  >
                    {hob.hobbie}
                  </li>
                </ul>
              ))}
            </div>
          )}
        </div>

        <div className="absolute left-[51%] top-0 z-0 h-full border-l border-custom-model1-color"></div>

        <div className="relative flex flex-col gap-8 text-left text-sm">
          <div className="avoid-break flex flex-col gap-4">
            <h2 translate="no" className="text-2xl font-semibold">
              EXPERIENCE
            </h2>

            <p className="text-sm font-normal text-custom-model1-color">
              Diverses expériences professionnelles m'ont permis de développer
              des compétences solides et de m'adapter à différents
              environnements de travail.{" "}
            </p>
          </div>

          {userData.experience.map((exp) => (
            <div key={exp.id} className="avoid-break flex gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-semibold">{exp.jobTitle}</h4>

                  <p className="text-sm font-normal text-custom-model1-color">{`${exp.company} ${exp.city}`}</p>

                  <p className="flex text-sm font-normal text-custom-model1-color">
                    {`${exp.startDate} - ${exp.endDate}`}
                  </p>
                </div>

                <div className="relative flex flex-row">
                  <p className="text-sm font-normal text-custom-model1-color">
                    {exp.responsibilities}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="avoid-break flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Laguages</h2>

            <ul className="list-inside space-y-2 text-sm font-normal text-custom-model1-color">
              {userData.languages.map((lang) => {
                // Calcul du nombre d'étoiles pleines (chaque étoile représente 20%)
                const filledStars = Math.round(lang.numericValue / 20);

                return (
                  <li
                    key={lang.id}
                    className="text-sm font-normal text-custom-model1-color"
                  >
                    <div className="inline-flex items-center gap-4">
                      <span>{lang.language}: </span>

                      <div className="inline-flex items-center">
                        {/* Affiche 5 étoiles en fonction du niveau */}
                        {[1, 2, 3, 4, 5].map((point) => (
                          <span
                            key={point}
                            className={`text-lg ${
                              point <= filledStars
                                ? "text-gray-800"
                                : "text-gray-300"
                            }`}
                          >
                            <GoDotFill />
                          </span>
                        ))}
                      </div>

                      {/* <div className="text-sm text-gray-500 ml-2">
                        {skill.level}% 
                      </div> */}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model1;
