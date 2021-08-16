import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FacebookIcon(props) {
  return (
    <Svg
      width={11}
      height={23}
      viewBox="0 0 11 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.08 7.65V5.73c0-.289.013-.512.04-.67a1.3 1.3 0 01.182-.467c.095-.153.248-.259.46-.317.212-.06.494-.088.846-.088h1.92V.348h-3.07c-1.776 0-3.052.42-3.827 1.263-.776.843-1.163 2.085-1.163 3.726V7.65h-2.3v3.84h2.3v11.144h4.611V11.49h3.07l.406-3.841H7.079z"
        fill="#1941A7"
      />
    </Svg>
  )
}

export default FacebookIcon