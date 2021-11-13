import React, { useState } from "react";
import {
    ImageBackground,
    Text,
    View,
    Platform,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Image,
} from "react-native";
import {
    black,
    blue,
    gray,
    green,
    pryColor,
    white,
} from "../../../utils/color";
import NavIcon from "../../../assets/image/NavIcon";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Blur from "../../../assets/image/Blur";
import BarcodeIcon from "../../../assets/image/BarcodeIcon";
import CheckoutIcon from "../../../assets/image/CheckoutIcon";
import ShareIcon from "../../../assets/image/ShareIcon";
import CardIcon from "../../../assets/image/CardIcon";
import NairaIcon from "../../../assets/image/NairaIcon";
import WhiteBtn from "../../../components/button/whiteButton/WhiteBtn";
import Goto from "../../../navigation/Goto";

const Home = () => {
    const image = `https://i.pravatar.cc/150?img=12`;
    const [toggle, setToggle] = useState(false);
    const handleHideBalance = () =>
        toggle ? setToggle(false) : setToggle(true);

    const handlePress = (props) => {
        return Goto({ direction: props });
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: white }}>
            <View
                style={{
                    height: 170,
                    width: "100%",
                    backgroundColor: pryColor,
                    borderBottomRightRadius: 50,
                    borderBottomLeftRadius: 50,
                }}
            >
                <View
                    style={{
                        marginTop: 30,
                        marginHorizontal: 20,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // borderWidth: 1,
                    }}
                >
                    <TouchableOpacity>
                        <NavIcon />
                    </TouchableOpacity>
                    {Platform.OS === "ios" ? (
                        <TouchableOpacity>
                            <Ionicons
                                name="ios-notifications-outline"
                                size={25}
                                color={white}
                            />
                            <Entypo
                                style={{
                                    position: "absolute",
                                    marginLeft: 5,
                                    marginTop: -5,
                                    opacity: 0,
                                }}
                                name="dot-single"
                                size={24}
                                color="#FF0000"
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity>
                            <Ionicons
                                name="md-notifications-outline"
                                size={25}
                                color={white}
                            />
                            <Entypo
                                style={{
                                    position: "absolute",
                                    marginLeft: 5,
                                    marginTop: -5,
                                    // opacity: 0,
                                }}
                                name="dot-single"
                                size={24}
                                color="#FF0000"
                            />
                        </TouchableOpacity>
                    )}
                </View>
                <View
                    style={{
                        height: "40%",
                        alignItems: "center",
                        marginHorizontal: 20,
                        flexDirection: "row",
                    }}
                >
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 40 / 2,
                            overflow: "hidden",
                            borderColor: "white",
                            borderWidth: 2,
                        }}
                    >
                        <Image
                            style={{
                                width: "100%",
                                height: "100%",
                                resizeMode: "contain",
                            }}
                            source={{ uri: `${image}` }}
                        />
                    </View>
                    <Text
                        style={{
                            color: white,
                            fontSize: 14,
                            fontWeight: "bold",
                            marginLeft: 10,
                        }}
                    >
                        Hi, John Doe
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, marginHorizontal: 20 }}>
                <View
                    style={{
                        height: 157,
                        borderRadius: 20,
                        backgroundColor: blue,
                        marginTop: -40,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ fontSize: 10, color: white }}>
                        Wallet Balance
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginVertical: 10,
                        }}
                    >
                        <NairaIcon />
                        <Text
                            style={{
                                color: white,
                                fontWeight: "bold",
                                fontSize: 27,
                                marginLeft: 5,
                                marginRight: 10,
                            }}
                        >
                            {toggle ? "**** ***" : "5,000.00"}
                        </Text>
                        <TouchableOpacity onPress={handleHideBalance}>
                            {toggle ? (
                                <Ionicons name="eye" size={18} color={white} />
                            ) : (
                                <Ionicons
                                    name="eye-off"
                                    size={18}
                                    color={white}
                                />
                            )}
                        </TouchableOpacity>
                    </View>
                    <WhiteBtn />
                </View>
                <Text style={{ color: gray, marginTop: 10 }}>Quick links</Text>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                >
                    <View style={styles.mainContainer}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: pryColor,
                                height: 163,
                                borderRadius: 10,
                                marginRight: 2,
                                marginBottom: 2,
                                overflow: "hidden",
                            }}
                            onPress={handlePress("Scan")}
                        >
                            <View style={[styles.boxContainer]}>
                                <Blur />
                            </View>
                            <View style={[styles.box]}>
                                <Text style={[styles.text]}>Scan to Pay</Text>
                                <BarcodeIcon />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                backgroundColor: black,
                                height: 205,
                                borderRadius: 10,
                                marginRight: 2,
                                marginTop: 2,
                                overflow: "hidden",
                            }}
                            onPress={handlePress("ShareFundsMainView")}
                        >
                            <View style={[styles.boxContainer]}>
                                <Blur />
                            </View>
                            <View style={[styles.box]}>
                                <Text style={[styles.text]}>Share Funds</Text>
                                <ShareIcon />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mainContainer}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: green,
                                height: 205,
                                borderRadius: 10,
                                marginLeft: 2,
                                marginBottom: 2,
                                overflow: "hidden",
                            }}
                            onPress={handlePress("CheckOut")}
                        >
                            <View style={[styles.boxContainer]}>
                                <Blur />
                            </View>
                            <View style={[styles.box]}>
                                <Text style={[styles.text]}>Check Out</Text>
                                <CheckoutIcon />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                backgroundColor: blue,
                                height: 163,
                                borderRadius: 10,
                                marginLeft: 2,
                                marginTop: 2,
                                overflow: "hidden",
                            }}
                            onPress={handlePress("LoadTransitCard")}
                        >
                            <View style={[styles.boxContainer]}>
                                <Blur />
                            </View>
                            <View style={[styles.box]}>
                                <Text style={[styles.text]}>
                                    Load Transit Card
                                </Text>
                                <CardIcon />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    boxContainer: {
        flex: 1,
        position: "absolute",
        marginLeft: "80%",
        marginTop: -5,
        alignItems: "flex-end",
    },
    mainContainer: {
        width: "50%",
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        color: white,
        marginBottom: 10,
    },
    box: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Home;
