import React from "react";
import {
  FaEarthAfrica,
  FaEnvelope,
  FaMobile,
  FaLocationDot,
} from "react-icons/fa6";
import { useGlobalContext } from "../context/GlobalContext";

const Model3 = () => {
  const { userData } = useGlobalContext();

  return (
    <div className="mx-auto flex min-h-screen w-full flex-col items-start justify-between gap-2 bg-white text-start font-openSans">
      <div className="flex flex-col items-start justify-between p-8">
        <h1
          translate="no"
          className="flex text-left text-3xl font-bold uppercase tracking-wider text-gray-800"
        >
          {userData.personalInformation.fullName}
        </h1>

        <p className="tracking-widers text-base font-medium uppercase leading-loose text-black">
          {userData.personalInformation.jobTitle}
        </p>
      </div>

      <div className="h-[0.5px] w-full bg-black"></div>

      <div className="grid grid-cols-3 place-content-center gap-10 p-8 text-start">
        <div className="col-span-1 flex flex-col items-start justify-start gap-8">
          <div className="flex h-auto w-max flex-col items-start justify-between gap-4 bg-gray-300 p-4">
            <h2 className="text-base font-semibold uppercase tracking-widest text-black">
              CONTACT
            </h2>

            <ul className="flex flex-col items-start justify-between gap-2">
              <li className="flex items-center justify-stretch gap-6 text-sm font-medium text-black">
                <FaMobile />
                {userData.personalInformation.phone}
              </li>

              <li className="flex items-center justify-stretch gap-6 text-sm font-medium text-black">
                <FaEnvelope />
                {userData.personalInformation.email}
              </li>

              <li className="flex items-center justify-stretch gap-6 text-sm font-medium text-black">
                <FaLocationDot />
                {`${userData.personalInformation.city}, ${userData.personalInformation.country}`}
              </li>

              <li className="flex items-center justify-stretch gap-6 text-sm font-medium text-black">
                <FaEarthAfrica />
                {userData.personalInformation.website}
              </li>
            </ul>
          </div>

          <div className="avoid-break flex w-full flex-col items-start justify-between gap-3 text-start">
            <h2 className="w-full bg-gray-300 p-2 text-base font-semibold uppercase tracking-wider text-black">
              Languages
            </h2>

            <ul className="list-inside list-disc space-y-1 text-sm font-medium text-black">
              {userData.languages.map((lang) => (
                <li key={lang.id} className="list-none">
                  {lang.language} - {lang.level}
                </li>
              ))}
            </ul>
          </div>

          <div className="avoid-break flex w-full flex-col items-start justify-between gap-3 text-start">
            <h2
              translate="no"
              className="w-full bg-gray-300 p-2 text-base font-semibold uppercase tracking-wider text-black"
            >
              Education
            </h2>

            {userData.education.map((education) => (
              <div
                key={education.id}
                className="flex flex-col items-start justify-between gap-1"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-black">
                  {education.degree}
                </h3>

                <div className="flex flex-col items-start justify-between gap-3">
                  <p
                    translate="no"
                    className="flex w-full items-center justify-start gap-2 text-sm font-normal text-black"
                  >{`Session | ${education.startDate} to ${education.endDate}`}</p>

                  <p className="mt-2 text-sm font-normal text-black">
                    {education.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex h-auto w-full flex-col items-start justify-between gap-4">
            <h2 className="w-full bg-gray-300 p-2 text-base font-semibold uppercase tracking-wider text-black">
              SKILLS
            </h2>

            {userData.skills.map((skill) => (
              <ul className="w-full list-inside list-disc space-y-3 text-sm font-medium text-black">
                <li key={skill.id} className="list-none">
                  {skill.skill}
                </li>

                <div className="relative h-0.5 w-full items-center justify-center bg-black">
                  <div
                    style={{ width: `${skill.numericValue}%` }}
                    className={`absolute -top-1 bottom-2 left-0 h-2.5 border-r-2 border-r-black`}
                  ></div>
                </div>
              </ul>
            ))}
          </div>

          <div className="flex h-auto w-full flex-col items-start justify-between gap-4">
            <h2 className="w-full bg-gray-300 p-2 text-base font-semibold uppercase tracking-wider text-black">
              INTEREST
            </h2>

            <ul className="list-inside list-disc space-y-1 text-sm font-medium text-black">
              {userData.hobbies.map((hobbie) => (
                <li key={hobbie.id} className="list-none">
                  {hobbie.hobbie}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-2 flex w-full flex-col items-start justify-start gap-8 text-start">
          <div className="flex h-auto w-full flex-col items-start justify-between gap-4">
            <h2 className="w-full bg-gray-300 p-2 text-base font-semibold uppercase tracking-wider text-black">
              PROFILE
            </h2>

            <div className="text-sm font-normal text-black">
              {userData.summary}
            </div>
          </div>

          <div className="flex h-auto w-full flex-col items-start justify-between gap-4">
            <h2 className="w-full bg-gray-300 p-2 text-base font-semibold uppercase tracking-wider text-black">
              EXPERIENCE
            </h2>

            {userData.experience.map((exp) => (
              <div
                key={exp.id}
                className="flex flex-col items-start justify-between gap-2"
              >
                <h3 className="text-base font-semibold uppercase tracking-wider text-black">
                  {exp.jobTitle}
                </h3>

                <div className="flex flex-col items-start justify-between gap-6">
                  <div className="text-sm font-medium text-black">
                    {`${exp.company} | ${exp.country} | ${exp.startDate}-${exp.startDate}`}
                  </div>

                  <p className="text-sm font-normal text-black">
                    {exp.responsibilities}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex h-auto w-full flex-col items-start justify-between gap-4">
            <h2
              translate="no"
              className="w-full bg-gray-300 p-2 text-base font-semibold uppercase tracking-wider text-black"
            >
              Certifications
            </h2>

            <div className="avoid-break flex w-full items-center justify-between gap-6">
              <div className="flex flex-col gap-4">
                {userData.certifications.map((certif) => (
                  <div
                    key={certif.id}
                    className="flex flex-col items-start justify-between"
                  >
                    <h3 className="text-base font-semibold uppercase tracking-wider text-black">
                      {certif.title}
                    </h3>

                    <div className="flex w-full items-center justify-start gap-2 text-base font-normal text-black">
                      {certif.issuingOrganization} |
                      {`From ${certif.issueDate} to ${certif.expirationDate}`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex h-auto w-full flex-col items-start justify-between gap-4">
            <h2
              translate="no"
              className="w-full bg-gray-300 p-2 text-base font-semibold uppercase tracking-wider text-black"
            >
              REFERENCES
            </h2>

            <div className="grid w-full grid-cols-2 grid-rows-2 items-start justify-between gap-6">
              {userData.references.map((ref) => (
                <div
                  key={ref.id}
                  translate="no"
                  className="flex flex-col items-start justify-between gap-1"
                >
                  <h4 className="text-base font-semibold uppercase tracking-wider text-black">
                    {ref.name}
                  </h4>

                  <p className="text-sm font-medium uppercase tracking-wider text-black">
                    {ref.company}
                  </p>

                  <span className="text-sm font-normal uppercase tracking-wider text-black">
                    {ref.phone}
                  </span>

                  <span className="text-sm font-normal text-black">
                    {ref.email}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model3;
