import {
  FaImage,
  FaBriefcase,
  FaGraduationCap,
  FaTools,
  FaCertificate,
  FaTrophy,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-[calc(100vh-64px)] p-6">

      <h2 className="font-semibold text-gray-700 mb-6">
        Resume Sections
      </h2>

      <div className="space-y-4">

        <SidebarItem icon={<FaImage />} text="Profile Photo" />

        <SidebarItem icon={<FaBriefcase />} text="Experience" />

        <SidebarItem icon={<FaGraduationCap />} text="Education" />

        <SidebarItem icon={<FaTools />} text="Skills" />

        <SidebarItem icon={<FaCertificate />} text="Certificates" />

        <SidebarItem icon={<FaTrophy />} text="Achievements" />

      </div>

    </aside>
  );
}

function SidebarItem({ icon, text }) {
  return (
    <button className="flex items-center gap-3 w-full hover:bg-blue-50 rounded-lg p-3 transition">

      <div className="text-blue-600">{icon}</div>

      <span>{text}</span>

    </button>
  );
}