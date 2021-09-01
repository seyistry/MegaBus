import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CheckoutIcon(props) {
    return (
        <Svg
            width={40}
            height={45}
            viewBox="0 0 40 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M36.753 4.282a3.01 3.01 0 11-5.456-2.545 3.01 3.01 0 015.456 2.545zM6.944 41.286a1.39 1.39 0 10-1.173 2.52 1.39 1.39 0 001.173-2.52zm31.053-22.987l-5.76-2.686 1.722-3.692a3.703 3.703 0 00-5.736-4.402l-.003-.003L16.1 17.687c-.216.18-.375.4-.485.64l-.006-.003-4.098 8.787-4.144-1.933a.93.93 0 00-1.231.448L.086 38.6a.93.93 0 00.449 1.231l3.724 1.737a2.322 2.322 0 012.1-1.339c.34 0 .668.074.975.218l4.504-9.655h.001l4.669-10.01a1.849 1.849 0 001.972-.256l5.405-4.534-4.109 8.81-7.517 16.118a2.317 2.317 0 004.197 1.958l7.34-15.737 7.406 15.883a2.315 2.315 0 104.197-1.956L27.883 24.95l2.788-5.979 5.76 2.687a1.852 1.852 0 101.566-3.36z"
                fill="#fff"
            />
        </Svg>
    );
}

export default CheckoutIcon;
