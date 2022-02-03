import React, { useState } from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import iconSmall from "../../assets/image/iconSmall.png";
import logoBig from "../../assets/image/logoBig.png";
import FormInput from "../../components/input/FormInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { pryColor, labelgray } from "../../utils/color";
import ProgressBar from "../../components/progress/ProgressBar";
import PButton from "../../components/button/pryButton/PButton";
import { useForm, Controller } from "react-hook-form";

const SignUp = ({ navigation }) => {
    const {
        register,
        setValue,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const onChange = (arg) => {
        return {
            value: arg.nativeEvent.text,
        };
    };
    
    const [toggleBox, setToggleBox] = useState(false);

    const handleToggleBox = () => {
        return !toggleBox ? setToggleBox(true) : setToggleBox(false);
    };

    return (
        <ScrollView>
            <View style={{ flex: 1, marginHorizontal: 20 }}>
                <View
                    style={{
                        marginTop: 50,
                        alignItems: "center",
                    }}
                >
                    <Image source={logoBig} />
                </View>
                <View
                    style={{
                        marginTop: 40,
                        alignItems: "center",
                    }}
                >
                    <Image source={iconSmall} />
                    <View>
                        <Text
                            style={{
                                marginTop: 20,
                                fontSize: 20,
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            Sign Up
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                        marginTop: 40,
                        // width: "100%",
                        // alignItems: "center",
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Text
                            style={{
                                fontFamily: "HeeboR",
                                fontSize: 12,
                                color: labelgray,
                            }}
                        >
                            Mobile Number
                        </Text>
                        <Controller
                            defaultValue=""
                            control={control}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <FormInput
                                    errorText={errors?.MobileNumber?.message}
                                    keyboardType="numeric"
                                    minLength={10}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    name="MobileNumber"
                                />
                            )}
                            name="MobileNumber"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Mobile Number is required",
                                },
                                maxLength: 14,
                                minLength: {
                                    value: 10,
                                    message: "Minimum of 10 digits",
                                },
                                message: "Mobile Number is required",
                            }}
                        />
                    </View>
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 10,
                            marginTop: 5,
                        }}
                    >
                        Provide the mobile number you would wish to receive your
                        code.
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginHorizontal: 20,
                            marginTop: 20,
                        }}
                    >
                        <TouchableOpacity
                            onPress={handleToggleBox}
                            style={{
                                marginVertical: 20,
                                marginLeft: 10,
                            }}
                        >
                            <MaterialCommunityIcons
                                name={
                                    toggleBox
                                        ? "checkbox-marked"
                                        : "checkbox-blank-outline"
                                }
                                size={24}
                                color={pryColor}
                            />
                        </TouchableOpacity>
                        <View
                            style={{
                                flexDirection: "row",
                                flexWrap: "wrap",
                                marginLeft: 10,
                                // justifyContent: "center",
                            }}
                        >
                            <Text style={[styles.text, { fontSize: 12 }]}>
                                {"By clicking the box, you have agreed to the "}
                            </Text>
                            <TouchableOpacity>
                                <Text
                                    style={[styles.text, { color: pryColor }]}
                                >
                                    {"Terms of Services "}
                                </Text>
                            </TouchableOpacity>
                            <Text style={[styles.text]}>{"and "}</Text>
                            <TouchableOpacity>
                                <Text
                                    style={[styles.text, { color: pryColor }]}
                                >
                                    {"Privacy policy. "}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                        style={{
                            width: "100%",
                            marginTop: 50,
                            alignItems: "center",
                        }}
                    >
                        <ProgressBar width="0%" />
                        <View
                            style={{
                                flexDirection: "row",
                                marginVertical: 20,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 12,
                                }}
                            >
                                Already have an account?
                            </Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Login")}
                            >
                                <Text style={{ fontSize: 12, color: pryColor }}>
                                    {"  Login"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={handleSubmit(() =>
                                navigation.navigate("SignUpOTP")
                            )}
                            style={{ marginTop: 45 }}
                        >
                            <PButton name="Continue" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
    },
    text: {
        fontSize: 12,
    },
});
export default SignUp;
