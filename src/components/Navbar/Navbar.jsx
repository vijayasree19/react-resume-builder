import { useState } from "react";
import ThemePicker from "./ThemePicker";

export default function Navbar() {

  const [showThemes, setShowThemes] = useState(false);

  return (

    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="font-bold text-2xl">
        Resume Builder
      </h1>

      <div className="flex gap-4 relative">

        <button className="px-5 py-2 rounded-lg border">
          Layout
        </button>

        <button className="px-5 py-2 rounded-lg border">
          Fonts
        </button>

        <button
          className="px-5 py-2 rounded-lg border"
          onClick={() => setShowThemes(!showThemes)}
        >
          Themes
        </button>

        {showThemes && (
          <ThemePicker
            onClose={() => setShowThemes(false)}
          />
        )}

      </div>

    </nav>

  );

}