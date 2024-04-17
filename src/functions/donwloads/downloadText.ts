type Props = {
  text: string;
  file_name: string;
};

/*
  Download given text as a file
*/
export const downloadText = ({ text, file_name }: Props): void => {
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = file_name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
