//TODO: VER PORQUE LA PAGINACION DE REQUESTING AUMENTA CUANDO PAGINO HELPING
import React, { useEffect } from "react";
import SimpleHeader from "@/src/shared/components/headers/SimpleHeader";
import SafeView from "@/src/shared/SafeView";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "@/constants/Colors";
import dayjs from "dayjs";
import { Tabs } from "react-native-collapsible-tab-view";
import { useState } from "react";
import { PostTypes } from "../types/enum.types";
import { useAppDispatch, useAppSelector } from "@/src/shared/hooks/reduxHooks";
import { IPost } from "../types/posts";
import { getPostsByType } from "../services/post.actions";
import { AsyncActionStatus } from "@/src/shared/types/enums.types";

export default function HomeScreen() {
  const [type, setType] = useState<PostTypes>(PostTypes.requesting);
  const [pageRequesting, setPageRequesting] = useState<number>(1);
  const [pageHelping, setPageHelping] = useState<number>(1);
  const [stopPaginating, setStopPaginating] = useState<PostTypes[]>([]);

  const dispatch = useAppDispatch();

  const { postsLists, postsListStatus } = useAppSelector(
    (state) => state.postLists
  );

  const getPost = async (type: PostTypes) => {
    const info: IPost[] = await dispatch(
      getPostsByType({
        inputParams: {
          page: type === PostTypes.requesting ? pageRequesting : pageHelping,
          pageSize: 10,
          type,
        },
        shouldStoreOutputState: true,
      })
    ).unwrap();

    if (info.length === 0) {
      if (!stopPaginating.includes(type)) {
        const currentStopped = [...stopPaginating];
        currentStopped.push(type);

        setStopPaginating(currentStopped);
      }
    }
  };

  useEffect(() => {
    getPost(PostTypes.helping);
    getPost(PostTypes.requesting);
  }, []);

  useEffect(() => {
    if (pageRequesting > 1) {
      getPost(PostTypes.requesting);
    }
  }, [pageRequesting]);

  useEffect(() => {
    if (pageHelping > 1) {
      getPost(PostTypes.helping);
    }
  }, [pageHelping]);

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
            setType(PostTypes.requesting);
          } else if (index === 1) {
            setType(PostTypes.helping);
          }
        }}
      >
        <Tabs.Tab name="Apoyo" label="Apoyo">
          <FlatList
            data={postsLists[PostTypes.requesting]}
            renderItem={PostItem}
            contentContainerStyle={{ paddingTop: 70, paddingHorizontal: 10 }}
            onEndReached={({ distanceFromEnd }) => {
              if (
                distanceFromEnd >= 0 &&
                postsListStatus !== AsyncActionStatus.loading
              ) {
                if (
                  !stopPaginating.includes(PostTypes.requesting) &&
                  type === "requesting"
                ) {
                  console.log("current page " + pageRequesting);

                  setPageRequesting(pageRequesting + 1);
                }
              }
            }}
          />
        </Tabs.Tab>
        <Tabs.Tab name="Superacion" label="Superacion">
          <FlatList
            data={postsLists[PostTypes.helping]}
            renderItem={PostItem}
            contentContainerStyle={{ paddingTop: 70, paddingHorizontal: 10 }}
            onEndReached={({ distanceFromEnd }) => {
              if (
                distanceFromEnd >= 0 &&
                postsListStatus !== AsyncActionStatus.loading
              ) {
                if (
                  !stopPaginating.includes(PostTypes.helping) &&
                  type === "helping"
                ) {
                  console.log("current page " + pageHelping);

                  setPageHelping(pageHelping + 1);
                }
              }
            }}
          />
        </Tabs.Tab>
      </Tabs.Container>
    </SafeView>
  );
}
