"use client";

import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { useParseEmailFormData } from "../util/parseEmailFormData";

export const EmailForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const parsedFormData = useParseEmailFormData(formData);
      if (parsedFormData === undefined) {
        toast.error("Failed to send email. Please try again later.");
        return;
      }
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parsedFormData,
        }),
      });

      if (response.success === true) {
        toast.success(
          "Email Sent! Look out for a reply in the not so distant future :)"
        );
      } else {
        toast.error("Failed to send email. Please try again later.");
      }
    } catch (error) {
      toast.error("Failed to send email. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-4">
      <input className="input" type="email" placeholder="Your Email" required />
      <input className="input" type="text" placeholder="Subject" required />
      <textarea className="input" placeholder="Message" required />
      <button className={`button-primary ${isLoading && "cursor-not-allowed"}`}>
        Send
      </button>
    </form>
  );
};
