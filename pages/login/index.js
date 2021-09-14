import Login from "../../components/Login";
import Head from "next/head";

const LoginPage = () => {
	return (
		<div>
			<Head>
				<title>Bookworm | Login</title>
				<meta name="bookworm" content="bookworm signup page" />
			</Head>
			<Login />
		</div>
	);
};

export default LoginPage;
