'use client'
import { useResetAtom } from 'jotai/utils'

import { Button } from '@/components/ui/button'
import { baseImgUrlAtom } from '@/store/atoms'

export const DeleteBaseImageButton = () => {
  const resetBaseImg = useResetAtom(baseImgUrlAtom)

  return <Button onClick={resetBaseImg}>Delete base-image</Button>
}