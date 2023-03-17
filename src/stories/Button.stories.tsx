import { Button, ButtonProps } from "../components/atoms/Button";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

export default {
	title: 'Atoms/Button',
	component: Button,
	argTypes: {
		color: { control: 'select', options: ['primary', 'secondary'] }
	}
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
	args: {
		label: 'Button',
		color: 'primary',
		size: 'medium'
	}
};
