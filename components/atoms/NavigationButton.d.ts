export interface NavigationButtonProps {
    label: string;
    isMobile: boolean;
    icon?: 'House' | 'CreditCard' | 'ChartLine' | 'User';
    isActive: boolean;
}
export declare const NavigationButton: ({ label, isActive, isMobile, icon, ...props }: NavigationButtonProps) => JSX.Element;
