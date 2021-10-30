import { useContext } from "react";
import { Context as LocationContext } from "../Context/LocationContext";
import { Context as TrackContext } from "../Context/TrackContext";
import { navigate } from "../navigationRef";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { name, locations },
    reset,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate("TrackList");
  };

  return [saveTrack];
};
