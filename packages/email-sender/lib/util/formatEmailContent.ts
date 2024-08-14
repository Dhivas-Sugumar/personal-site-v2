export const formatEmailContent = (
  senderName: string,
  senderEmail: string,
  content: string
) => {
  return `Name: ${senderName}\nEmail: ${senderEmail}\n\n${content}`;
};
