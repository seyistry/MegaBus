import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function CheckOn(props) {
    return (
        <Svg
            width={26}
            height={26}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={13} cy={13} r={13} fill="#0DE809" />
            <Path
                d="M10.613 19.231l-4.438-4.438a1.356 1.356 0 111.918-1.918l2.52 2.519 7.293-7.293a1.356 1.356 0 111.919 1.918l-9.212 9.212z"
                fill="#fff"
            />
        </Svg>
    );
}

export default CheckOn;
