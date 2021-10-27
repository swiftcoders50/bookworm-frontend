import { useRouter } from "next/router";
import { useAdmin } from "../contexts/AdminContext";
import { useAuth } from "../contexts/AuthContext";

export function dashboardWithProtected(Component) {
	return function WithProtected(props) {
		const { admin } = useAdmin();
		const router = useRouter();

		if (!admin.isAdmin) {
			router.replace("/");
			return <h1 className="text-lg h-32">Loading...</h1>;
		}
		return <Component admin={admin.isAdmin} {...props} />;
	};
}
