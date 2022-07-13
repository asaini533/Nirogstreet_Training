import Link from "next/link";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

export default function ImageSlides({ className, images, ...props }) {
	const slide = images;
	const delay = props.delay;
	const [index, setIndex] = useState(0);

	const timeoutRef = useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === slide.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	}, [index]);

	const divImage = {
		backgroundImage: "url(" + slide[index] + ")",
	};

	return (
		<div
			className={`flex   justify-center  bg-cover bg-no-repeat  bg-center ${className}`}
			style={divImage}
		>
			<div className="flex self-end">
				<div className="flex  justify-around w-auto h-3 p-1 bg-offBlack bg-opacity-60 rounded-full mb-1">
					{slide.map((_, idx) => (
						<div
							key={idx}
							className={` flex justify-self-center self-center m-0.5 align-middle h-1 cursor-pointer slideshowDot${index === idx
								? " w-1  h-1 bg-white rounded-full"
								: " w-1 h-1 bg-coolGray-400 rounded-full"
								}`}
							onClick={() => {
								setIndex(idx);
							}}
						></div>
					))}
				</div>
			</div>
		</div>
	);
}

ImageSlides.propTypes = {
	images: PropTypes.array,
	className: PropTypes.string,
	delay: PropTypes.number,
};

ImageSlides.defaultProps = {
	className: "h-40 w-full",
};
