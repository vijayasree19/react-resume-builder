import { FaTrash } from "react-icons/fa";
import EditableText from "../Common/EditableText";
import useResumeStore from "../../store/resumeStore";

export default function ExperienceCard({
  experience,
  index,
  updateExperience,
  removeExperience,
}) {
  const { theme } = useResumeStore();

  return (
    <div className="relative pl-6 pb-6 border-l-2" style={{ borderColor: theme.primary }}>

      {/* Timeline Dot */}
      <div
        className="absolute -left-[7px] top-2 w-3 h-3 rounded-full"
        style={{ backgroundColor: theme.primary }}
      />

      {/* Delete Button */}
      <button
        onClick={() => removeExperience(index)}
        className="hide-download absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition text-red-500 hover:text-red-700"
      >
        <FaTrash size={13} />
      </button>

      {/* Job Title */}
      <EditableText
        value={experience.title}
        onChange={(value) =>
          updateExperience(index, "title", value)
        }
        className="font-semibold text-[16px] text-gray-900"
      />

      {/* Company */}
      <EditableText
        value={experience.company}
        onChange={(value) =>
          updateExperience(index, "company", value)
        }
        className="text-[13px] font-medium"
        style={{ color: theme.primary }}
      />

      {/* Duration */}
      <EditableText
        value={experience.duration}
        onChange={(value) =>
          updateExperience(index, "duration", value)
        }
        className="text-[11px] text-gray-500 mb-2"
      />

      {/* Responsibilities */}
      <div
        contentEditable
        suppressContentEditableWarning
        className="outline-none text-[12px] leading-5 text-gray-700 hover:bg-blue-50 rounded px-1"
        onBlur={(e) =>
          updateExperience(index, "description", e.target.innerHTML)
        }
        dangerouslySetInnerHTML={{
          __html: experience.description,
        }}
      />
    </div>
  );
}