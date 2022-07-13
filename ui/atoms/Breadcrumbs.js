import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../atoms/Icon";

const Breadcrumbs = (props,footerInput, ...property) => {
	return (
		<nav className="mb-6 text-trueGray-700">
			<ul className="flex">
				{props.breadcrumbs.map((breadcrumb, i) => (
					<li key={i} className="flex items-center justify-center">
						<a href={`${breadcrumb.active ? "#" : breadcrumb.url}`} className={`${breadcrumb.active ? "cursor-auto text-xs font-semibold text-offBlackColor " : 'text-textgrey font-medium text-xs'} ${property.className}`}>{breadcrumb.title}</a>
						{!breadcrumb.active && <Icon name={"chevron-right"} className={`${property.iconClassName} mx-1 inline-block text-1.5 w-4 text-textgrey `} />}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Breadcrumbs;

Breadcrumbs.propTypes = {
	className: PropTypes.string,
	children: PropTypes.string,
};