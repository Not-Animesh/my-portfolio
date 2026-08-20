/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA, STACK } from "@/data/resume";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { GraduationCap } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

function BrandIcon({ icon }: { icon: { path: string; hex: string } }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="pointer-events-none size-4 text-muted-foreground transition-colors duration-200 group-hover:text-[var(--brand-color)]"
      style={{ "--brand-color": `#${icon.hex}` } as React.CSSProperties}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      {/* Hero */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex flex-col">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />

              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>

            {/* <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade> */}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Work Experience */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>

      {/* Stack */}
      <section id="stack">
        <div className="flex min-h-0 flex-col gap-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Stack</h2>
          </BlurFade>

          <div className="flex flex-col gap-8">
            {STACK.map((category, categoryIndex) => (
              <BlurFade
                key={category.title}
                delay={BLUR_FADE_DELAY * 10 + categoryIndex * 0.05}
              >
                <div className="grid grid-cols-[50px_1fr] gap-4">
                  <span className="text-sm text-muted-foreground">
                    {category.number}
                  </span>

                  <div>
                    <h3 className="mb-3 font-semibold">
                      {category.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group flex h-8 w-fit items-center gap-2 rounded-xl border border-border bg-background px-4 ring-2 ring-border/20"
                        >
                          <BrandIcon icon={skill.icon} />

                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>


      {/* Education */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>

          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    <div className="size-10 rounded-lg border bg-muted/30 flex items-center justify-center flex-none">
                      <GraduationCap className="size-5 text-muted-foreground" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="font-semibold leading-tight">
                        {education.school}
                      </div>

                      <div className="font-sans text-sm text-muted-foreground mt-1">
                        {education.degree}
                      </div>
                    </div>
                  </div>

                  <div className="text-xs tabular-nums text-muted-foreground text-right flex-none">
                    {education.start} - {education.end}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>





      {/* Contact */}
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}