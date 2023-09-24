import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class HandymanRound {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"m21.67 18.17-4.72-4.72c-.48-.48-.99-.59-1.58-.59l-2.54 2.54c0 .59.11 1.11.59 1.58l4.72 4.72c.39.39 1.02.39 1.41 0l2.12-2.12a.996.996 0 0 0 0-1.41z\"/><path d=\"M16.63 9.49c.39.39 1.02.39 1.41 0l.71-.71 2.12 2.12a3 3 0 0 0 0-4.24l-2.83-2.83a.996.996 0 0 0-1.41 0l-.71.71V2c0-.62-.76-.95-1.21-.5l-2.54 2.54c-.45.45-.12 1.21.5 1.21h2.54l-.71.71a.996.996 0 0 0 0 1.41l.35.35-2.89 2.89-4.11-4.13v-1c0-.27-.11-.52-.29-.71L5.54 2.74a.996.996 0 0 0-1.41 0L2.71 4.16a.996.996 0 0 0 0 1.41L4.73 7.6c.19.19.44.29.71.29h1l4.13 4.13-.85.85h-1.3c-.53 0-1.04.21-1.41.59l-4.72 4.72a.996.996 0 0 0 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l4.72-4.72c.38-.38.59-.88.59-1.41v-1.29l5.15-5.15.35.35z\"/>")
      .name("HandymanRound")
  }
}

export default HandymanRound as Pretty as Typed<DLightIconType, HTMLSpanElement>
