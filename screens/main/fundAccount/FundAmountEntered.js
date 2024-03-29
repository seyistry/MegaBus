import React, { useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Alert,
    Modal,
    StyleSheet,
    Pressable,
    ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Header from "../../../components/Header";
import NairaIcon from "../../../assets/image/NairaIcon";
import OTPTextView from "react-native-otp-textinput";
import { useRoute } from "@react-navigation/native";
import { blue, grey, labelgray, pryColor, white } from "../../../utils/color";
import FormInput from "../../../components/input/FormInput";
import PButton from "../../../components/button/pryButton/PButton";
import CardList from "../../../components/CardList";
import Goto from "../../../navigation/Goto";
import { BlurView } from "expo-blur";

const FundAmountEntered = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const route = useRoute();
    const { amount } = route.params;

    const handleConfirmPin = () => {
        return Goto({ direction: "Success", title: "COMPLETED" });
    };

    const handlePress = () => {
        return Goto({ direction: "My Card" });
    };

    return (
        <View style={{ flex: 1, backgroundColor: white }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <BlurView
                    intensity={100}
                    tint="dark"
                    style={styles.blurContainer}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View
                                style={{
                                    position: "absolute",
                                    width: 320,
                                    alignItems: "flex-start",
                                    left: 3,
                                    top: 2,
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => setModalVisible(false)}
                                >
                                    <MaterialIcons
                                        name="cancel"
                                        size={31}
                                        color="#FA0A0A"
                                    />
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    position: "absolute",
                                    borderWidth: 0.3,
                                    width: 320,
                                    top: 35,
                                    opacity: 0.1,
                                }}
                            />
                            <Text
                                style={{
                                    fontFamily: "HeeboB",
                                    marginTop: 20,
                                    fontSize: 18,
                                }}
                            >
                                Security Verification
                            </Text>
                            <Text
                                style={{ fontFamily: "HeeboR", fontSize: 14 }}
                            >
                                Input your PIN
                            </Text>
                            <View style={{ marginTop: 30, marginBottom: 10 }}>
                                <OTPTextView
                                    // handleTextChange={(e) => {}}
                                    containerStyle={styles.textInputContainer}
                                    textInputStyle={styles.roundedTextInput}
                                    tintColor={pryColor}
                                />
                            </View>
                            <TouchableOpacity onPress={handleConfirmPin()}>
                                <PButton name="Confirm" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </BlurView>
            </Modal>

            <Header name="Fund Account" />
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        marginTop: 50,
                        backgroundColor: "#F7F7F7",
                        height: 93,
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "HeeboR",
                            color: labelgray,
                            fontSize: 18,
                            textAlign: "center",
                        }}
                    >
                        Amount
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <NairaIcon color={pryColor} />
                        <Text
                            style={{
                                fontSize: 29,
                                fontFamily: "HeeboXb",
                                color: pryColor,
                            }}
                        >
                            {amount}
                        </Text>
                    </View>
                </View>
                <Text
                    style={{
                        fontSize: 14,
                        fontFamily: "HeeboB",
                        marginLeft: 20,
                        marginVertical: 30,
                    }}
                >
                    Payment methods
                </Text>
                <View style={{ marginHorizontal: 20 }}>
                    <CardList card="master" title="**** 6789" on={true} />
                    <CardList card="master" title="**** 2345" on={false} />
                    <CardList card="visa" title="**** 1309" on={false} />
                    <TouchableOpacity
                        style={{ flexDirection: "row", marginTop: 10 }}
                        onPress={handlePress()}
                    >
                        <Ionicons
                            name="ios-add-circle-outline"
                            size={18}
                            color={pryColor}
                        />
                        <Text
                            style={{
                                fontFamily: "HeeboR",
                                color: pryColor,
                                marginLeft: 10,
                                fontSize: 12,
                            }}
                        >
                            Add new card
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        marginTop: 148,
                        marginBottom: 25,
                    }}
                >
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <PButton name="Next" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    blurContainer: {
        flex: 1,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    textInputContainer: {
        marginBottom: 20,
    },
    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 4,
    },
});

export default FundAmountEntered;
