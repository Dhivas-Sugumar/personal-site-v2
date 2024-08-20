import { EmailForm } from "@/email-sender/src";
import { SocialCardList } from "./SocialCardList";

export const SocialSection = () => {
  return (
    <>
      <div className="grid grid-rows-1 grid-cols-2 gap-8">
        <SocialCardList />
        <EmailForm />
      </div>
    </>
  );
};
