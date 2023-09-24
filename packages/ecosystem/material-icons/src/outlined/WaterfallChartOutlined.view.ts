import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class WaterfallChartOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M18 4h3v16h-3V4zM3 13h3v7H3v-7zm11-9h3v3h-3V4zm-4 1h3v4h-3V5zm-3 5h3v4H7v-4z\"/>")
      .name("WaterfallChartOutlined")
  }
}

export default WaterfallChartOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
