'use client'
import { useState, useCallback } from 'react'
import GearSystem from './GearSystem'
import RustmontageChat from './RustmontageChat'

export default function ChatIntegration() {
  const [addChatMessage, setAddChatMessage] = useState<((message: string) => void) | null>(null)

  const handleChatReady = useCallback((addMessageFn: (message: string) => void) => {
    setAddChatMessage(() => addMessageFn)
  }, [])

  const handleSendChatMessage = useCallback((message: string) => {
    if (addChatMessage) {
      addChatMessage(message)
    }
  }, [addChatMessage])

  return (
    <>
      <GearSystem enabled={true} onSendChatMessage={handleSendChatMessage} />
      <RustmontageChat onNewMessage={handleChatReady} />
    </>
  )
}
