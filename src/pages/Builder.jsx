import Navbar from "../components/Navbar/Navbar";
import Resume from "../components/Resume/Resume";

// export default function Builder() {
//   return (
//     <div className="min-h-screen bg-slate-100">
//       <Navbar />
//
//       <div className="flex">
//         <Sidebar />
//         <Resume />
//       </div>
//     </div>
//   );
// }
export default function App() {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <main className="flex justify-center py-8 px-4">

        <Resume />

      </main>

    </div>
  );
}