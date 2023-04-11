import {Meta, StoryObj} from '@storybook/react';
import {
  NavigationButton,
  NavigationButtonProps,
} from '../../components/atoms/NavigationButton';

export default {
  title: 'Atoms/Navigation Button',
  component: NavigationButton,
  argTypes: {
    icon: {
      control: 'select',
      options: ['', 'House', 'CreditCard', 'ChartLine', 'User'],
    },
    onClick: {
      action: 'clicked',
    },
  },
} as Meta<NavigationButtonProps>;

export const Primary: StoryObj<NavigationButtonProps> = {
  args: {
    label: 'Primary',
    isMobile: false,
    isActive: false,
  },
};

export const Mobile: StoryObj<NavigationButtonProps> = {
  args: {
    label: 'Home',
    icon: 'House',
    isMobile: true,
    isActive: true,
  },
};
