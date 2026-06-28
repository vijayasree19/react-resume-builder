import Header from "./Header";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import Certificates from "./Certificates";
import Achievements from "./Achievements";

export default function Resume() {
  return (
    <div className="flex-1 flex justify-center p-8 overflow-auto">
      <div   id="resume" className="bg-white w-[794px] min-h-[1123px] shadow-xl rounded-xl p-10">

        {/* Header */}
        <Header />

        {/* Resume Body */}
        <div className="grid grid-cols-3 gap-8 mt-8">

          {/* Left Column */}
          <div className="col-span-2">
            <Experience />
          </div>

          {/* Right Column */}
          <div>
            <Skills />
            <Education />
            <Certificates />
            <Achievements />
          </div>

        </div>

      </div>
    </div>
  );
}