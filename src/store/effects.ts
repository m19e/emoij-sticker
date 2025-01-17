import { atomEffect } from 'jotai-effect'
import { withHistory } from 'jotai-history'
import { RESET } from 'jotai/utils'

import {
  baseImgUrlAtom,
  emojiDatasAtom,
  rectanglesAtom,
  selectedStickerIdAtom,
} from '@/store/atoms'

const baseImgUrlHistory = withHistory(baseImgUrlAtom, 2)

/**
 * baseImgUrlがリセットされた時、
 * 1. Konva上のすべての絵文字を削除
 * 2. ベース画像atomに格納していたblobをrevokeする
 */
export const revokeEffect = atomEffect((get, set) => {
  const [url, prevUrl] = get(baseImgUrlHistory)
  if (url === null) {
    set(emojiDatasAtom, RESET)
    set(rectanglesAtom, RESET)
    set(selectedStickerIdAtom, RESET)
    prevUrl && URL.revokeObjectURL(prevUrl)
  }
})
