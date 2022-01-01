import { TopLayout } from '.'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Layouts/Top',
  component: TopLayout
} as ComponentMeta<typeof TopLayout>

const Template: ComponentStory<typeof TopLayout> = (args) => (
  <TopLayout {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  chatRoomListProps: {
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
}
