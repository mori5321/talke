import { ChatRoomList } from '../../models/ChatRoom/ChatRoomList'
import { ComponentProps } from 'react'

type TopLayoutProps = {
  chatRoomListProps: ComponentProps<typeof ChatRoomList>;
};

const TopLayout = ({ chatRoomListProps }: TopLayoutProps): JSX.Element => (
  <ChatRoomList {...chatRoomListProps} />
)

export { TopLayout }
