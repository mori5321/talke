import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Card } from '.'

export default {
  title: 'ui/Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Basic = Template.bind({})
Basic.args = {
  title: 'Hello',
  description: 'World',
  actions: [
    {
      title: 'Delete',
      onClick: () => action('Hoge')
    },
    {
      title: 'Enter',
      onClick: () => action('Hoge')
    }
  ]
}
