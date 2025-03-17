import * as html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

/**
 * Télécharge le contenu d'un élément HTML en PDF en conservant ses dimensions réelles.
 * @param {string} elementId - ID de l'élément HTML à convertir en PDF.
 * @param {string} fileName - Nom du fichier PDF à générer.
 */

const html2canvasFunc = html2canvas as unknown as (
  element: HTMLElement,
  options?: any,
) => Promise<HTMLCanvasElement>;

export const downloadPdf = async (elementId: string, fileName: string) => {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error(`Element with id "${elementId}" not found.`);
    return;
  }

  try {
    // Capture du contenu en canvas avec une haute résolution
    const canvas = await html2canvasFunc(element, {
      scale: 3,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    // Récupération des dimensions réelles du modèle HTML
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    // Création du PDF avec les dimensions exactes du modèle
    const pdf = new jsPDF({
      orientation: imgWidth > imgHeight ? "l" : "p", // Paysage ou portrait selon la taille
      unit: "px",
      format: [imgWidth, imgHeight], // Format identique au modèle
    });

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

    // Téléchargement du PDF
    pdf.save(`${fileName}.pdf`);
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};
