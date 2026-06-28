import { useEffect, useRef } from "react";

export default function EditableText({
  value,
  onChange,
  className = "",
  placeholder = "Click to edit",
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && ref.current.innerText !== value) {
      ref.current.innerText = value;
    }
  }, [value]);

  return (
    <div
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      onBlur={(e) => onChange(e.target.innerText)}
      className={`outline-none rounded px-1 hover:bg-blue-50 transition ${className}`}
    >
      {value || placeholder}
    </div>
  );
}