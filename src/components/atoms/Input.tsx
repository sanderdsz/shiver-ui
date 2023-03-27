import 'shiver-design-system/src/css/shiver.css';

export interface InputProps {
	placeholder: string
}

export const Input = ({ placeholder, ...props }: InputProps) => {
	return (
		<input type='text' placeholder={placeholder} {...props}/>
	)
}