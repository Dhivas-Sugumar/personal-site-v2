"use client";

import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { useParseEmailFormData } from "../hooks/useParseEmailFormData";

export const EmailForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    console.log("Sending email...");
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
        body: JSON.stringify(parsedFormData),
      });
      const data = await response.json();

      if (data.success === true) {
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
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="w-full p-2 border rounded h-32"
      ></textarea>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full p-2 bg-neutral100"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};
