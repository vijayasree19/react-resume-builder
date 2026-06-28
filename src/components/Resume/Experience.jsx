import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {

  const [experiences, setExperiences] = useState([
    {
      title: "Senior Software Engineer",
      company: "JP Morgan Chase",
      duration: "Jan 2022 - Present",
      description: `
        <ul class="list-disc ml-5">
          <li>Built scalable AWS Data Pipelines.</li>
          <li>Designed reusable PySpark Framework.</li>
          <li>Improved deployment using CI/CD.</li>
        </ul>
      `,
    },
  ]);

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        title: "Job Title",
        company: "Company Name",
        duration: "Start - End",
        description: `
          <ul class="list-disc ml-5">
            <li>Describe your work here...</li>
          </ul>
        `,
      },
    ]);
  };

  const removeExperience = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const updateExperience = (index, field, value) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
  };

  return (
    <section className="mb-8">

      {/* Heading */}

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-[18px] font-bold tracking-wide border-b pb-2 flex-1">
          WORK EXPERIENCE
        </h2>

        <button
          onClick={addExperience}
          className="ml-3 w-7 h-7 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition"
        >
          <FaPlus size={11} />
        </button>

      </div>

      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          experience={exp}
          index={index}
          updateExperience={updateExperience}
          removeExperience={removeExperience}
        />
      ))}

    </section>
  );
}