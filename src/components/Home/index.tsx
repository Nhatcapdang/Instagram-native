import * as React from "react";
import Stories from "./Stories";
import Post from "./Post";
import { FlatList } from "react-native";

const post = [
  {
    user: {
      imageUri:
        "https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg",
      name: "Dang",
    },
    image:
      "https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg",
    caption: "Beautiful",
    like: 123457,
    createdAt: "11 minutes ago",
  },
  {
    user: {
      imageUri:
        "https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg",
      name: "Nhat",
    },
    image:
      "https://file.tinnhac.com/resize/600x-/2020/04/03/20200403104047-41cb.jpg",
    caption: "Beautiful",
    like: 123457,
    createdAt: "11 minutes ago",
  },
];
export default function Home({ navigation }: any) {
  return (
    <>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={post}
        keyExtractor={({ user }: any) => user.name}
        renderItem={({ item }) => <Post post={item} />}
        ListHeaderComponent={<Stories />}
      />
    </>
  );
}
