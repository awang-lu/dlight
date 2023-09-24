import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class HouseboatFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12 16c-1.95 0-2.1 1-3.34 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1 1.19 0 1.42 1 3.33 1 1.95 0 2.08-1 3.32-1s1.37 1 3.32 1c1.91 0 2.14-1 3.33-1 1.18 0 1.45 1 3.35 1v-2c-1.24 0-1.38-1-3.33-1-1.91 0-2.14 1-3.33 1-1.24 0-1.39-1-3.34-1zm8.34-4.66-1.37 1.37c-.19.18-.45.29-.71.29H17V9.65l1.32.97L19.5 9 12 3.5 4.5 9l1.18 1.61L7 9.65V13H5.74c-.27 0-.52-.11-.71-.29l-1.37-1.37-1.41 1.41 1.37 1.37c.56.56 1.33.88 2.12.88h12.51c.8 0 1.56-.32 2.12-.88l1.37-1.37-1.4-1.41zM13 13h-2v-2h2v2z\"/>")
      .name("HouseboatFilled")
  }
}

export default HouseboatFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
