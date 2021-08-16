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
    },
    text: {
        fontSize: 16,
        color: "white",
        textTransform: "uppercase",
    },
});

export default styles;
