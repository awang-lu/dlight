import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SignalCellularNullOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M20 6.83V20H6.83L20 6.83M22 2 2 22h20V2z\"/>")
      .name("SignalCellularNullOutlined")
  }
}

export default SignalCellularNullOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
