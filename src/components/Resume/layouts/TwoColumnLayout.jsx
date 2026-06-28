import Header from "../../Header/Header";
import Experience from "../../Experience/Experience";
import Skills from "../../Skills/Skills";
import Education from "../../Education/Education";
import Certificates from "../../Certificates/Certificates";
import Achievements from "../../Achievements/Achievements";

export default function TwoColumnLayout() {

    return (

        <div
            id="resume"
            className="
                bg-white
                w-[794px]
                min-h-[1123px]
                rounded-xl
                shadow-2xl
                p-10
            "
        >

            <Header />

            <div className="grid grid-cols-3 gap-8 mt-8">

                <div className="col-span-2">

                    <Experience />

                </div>

                <div>

                    <Skills />

                    <Education />

                    <Certificates />

                    <Achievements />

                </div>

            </div>

        </div>

    );

}