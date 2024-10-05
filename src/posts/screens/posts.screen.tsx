//TODO: VER PORQUE LA PAGINACION DE REQUESTING AUMENTA CUANDO PAGINO HELPING
import React from "react";
import SimpleHeader from "@/src/shared/components/headers/SimpleHeader";
import SafeView from "@/src/shared/SafeView";
import { IPost, ITypes } from "../types/posts.types";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "@/constants/Colors";
import dayjs from "dayjs";
import { Tabs } from "react-native-collapsible-tab-view";
import { useState } from "react";

export default function HomeScreen() {
  const [type, setType] = useState<ITypes>("requesting");
  const [pageRequesting, setPageRequesting] = useState<number>(1);
  const [pageHelping, setPageHelping] = useState<number>(1);

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
              {item.title}
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

  return (
    <SafeView>
      <SimpleHeader title="Publicaciones" />
      <Tabs.Container
        onIndexChange={(index: number) => {
          console.log("indexxx " + typeof index);
          if (index === 0) {
            setType("requesting");
          } else if (index === 1) {
            setType("helping");
          }
        }}
      >
        <Tabs.Tab name="Apoyo" label="Apoyo">
          <FlatList
            data={[]}
            renderItem={PostItem}
            contentContainerStyle={{ paddingTop: 70, paddingHorizontal: 10 }}
            onEndReached={({ distanceFromEnd }) => {
              /*  if (distanceFromEnd >= 0 && !isLoading) {
                console.log("total pages " + data?.totalPages);
                console.log("current pageRequesting " + pageRequesting);

                console.log("current pageHelping " + pageHelping);

                console.log("current type 111 " + type);

                if (
                  pageRequesting < (data?.totalPages ?? 1) &&
                  type === "requesting"
                ) {
                  setPageRequesting(pageRequesting + 1);
                }
              } */
            }}
          />
        </Tabs.Tab>
        <Tabs.Tab name="Superacion" label="Superacion">
          <FlatList
            data={[]}
            renderItem={PostItem}
            contentContainerStyle={{ paddingTop: 70, paddingHorizontal: 10 }}
            onEndReached={({ distanceFromEnd }) => {
              /*  if (distanceFromEnd >= 0 && !isLoading) {
                console.log("total pages " + data?.totalPages);
                console.log("current pageRequesting " + pageRequesting);

                console.log("current pageHelping " + pageHelping);

                console.log("current type 22222 " + type);

                if (
                  pageHelping < (data?.totalPages ?? 1) &&
                  type === "helping"
                ) {
                  setPageHelping(pageHelping + 1);
                }
              } */
            }}
          />
        </Tabs.Tab>
      </Tabs.Container>
    </SafeView>
  );
}
