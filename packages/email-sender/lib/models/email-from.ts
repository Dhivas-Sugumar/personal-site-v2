import { z } from "zod";

const emailFormSchema = z.object({
  senderName: z.string(),
  senderEmail: z.string().email(),
  subject: z.string(),
  content: z.string(),
});

type EmailFormData = z.infer<typeof emailFormSchema>;
