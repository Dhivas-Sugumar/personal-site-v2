import { SocialCard } from "./SocialCard";

export const SocialSection = () => {
  return (
    <div className="flex flex-col gap-m">
      <h2 className="text-center">Social</h2>
      <div className="flex flex-col gap-s">
        <SocialCard
          name="GitHub"
          iconVariant="github"
          iconAlt="GitHub"
          username="Dhivas-Sugumar"
          link="www.github.com"
        />
      </div>
    </div>
  );
};
