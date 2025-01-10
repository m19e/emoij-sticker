import { Header } from '@/components/AppHeader'
import { Picker } from '@/components/EmojiPicker'
import { Editor } from '@/components/StickerEditor'
import { DeleteEmojiButton } from '@/components/button/DeleteEmojiButton'
import { OpenPickerButton } from '@/components/button/OpenPickerButton'

export default function Home() {
  return (
    <div className="relative flex justify-center bg-slate-600 font-[family-name:var(--font-geist-sans)]">
      <main className="flex h-screen w-full flex-col bg-black sm:w-auto sm:min-w-96">
        <Header />
        <div className="flex h-[calc(100%-72px)] flex-col items-center justify-center bg-slate-400">
          <Editor />
        </div>
        <div className="flex justify-between gap-4">
          <DeleteEmojiButton />
          <OpenPickerButton />
        </div>
      </main>
      <Picker />
    </div>
  )
}
