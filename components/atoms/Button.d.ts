export interface ButtonProps {
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    size?: 'small' | 'medium' | 'large';
    label: string;
    variant?: 'rounded' | 'outline' | 'disabled';
    textColor: 'font-light' | 'font-dark';
}
export declare const Button: ({ color, size, label, textColor, variant, ...props }: ButtonProps) => JSX.Element;
