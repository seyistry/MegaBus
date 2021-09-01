import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Nav(props) {
    return (
        <Svg
            width={22}
            height={17}
            viewBox="0 0 22 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fill="#fff"
                d="M0 0h21.958v2.429H0zM0 14.572h21.958v2.429H0zM0 7.286h17.335v2.429H0z"
            />
        </Svg>
    );
}

export default Nav;
