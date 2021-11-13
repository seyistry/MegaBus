import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { white } from "../../../utils/color";

const TransactionCard = (props) => {
    const { itemType, itemAmount, itemDate, itemTime, itemInfo } = props;
    const itemColor = itemType === "debit" ? "#FF8080" : "#2CD429";
    return (
        <View style={styles.container}>
            <View style={[styles.cardIcon, { backgroundColor: itemColor }]}>
                {Platform.OS === "ios" ? (
                    <Ionicons
                        name="ios-swap-horizontal-sharp"
                        color={white}
                        size={22}
                    />
                ) : (
                    <Ionicons
                        name="md-swap-horizontal-sharp"
                        color={white}
                        size={22}
                    />
                )}
            </View>
            <View>
                <Text style={{ fontSize: 12, color: "#8C8C8C" }}>
                    {itemDate}
                </Text>
                <Text style={{ fontSize: 10, color: "#8C8C8C" }}>
                    {itemTime}
                </Text>
                <Text style={{ fontSize: 14 }}>{itemInfo}</Text>
            </View>
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginRight: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: itemColor,
                    }}
                >
                    {itemType === "debit" ? "-" : "+"} #{itemAmount}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#EFF4F5",
        borderRadius: 10,
        height: 67,
        marginBottom: 10,
        alignItems: "center",
    },
    cardIcon: {
        width: 51,
        height: 49,
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
});

export default TransactionCard;
