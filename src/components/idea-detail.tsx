"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import type { Idea } from "@/lib/ideas"
import { Bookmark, BookmarkCheck } from "lucide-react"

export function IdeaDetail({
  idea,
  open,
  onOpenChange,
  saved,
  onToggleSave,
  doneSteps,
  onToggleStep,
}: {
  idea: Idea | null
  open: boolean
  onOpenChange: (open: boolean) => void
  saved: boolean
  onToggleSave: () => void
  doneSteps: string[]
  onToggleStep: (step: string) => void
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="data-[side=right]:w-full data-[side=right]:sm:max-w-xl"
      >
        {idea ? (
          <>
            <SheetHeader className="border-b">
              <div className="flex flex-wrap gap-1.5 pr-8">
                <Badge variant="secondary">{idea.firstDollarLabel}</Badge>
                <Badge variant="outline">{idea.typicalPay}</Badge>
                {idea.usesCursor ? (
                  <Badge variant="outline">Uses Cursor</Badge>
                ) : null}
              </div>
              <SheetTitle className="font-heading text-2xl tracking-tight">
                {idea.title}
              </SheetTitle>
              <SheetDescription className="text-base leading-relaxed">
                {idea.whyItPays}
              </SheetDescription>
            </SheetHeader>
            <ScrollArea className="min-h-0 flex-1">
              <div className="space-y-6 px-4 py-2">
                <section>
                  <h3 className="font-heading mb-3 text-lg">Do this next</h3>
                  <ul className="space-y-3">
                    {idea.todayMoves.map((step) => {
                      const checked = doneSteps.includes(step)
                      return (
                        <li key={step} className="flex gap-3">
                          <Checkbox
                            checked={checked}
                            onCheckedChange={() => onToggleStep(step)}
                            aria-label={step}
                            className="mt-0.5"
                          />
                          <span
                            className={
                              checked
                                ? "text-muted-foreground text-sm leading-relaxed line-through"
                                : "text-sm leading-relaxed"
                            }
                          >
                            {step}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </section>
                <Separator />
                <section>
                  <h3 className="font-heading mb-2 text-lg">Then</h3>
                  <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm leading-relaxed">
                    {idea.nextMoves.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3 className="font-heading mb-2 text-lg">Watch outs</h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
                    {idea.watchOuts.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </section>
                <p className="text-muted-foreground text-xs">
                  Where people actually find this work: {idea.where.join(", ")}.
                </p>
              </div>
            </ScrollArea>
            <SheetFooter className="border-t sm:flex-row">
              <Button
                variant={saved ? "secondary" : "default"}
                className="w-full"
                onClick={onToggleSave}
              >
                {saved ? <BookmarkCheck /> : <Bookmark />}
                {saved ? "Saved to shortlist" : "Save to shortlist"}
              </Button>
            </SheetFooter>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  )
}
