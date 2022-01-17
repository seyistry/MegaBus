import { StyleSheet } from "react-native";
import { pryColor } from "../../utils/color";

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        height: 44,
        // backgroundColor: "#FAFAFC",
        borderWidth: 1,
        justifyContent: "center",
        borderRadius: 4,
        borderColor: pryColor,
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
    inputSecure: {
        color: "#21293B",
        width: 280,
        paddingLeft: 10,
    },
    inputNotSecure: {
        color: "#21293B",
        width: 280,
        width: "100%",
        borderWidth: 1,
        borderRadius: 4,
        height: 44,
        paddingLeft: 10,
    },
});

export default styles;
