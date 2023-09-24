import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class SentimentSatisfiedOutlined {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<circle cx=\"15.5\" cy=\"9.5\" r=\"1.5\"/><circle cx=\"8.5\" cy=\"9.5\" r=\"1.5\"/><path d=\"M12 16c-1.48 0-2.75-.81-3.45-2H6.88a5.495 5.495 0 0 0 10.24 0h-1.67c-.7 1.19-1.97 2-3.45 2zm-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/>")
      .name("SentimentSatisfiedOutlined")
  }
}

export default SentimentSatisfiedOutlined as Pretty as Typed<DLightIconType, HTMLSpanElement>
