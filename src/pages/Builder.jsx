import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Resume from "../components/Resume/Resume";

export default function Builder() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="flex">
        <Sidebar />
        <Resume />
      </div>
    </div>
  );
}