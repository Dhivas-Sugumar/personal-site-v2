import { EmailForm } from "@/email-sender/src";
import { SocialCardList } from "./SocialCardList";

export const SocialSection = () => {
  return (
    <>
      <div className="flex flex-col gap-10 md:grid md:grid-rows-1 md:grid-cols-2 md:gap-8 ">
        <SocialCardList />
        <EmailForm />
      </div>
    </>
  );
};
