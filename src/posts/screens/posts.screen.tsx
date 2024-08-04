import SimpleHeader from "@/src/shared/components/headers/SimpleHeader";
import SafeView from "@/src/shared/SafeView";
import { IPostList, IPost } from "../types/posts.types";
import { FlatList, ScrollView, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";
import dayjs from "dayjs";

export default function HomeScreen() {
  const fakeData: IPostList = {
    data: [
      {
        _id: "666f5f7f456a23258554270a",
        title: "Titulo pueba",
        content: "Contenido prueba",
        keywords: ["test"],
        status: "open",
        idUserCreator: "662c7bf4f46acf1803bc033c",
        createdAt: new Date("2024-06-16T21:56:15.543Z"),
        updatedAt: new Date("2024-06-16T21:56:15.543Z"),
        comments: [],
        id: "666f5f7f456a23258554270a",
      },
      {
        _id: "66a5e059ed599cc01fa81540",
        title: "Titulo pueba",
        content: "Contenido prueba",
        keywords: ["test"],
        type: "requesting",
        status: "open",
        idUserCreator: "662c7bf4f46acf1803bc033c",
        createdAt: new Date("2024-07-28T06:08:25.206Z"),
        updatedAt: new Date("2024-07-28T06:08:25.206Z"),
        id: "66a5e059ed599cc01fa81540",
      },
      {
        _id: "666f5f7f456a23258554270a",
        title: "Titulo pueba",
        content: "Contenido prueba",
        keywords: ["test"],
        status: "open",
        idUserCreator: "662c7bf4f46acf1803bc033c",
        createdAt: new Date("2024-06-16T21:56:15.543Z"),
        updatedAt: new Date("2024-06-16T21:56:15.543Z"),
        comments: [],
        id: "666f5f7f456a23258554270a",
      },
      {
        _id: "666f5f7f456a23258554270a",
        title: "Titulo pueba",
        content: "Contenido prueba",
        keywords: ["test"],
        status: "open",
        idUserCreator: "662c7bf4f46acf1803bc033c",
        createdAt: new Date("2024-06-16T21:56:15.543Z"),
        updatedAt: new Date("2024-06-16T21:56:15.543Z"),
        comments: [],
        id: "666f5f7f456a23258554270a",
      },
      {
        _id: "666f5f7f456a23258554270a",
        title: "Titulo pueba",
        content: "Contenido prueba",
        keywords: ["test"],
        status: "open",
        idUserCreator: "662c7bf4f46acf1803bc033c",
        createdAt: new Date("2024-06-16T21:56:15.543Z"),
        updatedAt: new Date("2024-06-16T21:56:15.543Z"),
        comments: [],
        id: "666f5f7f456a23258554270a",
      },
      {
        _id: "666f5f7f456a23258554270a",
        title: "Titulo pueba",
        content: "Contenido prueba",
        keywords: ["test"],
        status: "open",
        idUserCreator: "662c7bf4f46acf1803bc033c",
        createdAt: new Date("2024-06-16T21:56:15.543Z"),
        updatedAt: new Date("2024-06-16T21:56:15.543Z"),
        comments: [],
        id: "666f5f7f456a23258554270a",
      },
      {
        _id: "666f5f7f456a23258554270a",
        title: "Titulo pueba",
        content: "Contenido prueba",
        keywords: ["test"],
        status: "open",
        idUserCreator: "662c7bf4f46acf1803bc033c",
        createdAt: new Date("2024-06-16T21:56:15.543Z"),
        updatedAt: new Date("2024-06-16T21:56:15.543Z"),
        comments: [],
        id: "666f5f7f456a23258554270a",
      },
    ],
  };

  const PostItem = ({ item }: { item: IPost }) => {
    return (
      <View
        style={{
          backgroundColor: Colors.gray,
          marginVertical: 7.5,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 30,
            paddingHorizontal: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>{item.title}</Text>
          <Text>{dayjs(item?.createdAt).format("D MMMM, YYYY")}</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            paddingHorizontal: 10,
            height: 100,
          }}
        >
          <Text>{item.content}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeView>
      <SimpleHeader title="Publicaciones" />
      <FlatList data={fakeData.data} renderItem={PostItem} />
    </SafeView>
  );
}
