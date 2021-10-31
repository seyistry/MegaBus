import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function CheckOff(props) {
    return (
        <Svg
            width={26}
            height={26}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={13} cy={13} r={12.5} fill="#F2F2F2" stroke="#9E9E9E" />
        </Svg>
    );
}

export default CheckOff;
