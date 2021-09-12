import Signup from "../../components/Signup";
import Head from "next/head";

const SignupPage = () => {
	return (
		<div>
			<Head>
				<title>Bookworm | signup</title>
				<meta name="bookworm" content="bookworm signup page" />
			</Head>
			<Signup />
		</div>
	);
};

export default SignupPage;
