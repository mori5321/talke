import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ChatRoomCard } from '.'

export default {
  title: 'models/ChatRoom/ChatRoomCard',
  component: ChatRoomCard
} as ComponentMeta<typeof ChatRoomCard>

const Template: ComponentStory<typeof ChatRoomCard> = (args) => (
  <ChatRoomCard {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  title: 'もくもく開発部屋',
  description: 'Reactでいろいろな楽しいプログラムをつくるもくもく部屋',
  onEnter: () => action('Enter'),
  onDelete: () => action('Delete')
}
