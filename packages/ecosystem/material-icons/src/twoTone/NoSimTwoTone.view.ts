import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class NoSimTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M7 19h9.23L7 9.77z\" opacity=\".3\"/><path d=\"M3.79 3.74 2.38 5.15l2.74 2.74-.12.12V19c0 1.1.9 2 2 2h10c.35 0 .68-.1.97-.26l1.88 1.88 1.41-1.41L3.79 3.74zM7 19V9.77L16.23 19H7z\"/><path d=\"M10.84 5 9.36 6.47 17 14.11V5z\" opacity=\".3\"/><path d=\"M10.84 5H17v9.11l2 2V5c0-1.1-.9-2-2-2h-6.99L7.95 5.06l1.41 1.41L10.84 5z\"/>")
      .name("NoSimTwoTone")
  }
}

export default NoSimTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
