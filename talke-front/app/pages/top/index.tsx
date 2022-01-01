import * as React from "react";
import { TopLayout } from "components";

const mockProps: React.ComponentProps<typeof TopLayout> = {
  chatRoomListProps: {
    chatRooms: [
      {
        title: "Chat A",
        description: "Come on join us.",
        onEnter: () => console.log("Enter"),
        onDelete: () => console.log("Delete"),
      },
      {
        title: "Chat B",
        description: "Come on join us.",
        onEnter: () => console.log("Enter"),
        onDelete: () => console.log("Delete"),
      },
      {
        title: "Chat C",
        description: "Come on join us.",
        onEnter: () => console.log("Enter"),
        onDelete: () => console.log("Delete"),
      },
      {
        title: "Chat D",
        description: "Come on join us.",
        onEnter: () => console.log("Enter"),
        onDelete: () => console.log("Delete"),
      },
    ],
  },
};

const TopPage = () => {
  return <TopLayout {...mockProps} />;
};

export default TopPage;
