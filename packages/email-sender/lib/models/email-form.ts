import { z } from "zod";

const emailFormSchema = z.object({
  senderName: z.string().min(1, { message: "Please enter your name." }),
  senderEmail: z
    .string()
    .email({ message: "Please enter a valid email." })
    .min(1, { message: "Please enter your email." }),
  subject: z.string().min(5, {
    message: "Please enter a subject that is at least 5 characters long.",
  }),
  content: z
    .string()
    .min(1, { message: "Please enter Some content to your body." }),
});

export type EmailFormData = z.infer<typeof emailFormSchema>;
