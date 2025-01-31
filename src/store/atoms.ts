import { atom } from 'jotai'
import { atomWithReset } from 'jotai/utils'

import type { EmojiData } from '@/types'

// Atoms
export const baseImgUrlAtom = atomWithReset<string | null>(null)

export const isPickerOpenAtom = atom(false)

export const emojiDatasAtom = atomWithReset<EmojiData[]>([])

export const rectanglesAtom = atomWithReset<{ id: string }[]>([])

export const selectedStickerIdAtom = atomWithReset<string | null>(null)

export const isShareDialogOpenAtom = atom(false)

// Derived atoms
export const isBaseImgLoadedAtom = atom((get) => {
  const url = get(baseImgUrlAtom)
  return url !== null
})
