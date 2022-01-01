import { ChatRoomList } from '../../models/ChatRoom/ChatRoomList'
import { BasicTemplate } from '../../templates'
import { ComponentProps } from 'react'

type TopLayoutProps = {
  chatRoomListProps: ComponentProps<typeof ChatRoomList>;
};

const TopLayout = ({ chatRoomListProps }: TopLayoutProps): JSX.Element => (
  <BasicTemplate>
    <ChatRoomList {...chatRoomListProps} />
  </BasicTemplate>
)

export { TopLayout }
