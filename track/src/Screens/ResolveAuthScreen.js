import React, { useEffect, useContext } from "react";
import { Text } from "react-native";
import { Context as AuthContext } from "../Context/AuthContext";

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <>
      <Text style={{ color: "red", fontSize: 20 }}>Loading</Text>
    </>
  );
};

export default ResolveAuthScreen;
