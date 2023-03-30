import {
  ProgressBar,
  ProgressBarProps,
} from '../../components/atoms/ProgressBar';
import {Meta, StoryObj} from '@storybook/react';

export default {
  title: 'Atoms/Progress Bar',
  component: ProgressBar,
  argTypes: {},
} as Meta<ProgressBarProps>;

export const Primary: StoryObj<ProgressBarProps> = {
  args: {
    value: 25,
  },
};
