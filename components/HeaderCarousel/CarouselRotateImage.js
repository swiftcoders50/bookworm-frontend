// react-spring motion
import { useSpring, animated } from "react-spring";

const CarouselRotateImage = ({ image }) => {
	const styles = useSpring({
		loop: { reverse: true },
		from: { rotateZ: -5 },
		to: { rotateZ: 5 },
		config: { duration: 3000 },
	});

	return (
		<animated.div
			style={{
				...styles,
			}}
		>
			<img
				className="w-full h-full md:pt-5 pt-0"
				src={image}
				alt="banner carouse image"
			/>
		</animated.div>
	);
};

export default CarouselRotateImage;
