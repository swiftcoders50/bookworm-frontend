import React from "react";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

const LiveChat = (props) => {
	(function (d, m) {
		var kommunicateSettings = {
			appId: "3ba32a03798c628e031d460fa61517dd3",
			popupWidget: true,
			automaticChatOpenOnNavigation: true,
		};
		var s = document.createElement("script");
		s.type = "text/javascript";
		s.async = true;
		s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
		var h = document.getElementsByTagName("head")[0];
		h.appendChild(s);
		window.kommunicate = m;
		m._globals = kommunicateSettings;
	})(document, window.kommunicate || {});
	return <div></div>;
};

export default LiveChat;
