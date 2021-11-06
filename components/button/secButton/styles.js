import { StyleSheet } from "react-native";
import { pryColor, white } from "../../../utils/color";

const styles = StyleSheet.create({
    buttonContainer: {
        width: 249,
        height: 58,
        borderRadius: 75,
        backgroundColor: white,
        borderWidth: 2,
        borderColor: pryColor,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        flexDirection: "row",
    },
    text: {
        fontSize: 16,
        color: pryColor,
        textTransform: "uppercase",
    },
});

export default styles;
