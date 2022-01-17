import React, { useState } from "react";
import {
    Alert,
    Modal,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { Entypo, Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import {
    NavigationContainer,
    useNavigation,
    getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";
import { BlurView } from "expo-blur";

import Stacks from "./Stacks";
import { pryColor } from "../utils/color";
import LoadApp from "../screens/LoadApp";

const Drawer = createDrawerNavigator();

function CustomDrawerContent() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const image = `https://i.pravatar.cc/150?img=12`;
    return (
        <View style={{ marginLeft: 30 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <BlurView
                    intensity={100}
                    tint="dark"
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            height: 150,
                            width: 290,
                            backgroundColor: "white",
                            borderRadius: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: "HeeboB",
                                fontSize: 14,
                                color: "#FA0A0A",
                                textAlign: "center",
                                marginTop: 20,
                            }}
                        >
                            WARNING
                        </Text>
                        <Text
                            style={{
                                fontFamily: "HeeboR",
                                fontSize: 16,
                                textAlign: "center",
                                // marginTop: 20,
                            }}
                        >
                            Are you sure you want to logout
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                marginTop: 20,
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                                style={[
                                    styles.btnContainer,
                                    {
                                        backgroundColor: "white",
                                        marginRight: 20,
                                    },
                                ]}
                            >
                                <Text style={styles.btnText}>No</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(false);
                                    navigation.navigate("Login");
                                }}
                                style={[
                                    styles.btnContainer,
                                    { backgroundColor: "#FA0A0A" },
                                ]}
                            >
                                <Text
                                    style={[styles.btnText, { color: "white" }]}
                                >
                                    Yes
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </BlurView>
            </Modal>
            <View style={[styles.img]}>
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
                    color: "white",
                    fontSize: 19,
                    marginTop: 20,
                    fontFamily: "HeeboM",
                }}
            >
                John Doe
            </Text>
            <Text
                style={{
                    color: "white",
                    fontSize: 15,
                    fontFamily: "HeeboR",
                }}
            >
                johndoe@gmail.com
            </Text>
            <TouchableOpacity
                style={{
                    backgroundColor: "white",
                    width: 100,
                    height: 30,
                    borderRadius: 2,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                }}
                onPress={() => {
                    navigation.navigate("My Profile");
                }}
            >
                <Text
                    style={{
                        color: pryColor,
                        fontFamily: "HeeboM",
                        fontSize: 12,
                    }}
                >
                    View Profile
                </Text>
            </TouchableOpacity>
            <View
                style={{
                    width: 227,
                    borderWidth: 0.3,
                    borderColor: "white",
                    marginVertical: 30,
                }}
            />
            <View style={[styles.drawerLinkContainer]}>
                <Ionicons name="settings-outline" size={22} color={"white"} />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Settings");
                    }}
                >
                    <Text style={[styles.text]}>Settings</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.drawerLinkContainer]}>
                <AntDesign name="customerservice" size={22} color={"white"} />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Customer Service");
                    }}
                >
                    <Text style={[styles.text]}>Customer Service</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.drawerLinkContainer]}>
                <Feather name="info" size={22} color="white" />
                <TouchableOpacity>
                    <Text style={[styles.text]}>About</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.drawerLinkContainer]}>
                <Feather name="help-circle" size={22} color="white" />
                <TouchableOpacity>
                    <Text style={[styles.text]}>Help & Feedback</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.drawerLinkContainer]}>
                <Feather name="log-out" size={22} color="white" />
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={[styles.text]}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function Drawers() {
    const DisableScreens = [
        "Login",
        "SignUp",
        "LoginSignUp",
        "LoadApp",
        "Onboarding",
        "SignUpAuthSetUp",
        "SignUpBio",
        "SignUpCreatePin",
        "SignUpOTP",
        "Success",
    ];
    return (
        <Drawer.Navigator
            drawerType="slide"
            screenOptions={{
                drawerStyle: {
                    backgroundColor: pryColor,
                    width: 280,
                },
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            overlayColor="transparent"
        >
            <Drawer.Screen
                name="Home"
                component={Stacks}
                options={({ route }) => {
                    const routeName =
                        getFocusedRouteNameFromRoute(route) ?? "Home";
                    if (DisableScreens.indexOf(routeName) != -1)
                        return { headerShown: false, swipeEnabled: false };
                    else {
                        return { headerShown: false, swipeEnabled: true };
                    }
                }}
            />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 85,
        height: 85,
        marginTop: 60,
        borderRadius: 85 / 2,
        overflow: "hidden",
        borderColor: "white",
        borderWidth: 2,
    },
    drawerLinkContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
    },
    text: {
        fontFamily: "HeeboM",
        fontSize: 16,
        color: "white",
        marginLeft: 20,
    },
    btnText: {
        fontFamily: "HeeboM",
        fontSize: 16,
        // color: "white",
        // marginLeft: 20,
    },
    btnContainer: {
        width: 100,
        height: 30,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    },
    bg: {
        flex: 1,
        resizeMode: "cover",
    },
});

export default Drawers;
