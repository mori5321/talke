import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ChatRoomCard } from '.'
import { within, userEvent } from '@storybook/testing-library'

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

Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  // await fireEvent.click(canvas.getByTestId('onEnter'))
  //
  // await fireEvent.click(canvas.getByTestId('onDelete'))

  // await fireEvent.change(canvas.getByTestId('input'), {
  //   target: { value: 'moriwmm77' }
  // })

  await userEvent.click(canvas.getByTestId('onEnter'))
  await userEvent.click(canvas.getByTestId('onDelete'))

  await userEvent.type(canvas.getByTestId('input'), 'moss@hoge.c', {
    delay: 100
  })
  // await fireEvent.change(canvas.getByTestId('inputi'), {
  //   target: { value: 'morimori' },
  //   delay: 500
  // })
}
