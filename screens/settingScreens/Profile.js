import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { pryColor, skyBlue, white } from "../../utils/color";

const Profile = () => {
    const image = `https://i.pravatar.cc/150?img=12`;
    return (
        <View style={{ flex: 1 }}>
            <Header name="My Profile" />
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20,
                }}
            >
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
                <TouchableOpacity
                    style={{
                        backgroundColor: pryColor,
                        width: 30,
                        height: 30,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 15,
                        marginTop: -31,
                        marginLeft: 90,
                        borderWidth: 2,
                        borderColor: white,
                    }}
                >
                    <Ionicons name="camera-sharp" size={18} color={white} />
                </TouchableOpacity>
            </View>
            <View style={styles.editContainer}>
                <Text style={styles.editTitle}>Full name</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.editText}>John Doe</Text>
                    <TouchableOpacity style={styles.editBtn}>
                        <View style={styles.editBtnContainer}>
                            <MaterialIcons
                                name="edit"
                                size={15}
                                color={white}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.editContainer}>
                <Text style={styles.editTitle}>Mobile Number</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.editText}>08036401667</Text>
                    <TouchableOpacity style={styles.editBtn}>
                        <View style={styles.editBtnContainer}>
                            <MaterialIcons
                                name="edit"
                                size={15}
                                color={white}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.editContainer}>
                <Text style={styles.editTitle}>Email</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.editText}>JohnDoe@gmail.com</Text>
                    <TouchableOpacity style={styles.editBtn}>
                        <View style={styles.editBtnContainer}>
                            <MaterialIcons
                                name="edit"
                                size={15}
                                color={white}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.editContainer}>
                <Text style={styles.editTitle}>Date of Birth</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.editText}>October 28</Text>
                    <TouchableOpacity style={styles.editBtn}>
                        <View style={styles.editBtnContainer}>
                            <MaterialIcons
                                name="edit"
                                size={15}
                                color={white}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    img: {
        width: 120,
        height: 120,
        marginTop: -30,
        borderRadius: 120 / 2,
        overflow: "hidden",
        borderColor: "white",
        borderWidth: 2,
    },
    editContainer: {
        marginTop: 20,
        marginHorizontal: 20,
        height: 45,
        backgroundColor: skyBlue,
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    editTitle: {
        fontFamily: "HeeboM",
        fontSize: 14,
        marginLeft: 10,
    },
    editText: {
        fontFamily: "HeeboM",
        fontSize: 13,
        color: "#595959",
        marginRight: 10,
    },
    editBtnContainer: {
        height: 23,
        width: 23,
        backgroundColor: pryColor,
        borderRadius: 23 / 2,
        justifyContent: "center",
        alignItems: "center",
    },
    editBtn: {
        marginRight: 10,
    },
});

export default Profile;
