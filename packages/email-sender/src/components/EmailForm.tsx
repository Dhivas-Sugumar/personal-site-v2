"use client";

import { sendEmail } from "@/email-sender/lib/actions/send-email";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EmailFormData,
  emailFormSchema,
} from "@/email-sender/lib/models/email-form";
import { Button } from "@/design-system/src/button/button";

export const EmailForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }, // Add user facing errors later using errors
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailFormSchema),
  });
  const onSubmit = async (data: EmailFormData) => {
    const result = await sendEmail(data);
    if (result.success) {
      toast(
        "Message sent successfully! Look forward to a response in the near future :)"
      );
      reset();
    } else {
      toast("Failed to send message!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4 border rounded-xl border-accent300 p-4 h-fit"
    >
      <label className="text-accent300">Name</label>
      <input
        className="rounded-ld border-accent300"
        type="text"
        required
        {...register("senderName")}
      />
      <label className="text-accent300">Email</label>
      <input
        className="input"
        type="email"
        required
        {...register("senderEmail")}
      />
      <label className="text-accent300">Subject</label>
      <input className="input" type="text" required {...register("subject")} />
      <label className="text-accent300">Message</label>
      <textarea className="input" required {...register("content")} />
      <Button
        className={`${isSubmitting && "cursor-not-allowed"}`}
        label={isSubmitting ? "Sending" : "Send"}
      />
    </form>
  );
};
