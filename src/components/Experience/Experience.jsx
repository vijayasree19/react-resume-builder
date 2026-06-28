import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ExperienceCard from "./ExperienceCard";
import useResumeStore from "../../store/resumeStore";

export default function Experience() {
  const { theme } = useResumeStore();

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

  function addExperience() {
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
  }

  function removeExperience(index) {
    setExperiences(experiences.filter((_, i) => i !== index));
  }

  function updateExperience(index, field, value) {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
  }

  return (
    <section className="mb-8">

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-xl font-bold tracking-wide text-gray-900">
          WORK EXPERIENCE
        </h2>

        <button
          onClick={addExperience}
          className="hide-download w-7 h-7 rounded-full flex items-center justify-center text-white shadow-sm transition"
          style={{
            backgroundColor: theme.primary,
          }}
        >
          <FaPlus size={11} />
        </button>

      </div>

      <div className="space-y-5">

        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
            index={index}
            updateExperience={updateExperience}
            removeExperience={removeExperience}
          />
        ))}

      </div>

    </section>
  );
}