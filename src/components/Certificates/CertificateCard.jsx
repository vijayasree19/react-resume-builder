import { FaTrash } from "react-icons/fa";

export default function CertificateCard({
  certificate,
  index,
  updateCertificate,
  removeCertificate,
}) {
  return (
    <div className="relative mb-4 group">

      {/* Delete Button */}
      <button
        onClick={() => removeCertificate(index)}
        className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700"
      >
        <FaTrash size={12} />
      </button>

      {/* Certificate Name */}
      <h3
        contentEditable
        suppressContentEditableWarning
        className="font-medium text-[13px] outline-none"
        onBlur={(e) =>
          updateCertificate(index, "name", e.target.innerText)
        }
      >
        {certificate.name}
      </h3>

      {/* Organization */}
      <p
        contentEditable
        suppressContentEditableWarning
        className="text-[11px] text-gray-600 outline-none"
        onBlur={(e) =>
          updateCertificate(index, "organization", e.target.innerText)
        }
      >
        {certificate.organization}
      </p>

      {/* Year */}
      <p
        contentEditable
        suppressContentEditableWarning
        className="text-[11px] text-gray-500 outline-none"
        onBlur={(e) =>
          updateCertificate(index, "year", e.target.innerText)
        }
      >
        {certificate.year}
      </p>

    </div>
  );
}