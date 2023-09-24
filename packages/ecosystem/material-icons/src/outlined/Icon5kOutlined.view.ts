import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class Icon5kOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z\"/><path d=\"M11 14v-1.5c0-.55-.45-1-1-1H8v-1h3V9H6.5v3.5h3v1h-3V15H10c.55 0 1-.45 1-1zm3.5-1.25L16.25 15H18l-2.25-3L18 9h-1.75l-1.75 2.25V9H13v6h1.5z\"/>")
      .name("Icon5kOutlined")
  }
}

export default Icon5kOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
