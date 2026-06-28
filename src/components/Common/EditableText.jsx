import { useEffect, useRef } from "react";

export default function EditableText({
  value,
  onChange,
  className = "",
  placeholder = "Click to edit",
  multiline = false,
  style = {},
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
      onKeyDown={(e) => {
        if (!multiline && e.key === "Enter") {
          e.preventDefault();
          e.currentTarget.blur();
        }
      }}
      style={{
        ...style,
        whiteSpace: multiline ? "pre-wrap" : "normal",
        wordBreak: "break-word",
      }}
      className={`outline-none rounded px-1 hover:bg-blue-50 transition ${className}`}
    >
      {value || placeholder}
    </div>
  );
}