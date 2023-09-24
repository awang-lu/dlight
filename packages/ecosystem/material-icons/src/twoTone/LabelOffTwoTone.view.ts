import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class LabelOffTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M5 7.03V17h9.97zM16 7h-5.37l7.29 7.29L19.55 12z\" opacity=\".3\"/><path d=\"m16 7 3.55 5-1.63 2.29 1.43 1.43L22 12l-4.37-6.16C17.27 5.33 16.67 5 16 5l-7.37.01 2 1.99H16zM2 4.03l1.58 1.58C3.22 5.96 3 6.46 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.28 0 .55-.07.79-.18L18.97 21l1.41-1.41L3.41 2.62 2 4.03zm3 3L14.97 17H5V7.03z\"/>")
      .name("LabelOffTwoTone")
  }
}

export default LabelOffTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
