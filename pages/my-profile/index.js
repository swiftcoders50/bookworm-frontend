import MyProfile from "../../components/MyProfile";
import Head from "next/head";

const MyProProfilePage = () => {
	return (
		<div>
			<Head>
				<title>Bookworm | My-Profile</title>
				<meta name="bookworm" content="user profile page" />
			</Head>
			<MyProfile></MyProfile>
		</div>
	);
};

export default MyProProfilePage;
