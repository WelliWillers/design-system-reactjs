import { Meta, StoryObj } from '@storybook/react'
import { Text } from '../../Text/Text';
import { CheckBox, CheckBoxRootProps } from "./CheckBox";

export default {
    title: 'Components/CheckBox',
    component: CheckBox,
    args: {},
    argTypes: { },
    decorators: [
        (Story) => (
            <div className='flex items-center gap-2'>
                {Story()}
                <Text size='sm'>Lembrar de mim por 30 dias</Text>
            </div>
        )
    ]
} as Meta<CheckBoxRootProps>

export const Default:StoryObj<CheckBoxRootProps> = {}
