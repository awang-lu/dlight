import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class NoAccountsTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12 6c-.52 0-1 .12-1.44.32l4.62 4.62c.2-.44.32-.92.32-1.44C15.5 7.57 13.93 6 12 6zm0-4C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-1.85.63-3.55 1.69-4.9l2.86 2.86a3.47 3.47 0 0 0 2.99 2.99l2.2 2.2c-.57-.1-1.15-.15-1.74-.15-2.32 0-4.45.8-6.14 2.12A7.957 7.957 0 0 1 4 12zm8 8c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.54-1.69 4.9z\"/><path d=\"M7.35 18.5c1.31.94 2.91 1.5 4.65 1.5s3.34-.56 4.65-1.5C15.34 17.56 13.74 17 12 17s-3.34.56-4.65 1.5zm7.83-7.56-4.62-4.62C11 6.12 11.48 6 12 6c1.93 0 3.5 1.57 3.5 3.5 0 .52-.12 1-.32 1.44z\" opacity=\".3\"/>")
      .name("NoAccountsTwoTone")
  }
}

export default NoAccountsTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
