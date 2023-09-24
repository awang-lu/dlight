import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class PlayDisabledOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M16.45 13.62 19 12 8 5v.17zM2.81 2.81 1.39 4.22 8 10.83V19l4.99-3.18 6.78 6.78 1.41-1.41L2.81 2.81zM10 15.36v-2.53l1.55 1.55-1.55.98z\"/>")
      .name("PlayDisabledOutlined")
  }
}

export default PlayDisabledOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
