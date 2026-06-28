import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

import useResumeStore from "../../store/resumeStore";
import EditableText from "../Common/EditableText";
import ProfilePhoto from "../Profile/ProfilePhoto";

export default function Header() {
  const { personal, updatePersonal, theme } = useResumeStore();

  return (
    <header className="border-b border-gray-300 pb-5">

      <div className="grid grid-cols-[1.6fr_160px_1fr] gap-6 items-start">

        {/* LEFT */}

        <div>

          <EditableText
            value={personal.name}
            onChange={(v) => updatePersonal("name", v)}
            className="text-[44px] font-bold leading-tight text-gray-900"
          />

          <EditableText
            value={personal.title}
            onChange={(v) => updatePersonal("title", v)}
            className="text-[22px] font-semibold mt-2"
            style={{ color: theme.primary }}
          />

          <EditableText
            value={personal.summary}
            multiline
            onChange={(v) => updatePersonal("summary", v)}
            className="text-[15px] text-gray-700 mt-4 leading-7"
          />

        </div>

        {/* PHOTO */}

        <div className="flex justify-center">

          <ProfilePhoto />

        </div>

        {/* CONTACT */}

        <div className="pt-2 space-y-4">

          <ContactRow
            icon={<FaEnvelope />}
            value={personal.email}
            field="email"
          />

          <ContactRow
            icon={<FaPhone />}
            value={personal.phone}
            field="phone"
          />

          <ContactRow
            icon={<FaGithub />}
            value={personal.github}
            field="github"
          />

          <ContactRow
            icon={<FaLinkedin />}
            value={personal.linkedin || "linkedin.com/in/vijayasree"}
            field="linkedin"
          />

          <ContactRow
            icon={<FaMapMarkerAlt />}
            value={personal.location}
            field="location"
          />

        </div>

      </div>

    </header>
  );

  function ContactRow({ icon, value, field }) {
    return (
      <div className="flex items-center gap-3">

        <span
          style={{ color: theme.primary }}
          className="text-lg shrink-0"
        >
          {icon}
        </span>

        <EditableText
          value={value}
          onChange={(v) => updatePersonal(field, v)}
          className="text-[14px] text-gray-700"
        />

      </div>
    );
  }
}