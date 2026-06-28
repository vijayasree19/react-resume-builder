import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import EducationCard from "./EducationCard";

export default function Education() {

  const [education, setEducation] = useState([
    {
      degree: "B.Tech - Information Technology",
      college: "JNTU Hyderabad",
      year: "2016 - 2020",
    },
  ]);

  function addEducation() {
    setEducation([
      ...education,
      {
        degree: "Degree",
        college: "College",
        year: "Year",
      },
    ]);
  }

  function removeEducation(index) {
    setEducation(education.filter((_, i) => i !== index));
  }

  function updateEducation(index, field, value) {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  }

  return (
    <section className="mt-8">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-bold tracking-wide text-gray-900">
          EDUCATION
        </h2>

        <button
          onClick={addEducation}
          className="hide-download bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center"
        >
          <FaPlus size={10} />
        </button>

      </div>

      {education.map((edu, index) => (
        <EducationCard
          key={index}
          education={edu}
          index={index}
          updateEducation={updateEducation}
          removeEducation={removeEducation}
        />
      ))}

    </section>
  );
}