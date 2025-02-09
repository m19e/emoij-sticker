'use client'
import { useAtom, useAtomValue } from 'jotai'
import { Layer } from 'react-konva'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import {
  emojiDatasAtom,
  rectanglesAtom,
  selectedStickerIdAtom,
} from '@/store/atoms'
import type { Dimensions } from '@/types'

import { Emoji } from '@/components/sticker/Emoji'
import { Rectangle } from '@/components/sticker/Rectangle'

type Props = {
  img: Dimensions
}

export const StickerLayer = ({ img }: Props) => {
  const [selectedStickerId, setSelectedStickerId] = useAtom(
    selectedStickerIdAtom,
  )
  const emojis = useAtomValue(emojiDatasAtom)
  const rects = useAtomValue(rectanglesAtom)

  const { isDesktop } = useMediaQuery()

  const handleSelect = (id: string) => {
    setSelectedStickerId(id)
  }

  const initialPosition = {
    x: img.width / 2,
    y: img.height / 2,
  }

  return (
    <Layer>
      {rects.map(({ id }) => (
        <Rectangle
          key={id}
          selected={selectedStickerId === id}
          onSelect={() => handleSelect(id)}
          position={initialPosition}
          size={img.width / 3}
          isDesktop={isDesktop}
        />
      ))}
      {emojis.map(({ id, u }) => (
        <Emoji
          key={id}
          u={u}
          selected={selectedStickerId === id}
          onSelect={() => handleSelect(id)}
          position={initialPosition}
          size={img.width / 5}
          isDesktop={isDesktop}
        />
      ))}
    </Layer>
  )
}
