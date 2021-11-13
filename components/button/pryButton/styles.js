import { StyleSheet } from "react-native";
import { pryColor } from "../../../utils/color";

const styles = StyleSheet.create({
    buttonContainer: {
        width: 249,
        height: 58,
        backgroundColor: pryColor,
        borderRadius: 75,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    },
    text: {
        fontFamily: "HeeboM",
        fontSize: 18,
        color: "white",
        textTransform: "uppercase",
    },
});

export default styles;
