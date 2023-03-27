import {Input, InputProps} from '../../components/atoms/Input';
import {Meta, StoryObj} from '@storybook/react';

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta<InputProps>;

export const Primary: StoryObj<InputProps> = {
  args: {
    placeholder: 'Foo Bar',
  },
};
