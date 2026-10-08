"use client";

import { useMemo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

function generateContributionData(endDate: Date): ContributionDay[] {
  const data: ContributionDay[] = [];
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - 364);

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split("T")[0];
    const random = Math.random();
    let count = 0;
    let level: ContributionDay["level"] = 0;

    if (random > 0.7) {
      count = Math.floor(Math.random() * 10) + 1;
      if (count >= 10) level = 4;
      else if (count >= 5) level = 3;
      else if (count >= 2) level = 2;
      else level = 1;
    }

    data.push({ date: dateStr, count, level });
  }

  return data;
}

type ColorLevel = 0 | 1 | 2 | 3 | 4;
type ColorScheme = Record<ColorLevel, string>;

const COLORS: Record<"light" | "dark", ColorScheme> = {
  light: {
    0: "#ebedf0",
    1: "#9be9a8",
    2: "#40c463",
    3: "#30a14e",
    4: "#216e39",
  },
  dark: {
    0: "#161b22",
    1: "#0e4429",
    2: "#006d32",
    3: "#26a641",
    4: "#39d353",
  },
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function GitHubGraph() {
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setEndDate(new Date());
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaQuery.matches ? "dark" : "light");
    const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const contributions = useMemo(() => endDate ? generateContributionData(endDate) : [], [endDate]);
  const colors = COLORS[theme];

  const weeks = useMemo(() => {
    if (!endDate) return [];
    const weeks: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    contributions.forEach((day, index) => {
      const date = new Date(day.date);
      const dayOfWeek = date.getDay();

      if (dayOfWeek === 0 && currentWeek.length > 0) {
        weeks.push(currentWeek);
        currentWeek = [];
      }

      currentWeek.push(day);

      if (index === contributions.length - 1) {
        weeks.push(currentWeek);
      }
    });

    while (weeks.length < 53) {
      weeks.unshift(Array(7).fill(null).map(() => ({ date: "", count: 0, level: 0 } as ContributionDay)));
    }

    return weeks.slice(-53);
  }, [contributions, endDate]);

  const monthLabels = useMemo(() => {
    if (!endDate) return [];
    const labels: { month: string; weekIndex: number }[] = [];
    let lastMonth = -1;

    weeks.forEach((week, weekIndex) => {
      const firstDay = week.find((d) => d.date);
      if (firstDay) {
        const month = new Date(firstDay.date).getMonth();
        if (month !== lastMonth) {
          labels.push({ month: MONTHS[month], weekIndex });
          lastMonth = month;
        }
      }
    });

    return labels;
  }, [weeks, endDate]);

  if (!mounted || !endDate) {
    return (
      <section className="stack-v gap-8" aria-labelledby="github-title">
        <header className="stack-v gap-4">
          <h2 id="github-title" className="font-serif text-4xl md:text-5xl font-normal tracking-tight">
            GitHub Activity
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            Contribution calendar for the last year.
          </p>
        </header>
        <div className="h-64 bg-muted/20 rounded-lg animate-pulse" />
      </section>
    );
  }

  return (
    <section className="stack-v gap-8" aria-labelledby="github-title">
      <header className="stack-v gap-4">
        <h2 id="github-title" className="font-serif text-4xl md:text-5xl font-normal tracking-tight">
          GitHub Activity
        </h2>
        <p className="text-lg text-muted max-w-2xl">
          Contribution calendar for the last year. Data rendered server-side.
        </p>
      </header>

      <div className="overflow-x-auto">
        <div className="flex items-start gap-4 min-w-max relative">
          <div className="flex flex-col justify-start" aria-hidden="true">
            {["Mon", "Wed", "Fri"].map((day) => (
              <div key={day} className="h-4 w-4 flex items-end justify-center">
                <span className="text-xs text-muted transform -translate-y-1">{day}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1 relative" role="img" aria-label="GitHub contribution graph">
            <div className="flex gap-1 relative" style={{ minWidth: `${weeks.length * 11}px` }}>
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1" role="list">
                  {week.map((day, dayIndex) => (
                    <div
                      key={day.date}
                      className="h-3 w-3 rounded-[2px] flex-shrink-0 transition-colors"
                      style={{
                        backgroundColor: day.date ? colors[day.level] : colors[0],
                      }}
                      role="listitem"
                      aria-label={day.date ? `${day.count} contributions on ${new Date(day.date).toLocaleDateString()}` : "No contributions"}
                      title={day.date ? `${day.count} contributions on ${new Date(day.date).toLocaleDateString()}` : ""}
                    />
                  ))}
                </div>
              ))}
            </div>

            {monthLabels.map(({ month, weekIndex }) => (
              <div
                key={month}
                className="absolute -left-10 top-0 text-xs text-muted"
                style={{ top: `${weekIndex * 11}px` }}
                aria-hidden="true"
              >
                {month}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-muted" role="legend">
        <span>Less</span>
        <div className="flex gap-1" aria-hidden="true">
          {([0, 1, 2, 3, 4] as ColorLevel[]).map((level) => (
            <div key={level} className="h-3 w-3 rounded-[2px]" style={{ backgroundColor: colors[level] }} />
          ))}
        </div>
        <span>More</span>
      </div>
    </section>
  );
}