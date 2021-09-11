import OrderReview from "./OrderReview/OrderReview";

const OrderReviews = () => {
    const fBooks = [
        {
          id: 1,
          name: "Origin",
          author: "Dan Brown",
          price: 99,
          img: "/assets/book-images/origin.jpg",
          quantity: 2
        },
        {
          id: 2,
          name: "The Subtle Art of Not Givig A F*ck",
          author: "Marijn Haverbake",
          price: 70,
          img: "/assets/book-images/subtleArt.jpg",
          quantity: 1
        },
    
        {
          id: 4,
          name: "The Da Vinci Code",
          author: "Dan Brown",
          price: 80,
          img: "/assets/book-images/vinci.jpg",
          quantity: 5
        },
        {
          id: 5,
          name: "Half Girlfriend",
          author: "Chetan Bhagat",
          price: 50,
          img: "/assets/book-images/hgf.jpg",
          quantity: 1
        },
      ];
    return (
        <div>
            <div className="grid grid-cols-6 gap-4">
                <h5>Product Image</h5>
                <h5>Details</h5>
                <h5>Quantity</h5>
                <h5>Remove</h5>
                <h5>Price</h5>
                <h5>Total Price</h5>
            </div>

            {
              fBooks.map(product => (<OrderReview key={product} product={product}></OrderReview>))
            }
        </div>
    );
};

export default OrderReviews;