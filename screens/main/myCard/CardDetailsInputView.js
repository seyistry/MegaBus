import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useForm, Controller } from "react-hook-form";
import {
    cardNumberFormatter,
    expirationDateFormatter,
} from "../../../utils/formatters";
import Header from "../../../components/Header";
import { pryColor } from "../../../utils/color";
import PButton from "../../../components/button/pryButton/PButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import Goto from "../../../navigation/Goto";
import FormInput from "../../../components/input/FormInput";

const Pickers = () => {
    const [selectedOptions, setSelectedOptions] = useState();
    return (
        <View style={styles.input}>
            <Picker
                selectedValue={selectedOptions}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedOptions(itemValue)
                }
            >
                <Picker.Item
                    label="Select Bank"
                    value=""
                    style={{
                        // marginLeft: 100,
                        color: pryColor,
                        fontSize: 12,
                    }}
                />
                <Picker.Item
                    label="BOA"
                    value="BOA"
                    style={styles.pickerItem}
                />
                <Picker.Item
                    label="Chase"
                    value="Chase"
                    style={styles.pickerItem}
                />
                <Picker.Item label="JP" value="JP" style={styles.pickerItem} />
            </Picker>
        </View>
    );
};

const CardDetailsInputView = () => {
    const {
        register,
        setValue,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            cardNumber: "",
            cardExpDate: "",
            cvvCode: "",
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const handlePress = () => {
        return Goto({ direction: "MyCardOTPcodeView" });
    };

    const onChange = (arg) => {
        return {
            value: arg.nativeEvent.text,
        };
    };

    // console.log("errors", errors);

    const handleChange = (value) => {
        cardNumberFormatter;
    };

    return (
        <ScrollView style={styles.container}>
            <Header name="My Card" />
            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <Text style={{ fontFamily: "HeeboXb", fontSize: 14 }}>
                    Add New Bank Card
                </Text>
                <Text
                    style={{
                        fontFamily: "HeeboR",
                        fontSize: 14,
                        marginTop: 5,
                    }}
                >
                    Please fill in the card information
                </Text>
            </View>
            <View style={{ flex: 1, marginHorizontal: 20, marginTop: 20 }}>
                <Text style={styles.label}>Select Bank</Text>
                <Pickers />
                <Text style={styles.label}>Card Number</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInput
                            name="card number"
                            keyboardType="numeric"
                            placeholder="xxxx-xxxx-xxxx-xxxx"
                            // style={styles.input}
                            onBlur={onBlur}
                            onChangeText={(newValue) =>
                                onChange(cardNumberFormatter(value, newValue))
                            }
                            value={value}
                            maxLength={19}
                        />
                    )}
                    name="cardNumber"
                    rules={{ required: true, minLength: 19, maxLength: 19 }}
                />
                <View style={{ flexDirection: "row" }}>
                    <View style={{ width: "60%" }}>
                        <Text style={styles.label}>Exp. Date</Text>
                        <Controller
                            control={control}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <FormInput
                                    name="card Expire date"
                                    keyboardType="numeric"
                                    placeholder="MM/YY"
                                    // style={styles.input}
                                    onBlur={onBlur}
                                    onChangeText={(newValue) =>
                                        onChange(
                                            expirationDateFormatter(
                                                value,
                                                newValue
                                            )
                                        )
                                    }
                                    value={value}
                                    maxLength={5}
                                />
                            )}
                            name="cardExpDate"
                            rules={{
                                required: true,
                                minLength: 5,
                                maxLength: 5,
                            }}
                        />
                    </View>
                    <View style={{ width: "40%", paddingLeft: 20 }}>
                        <Text style={styles.label}>CVV</Text>
                        <Controller
                            control={control}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <FormInput
                                    name="cvv"
                                    keyboardType="numeric"
                                    // style={styles.input}
                                    onBlur={onBlur}
                                    onChangeText={(value) => onChange(value)}
                                    value={value}
                                    maxLength={3}
                                />
                            )}
                            name="cvvCode"
                            rules={{
                                required: true,
                                minLength: 3,
                                maxLength: 3,
                            }}
                        />
                    </View>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={handleSubmit(handlePress())}>
                        <PButton name="Next" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    label: {
        color: "#8F8F8F",
        margin: 10,
        marginLeft: 0,
    },
    button: {
        flex: 1,
        // justifyContent: "flex-end",
        marginTop: 180,
        alignItems: "center",
        borderRadius: 4,
    },
    input: {
        backgroundColor: "white",
        borderColor: pryColor,
        borderWidth: 1,
        height: 44,
        padding: 10,
        borderRadius: 4,
    },
    pickerItem: {
        fontSize: 14,
        color: pryColor,
    },
    optionsContainer: {
        // width: 110,
        // borderWidth: 1,
        // borderColor: "#C2DEEE",
        // height: 28,
        // borderRadius: 50,
        // justifyContent: "center",
    },
});

export default CardDetailsInputView;
