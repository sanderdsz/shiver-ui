import 'shiver-design-system/src/css/shiver.css';

export interface ButtonProps {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  label: string;
  variant?: 'rounded' | 'outline';
  textColor: 'font-light' | 'font-dark';
}

export const Button = ({
  color = 'primary',
  size = 'medium',
  label,
  textColor = 'font-dark',
  variant,
  ...props
}: ButtonProps) => {
  const buttonVariant = variant ? variant : '';
  return (
    <button
      type="button"
      className={`${color} ${size} ${textColor} ${buttonVariant}`}
      {...props}
    >
      {label}
    </button>
  );
};
