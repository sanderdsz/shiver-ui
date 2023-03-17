import "shiver-design-system/src/css/shiver.css"
export interface ButtonProps {
	color?: 'primary' | 'secondary';
	size?: 'small' | 'medium' | 'large';
	label: string;
	variant?: 'rounded' | 'outline';
	textColor: 'font-light' | 'font-dark';
}

export const Button = (
	{
		color = 'primary',
		size = 'medium',
		label,
		variant,
		textColor = 'font-dark',
		...props
	}: ButtonProps
) => {
	return (
		<button
			type="button"
			className={`${variant} ${color} ${size} ${textColor}`}
			{...props}
		>
			{ label }
		</button>
	)
};



