import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class Brightness4Round {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M22.6 11.29 20 8.69V5c0-.55-.45-1-1-1h-3.69l-2.6-2.6a.996.996 0 0 0-1.41 0L8.69 4H5c-.55 0-1 .45-1 1v3.69l-2.6 2.6a.996.996 0 0 0 0 1.41L4 15.3V19c0 .55.45 1 1 1h3.69l2.6 2.6c.39.39 1.02.39 1.41 0l2.6-2.6H19c.55 0 1-.45 1-1v-3.69l2.6-2.6c.39-.39.39-1.03 0-1.42zm-4.68 1.69a5.997 5.997 0 0 1-3.88 4.66c-1.21.43-2.41.45-3.5.18-.41-.1-.48-.65-.13-.9C11.98 15.84 13 14.04 13 12s-1.02-3.84-2.58-4.92c-.35-.24-.29-.79.13-.9 1.09-.27 2.29-.25 3.5.18 2.02.72 3.54 2.54 3.88 4.66.05.33.07.66.07.98-.01.32-.03.65-.08.98z\"/>")
      .name("Brightness4Round")
  }
}

export default Brightness4Round as Pretty as Typed<DLightIconType, HTMLSpanElement>
