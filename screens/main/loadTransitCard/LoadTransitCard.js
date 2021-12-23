import React, { useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Switch,
    Modal,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import OTPTextView from "react-native-otp-textinput";
import { useNavigation } from "@react-navigation/native";
import Header from "../../../components/Header";
import { Picker } from "@react-native-picker/picker";
import { useForm, Controller } from "react-hook-form";
import { blue, gray, grey, pryColor, white } from "../../../utils/color";
import FormInput from "../../../components/input/FormInput";
import PButton from "../../../components/button/pryButton/PButton";
import Goto from "../../../navigation/Goto";
import { amountFormatter } from "../../../utils/formatters";
import BalanceDashboard from "../../../components/BalanceDashboard";
import { BlurView } from "expo-blur";

const LoadTransitCard = () => {
    const {
        register,
        setValue,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();

    const navigation = useNavigation();

    const onSubmit = (data) => {
        return setModalVisible(() => true);
    };

    const handleConfirmPin = (props) => {
        navigation.navigate("Success", {
            title: "COMPLETED",
        });
    };

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: white }}
            stickyHeaderIndices={[0]}
        >
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
                                    marginTop: 20,
                                    fontSize: 18,
                                    fontWeight: "bold",
                                }}
                            >
                                Security Verification
                            </Text>
                            <Text style={{ fontSize: 14 }}>Input your PIN</Text>
                            <View style={{ marginTop: 30, marginBottom: 10 }}>
                                <OTPTextView
                                    // handleTextChange={(e) => {}}
                                    containerStyle={styles.textInputContainer}
                                    textInputStyle={styles.roundedTextInput}
                                    tintColor={pryColor}
                                />
                            </View>
                            <TouchableOpacity onPress={handleConfirmPin}>
                                <PButton name="Confirm" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </BlurView>
            </Modal>
            <Header name="Load Transit Card" />
            <BalanceDashboard />
            <View style={{ flex: 1, marginHorizontal: 20 }}>
                <Text
                    style={{
                        marginVertical: 30,
                        fontFamily: "HeeboB",
                        fontSize: 14,
                    }}
                >
                    Load your Transit card from Wallet
                </Text>
                <View>
                    <Text style={styles.label}>Amount</Text>
                    <Controller
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInput
                                errorText={errors?.Amount?.message}
                                keyboardType="numeric"
                                maxLength={6}
                                onBlur={onBlur}
                                onChangeText={(newValue) =>
                                    onChange(amountFormatter(value, newValue))
                                }
                                value={value}
                                // register={register}
                                name="Amount"
                                minLength={3}
                            />
                        )}
                        name="Amount"
                        rules={{
                            required: {
                                value: true,
                                message: "Amount is required",
                            },
                            maxLength: 6,
                            minLength: { value: 3, message: "Minimum of N100" },
                            message: "Name is required",
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            paddingBottom: 20,
                            alignItems: "center",
                            marginTop: 330,
                        }}
                        onPress={handleSubmit(onSubmit)}
                    >
                        <PButton name="Next" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
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
    input: {
        backgroundColor: "white",
        borderColor: pryColor,
        borderWidth: 1,
        height: 44,
        padding: 10,
        borderRadius: 4,
    },
    blurContainer: {
        flex: 1,
    },
    label: {
        fontFamily: "HeeboM",
        fontSize: 12,
        color: "#8F8F8F",
    },
    marginTop: {
        marginTop: 10,
    },
    pickerItem: {
        fontSize: 14,
        color: pryColor,
    },
});

export default LoadTransitCard;
