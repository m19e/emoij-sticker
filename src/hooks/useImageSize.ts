import { useEffect, useState } from 'react'

import { ERROR_MESSAGE } from '@/constants'
import type { Dimensions, UseImageSizeResult } from '@/types'

const getImageSize = (url: string | null): Promise<Dimensions> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      return reject(ERROR_MESSAGE.windowIsNotDefined)
    }
    if (!url) {
      return reject(ERROR_MESSAGE.urlIsNotDefined)
    }

    const img = new Image()

    img.addEventListener('load', () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight })
    })

    img.addEventListener('error', (event) => {
      reject(`${event.type}: ${event.message}`)
    })

    img.src = url
  })
}

export const useImageSize = (url: string | null): UseImageSizeResult => {
  const [dimensions, setDimensions] = useState<Dimensions | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      setDimensions(null)
      setError(null)

      try {
        const { width, height } = await getImageSize(url)

        setDimensions({ width, height })
      } catch (error: unknown) {
        setError((error as string).toString())
      } finally {
        setLoading(false)
      }
    }

    fetch()
  }, [url])

  return [dimensions, { loading, error }]
}