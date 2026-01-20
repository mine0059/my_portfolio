export const RESUME_PATH = "/resume.pdf";

export const viewResume = () => {
  window.open(RESUME_PATH, "_blank", "noopener,noreferrer");
};

export const downloadResume = () => {
  const link = document.createElement("a");
  link.href = RESUME_PATH;
  link.download = "Oghenemine_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
