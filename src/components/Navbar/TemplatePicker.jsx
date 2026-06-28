import useResumeStore from "../../store/resumeStore";
import { templates } from "../../data/templates";

export default function TemplatePicker({ onClose }) {

  const { layout, setLayout } = useResumeStore();

  return (

    <div className="absolute top-14 right-0 w-[520px] bg-white rounded-2xl shadow-2xl border p-6 z-50">

      <h2 className="text-xl font-bold text-gray-800 mb-5">
        Choose Template
      </h2>

      <div className="grid grid-cols-2 gap-5">

        {templates.map((template) => (

          <div

            key={template.id}

            onClick={() => {

              if (template.disabled) return;

              setLayout(template.id);

              onClose();

            }}

            className={`
              rounded-xl
              border
              p-4
              cursor-pointer
              transition
              hover:shadow-lg
              hover:scale-[1.02]
              ${
                template.disabled
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }
              ${
                layout === template.id
                  ? "border-blue-600"
                  : "border-gray-200"
              }
            `}
          >

            {/* Preview */}

            <div className="bg-gray-100 rounded-lg h-36 flex items-center justify-center mb-4">

              {template.id === "two" && (

                <div className="flex w-24 gap-1">

                  <div className="flex-1 bg-gray-300 h-24 rounded"/>

                  <div className="w-7 bg-gray-400 h-24 rounded"/>

                </div>

              )}

              {template.id === "single" && (

                <div className="bg-gray-300 h-24 w-24 rounded"/>

              )}

              {template.id === "modern" && (

                <span className="text-gray-500">
                  Coming Soon
                </span>

              )}

              {template.id === "executive" && (

                <span className="text-gray-500">
                  Coming Soon
                </span>

              )}

            </div>

            <h3 className="font-semibold">

              {template.name}

            </h3>

            <p className="text-sm text-gray-500 mt-1">

              {template.description}

            </p>

          </div>

        ))}

      </div>

    </div>

  );

}