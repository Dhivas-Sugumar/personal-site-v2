export type ParsedEmailFormData = {
  senderName: string;
  senderEmail: string;
  subject: string;
  content: string;
};

export const useParseEmailFormData = (
  emailFormData: FormData
): ParsedEmailFormData | undefined => {
  const senderName = String(emailFormData.get("senderName"));
  const senderEmail = String(emailFormData.get("senderEmail"));
  const subject = String(emailFormData.get("subject"));
  const content = String(emailFormData.get("content"));

  // String(null) -> "null"
  if (
    senderName === "null" ||
    senderEmail === "null" ||
    subject === "null" ||
    content === "null"
  ) {
    return undefined;
  }
  return { senderName, senderEmail, subject, content };
};
