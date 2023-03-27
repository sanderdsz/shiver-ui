import {Button, ButtonProps} from '../components/atoms/Button';
import {Meta, StoryObj} from '@storybook/react';
import React from 'react';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: {control: 'select', options: ['primary', 'secondary']},
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    label: 'Button',
    color: 'primary',
    size: 'medium',
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    label: 'Button',
    color: 'secondary',
    size: 'medium',
    textColor: 'font-light',
  },
};

export const Rounded: StoryObj<ButtonProps> = {
  args: {
    label: 'Button',
    color: 'primary',
    size: 'medium',
    textColor: 'font-dark',
    variant: 'rounded',
  },
};

export const Outline: StoryObj<ButtonProps> = {
  args: {
    label: 'Button',
    color: 'primary',
    size: 'medium',
    textColor: 'font-dark',
    variant: 'outline',
  },
};

export const Success: StoryObj<ButtonProps> = {
  args: {
    label: 'Button',
    color: 'success',
    size: 'medium',
    textColor: 'font-light',
  },
};

export const Warning: StoryObj<ButtonProps> = {
  args: {
    label: 'Button',
    color: 'warning',
    size: 'medium',
    textColor: 'font-dark',
  },
};

export const Danger: StoryObj<ButtonProps> = {
  args: {
    label: 'Button',
    color: 'danger',
    size: 'medium',
    textColor: 'font-light',
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    label: 'Button',
    color: 'primary',
    size: 'medium',
    textColor: 'font-dark',
    variant: 'disabled'
  },
};
