import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { pryColor } from "../../utils/color";

const styles = StyleSheet.create({
    progressContainer: {
        width: "100%",
    },
    progressDisplay: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: pryColor,
        height: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    progressState: {
        backgroundColor: pryColor,
        height: 6,
        marginLeft: 2,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    text: {
        fontSize: 9,
        fontWeight: "300",
        color: pryColor,
        textAlign: "center",
    },
});

export default styles;
