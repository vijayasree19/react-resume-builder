import {
    FaEnvelope,
    FaPhone,
    FaGithub,
    FaMapMarkerAlt
} from "react-icons/fa";

import EditableText from "../Common/EditableText";
import ProfilePhoto from "./ProfilePhoto";

import useResumeStore from "../../store/resumeStore";

export default function Header() {

    const { personal, updatePersonal } = useResumeStore();

    return (

        <div className="flex justify-between items-start border-b border-gray-300 pb-8">

            {/* Left */}

            <div className="flex-1 pr-10">

                <EditableText
                    value={personal.name}
                    onChange={(v) => updatePersonal("name", v)}
                    className="text-5xl font-bold text-gray-800"
                />

                <EditableText
                    value={personal.title}
                    onChange={(v) => updatePersonal("title", v)}
                    className="text-xl text-blue-600 mt-2 font-medium"
                />

                <EditableText
                    value={personal.summary}
                    onChange={(v) => updatePersonal("summary", v)}
                    className="mt-5 text-sm leading-6 text-gray-600"
                />

            </div>

            {/* Right */}

            <div className="w-56 flex flex-col items-center">

                <ProfilePhoto />

                <div className="mt-5 w-full space-y-3 text-sm">

                    <div className="flex items-center gap-2">

                        <FaEnvelope className="text-blue-600" />

                        <EditableText
                            value={personal.email}
                            onChange={(v) => updatePersonal("email", v)}
                            className="text-sm"
                        />

                    </div>

                    <div className="flex items-center gap-2">

                        <FaPhone className="text-blue-600" />

                        <EditableText
                            value={personal.phone}
                            onChange={(v) => updatePersonal("phone", v)}
                            className="text-sm"
                        />

                    </div>

                    <div className="flex items-center gap-2">

                        <FaGithub className="text-blue-600" />

                        <EditableText
                            value={personal.github}
                            onChange={(v) => updatePersonal("github", v)}
                            className="text-sm"
                        />

                    </div>

                    <div className="flex items-center gap-2">

                        <FaMapMarkerAlt className="text-blue-600" />

                        <EditableText
                            value={personal.location}
                            onChange={(v) => updatePersonal("location", v)}
                            className="text-sm"
                        />

                    </div>

                </div>

            </div>

        </div>

    );

}