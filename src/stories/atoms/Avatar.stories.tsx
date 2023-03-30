import {Meta, StoryObj} from '@storybook/react';
import {Avatar, AvatarProps} from '../../components/atoms/Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    borderColor: {control: 'select', options: ['gray01', 'blue04']},
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {
  args: {
    alt: 'Avatar',
    height: 50,
    width: 50,
    src: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80',
  },
};
