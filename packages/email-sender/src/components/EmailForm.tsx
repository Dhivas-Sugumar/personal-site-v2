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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <input
        className="input"
        type="text"
        placeholder="Your Name"
        required
        {...register("senderName")}
      />
      <input
        className="input"
        type="email"
        placeholder="Your Email"
        required
        {...register("senderEmail")}
      />
      <input
        className="input"
        type="text"
        placeholder="Subject"
        required
        {...register("subject")}
      />
      <textarea
        className="input"
        placeholder="Message"
        required
        {...register("content")}
      />
      <Button
        className={`${isSubmitting && "cursor-not-allowed"}`}
        label={isSubmitting ? "Sending" : "Send"}
      />
    </form>
  );
};
