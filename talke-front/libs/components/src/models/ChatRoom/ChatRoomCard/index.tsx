import { Card } from '../../../ui/Card'

type ChatRoomCardProps = {
  title: string;
  description: string;
  onEnter: () => void;
  onDelete: () => void;
};

export const ChatRoomCard = ({
  title,
  description,
  onEnter,
  onDelete
}: ChatRoomCardProps) => (
  <Card
    title={title}
    description={description}
    actions={[
      {
        title: 'Delete',
        testId: 'onDelete',
        onClick: onDelete
      },
      {
        title: 'Enter',
        testId: 'onEnter',
        onClick: onEnter
      }
    ]}
  />
)
