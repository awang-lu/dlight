import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SafetyCheckTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M12 4.14 6 6.39v4.7c0 4 2.55 7.7 6 8.83 3.45-1.13 6-4.82 6-8.83v-4.7l-6-2.25zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm1.65-2.65L11.5 12.2V9h1v2.79l1.85 1.85-.7.71z\" opacity=\".3\"/><path d=\"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L11.5 12.2V9h1v2.79l1.85 1.85-.7.71z\"/>")
      .name("SafetyCheckTwoTone")
  }
}

export default SafetyCheckTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
