import PropTypes from 'prop-types';
import Tag from "../atoms/Tag";

const TagList = ({ tags, ...property }) => {
	return (
		<div>
			{tags.map(tag =>
				<Tag className={property.className}>
					{tag}
				</Tag>
			)}
		</div>
	);
};

export default TagList;
TagList.propTypes = {
	tags: PropTypes.array,
}