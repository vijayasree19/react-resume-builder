import { useState } from "react";
import { FaDownload } from "react-icons/fa";

import ThemePicker from "./ThemePicker";
import useResumeStore from "../../store/resumeStore";
import { downloadResumePDF } from "../../utils/downloadPdf";
import TemplatePicker from "./TemplatePicker";
export default function Navbar() {
  const [showThemes, setShowThemes] = useState(false);
const [showTemplates, setShowTemplates] = useState(false);
  const { layout, setLayout } = useResumeStore();

  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center shadow-md">

      {/* Logo */}
      <h1 className="text-2xl font-bold">
        Resume Builder
      </h1>

      {/* Right Controls */}
      <div className="flex items-center gap-4 relative">

        {/* Layout */}
        <button
            onClick={() => setShowTemplates(!showTemplates)}
            className="px-4 py-2 rounded-lg border border-slate-600 hover:bg-slate-700 transition"
        >

            Templates

        </button>

        {showTemplates && (

            <TemplatePicker
                onClose={() => setShowTemplates(false)}
            />

        )}

        {/* Fonts */}
        <button className="px-4 py-2 rounded-lg border border-slate-600 hover:bg-slate-700 transition">
          Fonts
        </button>

        {/* Themes */}
        <button
          onClick={() => setShowThemes((prev) => !prev)}
          className="px-4 py-2 rounded-lg border border-slate-600 hover:bg-slate-700 transition"
        >
          Themes
        </button>

        {showThemes && (
          <ThemePicker
            onClose={() => setShowThemes(false)}
          />
        )}

        {/* Download */}
        <button
          onClick={downloadResumePDF}
          className="flex items-center gap-2 px-5 py-2 rounded-lg text-white transition"
          style={{
            backgroundColor: "#2563eb",
          }}
        >
          <FaDownload />
          Download PDF
        </button>

      </div>
    </nav>
  );
}