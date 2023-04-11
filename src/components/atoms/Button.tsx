import 'shiver-design-system';

export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  label: string;
  variant?: 'rounded' | 'outline' | 'disabled';
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
      className={`button ${color} ${size} ${textColor} ${buttonVariant}`}
      {...props}
    >
      {label}
    </button>
  );
};
