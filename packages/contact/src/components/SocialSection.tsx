import { EmailForm } from "@/email-sender/src";
import { SocialCardList } from "./SocialCardList";

export const SocialSection = () => {
  return (
    <>
      <h2 className="text-center">Social</h2>
      <div className="flex flex-row gap-m">
        <SocialCardList />
        <EmailForm      />
      </div>
    </>
  );
};
