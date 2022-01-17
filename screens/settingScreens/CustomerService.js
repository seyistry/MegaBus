import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Header from "../../components/Header";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { pryColor, skyBlue, white } from "../../utils/color";

const CustomerService = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header name="Customer Service" />
            <View style={{ marginHorizontal: 20 }}>
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 40,
                        alignItems: "center",
                    }}
                >
                    <View
                        style={{
                            backgroundColor: skyBlue,
                            height: 75,
                            width: 75,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 75 / 2,
                            marginRight: 10,
                        }}
                    >
                        <AntDesign
                            name="customerservice"
                            size={35}
                            color={pryColor}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text
                            style={{
                                fontFamily: "HeeboM",
                                fontSize: 18,
                            }}
                        >
                            Hi, John
                        </Text>
                        <Text
                            style={{
                                fontFamily: "HeeboR",
                                fontSize: 14,
                            }}
                        >
                            You can contact our customer representative through
                            the following ways.
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        height: 45,
                        borderWidth: 2,
                        borderColor: pryColor,
                        borderRadius: 20,
                        marginTop: 40,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                    }}
                >
                    <View
                        style={{
                            width: 23,
                            height: 23,
                            backgroundColor: "#2CD429",
                            borderRadius: 23 / 2,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Ionicons
                            name="logo-whatsapp"
                            size={16}
                            color="white"
                        />
                    </View>
                    <Text
                        style={{
                            marginLeft: 10,
                            color: pryColor,
                            fontFamily: "HeeboM",
                            fontSize: 14,
                        }}
                    >
                        Chat on WhatsApp
                    </Text>
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 20,
                        justifyContent: "space-between",
                    }}
                >
                    <TouchableOpacity style={styles.btn}>
                        <Ionicons name="call" size={18} color={white} />
                        <Text style={styles.btnText}>08063615071</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Ionicons name="mail" size={20} color={white} />
                        <Text style={styles.btnText}>Support</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text
                        style={{
                            fontFamily: "HeeboM",
                            fontSize: 14,
                            marginTop: 40,
                        }}
                    >
                        Please note our working hours
                    </Text>
                    <Text
                        style={{
                            fontFamily: "HeeboR",
                            fontSize: 13,
                            color: "#8C8C8C",
                        }}
                    >
                        Mondays - Fridays
                    </Text>
                    <Text
                        style={{
                            fontFamily: "HeeboR",
                            fontSize: 14,
                        }}
                    >
                        8:30am - 6:00pm
                    </Text>
                    <Text
                        style={{
                            fontFamily: "HeeboR",
                            fontSize: 13,
                            color: "#8C8C8C",
                            marginTop: 20,
                        }}
                    >
                        Saturdays & Public Holidays
                    </Text>
                    <Text
                        style={{
                            fontFamily: "HeeboR",
                            fontSize: 14,
                        }}
                    >
                        10:00am - 4:00pm
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        height: 40,
        width: 150,
        borderRadius: 20,
        backgroundColor: pryColor,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        fontFamily: "HeeboM",
        fontSize: 14,
        color: white,
        marginLeft: 10,
    },
});

export default CustomerService;
