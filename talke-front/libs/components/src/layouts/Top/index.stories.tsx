import { TopLayout } from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Layouts/Top',
  component: TopLayout
} as ComponentMeta<typeof TopLayout>

const Template: ComponentStory<typeof TopLayout> = (args) => (
  <TopLayout {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  title: 'This is top page'
}
