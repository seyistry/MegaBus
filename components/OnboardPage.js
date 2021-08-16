import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { GradientColor } from "../utils/color";
import Swipe from "../assets/image/Swipe";

const OnboardPage = ({
    bg,
    backgroundColor,
    iconName,
    title,
    dotOne = false,
    dotTwo = false,
    dotThree = false,
}) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={bg}
                style={[
                    styles.image,
                    {
                        flex: 1,
                        justifyConten: "center",
                        backgroundColor,
                    },
                ]}
            >
                <LinearGradient
                    colors={[GradientColor, "transparent", "transparent"]}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        flex: 1,
                        width: "100%",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}
                >
                    <View style={{ marginTop: 16 }}>
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: "bold",
                                color: "white",
                                textAlign: "center",
                                marginBottom: 40,
                                marginHorizontal: 10,
                            }}
                        >
                            {title}
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <MaterialCommunityIcons
                            name={
                                dotOne
                                    ? "checkbox-blank-circle"
                                    : "checkbox-blank-circle-outline"
                            }
                            size={14}
                            color="white"
                        />
                        <MaterialCommunityIcons
                            name={
                                dotTwo
                                    ? "checkbox-blank-circle"
                                    : "checkbox-blank-circle-outline"
                            }
                            size={14}
                            color="white"
                            style={{ marginHorizontal: 10 }}
                        />
                        <MaterialCommunityIcons
                            name={
                                dotThree
                                    ? "checkbox-blank-circle"
                                    : "checkbox-blank-circle-outline"
                            }
                            size={14}
                            color="white"
                        />
                    </View>
                </LinearGradient>
            </ImageBackground>
            <View
                style={{
                    width: "100%",
                    height: 144,
                    backgroundColor: GradientColor,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Swipe />
                <Text style={{ color: "white", fontSize: 11 }}>Swipe Left</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "contain",
    },
});

export default OnboardPage;
