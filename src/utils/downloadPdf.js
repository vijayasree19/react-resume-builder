import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export async function downloadResumePDF() {
  const resume = document.getElementById("resume");

  if (!resume) {
    alert("Resume element not found.");
    return;
  }

  // Hide edit controls
  const hiddenElements = document.querySelectorAll(".hide-download");

  hiddenElements.forEach((element) => {
    element.style.display = "none";
  });

  try {
    const canvas = await html2canvas(resume, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
      scrollX: 0,
      scrollY: -window.scrollY,
      windowWidth: document.documentElement.scrollWidth,
      windowHeight: document.documentElement.scrollHeight,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = 210;
    const pageHeight = 297;

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // If resume fits on one page
    if (imgHeight <= pageHeight) {
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        imgWidth,
        imgHeight
      );
    } else {
      // Multi-page support
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(
        imgData,
        "PNG",
        0,
        position,
        imgWidth,
        imgHeight
      );

      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;

        pdf.addPage();

        pdf.addImage(
          imgData,
          "PNG",
          0,
          position,
          imgWidth,
          imgHeight
        );

        heightLeft -= pageHeight;
      }
    }

    pdf.save("Resume.pdf");
  } catch (error) {
    console.error(error);
    alert("Failed to generate PDF.");
  } finally {
    // Show controls again
    hiddenElements.forEach((element) => {
      element.style.display = "";
    });
  }
}