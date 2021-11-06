import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import PButton from "../../../components/button/pryButton/PButton";
import SButton from "../../../components/button/secButton/SButton";
import Header from "../../../components/Header";
import Goto from "../../../navigation/Goto";

const MyCardMainView = () => {
    const handlePress = () => {
        return Goto({ direction: "CardDetailsInputView" });
    };
    return (
        <View style={styles.container}>
            <Header name="My Card" />
            <View style={{ alignItems: "center", marginTop: 10 }}>
                <TouchableOpacity onPress={handlePress()}>
                    <SButton name="Add new card" icon={"true"} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
});
export default MyCardMainView;
