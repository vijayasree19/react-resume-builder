import { create } from "zustand";

const useResumeStore = create((set) => ({
  personal: {
    name: "Vijaya Sree",
    title: "Senior Software Engineer",
    summary:
      "Experienced software engineer with 5+ years of expertise in Java, Spring Boot, AWS, and scalable cloud applications.",
    email: "vijaya@gmail.com",
    phone: "+91 9876543210",
    github: "github.com/vijayasree19",
    location: "Hyderabad, India",
    photo: "",
  },

  updatePersonal: (field, value) =>
    set((state) => ({
      personal: {
        ...state.personal,
        [field]: value,
      },
    })),
}));

export default useResumeStore;