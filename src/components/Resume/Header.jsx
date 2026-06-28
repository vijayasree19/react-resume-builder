import ProfilePhoto from "./ProfilePhoto";
export default function Header() {

    return (

        <div className="flex justify-between border-b pb-8">

            <div className="flex-1 pr-8">

                <h1
                    contentEditable
                    suppressContentEditableWarning
                    className="text-5xl font-bold outline-none"
                >
                    Vijaya Sree
                </h1>

                <h3
                    contentEditable
                    suppressContentEditableWarning
                    className="text-blue-600 text-xl mt-2 outline-none"
                >
                    Senior Software Engineer
                </h3>

                <p
                    contentEditable
                    suppressContentEditableWarning
                    className="mt-4 text-gray-600 outline-none"
                >
                    Software Engineer with 5+ years of experience building scalable cloud applications.
                </p>

            </div>

            <div className="flex flex-col items-center">

                <ProfilePhoto />

            </div>

        </div>

    );

}