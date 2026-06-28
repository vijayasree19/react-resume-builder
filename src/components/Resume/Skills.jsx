import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import SkillChip from "./SkillChip";

export default function Skills() {

  const [skills, setSkills] = useState([
    "Java",
    "Spring Boot",
    "AWS",
    "Docker",
  ]);

  function addSkill() {
    setSkills([...skills, "New Skill"]);
  }

  function removeSkill(index) {
    setSkills(skills.filter((_, i) => i !== index));
  }

  function updateSkill(index, value) {
    const updated = [...skills];
    updated[index] = value;
    setSkills(updated);
  }

  return (
    <section className="mb-8">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-[16px] font-bold">
          SKILLS
        </h2>

        <button
          onClick={addSkill}
          className="hide-download w-6 h-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
        >
          <FaPlus size={10} />
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