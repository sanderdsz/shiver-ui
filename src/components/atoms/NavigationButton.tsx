import {
  IconContext,
  ChartLine,
  CreditCard,
  House,
  User,
} from '@phosphor-icons/react';
import 'shiver-design-system';

export interface NavigationButtonProps {
  label: string;
  isMobile: boolean;
  icon?: 'House' | 'CreditCard' | 'ChartLine' | 'User';
  isActive: boolean;
}

export const NavigationButton = ({
  label,
  isActive = false,
  isMobile = false,
  icon,
  ...props
}: NavigationButtonProps) => {
  const activeVariant = () => {
    if (isActive) {
      return '#5E81AC';
    } else {
      return '#434c5e';
    }
  };
  const iconVariant = (icon: string) => {
    switch (icon) {
      case 'House':
        return <House color={activeVariant()} />;
      case 'CreditCard':
        return <CreditCard color={activeVariant()} />;
      case 'ChartLine':
        return <ChartLine color={activeVariant()} />;
      case 'User':
        return <User color={activeVariant()} />;
    }
  };
  const mobileVariant = isMobile ? 'mobile' : '';
  return (
    <IconContext.Provider
      value={{
        size: isMobile ? 32 : 18,
        mirrored: false,
      }}
    >
      <button
        type="button"
        className={`nav-button ${mobileVariant}`}
        {...props}
      >
        {icon ? (
          <div style={{marginRight: isMobile ? 0 : '.25rem'}}>
            {iconVariant(icon)}
          </div>
        ) : null}
        <span
          style={{
            color: activeVariant(),
          }}
        >
          {label}
        </span>
      </button>
    </IconContext.Provider>
  );
};
