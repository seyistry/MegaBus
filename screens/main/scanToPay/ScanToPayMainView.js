import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/core";
import HeaderNoTitle from "../../../components/HeaderNoTitle";
import scanToBoard from "../../../assets/image/scanToBoard.png";
import PButton from "../../../components/button/pryButton/PButton";
import Goto from "../../../navigation/Goto";

const ScanToPayMainView = () => {
    const route = useRoute();
    const { trip, amount } = route.params;
    const handlePress = () => {
        return Goto({
            direction: "Success",
            title: "SUCCESS",
            description:
                "Congratulations! You trip has been successfully booked.",
        });
    };
    return (
        <View style={{ flex: 1 }}>
            <HeaderNoTitle goBackButton={true} />
            <View
                style={{
                    marginTop: 50,
                    height: 157,
                    backgroundColor: "#D4F1F4",
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    justifyContent: "center",
                    paddingLeft: 20,
                    marginRight: 40,
                }}
            >
                <Text style={{ fontFamily: "HeeboR", fontSize: 20 }}>
                    John Doe, trip from{" "}
                    <Text style={{ fontFamily: "HeeboB" }}>
                        {trip} to Ikeja{" "}
                    </Text>
                    will cost you{" "}
                    <Text style={{ fontFamily: "HeeboB" }}>{amount}.</Text>
                </Text>
            </View>
            <View
                style={{
                    marginTop: 50,
                    height: 243,
                    // width: 350,
                    overflow: "hidden",
                    marginHorizontal: 30,
                }}
            >
                <Image
                    source={scanToBoard}
                    style={{
                        resizeMode: "contain",
                        width: "100%",
                    }}
                />
            </View>
            <TouchableOpacity
                style={{
                    alignItems: "center",
                    flex: 1,
                    justifyContent: "flex-end",
                    marginBottom: 40,
                }}
                onPress={handlePress()}
            >
                <PButton name="Confirm" />
            </TouchableOpacity>
        </View>
    );
};

export default ScanToPayMainView;
