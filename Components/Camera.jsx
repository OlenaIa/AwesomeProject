import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { MaterialIcons } from '@expo/vector-icons'; 
import { stylesPostCreateCard } from "./PostCreateCard";

export default function CameraPage({ setPhoto }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  };
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={setCameraRef}
      >
        <View style={styles.photoView}>
          <TouchableOpacity
            style={styles.flipContainer}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, padding: 10, color: "white" }}>
              {" "}Flip{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                await MediaLibrary.createAssetAsync(uri);
                setPhoto(uri);
              }
            }}
          >
            <View style={stylesPostCreateCard.buttonPhoto}>
              <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    },
  camera: { flex: 1 },
  photoView: {
    position: 'relative',
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  flipContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flex: 0.1,
    alignSelf: "flex-end",
  },
  button: {
    alignSelf: "center"
  },
});
