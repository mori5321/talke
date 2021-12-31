import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { ChatRoomList } from '.'

export default {
  title: 'models/ChatRoomList',
  component: ChatRoomList
} as ComponentMeta<typeof ChatRoomList>

const Template: ComponentStory<typeof ChatRoomList> = (args) => (
  <ChatRoomList {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  chatRooms: [
    { title: 'Chat A', description: 'Come on join us.' },
    { title: 'Chat B', description: "I'm lovin' it" },
    { title: 'Chat C', description: 'Hello World' }
  ]
}
