'use client'

import { useEffect } from 'react'

type ConfirmDialogProps = {
  open: boolean
  title: string
  description: string
  confirmLabel: string
  cancelLabel: string
  onConfirm: () => void
  onCancel: () => void
  /**
   * Which button is primary (accent). Defaults to `cancel`, so the safe
   * option dominates and accidental exits become harder.
   */
  primaryAction?: 'confirm' | 'cancel'
}

const PRIMARY =
  'min-h-[52px] w-full cursor-pointer rounded-2xl bg-accent text-[16px] font-semibold text-white transition-colors active:bg-accent-ink'
const SECONDARY =
  'min-h-[52px] w-full cursor-pointer rounded-2xl text-[16px] font-medium text-muted transition-colors active:bg-paper'

export function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
  primaryAction = 'cancel',
}: ConfirmDialogProps) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCancel()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onCancel])

  if (!open) return null

  const confirmButton = (
    <button
      key="confirm"
      type="button"
      onClick={onConfirm}
      className={primaryAction === 'confirm' ? PRIMARY : SECONDARY}
    >
      {confirmLabel}
    </button>
  )

  const cancelButton = (
    <button
      key="cancel"
      type="button"
      onClick={onCancel}
      className={primaryAction === 'cancel' ? PRIMARY : SECONDARY}
    >
      {cancelLabel}
    </button>
  )

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onCancel}
    >
      <div
        className="w-full max-w-sm rounded-card border border-line bg-surface p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{description}</p>

        {/* The primary button always sits on top, where the thumb reaches first */}
        <div className="mt-6 flex flex-col gap-1">
          {primaryAction === 'confirm' ? [confirmButton, cancelButton] : [cancelButton, confirmButton]}
        </div>
      </div>
    </div>
  )
}
