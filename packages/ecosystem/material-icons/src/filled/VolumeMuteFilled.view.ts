import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class VolumeMuteFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M7 9v6h4l5 5V4l-5 5H7z\"/>")
      .name("VolumeMuteFilled")
  }
}

export default VolumeMuteFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
