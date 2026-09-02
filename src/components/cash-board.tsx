"use client"

import { useMemo, useState } from "react"
import { IdeaCard } from "@/components/idea-card"
import { IdeaDetail } from "@/components/idea-detail"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ideas, ideaMatches, recommend, type Capital, type Idea, type Speed, type Style } from "@/lib/ideas"
import { useSavedSteps, useShortlist } from "@/lib/storage"
import { Search } from "lucide-react"

type Tab = "browse" | "shortlist" | "skip"

const speedOptions: { value: Speed | "any"; label: string }[] = [
  { value: "any", label: "Any speed" },
  { value: "today", label: "Cash today" },
  { value: "week", label: "This week" },
  { value: "month", label: "This month is fine" },
]

const capitalOptions: { value: Capital | "any"; label: string }[] = [
  { value: "any", label: "Any budget" },
  { value: "zero", label: "$0 to start" },
  { value: "low", label: "Up to ~$50" },
]

const styleOptions: { value: Style | "any"; label: string }[] = [
  { value: "any", label: "Any style" },
  { value: "desk", label: "Desk" },
  { value: "out", label: "Leave the house" },
  { value: "stuff", label: "Sell / rent stuff" },
]

export function CashBoard() {
  const [query, setQuery] = useState("")
  const [speed, setSpeed] = useState<Speed | "any">("any")
  const [capital, setCapital] = useState<Capital | "any">("any")
  const [style, setStyle] = useState<Style | "any">("any")
  const [cursorOnly, setCursorOnly] = useState(false)
  const [noCar, setNoCar] = useState(false)
  const [stayHome, setStayHome] = useState(false)
  const [shortlist, setShortlist] = useShortlist()
  const [steps, setSteps] = useSavedSteps()
  const [active, setActive] = useState<Idea | null>(null)
  const [tab, setTab] = useState<Tab>("browse")

  const visible = useMemo(
    () =>
      ideas.filter((idea) =>
        ideaMatches(idea, {
          query,
          speed,
          capital,
          style,
          cursorOnly,
          noCar,
          stayHome,
        }),
      ),
    [query, speed, capital, style, cursorOnly, noCar, stayHome],
  )

  const savedIdeas = ideas.filter((idea) => shortlist.includes(idea.id))
  const picks = recommend(ideas)

  function toggleSave(id: string) {
    const next = shortlist.includes(id)
      ? shortlist.filter((item) => item !== id)
      : [...shortlist, id]
    setShortlist(next)
  }

  function toggleStep(ideaId: string, step: string) {
    const existing = steps[ideaId] ?? []
    const nextForIdea = existing.includes(step)
      ? existing.filter((item) => item !== step)
      : [...existing, step]
    setSteps({ ...steps, [ideaId]: nextForIdea })
  }

  const hasFilters =
    query.trim() !== "" ||
    speed !== "any" ||
    capital !== "any" ||
    style !== "any" ||
    cursorOnly ||
    noCar ||
    stayHome

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
      <header className="flex flex-col gap-5 border-b border-foreground/10 pb-8">
        <p className="text-primary text-xs font-medium tracking-[0.18em] uppercase">
          Extra money · legal only
        </p>
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
            Things you can do for cash without waiting for a clever idea.
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
            Fast money is usually time, stuff, or a local service. Software and
            Cursor help when you already have a buyer. Filter for what you can
            actually do in the next two hours, then shortlist two — not twelve.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">22 legal plays</Badge>
          <Badge variant="outline">Tech optional</Badge>
          <Badge variant="outline">Saved on this device</Badge>
        </div>
      </header>

      <section className="grid gap-3 sm:grid-cols-3">
        {picks.map((idea, index) => (
          <button
            key={idea.id}
            type="button"
            onClick={() => setActive(idea)}
            className="rounded-xl bg-card p-4 text-left ring-1 ring-foreground/10 transition-shadow hover:shadow-md"
          >
            <p className="text-muted-foreground text-xs tracking-wide uppercase">
              If you code and want cash · {index + 1}
            </p>
            <p className="font-heading mt-2 text-lg leading-snug">{idea.title}</p>
            <p className="text-muted-foreground mt-1 text-sm">{idea.typicalPay}</p>
          </button>
        ))}
      </section>

      <section className="flex flex-col gap-4">
        <div className="relative">
          <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search dog walking, Upwork, plasma, lawns…"
            className="h-10 bg-card pl-8"
            aria-label="Search ideas"
          />
        </div>
        <div className="flex flex-col gap-3">
          <FilterRow
            label="Speed"
            options={speedOptions}
            value={speed}
            onChange={setSpeed}
          />
          <FilterRow
            label="Cash to start"
            options={capitalOptions}
            value={capital}
            onChange={setCapital}
          />
          <FilterRow
            label="How you work"
            options={styleOptions}
            value={style}
            onChange={setStyle}
          />
          <div className="flex flex-wrap gap-2">
            <ToggleChip
              pressed={cursorOnly}
              onPressedChange={setCursorOnly}
              label="Uses Cursor"
            />
            <ToggleChip
              pressed={noCar}
              onPressedChange={setNoCar}
              label="No car"
            />
            <ToggleChip
              pressed={stayHome}
              onPressedChange={setStayHome}
              label="Stay home"
            />
            {hasFilters ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setQuery("")
                  setSpeed("any")
                  setCapital("any")
                  setStyle("any")
                  setCursorOnly(false)
                  setNoCar(false)
                  setStayHome(false)
                }}
              >
                Clear filters
              </Button>
            ) : null}
          </div>
        </div>
      </section>

      <Tabs value={tab} onValueChange={(value) => setTab(value as Tab)}>
        <TabsList>
          <TabsTrigger value="browse">Browse ({visible.length})</TabsTrigger>
          <TabsTrigger value="shortlist">
            Shortlist ({savedIdeas.length})
          </TabsTrigger>
          <TabsTrigger value="skip">Skip these</TabsTrigger>
        </TabsList>
        <TabsContent value="browse" className="pt-4">
          {visible.length === 0 ? (
            <EmptyState
              title="Nothing matches those filters"
              body="Loosen speed or budget, or turn off Stay home. Fast cash is usually leaving the house or selling something you already own."
              actionLabel="Clear filters"
              onAction={() => {
                setQuery("")
                setSpeed("any")
                setCapital("any")
                setStyle("any")
                setCursorOnly(false)
                setNoCar(false)
                setStayHome(false)
              }}
            />
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {visible.map((idea) => (
                <IdeaCard
                  key={idea.id}
                  idea={idea}
                  saved={shortlist.includes(idea.id)}
                  onOpen={() => setActive(idea)}
                  onToggleSave={() => toggleSave(idea.id)}
                />
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="shortlist" className="pt-4">
          {!savedIdeas.length ? (
            <EmptyState
              title="Shortlist is empty"
              body="Save two ideas max. One should pay this week. The other can be the Cursor-shaped one."
              actionLabel="Back to ideas"
              onAction={() => setTab("browse")}
            />
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {savedIdeas.map((idea) => (
                <IdeaCard
                  key={idea.id}
                  idea={idea}
                  saved
                  onOpen={() => setActive(idea)}
                  onToggleSave={() => toggleSave(idea.id)}
                />
              ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="skip" className="pt-4">
          <div className="bg-card max-w-3xl space-y-4 rounded-xl p-5 ring-1 ring-foreground/10">
            <h2 className="font-heading text-2xl">Not extra money. Traps.</h2>
            <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed">
              <li>
                Anyone who pays you to buy gift cards, “verify” a bank account,
                or send back extra check money.
              </li>
              <li>
                Crypto signals, MLM, “become a boss with this starter kit,” and
                jobs that require you to pay before you earn.
              </li>
              <li>
                Mass AI content farms, cloned SaaS, and scraped datasets. Easy
                to start, often stolen, rarely paid.
              </li>
              <li>
                Unlicensed tax prep, legal advice, medical advice, or handling
                someone else’s accounts without permission.
              </li>
              <li>
                “Store these sealed boxes / cash this check for my overseas
                employer.” That is a mule pitch.
              </li>
            </ul>
            <p className="text-muted-foreground text-sm">
              If it only works because it is shady, skip it. The list on Browse
              is the boring stuff that actually clears.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <IdeaDetail
        idea={active}
        open={Boolean(active)}
        onOpenChange={(open) => {
          if (!open) setActive(null)
        }}
        saved={active ? shortlist.includes(active.id) : false}
        onToggleSave={() => {
          if (active) toggleSave(active.id)
        }}
        doneSteps={active ? (steps[active.id] ?? []) : []}
        onToggleStep={(step) => {
          if (active) toggleStep(active.id, step)
        }}
      />
    </div>
  )
}

function FilterRow<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: { value: T; label: string }[]
  value: T
  onChange: (value: T) => void
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <p className="text-muted-foreground w-28 shrink-0 text-xs font-medium tracking-wide uppercase">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {options.map((option) => (
          <Button
            key={option.value}
            size="sm"
            variant={value === option.value ? "default" : "outline"}
            onClick={() => onChange(option.value)}
            className="rounded-full"
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

function ToggleChip({
  pressed,
  onPressedChange,
  label,
}: {
  pressed: boolean
  onPressedChange: (value: boolean) => void
  label: string
}) {
  return (
    <Button
      size="sm"
      variant={pressed ? "default" : "outline"}
      onClick={() => onPressedChange(!pressed)}
      className="rounded-full"
      aria-pressed={pressed}
    >
      {label}
    </Button>
  )
}

function EmptyState({
  title,
  body,
  actionLabel,
  onAction,
}: {
  title: string
  body: string
  actionLabel: string
  onAction: () => void
}) {
  return (
    <div className="bg-card flex flex-col items-start gap-3 rounded-xl p-6 ring-1 ring-foreground/10">
      <h2 className="font-heading text-xl">{title}</h2>
      <p className="text-muted-foreground max-w-lg text-sm leading-relaxed">
        {body}
      </p>
      <Button onClick={onAction}>{actionLabel}</Button>
    </div>
  )
}
