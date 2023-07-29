import * as React from "react"
import Svg, { Circle, Path, G } from "react-native-svg"
const AddWorkoutIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24 * props.scale}
        height={24 * props.scale}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        {...props}
    >
        <G scale={props.scale}>
            <Circle cx={12} cy={12} r={10} />
            <Path d="M12 8v8M8 12h8" />
        </G>
    </Svg>
)
export default AddWorkoutIcon;