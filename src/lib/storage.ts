"use client"

import { useCallback, useSyncExternalStore } from "react"

const SHORTLIST_KEY = "cash-today:shortlist"
const STEPS_KEY = "cash-today:steps"

const listeners = new Set<() => void>()

function emit() {
  for (const listener of listeners) listener()
}

function subscribe(listener: () => void) {
  const isFirst = listeners.size === 0
  listeners.add(listener)
  if (isFirst && typeof window !== "undefined") {
    window.addEventListener("storage", emit)
  }
  return () => {
    listeners.delete(listener)
    if (listeners.size === 0 && typeof window !== "undefined") {
      window.removeEventListener("storage", emit)
    }
  }
}

const emptyShortlist: string[] = []
const emptySteps: Record<string, string[]> = {}

let shortlistRaw = ""
let shortlistSnap: string[] = emptyShortlist
let stepsRaw = ""
let stepsSnap: Record<string, string[]> = emptySteps

function readShortlist(): string[] {
  if (typeof window === "undefined") return emptyShortlist
  const raw = window.localStorage.getItem(SHORTLIST_KEY) ?? "[]"
  if (raw === shortlistRaw) return shortlistSnap
  shortlistRaw = raw
  try {
    const parsed = JSON.parse(raw) as unknown
    shortlistSnap = Array.isArray(parsed) ? (parsed as string[]) : emptyShortlist
  } catch {
    shortlistSnap = emptyShortlist
  }
  return shortlistSnap
}

function readSteps(): Record<string, string[]> {
  if (typeof window === "undefined") return emptySteps
  const raw = window.localStorage.getItem(STEPS_KEY) ?? "{}"
  if (raw === stepsRaw) return stepsSnap
  stepsRaw = raw
  try {
    const parsed = JSON.parse(raw) as unknown
    stepsSnap =
      parsed && typeof parsed === "object"
        ? (parsed as Record<string, string[]>)
        : emptySteps
  } catch {
    stepsSnap = emptySteps
  }
  return stepsSnap
}

export function useShortlist() {
  const shortlist = useSyncExternalStore(
    subscribe,
    readShortlist,
    () => emptyShortlist,
  )

  const setShortlist = useCallback((next: string[]) => {
    window.localStorage.setItem(SHORTLIST_KEY, JSON.stringify(next))
    shortlistRaw = JSON.stringify(next)
    shortlistSnap = next
    emit()
  }, [])

  return [shortlist, setShortlist] as const
}

export function useSavedSteps() {
  const steps = useSyncExternalStore(subscribe, readSteps, () => emptySteps)

  const setSteps = useCallback((next: Record<string, string[]>) => {
    window.localStorage.setItem(STEPS_KEY, JSON.stringify(next))
    stepsRaw = JSON.stringify(next)
    stepsSnap = next
    emit()
  }, [])

  return [steps, setSteps] as const
}
