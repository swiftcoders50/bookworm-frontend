import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ScrolledTop from "../components/ScrolledTop/ScrolledTop";
import LiveChat from "./LiveChat/LiveChat";

const Footer = () => {
	return (
		<footer>
			<div className="px-3 sm:px-4 md:px-16 pt-10 pb-4 bg-gray-50 shadow border border-gray-300">
				<div className="mx-w-7xl mx-auto relative">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:place-items-center mb-4">
						<div>
							<img src="./logo.svg" alt="bookworm logo" />
							<p className="mt-3 text-gray-700">
								Bookworm is an online library which helps book lovers connect
								with their favorite books without any kind of hassle.
							</p>
						</div>

						<div>
							<h4 className="text-xl font-semibold text-gray-800">
								Contact Info:
							</h4>
							<div className="mt-3">
								<div className="flex items-center text-gray-700 gap-3">
									<FontAwesomeIcon icon={faMapMarkerAlt} />
									<span>Dhaka, Bangladesh.</span>
								</div>

								<div className="flex items-center text-gray-700 gap-3">
									<FontAwesomeIcon icon={faEnvelope} />
									<span>swiftcoders50@gmail.com</span>
								</div>
							</div>
						</div>

						{/* Pay with option */}
						<div className="lg:mt-7">
							<h4 className="text-xl font-semibold text-gray-800">Pay with</h4>
							<div className="mt-3">
								<img
									className="rounded-md shadow"
									src="./assets/paywith.svg"
									alt="paywith"
								/>
							</div>
						</div>
					</div>

					{/* jahid */}
					<ScrolledTop className="absolute right-4 bottom-4" />
					<hr className="mt-2 border-gray-300" />
					<div className="my-2 text-center">
						<p className="text-gray-800">
							<b>&copy; 2021 | Swift Coders</b>
						</p>
					</div>
				</div>
			</div>
			<LiveChat />
		</footer>
	);
};

export default Footer;
