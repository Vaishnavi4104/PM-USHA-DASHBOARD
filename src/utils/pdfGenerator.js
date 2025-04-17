import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generatePDF = async (chartRefs, filename) => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const margin = 20;
  let currentY = margin;

  // Add title
  pdf.setFontSize(20);
  pdf.text('Financial Reports', margin, currentY);
  currentY += 15;

  // Convert each chart to image and add to PDF
  for (const [name, ref] of Object.entries(chartRefs)) {
    if (ref) {
      const canvas = await html2canvas(ref);
      const imgData = canvas.toDataURL('image/png');
      
      // Add chart title
      pdf.setFontSize(14);
      pdf.text(name.replace(/([A-Z])/g, ' $1').trim(), margin, currentY);
      currentY += 10;

      // Add chart image
      const imgWidth = 170;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', margin, currentY, imgWidth, imgHeight);
      currentY += imgHeight + 20;

      // Add new page if needed
      if (currentY > 250) {
        pdf.addPage();
        currentY = margin;
      }
    }
  }

  pdf.save(`${filename}.pdf`);
};