import styles from './index.modules.scss'

type ChatRoomPanelProps = {
  title: string;
  description: string;
};

const ChatRoomPanel = ({ title, description }: ChatRoomPanelProps) => (
  <div className={styles.chatRoomWrapper}>
    <p>{title}</p>
    <p>{description}</p>
  </div>
)

type ChatRoomListProps = {
  chatRooms: ChatRoomPanelProps[];
};

export const ChatRoomList = ({ chatRooms }: ChatRoomListProps) => {
  return (
    <div>
      {chatRooms.map((chatRoom) => (
        <ChatRoomPanel {...chatRoom} />
      ))}
    </div>
  )
}
