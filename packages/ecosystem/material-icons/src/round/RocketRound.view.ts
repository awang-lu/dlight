import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class RocketRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M11.41 2.87a.99.99 0 0 1 1.18 0c1.22.88 3.91 3.59 3.91 10.13 0 2.16-.78 4.76-1.36 6.35-.14.39-.51.65-.93.65H9.8c-.42 0-.8-.26-.94-.65C8.28 17.76 7.5 15.16 7.5 13c0-6.54 2.69-9.25 3.91-10.13zM14 11c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-6.31 9.52c-.48-1.23-1.52-4.17-1.67-6.87l-1.13.75c-.56.38-.89 1-.89 1.67v4.45c0 .71.71 1.19 1.37.93l2.32-.93zm12.31 0v-4.45c0-.67-.33-1.29-.89-1.66l-1.13-.75c-.15 2.69-1.2 5.64-1.67 6.87l2.32.93c.66.25 1.37-.23 1.37-.94z\"/>")
      .name("RocketRound")
  }
}

export default RocketRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
