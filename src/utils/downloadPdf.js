import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export async function downloadResumePDF() {

  const resume = document.getElementById("resume");

  if (!resume) return;

  // Hide + buttons
  const hiddenElements = document.querySelectorAll(".hide-download");

  hiddenElements.forEach(el => {
    el.style.display = "none";
  });

  // ⭐ Disable editing before taking screenshot
  const editableElements = document.querySelectorAll('[contenteditable="true"]');

  editableElements.forEach(el => {
    el.contentEditable = "false";
  });

  try {

    const canvas = await html2canvas(resume, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#fff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const width = 210;
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);

    pdf.save("Resume.pdf");

  } finally {

    // ⭐ Enable editing again
    editableElements.forEach(el => {
      el.contentEditable = "true";
    });

    hiddenElements.forEach(el => {
      el.style.display = "";
    });

  }
}