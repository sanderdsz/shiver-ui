import 'shiver-design-system';

export interface InputProps {
  placeholder: string;
}

export const Input = ({placeholder, ...props}: InputProps) => {
  return <input type="text" placeholder={placeholder} {...props} />;
};
