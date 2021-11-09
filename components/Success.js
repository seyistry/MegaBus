import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import PButton from "./button/pryButton/PButton";
import { pryColor } from "../utils/color";
import { TouchableOpacity } from "react-native-gesture-handler";
import Goto from "../navigation/Goto";
import HeaderNoTitle from "./HeaderNoTitle";

const Success = (props) => {
    const route = useRoute();
    const { title, description } = route.params;

    const handlePress = () => {
        return Goto({ direction: "Home" });
    };
    return (
        <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ alignItems: "center" }}
        >
            <HeaderNoTitle />
            <Ionicons
                style={{ marginTop: 70 }}
                name="checkmark-circle-sharp"
                size={85}
                color="#70DD4A"
            />
            <Text
                style={{
                    fontWeight: "bold",
                    fontSize: 24,
                    textAlign: "center",
                    marginTop: 30,
                }}
            >
                {title}
            </Text>
            <Text style={{ fontSize: 18, textAlign: "center", marginTop: 20 }}>
                {description}
            </Text>
            <View style={{ marginTop: 320 }}>
                <TouchableOpacity onPress={handlePress()}>
                    <PButton name="Okay" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Success;
