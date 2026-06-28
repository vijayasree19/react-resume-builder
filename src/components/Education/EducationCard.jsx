import { FaTrash } from "react-icons/fa";

export default function EducationCard({
  education,
  index,
  updateEducation,
  removeEducation,
}) {
  return (
    <div className="relative mb-5 group">

      <button
        onClick={() => removeEducation(index)}
        className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 text-red-500"
      >
        <FaTrash size={12} />
      </button>

      <h3
        contentEditable
        suppressContentEditableWarning
        className="font-semibold text-[14px] outline-none"
        onBlur={(e) =>
          updateEducation(index, "degree", e.target.innerText)
        }
      >
        {education.degree}
      </h3>

      <p
        contentEditable
        suppressContentEditableWarning
        className="text-[12px] text-gray-600 outline-none"
        onBlur={(e) =>
          updateEducation(index, "college", e.target.innerText)
        }
      >
        {education.college}
      </p>

      <p
        contentEditable
        suppressContentEditableWarning
        className="text-[11px] text-gray-500 outline-none"
        onBlur={(e) =>
          updateEducation(index, "year", e.target.innerText)
        }
      >
        {education.year}
      </p>

    </div>
  );
}