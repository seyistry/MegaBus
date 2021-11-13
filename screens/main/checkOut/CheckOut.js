import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StyleSheet,
    Button,
    Animated,
    TouchableOpacity,
    Image,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { pryColor, white } from "../../../utils/color";

const CheckOut = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [animationLineHeight, setAnimationLineHeight] = useState(0);
    const [focusLineAnimation, setFocusLineAnimation] = useState(
        new Animated.Value(0)
    );
    const navigation = useNavigation();

    const animateLine = () => {
        Animated.sequence([
            Animated.timing(focusLineAnimation, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(focusLineAnimation, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start(animateLine);
    };

    useEffect(() => {
        getPermissionsAsync();
        animateLine();
    }, []);

    const getPermissionsAsync = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
    };

    if (hasPermission === null) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>Requesting for camera permission</Text>
            </View>
        );
    }

    if (hasPermission === false) {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>No access to camera</Text>
            </View>
        );
    }
    const handleScanRedirect = (props) => {
        navigation.navigate("Success", {
            title: "Success",
            description:
                "Congratulations! You have successfully checked out your trip.",
        });
    };

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        if (data === "Alagbado") {
            handleScanRedirect(data);
        } else {
            alert(`Invalid Bar Code`);
        }
    };

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            <View style={styles.overlay}>
                <View style={styles.unfocusedContainer}></View>
                <View style={styles.middleContainer}>
                    <View style={styles.unfocusedContainer} />
                    <View
                        onLayout={(e) =>
                            setAnimationLineHeight(e.nativeEvent.layout.height)
                        }
                        style={styles.focusedContainer}
                    >
                        {!scanned && (
                            <Animated.View
                                style={[
                                    styles.animationLineStyle,
                                    {
                                        transform: [
                                            {
                                                translateY:
                                                    focusLineAnimation.interpolate(
                                                        {
                                                            inputRange: [0, 1],
                                                            outputRange: [
                                                                0,
                                                                animationLineHeight,
                                                            ],
                                                        }
                                                    ),
                                            },
                                        ],
                                    },
                                ]}
                            />
                        )}
                        {scanned && (
                            <TouchableOpacity
                                onPress={() => setScanned(false)}
                                style={styles.rescanIconContainer}
                            >
                                <Ionicons
                                    name="reload"
                                    size={50}
                                    color={pryColor}
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                    <View style={styles.unfocusedContainer} />
                </View>
                <View style={styles.unfocusedContainer} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: pryColor,
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    unfocusedContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
    },
    middleContainer: {
        flexDirection: "row",
        flex: 1.5,
    },
    focusedContainer: {
        flex: 6,
    },
    animationLineStyle: {
        height: 2,
        width: "100%",
        backgroundColor: "red",
    },
    rescanIconContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
export default CheckOut;
