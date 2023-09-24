import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SwapHorizOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z\"/>")
      .name("SwapHorizOutlined")
  }
}

export default SwapHorizOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
