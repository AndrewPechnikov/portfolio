import ref from "./../image/svg_sprite.svg";

function svgIcon({ iconName, className, width, height }) {
	return (
		<li className={className}>
			<svg fill="black" width={width} height={height}>
				<use href={`${ref}#icon-${iconName}`}></use>
			</svg>
		</li>
	);
}

export default svgIcon;
