import React from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
	return (
		<nav className="mb-6 text-trueGray-700">
			<ol className="flex py-4 text-lg rounded list-reset bg-grey-light text-grey">
				{props.Tab.map((tab) => (
					<li>
						<a href={`${tab.active}`} className={`${tab.active ? "cursor-auto" : 'font-semibold, text-primary-100'}`}>{tab.title}</a>
						{`${!tab.active ? "cursor-auto" : 'font-normal, font-grey-600'}` && <span className="mx-2"></span>}
					</li>
				))}
			</ol>
		</nav>
	)
}

export default Tab

Tab.propTypes = {
	className: PropTypes.string,
};

