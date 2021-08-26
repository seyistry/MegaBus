import React, { useState } from "react";
import {
    TextInput,
    View,
    Platform,
    TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "./styles";

const DOBPicker = () => {
    const [date, setDate] = useState(new Date());
    const [toggle, setToggleDate] = useState(false);
    const [mode, setMode] = useState("date");
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === "ios");
        setDate(currentDate);
        setToggleDate(true);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode("date");
    };

    return (
        <View>
            <View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                        onPress={showDatepicker}
                    >
                        <View>
                            <TextInput
                                style={[styles.input, { width: 200 }]}
                                editable={false}
                                value={
                                    toggle
                                        ? date.toLocaleDateString()
                                        : "Date of Birth"
                                }
                            />
                        </View>
                        <View
                            style={{
                                marginRight: 10,
                                justifyContent: "center",
                            }}
                        >
                            <View
                                style={{
                                    width: 20,
                                    height: 20,
                                    justifyContent: "center",
                                }}
                            >
                                <Ionicons
                                    name="caret-down"
                                    size={13}
                                    color="#666"
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

export default DOBPicker;
