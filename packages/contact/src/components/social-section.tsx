import { EmailForm } from "@/email-sender/src";
import { SocialCardList } from "./SocialCardList";

export const SocialSection = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <h4 className="text-accent300 text-center">
        I'd love to hear from you! Whether you have a question, feedback, or
        just want to chat about coding, user experience, photography-related
        (especially film and Polaroid!), philosophy, or anything else! Feel free
        to reach out. You can drop me a message using the form below, and I'll
        get back to you as soon as I can. Looking forward to connecting with
        you! Or take a look at some of my social media profiles.
      </h4>
      <div className="flex flex-col gap-10 md:grid md:grid-rows-1 md:grid-cols-2 md:gap-8 ">
        <SocialCardList />
        <EmailForm />
      </div>
    </div>
  );
};
