import { FaTrash } from "react-icons/fa";

export default function ExperienceCard({
  experience,
  index,
  updateExperience,
  removeExperience,
}) {
  return (
    <div className="relative border-l-2 border-blue-500 pl-5 mb-6 group">

      {/* Remove Button */}
      <button
        onClick={() => removeExperience(index)}
        className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition text-red-500 hover:text-red-700"
      >
        <FaTrash size={14} />
      </button>

      {/* Job Title */}
      <h3
        contentEditable
        suppressContentEditableWarning
        className="font-semibold text-[16px] outline-none"
        onBlur={(e) =>
          updateExperience(index, "title", e.target.innerText)
        }
      >
        {experience.title}
      </h3>

      {/* Company */}
      <p
        contentEditable
        suppressContentEditableWarning
        className="text-blue-600 text-[13px] font-medium outline-none"
        onBlur={(e) =>
          updateExperience(index, "company", e.target.innerText)
        }
      >
        {experience.company}
      </p>

      {/* Duration */}
      <p
        contentEditable
        suppressContentEditableWarning
        className="text-gray-500 text-[11px] mb-2 outline-none"
        onBlur={(e) =>
          updateExperience(index, "duration", e.target.innerText)
        }
      >
        {experience.duration}
      </p>

      {/* Responsibilities */}
      <div
        contentEditable
        suppressContentEditableWarning
        className="text-[12px] leading-5 outline-none"
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