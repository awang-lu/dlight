import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class AlignHorizontalCenterFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M11 2h2v5h8v3h-8v4h5v3h-5v5h-2v-5H6v-3h5v-4H3V7h8z\"/>")
      .name("AlignHorizontalCenterFilled")
  }
}

export default AlignHorizontalCenterFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
