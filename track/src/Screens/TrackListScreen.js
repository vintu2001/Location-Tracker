import React, { useContext } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../Context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />

      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TrackDetails", { _id: item._id });
              }}
            >
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: "Tracks",
};
const styles = StyleSheet.create({
  name: {
    fontWeight: "500",
    height: 60,
    borderBottomColor: "rgba(20,20,20,0.1)",
    borderBottomWidth: 1,
    fontSize: 25,
    textAlignVertical: "center",
    marginHorizontal: 15,
  },
});

export default TrackListScreen;
