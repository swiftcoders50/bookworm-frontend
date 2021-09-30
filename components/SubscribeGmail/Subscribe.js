import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterForm from "./NewsletterForm";

const Subscribe = () => {
  // const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
  const MAILCHIMP_URL =
    "https://gmail.us5.list-manage.com/subscribe/post?u=30c263b1b16df1cdc960e389e&amp;id=9a8fa247aa";

  return (
    <div>
      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={(props) => {
          const { subscribe, status, message } = props || {};
          return (
            <NewsletterForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          );
        }}
      />
    </div>
  );
};

export default Subscribe;
