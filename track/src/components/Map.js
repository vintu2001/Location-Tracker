import React, { useContext } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../Context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 150 }} />;
  }

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor="rgba(158,158,225,1.0)"
          fillColor="rgba(158,158,255, 0.3)"
        />
        <Polyline
          coordinates={locations.map((loc) => loc.coords)}
          lineDashPattern={[15]}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
