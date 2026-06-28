import { FaTimes } from "react-icons/fa";
import EditableText from "../Common/EditableText";
import useResumeStore from "../../store/resumeStore";

export default function SkillChip({
  skill,
  index,
  updateSkill,
  removeSkill,
}) {

  const { theme } = useResumeStore();

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
        border
        transition-all
      "
      style={{
        backgroundColor: `${theme.primary}15`,
        borderColor: `${theme.primary}30`,
      }}
    >

      <EditableText
        value={skill}
        onChange={(value) => updateSkill(index, value)}
        align="center"
        className="text-sm font-medium"
        style={{
          color: theme.primary,
        }}
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