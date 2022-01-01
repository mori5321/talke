import { ComponentProps } from 'react'
import { ChatRoomCard } from '../ChatRoomCard'

import style from './index.modules.scss'

type ChatRoomListProps = {
  chatRooms: ComponentProps<typeof ChatRoomCard>[];
};

export const ChatRoomList = ({ chatRooms }: ChatRoomListProps) => {
  return (
    <div className={style.listWrapper}>
      {chatRooms.map((chatRoom) => (
        <ChatRoomCard {...chatRoom} />
      ))}
    </div>
  )
}
