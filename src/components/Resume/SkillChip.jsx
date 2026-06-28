import { FaTimes } from "react-icons/fa";
import EditableText from "../Common/EditableText";

export default function SkillChip({
  skill,
  index,
  updateSkill,
  removeSkill,
}) {
  return (
    <div
      className="
       group
       relative
       flex
       items-center
       justify-center
       min-w-[90px]
       px-3
       py-1.5
       rounded-lg
       bg-blue-50
       border
       border-blue-100
       hover:border-blue-300
       transition-all
      "
    >

      <EditableText
        value={skill}
        onChange={(value) => updateSkill(index, value)}
        className="text-sm font-medium text-blue-700"
      />

      <button
        onClick={() => removeSkill(index)}
        className="
          hide-download
          absolute
          -top-2
          -right-2
          hidden
          group-hover:flex
          w-4
          h-4
          rounded-full
          bg-red-500
          text-white
          items-center
          justify-center
        "
      >
        <FaTimes size={8} />
      </button>

    </div>
  );
}