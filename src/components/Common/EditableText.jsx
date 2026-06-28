import { useState, useEffect } from "react";

export default function EditableText({
  value,
  onChange,
  className = "",
  placeholder = "Click to edit",
}) {
  const [text, setText] = useState(value);

  useEffect(() => {
    setText(value);
  }, [value]);

  function handleBlur(e) {
    const newValue = e.target.innerText.trim();

    setText(newValue);

    onChange(newValue);
  }

  return (
    <div
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      className={`outline-none rounded px-1 hover:bg-blue-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition ${className}`}
    >
      {text || placeholder}
    </div>
  );
}