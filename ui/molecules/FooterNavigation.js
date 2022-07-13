import React from 'react';
import PropTypes from "prop-types";
import LinkButton from '../atoms/LinkButton';
import Span from "../atoms/Span";
import Image from "../atoms/Image";

const FooterCard = (props, href, onClick) => {
	return (
		<div>
			<nav className="">
				<ul className="w-full flex justify-between">
					{props.footerNav.map((footerInput) => (
						<li className="text-center">
							<LinkButton href={href} onClick={onClick} className={`text-xs-625 font-medium hover:text-primary-100 text-center ${footerInput.active ? " text-textgrey" : "text-primary-100"}`}>
								<Image className="h-6 text-xl inline-block" src={footerInput.iconImage} />
								{/* <Icon className="h-6 text-xl" name={footerInput.icon} /> */}
								<Span className="block uppercase mt-1">{footerInput.title}</Span>
							</LinkButton>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default FooterCard;
FooterCard.propTypes = {
	icon: PropTypes.string,
};