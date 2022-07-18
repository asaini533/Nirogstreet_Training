import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from './LinkButton';


const MainMenu = ({ className = "flex", ...props }) => {
	return (
		<nav>
			<ul className={className}>
				{props.MainMenu.map((mainmenu, index) => (
					<li className={`relative ${index ? "ml-8" : ""}`}>
						<LinkButton href={mainmenu.active ? "#" : mainmenu.link} className={`font-semibold text-sm leading-5 hover:text-primary-100  ${mainmenu.active ? 'text-primary-100' : "text-offBlackColor"}`} >{mainmenu.title}</LinkButton>
						<span className={`${mainmenu.active ? "flex" : "hidden"} bg-primary-100 absolute rounded-full inline-block w-full h-1 left-0 -bottom-1`}></span>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default MainMenu

MainMenu.propTypes = {
	className: PropTypes.string,
};

