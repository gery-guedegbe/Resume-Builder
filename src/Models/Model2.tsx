import React from "react";
import { FaEarthAfrica, FaEnvelope, FaMobile } from "react-icons/fa6";
import { useGlobalContext } from "../context/GlobalContext";

const Model2 = () => {
  const { userData } = useGlobalContext();

  return (
    <div className="mx-auto grid min-h-screen w-full grid-flow-row gap-6 bg-zinc-50 p-8 font-inter">
      <div className="grid grid-cols-3 place-content-center">
        <div className="relative col-span-1 flex flex-col items-start justify-center">
          <div className="relative z-10">
            <img
              src={userData.personalInformation.profilePicture}
              alt="Profiles"
              className="h-auto w-40"
            />
          </div>

          <div className="top-22 z-1 absolute right-8 h-16 min-w-60 bg-custom-yellow bg-opacity-80"></div>
        </div>

        <div className="col-span-2 flex w-full flex-col items-start justify-start gap-6">
          <div className="flex w-full flex-col items-start text-start">
            <h1
              translate="no"
              className="text-4xl font-semibold uppercase tracking-wide text-black"
            >
              {userData.personalInformation.fullName}
            </h1>

            <p className="text-lg font-normal uppercase leading-tight tracking-wider text-slate-600">
              {userData.personalInformation.jobTitle}
            </p>
          </div>

          <div className="relative z-10 mb-5 h-16 w-full flex-wrap -space-y-1 bg-custom-yellow bg-opacity-80 p-2 tracking-widest">
            <p translate="no" className="text-base font-medium text-black">
              PRESENT
            </p>

            <p translate="no" className="text-base font-medium text-black">
              ADDRESS
            </p>
          </div>

          <div className="flex flex-col gap-1 text-start">
            <p className="text-sm font-normal text-custom-model1-color">{`${userData.personalInformation.address}, ${userData.personalInformation.street}, ${userData.personalInformation.city}`}</p>

            <p className="text-sm font-normal text-custom-model1-color">{`${userData.personalInformation.state}, ${userData.personalInformation.country}`}</p>
          </div>

          {/* <div className="left-100 z-1 bg-custom-yellow absolute top-40 h-16 min-w-8"></div> */}
        </div>
      </div>

      <div className="grid w-full grid-cols-3 place-content-center gap-6">
        <div className="col-span-1 flex flex-col items-start justify-start gap-10">
          <ul className="mt-10 flex flex-col items-start justify-between gap-2">
            <li className="flex items-center justify-stretch gap-6 text-sm font-normal text-black">
              <FaMobile />
              {userData.personalInformation.phone}
            </li>

            <li className="flex items-center justify-stretch gap-6 text-sm font-normal text-black">
              <FaEnvelope />
              {userData.personalInformation.email}
            </li>

            <li className="flex items-center justify-stretch gap-6 text-sm font-normal text-black">
              <FaEarthAfrica />
              {userData.personalInformation.website}
            </li>
          </ul>

          <div className="avoid-break flex w-full flex-col items-start justify-between gap-3 text-start">
            <h2
              translate="no"
              className="w-12 border-b-4 border-b-custom-yellow pb-1.5 text-xl font-bold uppercase leading-tight tracking-wider text-black"
            >
              Education
            </h2>

            {userData.education.map((education) => (
              <div key={education.id} className="flex flex-col">
                <h3 className="text-lg font-medium">{education.degree}</h3>

                <div className="flex flex-col gap-1">
                  <p
                    translate="no"
                    className="flex w-full items-center justify-start gap-2 text-base font-normal text-black"
                  >{`Session | ${education.startDate} to ${education.endDate}`}</p>

                  <p className="mt-2 text-sm font-normal text-black">
                    {education.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="avoid-break flex w-full flex-col items-start justify-between gap-3 text-start">
            <h2 className="w-12 border-b-4 border-b-custom-yellow pb-1.5 text-xl font-bold uppercase leading-tight tracking-wider text-black">
              Skills
            </h2>

            <ul className="list-inside list-disc text-sm font-normal text-custom-model1-color">
              {userData.skills.map((skill) => (
                <li key={skill.id}>{skill.skill}</li>
              ))}
            </ul>
          </div>

          <div className="avoid-break flex w-full flex-col items-start justify-between gap-3 text-start">
            <h2 className="w-12 border-b-4 border-b-custom-yellow pb-1.5 text-xl font-bold uppercase leading-tight tracking-wider text-black">
              Languages
            </h2>

            <ul className="list-inside list-disc text-sm font-normal text-custom-model1-color">
              {userData.languages.map((lang) => (
                <li key={lang.id}>
                  {lang.language} - {lang.level}
                </li>
              ))}
            </ul>
          </div>

          <div className="avoid-break flex w-full flex-col items-start justify-between gap-3 text-start">
            <h2 className="w-12 border-b-4 border-b-custom-yellow pb-1.5 text-xl font-bold uppercase leading-tight tracking-wider text-black">
              Interests
            </h2>

            <ul className="list-inside list-disc text-sm font-normal text-custom-model1-color">
              {userData.hobbies.map((hobbie) => (
                <li key={hobbie.id}>{hobbie.hobbie}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-2 flex w-full flex-col items-start justify-start gap-8 text-start">
          <div className="flex flex-col gap-3">
            <h2 className="w-12 border-b-4 border-b-custom-yellow pb-1.5 text-xl font-bold uppercase leading-tight tracking-wider text-black">
              PROFILE
            </h2>

            <div className="flex items-center justify-between gap-6">
              {/* <div className="bg-custom-ultra-yellow h-full w-4"></div> */}

              <div className="text-sm font-normal text-black">
                {userData.summary}
              </div>
            </div>
          </div>

          <div className="avoid-break flex flex-col gap-3">
            <h2
              translate="no"
              className="w-12 border-b-4 border-b-custom-yellow pb-1.5 text-xl font-bold uppercase leading-tight tracking-wider text-black"
            >
              EXPERIENCE
            </h2>

            <div className="avoid-break flex w-full items-center justify-between gap-6">
              <div className="h-full w-0.5 bg-black"></div>

              <div className="flex flex-col gap-4">
                {userData.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="flex flex-col items-start justify-between"
                  >
                    <h3 className="text-lg font-semibold">{exp.company}</h3>

                    <div className="flex w-full items-center justify-start gap-2 text-base font-normal text-black">
                      {exp.jobTitle} |
                      {` From ${exp.startDate} to ${exp.endDate}`}
                    </div>

                    <p className="mt-4 text-sm font-normal text-black">
                      {exp.responsibilities}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="avoid-break flex flex-col gap-3">
            <h2
              translate="no"
              className="w-12 border-b-4 border-b-custom-yellow pb-1.5 text-xl font-bold uppercase leading-tight tracking-wider text-black"
            >
              Certifications
            </h2>

            <div className="avoid-break flex w-full items-center justify-between gap-6">
              <div className="h-full w-0.5 bg-black"></div>

              <div className="flex flex-col gap-4">
                {userData.certifications.map((certif) => (
                  <div
                    key={certif.id}
                    className="flex flex-col items-start justify-between"
                  >
                    <h3 className="text-lg font-semibold">{certif.title}</h3>

                    <div className="flex w-full items-center justify-start gap-2 text-base font-normal text-black">
                      {certif.issuingOrganization} |
                      {` From ${certif.issueDate} to ${certif.expirationDate}`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model2;
