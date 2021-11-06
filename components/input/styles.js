import { StyleSheet } from "react-native";
import { pryColor } from "../../utils/color";

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        height: 44,
        // backgroundColor: "#FAFAFC",
        borderWidth: 1,
        borderColor: pryColor,
        justifyContent: "center",
        borderRadius: 4,
    },
    text: {
        fontSize: 16,
        color: "black",
        marginLeft: 10,
    },
    icon: {
        marginRight: 10,
        justifyContent: "center",
    },
    input: {
        marginLeft: 10,
        color: "#21293B",
        width: 280,
    },
});

export default styles;
