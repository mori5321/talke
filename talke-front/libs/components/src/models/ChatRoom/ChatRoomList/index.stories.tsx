import { action } from '@storybook/addon-actions'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { ChatRoomList } from '.'

export default {
  title: 'models/ChatRoom/ChatRoomList',
  component: ChatRoomList
} as ComponentMeta<typeof ChatRoomList>

const Template: ComponentStory<typeof ChatRoomList> = (args) => (
  <ChatRoomList {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  chatRooms: [
    {
      title: 'Chat A',
      description: 'Come on join us.',
      onEnter: () => action('Enter'),
      onDelete: () => action('Delete')
    },
    {
      title: 'Chat B',
      description: 'Come on join us.',
      onEnter: () => action('Enter'),
      onDelete: () => action('Delete')
    },
    {
      title: 'Chat C',
      description: 'Come on join us.',
      onEnter: () => action('Enter'),
      onDelete: () => action('Delete')
    },
    {
      title: 'Chat D',
      description: 'Come on join us.',
      onEnter: () => action('Enter'),
      onDelete: () => action('Delete')
    }
  ]
}
