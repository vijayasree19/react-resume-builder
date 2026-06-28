import Header from "../../Header/Header";
import Experience from "../../Experience/Experience";
import Skills from "../../Skills/Skills";
import Education from "../../Education/Education";
import Certificates from "../../Certificates/Certificates";
import Achievements from "../../Achievements/Achievements";

export default function SingleColumnLayout() {

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

            <div className="mt-8 space-y-8">

                <Experience />

                <Skills />

                <Education />

                <Certificates />

                <Achievements />

            </div>

        </div>

    );

}