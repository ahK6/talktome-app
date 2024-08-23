import SimpleHeader from "@/src/shared/components/headers/SimpleHeader";
import SafeView from "@/src/shared/SafeView";
import { IPostList, IPost } from "../types/posts.types";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "@/constants/Colors";
import dayjs from "dayjs";
import { Tabs } from "react-native-collapsible-tab-view";

export default function HomeScreen() {
  const fakeData: IPostList = {
    data: [
      {
        _id: "666f5f7f456a23258554270a",
        title: "Titulo pueba",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        keywords: ["test"],
        status: "open",
        idUserCreator: "662c7bf4f46acf1803bc033c",
        createdAt: new Date("2024-06-16T21:56:15.543Z"),
        updatedAt: new Date("2024-06-16T21:56:15.543Z"),
        comments: [],
        type: "helping",
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
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        keywords: ["test"],
        status: "open",
        idUserCreator: "662c7bf4f46acf1803bc033c",
        createdAt: new Date("2024-06-16T21:56:15.543Z"),
        updatedAt: new Date("2024-06-16T21:56:15.543Z"),
        comments: [],
        id: "666f5f7f456a23258554270a",
        type: "helping",
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
        comments: [{}, {}, {}],
        id: "666f5f7f456a23258554270a",
        type: "requesting",
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
        comments: [{}],
        id: "666f5f7f456a23258554270a",
        type: "helping",
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
        comments: [{}, {}],
        id: "666f5f7f456a23258554270a",
        type: "requesting",
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
        comments: [{}, {}, {}, {}, {}, {}, {}],
        id: "666f5f7f456a23258554270a",
        type: "helping",
      },
    ],
  };

  const PostItem = ({ item, index }: { item: IPost; index: number }) => {
    return (
      <>
        {index === 0 && (
          <Text
            style={{
              textAlign: "center",
              marginBottom: 20,
              fontWeight: "bold",
            }}
          >
            ¿Cómo podemos ayudarte ahora?
          </Text>
        )}
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            backgroundColor: Colors.gray,
            marginBottom: 25,
            overflow: "hidden",
            elevation: 8,
            shadowColor: "black",
            borderRadius: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              height: 30,
              paddingHorizontal: 10,
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: Colors.primary,
              borderBottomWidth: 0.2,
            }}
          >
            <Text
              numberOfLines={1}
              style={{ color: Colors.white, fontWeight: "bold", width: "60%" }}
            >
              {item.title} qew qw eqw eqw eqw eqw eqw eqw eqw eqw e
            </Text>
            <Text style={{ color: Colors.white }}>
              {dayjs(item?.createdAt).format("D/MM/YY")}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "white",
              paddingHorizontal: 10,
              height: 100,
            }}
          >
            <Text numberOfLines={5}>{item.content}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 30,
              paddingHorizontal: 10,
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: Colors.textSecundary,
            }}
          >
            <Text style={{ color: Colors.white }}>
              {item.comments?.length} respuestas
            </Text>
            {item.type === "helping" && (
              <Text style={{ color: Colors.white }}>
                {item.comments?.length} me gusta
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </>
    );
  };

  const Header = () => <SimpleHeader title="Publicaciones" />;

  return (
    <SafeView>
      <SimpleHeader title="Publicaciones" />
      <Tabs.Container>
        <Tabs.Tab name="Apoyo" label="Apoyo">
          <FlatList
            data={fakeData.data}
            renderItem={PostItem}
            contentContainerStyle={{ paddingTop: 70, paddingHorizontal: 10 }}
          />
        </Tabs.Tab>
        <Tabs.Tab name="Superacion" label="Superacion">
          <FlatList
            data={fakeData.data}
            renderItem={PostItem}
            contentContainerStyle={{ paddingTop: 70 }}
          />
        </Tabs.Tab>
      </Tabs.Container>
    </SafeView>
  );
}
