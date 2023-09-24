import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class TabletRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z\"/>")
      .name("TabletRound")
  }
}

export default TabletRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
