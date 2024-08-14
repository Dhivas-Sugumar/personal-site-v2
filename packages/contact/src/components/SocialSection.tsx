import { EmailForm } from "@/email-sender/src";
import { SocialCardList } from "./SocialCardList";

export const SocialSection = () => {
  return (
    <div className="flex flex-col gap-m">
      <h2 className="text-center">Social</h2>
      <SocialCardList />
      <EmailForm />
    </div>
  );
};
