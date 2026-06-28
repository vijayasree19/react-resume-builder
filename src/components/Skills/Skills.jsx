import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import SkillChip from "./SkillChip";

import useResumeStore from "../../store/resumeStore";
export default function Skills() {
  const { theme } = useResumeStore();
  const [skills, setSkills] = useState([
    "Java",
    "Spring Boot",
    "AWS",
    "Docker",
    "Kafka",
    "PySpark",
    "Terraform",
    "Airflow",
  ]);

  const addSkill = () => {
    setSkills([...skills, "New Skill"]);
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const updateSkill = (index, value) => {
    const updated = [...skills];
    updated[index] = value;
    setSkills(updated);
  };

  return (
    <section className="mb-8">

      <div className="flex items-center justify-between mb-4">

        <h2 className="text-xl font-bold tracking-wide text-gray-900">
          SKILLS
        </h2>

        <button
          onClick={addSkill}
          className="
            hide-download
            w-7
            h-7
            rounded-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            flex
            items-center
            justify-center
            transition
            shadow-sm
        "
        style={{
                   backgroundColor: theme.primary,
                 }}
        >
          <FaPlus size={11} />
        </button>

      </div>

      <div className="flex flex-wrap gap-2">

        {skills.map((skill, index) => (
          <SkillChip
            key={index}
            skill={skill}
            index={index}
            updateSkill={updateSkill}
            removeSkill={removeSkill}
          />
        ))}

      </div>

    </section>
  );
}