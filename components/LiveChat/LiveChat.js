import React from "react";
// import ReactDOM from "react-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";

const LiveChat = () => {
  return (
    <div>
      {/* ReactDOM.render( */}
      <MessengerCustomerChat
        pageId="100961108288258"
        appId="155546436606054"
        // htmlRef="<REF_STRING>"
      />
      {/* , document.getElementById("demo") ); */}
    </div>
  );
};

export default LiveChat;
