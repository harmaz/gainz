"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Idea } from "@/lib/ideas"
import { Bookmark, BookmarkCheck, Clock3, Wallet } from "lucide-react"

export function IdeaCard({
  idea,
  saved,
  onOpen,
  onToggleSave,
}: {
  idea: Idea
  saved: boolean
  onOpen: () => void
  onToggleSave: () => void
}) {
  return (
    <Card className="bg-card/80 transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="secondary">{idea.firstDollarLabel}</Badge>
          {idea.usesCursor ? <Badge variant="outline">Uses Cursor</Badge> : null}
          {idea.needsCar ? <Badge variant="outline">Needs a car</Badge> : null}
        </div>
        <CardTitle className="font-heading mt-2 text-xl tracking-tight">
          {idea.title}
        </CardTitle>
        <CardDescription className="text-[0.95rem] leading-relaxed">
          {idea.blurb}
        </CardDescription>
        <CardAction>
          <Button
            variant="ghost"
            size="icon"
            aria-label={saved ? "Remove from shortlist" : "Save to shortlist"}
            onClick={onToggleSave}
          >
            {saved ? <BookmarkCheck /> : <Bookmark />}
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Wallet className="size-3.5" />
          {idea.typicalPay}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="size-3.5" />
          {idea.effort}
        </span>
      </CardContent>
      <CardFooter className="justify-between gap-3">
        <p className="text-muted-foreground text-xs">
          {idea.where.slice(0, 2).join(" · ")}
        </p>
        <Button size="sm" onClick={onOpen}>
          Start this
        </Button>
      </CardFooter>
    </Card>
  )
}
