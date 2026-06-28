import useResumeStore from "../../store/resumeStore";
import { themes } from "../../data/themes";

export default function ThemePicker({ onClose }) {

  const { theme, setTheme } = useResumeStore();

  return (

    <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white shadow-2xl border p-4 z-50">

      <h3 className="font-semibold mb-4">
        Choose Theme
      </h3>

      <div className="space-y-2">

        {themes.map((t) => (

          <button
            key={t.name}
            onClick={() => {
              setTheme(t.name, t.color);
              onClose();
            }}
            className="flex items-center gap-3 w-full hover:bg-gray-100 rounded-lg p-2 transition"
          >

            <div
              className="w-5 h-5 rounded-full border"
              style={{
                background: t.color,
              }}
            />

            <span className="flex-1 text-left">
              {t.name}
            </span>

            {theme.name === t.name && "✓"}

          </button>

        ))}

      </div>

    </div>

  );

}