import { useRef, useState, useEffect } from "react";

export default function ProfilePhoto() {

    const fileInput = useRef();

    const [image, setImage] = useState(
        localStorage.getItem("profilePhoto") || ""
    );

    useEffect(() => {
        if (image) {
            localStorage.setItem("profilePhoto", image);
        }
    }, [image]);

    function choosePhoto() {
        fileInput.current.click();
    }

    function uploadPhoto(e) {

        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (event) {

            setImage(event.target.result);

        };

        reader.readAsDataURL(file);

    }

    return (
        <div
            onClick={choosePhoto}
            className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 cursor-pointer hover:scale-105 transition"
        >

            {image ? (

                <img
                    src={image}
                    className="w-full h-full object-cover"
                />

            ) : (

                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 text-sm text-center px-2">

                    Click to Upload

                </div>

            )}

            <input
                ref={fileInput}
                hidden
                type="file"
                accept="image/*"
                onChange={uploadPhoto}
            />

        </div>
    );

}