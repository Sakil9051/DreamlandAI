import FileSaver from 'file-saver';

export const getRandomPrompt=async(prompt) =>{
  let  randomPromp =await fetch("http://localhost:8080/prompt");
  let res=await randomPromp.json();
  const randomPrompt =res.prompt;
  prompt=await prompt;

  if (randomPrompt === prompt) return getRandomPrompt(prompt);
  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
