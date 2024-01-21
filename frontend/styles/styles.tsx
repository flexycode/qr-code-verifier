import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Primary,
    flex: 1,
    alignItems: "center",
  },
  header: {
    position: "relative",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 100,
    marginTop: 80,
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
    marginBottom: 50,
  },
  cameraContainer: {
    width: "80%",
    aspectRatio: 1 / 1,
    overflow: "hidden",
    borderRadius: 40,
    marginBottom: 50,
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
  profileAndStatusContainer: {
    paddingTop: 50,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  profilePictureContainer: {
    backgroundColor: "aaa",
    width: "50%",
    aspectRatio: 1 / 1,
    borderWidth: 1,
    borderRadius: 50,
    overflow: "hidden",
  },
  profilePicture: {
    width: undefined,
    height: undefined,
    aspectRatio: 1 / 1,
    resizeMode: "contain",
    overflow: "hidden",
    zIndex: -1,
  },
  verifiedStatusContainer: {
    backgroundColor: "aaa",
    width: "50%",
    aspectRatio: 1 / 1,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default styles;
