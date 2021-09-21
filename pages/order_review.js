import React from "react";
import OrderReviews from "../components/OrderReviews/OrderReviews";
import { withProtected } from "../hook/route";

const order_review = () => {
	return (
		<div>
			<OrderReviews />
		</div>
	);
};

export default withProtected(order_review);
