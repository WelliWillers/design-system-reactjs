import { SignIn } from "./SignIn";
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library';

export default {
    title: 'Pages/SignIn',
    component: SignIn,
    args: { },
    argTypes: { },
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        userEvent.type(canvas.getByPlaceholderText('Digite o seu e-mail'), 'Wellington.willers@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('************'), '12345678')

        userEvent.click(canvas.getByRole('button'));

        await waitFor(() => {
            expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
        })
    }
}
