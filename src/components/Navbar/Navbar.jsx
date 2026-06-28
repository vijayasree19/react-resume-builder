import { FaDownload } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="h-16 bg-white shadow-sm border-b flex items-center justify-between px-8">

      <h1 className="text-2xl font-bold text-blue-700">
        Resume Builder
      </h1>

      <div className="flex gap-4">

        <button className="px-4 py-2 rounded-lg hover:bg-gray-100">
          Layout
        </button>

        <button className="px-4 py-2 rounded-lg hover:bg-gray-100">
          Fonts
        </button>

        <button className="px-4 py-2 rounded-lg hover:bg-gray-100">
          Themes
        </button>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
          <FaDownload />
          Download PDF
        </button>

      </div>

    </nav>
  );
}