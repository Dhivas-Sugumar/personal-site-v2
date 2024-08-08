export const EmailForm: React.FC = () => {
  return (
    <form className="flex flex-col space-y-4">
      <input className="input" type="email" placeholder="Your Email" required />
      <input className="input" type="text" placeholder="Subject" required />
      <textarea className="input" placeholder="Message" required />
      <button className="button-primary">Send</button>
    </form>
  );
};
