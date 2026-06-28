import { useRef } from "react";
import useResumeStore from "../../store/resumeStore";

export default function ProfilePhoto() {

  const fileInput = useRef();

  const { personal, updatePersonal, theme } = useResumeStore();

  function choosePhoto() {
    fileInput.current.click();
  }

  function uploadPhoto(e) {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {

      updatePersonal("photo", event.target.result);

    };

    reader.readAsDataURL(file);

  }

  return (

    <>

      <div

        onClick={choosePhoto}

        className="w-32 h-32 rounded-full overflow-hidden cursor-pointer shadow-lg"

        style={{
          border: `4px solid ${theme.primary}`,
        }}

      >

        {personal.photo ? (

          <img
            src={personal.photo}
            className="w-full h-full object-cover"
          />

        ) : (

          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-sm">

            Upload

          </div>

        )}

      </div>

      <input
        hidden
        ref={fileInput}
        type="file"
        accept="image/*"
        onChange={uploadPhoto}
      />

    </>

  );

}