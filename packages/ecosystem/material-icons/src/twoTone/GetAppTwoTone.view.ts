import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class GetAppTwoTone {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M14.17 11H13V5h-2v6H9.83L12 13.17z\" opacity=\".3\"/><path d=\"M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z\"/>")
      .name("GetAppTwoTone")
  }
}

export default GetAppTwoTone as Pretty as Typed<DLightIconType, HTMLSpanElement>
