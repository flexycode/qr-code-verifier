import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e5fae3",
    flex: 1,
    alignItems: "center",
  },
  title: {
    position: "relative",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 100,
    marginTop: 80,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 40,
  },
  cameraContainer: {
    width: "80%",
    aspectRatio: 1 / 1,
    overflow: "hidden",
    borderRadius: 40,
    marginBottom: 40,
  },
  camera: {
    flex: 1,
  },
  button: {
    backgroundColor: "green",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    height: 50,
    width: 150,
    alignContent: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
