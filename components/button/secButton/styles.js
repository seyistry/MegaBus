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
    },
    text: {
        fontSize: 16,
        color: pryColor,
        textTransform: "uppercase",
    },
});

export default styles;
