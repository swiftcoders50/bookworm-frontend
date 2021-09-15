import Head from "next/head";
import PasswordReset from "../../components/PasswordReset";

const PasswordResetPage = () => {
	return (
		<div>
			<Head>
				<title>Bookworm | password reset</title>
				<meta name="bookworm" content="bookworm signup page" />
			</Head>
			<PasswordReset />
		</div>
	);
};

export default PasswordResetPage;
