import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class IntegrationInstructionsTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M11 14.17 8.83 12 11 9.83 9.59 8.41 6 12l3.59 3.59zm3.41 1.42L18 12l-3.59-3.59L13 9.83 15.17 12 13 14.17z\"/><path d=\"M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 0 0-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z\"/><path d=\"M5 5h14v14H5z\" opacity=\".3\"/>")
      .name("IntegrationInstructionsTwoTone")
  }
}

export default IntegrationInstructionsTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
