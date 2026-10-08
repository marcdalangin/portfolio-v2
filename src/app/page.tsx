import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { GitHubGraph } from "@/components/sections/github-graph";

export default function Home() {
  return (
    <div className="stack-v gap-24">
      <Hero />
      <Experience />
      <Projects />
      <Stack />
      <GitHubGraph />
    </div>
  );
}