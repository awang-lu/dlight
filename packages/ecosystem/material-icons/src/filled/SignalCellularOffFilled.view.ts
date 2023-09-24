import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SignalCellularOffFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m21 1-8.59 8.59L21 18.18V1zM4.77 4.5 3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73 4.77 4.5z\"/>")
      .name("SignalCellularOffFilled")
  }
}

export default SignalCellularOffFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
