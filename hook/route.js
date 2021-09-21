import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

export function withPublic(Component) {
	return function WithPublic(props) {
		const { currentUser } = useAuth();
		// const { auth } = useAuth();
		const router = useRouter();

		if (currentUser?.email) {
			router.replace("/");
			return <h1 className="text-lg">Loading...</h1>;
		}
		return <Component auth={currentUser} {...props} />;
	};
}

export function withProtected(Component) {
	return function WithProtected(props) {
		const { currentUser } = useAuth();
		const router = useRouter();

		if (!currentUser?.email) {
			router.replace("/login");
			return <h1 className="text-lg h-32">Loading...</h1>;
		}
		return <Component auth={currentUser} {...props} />;
	};
}
