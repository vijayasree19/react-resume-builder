import { FaTimes } from "react-icons/fa";

export default function SkillChip({
  skill,
  index,
  updateSkill,
  removeSkill,
}) {
  return (
    <div className="group relative inline-flex items-center">

      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => updateSkill(index, e.target.innerText)}
        className="bg-blue-50 border border-blue-200 rounded-full px-3 py-1 text-[12px] text-gray-700 outline-none hover:bg-blue-100 transition"
      >
        {skill}
      </div>

      <button
        onClick={() => removeSkill(index)}
        className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[8px]
        opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
      >
        <FaTimes size={8} />
      </button>

    </div>
  );
}