import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import { skyBlue } from "../../utils/color";

const Settings = ({ navigation }) => {
    return (
        <View>
            <Header name="Settings" />
            <View style={{ marginHorizontal: 20 }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Change Pin");
                    }}
                    style={[styles.container, { marginTop: 60 }]}
                >
                    <Text style={styles.text}> Change Pin </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Change Password");
                    }}
                    style={styles.container}
                >
                    <Text style={styles.text}> Change Password </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Text style={styles.text}> My Beneficiaries </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 2,
        height: 45,
        backgroundColor: skyBlue,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    text: {
        fontFamily: "HeeboM",
        fontSize: 14,
    },
});

export default Settings;
