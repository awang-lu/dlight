import { View } from "@dlightjs/dlight"
import { type Typed, type Pretty } from "@dlightjs/types"
import { ForwardProp } from "@dlightjs/decorators"
import DLightIcon, { type DLightIconType } from "../DLightIcon.view"

@View
@ForwardProp
class EmojiNatureFilled {
  Body() {
    DLightIcon()
      .forwardProps(true)
      .content("<path d=\"M21.94 4.88A1.32 1.32 0 0 0 20.68 4H19.6l-.31-.97C19.15 2.43 18.61 2 18 2s-1.15.43-1.29 1.04L16.4 4h-1.07c-.57 0-1.08.35-1.26.88-.19.56.04 1.17.56 1.48l.87.52-.4 1.24c-.23.58-.04 1.25.45 1.62.23.17.51.26.78.26.31 0 .61-.11.86-.32l.81-.7.81.7c.25.21.55.32.86.32.27 0 .55-.09.78-.26.5-.37.68-1.04.45-1.62l-.39-1.24.87-.52c.51-.31.74-.92.56-1.48zM18 7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-4.51 3.51c-.43-.43-.94-.73-1.49-.93V8h-1v1.38c-.11-.01-.23-.03-.34-.03-1.02 0-2.05.39-2.83 1.17-.16.16-.3.34-.43.53L6 10.52a3.01 3.01 0 0 0-3.83 1.82c-.27.75-.23 1.57.12 2.29.23.48.58.87 1 1.16-.38 1.35-.06 2.85 1 3.91a3.981 3.981 0 0 0 3.91 1c.29.42.68.77 1.16 1 .42.2.85.3 1.29.3.34 0 .68-.06 1.01-.17a3.007 3.007 0 0 0 1.82-3.85l-.52-1.37c.18-.13.36-.27.53-.43.87-.87 1.24-2.04 1.14-3.17H16v-1h-1.59c-.19-.55-.49-1.06-.92-1.5zm-8.82 3.78c-.25-.09-.45-.27-.57-.51s-.13-.51-.04-.76c.19-.52.76-.79 1.26-.61l3.16 1.19c-1.15.6-2.63 1.11-3.81.69zm6.32 5.65c-.25.09-.52.08-.76-.04a.989.989 0 0 1-.51-.57c-.42-1.18.09-2.65.7-3.8l1.18 3.13c.18.52-.09 1.1-.61 1.28zm1.21-5.34-.61-1.61c0-.01-.01-.02-.02-.03l-.06-.12a.673.673 0 0 0-.07-.11l-.09-.09-.09-.09c-.03-.03-.07-.05-.11-.07-.04-.02-.07-.05-.12-.06-.01 0-.02-.01-.03-.02l-1.6-.6a1.966 1.966 0 0 1 2.67.13c.73.73.77 1.88.13 2.67z\"/>")
      .name("EmojiNatureFilled")
  }
}

export default EmojiNatureFilled as Pretty as Typed<DLightIconType, HTMLSpanElement>
