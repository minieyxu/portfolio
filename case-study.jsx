import ReadyPage from './components/ReadyPage.jsx';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { createRoot } from 'react-dom/client';
import { Collapsible } from '@astryxdesign/core/Collapsible';
import { Theme } from '@astryxdesign/core/theme';
import { neutralTheme } from '@astryxdesign/theme-neutral/built';
import seal from './assets/seal.png';
import './case-study.css';

const chapters = ['Overview', 'Approach', 'Findings', 'Reflection'];
const titleStyle =
  'font-serif text-5xl leading-none tracking-tight text-balance sm:text-6xl';
const bodyStyle = 'text-base leading-relaxed text-muted sm:text-lg';
const labelStyle = 'font-mono text-xs font-medium text-muted sm:text-sm';
const chapterStyle =
  'scroll-mt-25 px-5 py-14 text-center sm:scroll-mt-27 sm:px-8 sm:py-20';

const interviewPrompts = [
  ['Defining adulthood', 'Do you see yourself as an adult?'],
  ['Family expectations', 'Do you think your parents see you as an adult now?'],
  [
    'Personal change',
    'What have you learned recently about yourself and about others?',
  ],
  [
    'Future plans',
    'Have your future plans changed since you were in high school?',
  ],
];

const participants = [
  {
    name: 'Kelly',
    details: '19 · Sophomore · On campus',
    description:
      'Manages her own schedule and has reconsidered her academic direction. She relies on family for emotional and financial support.',
  },
  {
    name: 'Alex',
    details: '20 · Junior · Off campus',
    description:
      'Takes on responsibilities for peers and family and feels more comfortable leading. He sees financial independence as a milestone he has yet to reach.',
  },
];

const findings = [
  {
    title: 'More responsibility didn’t mean feeling fully adult.',
    description:
      'Both students took on more responsibility. Kelly emphasized confidence and independence, while Alex saw supporting himself financially as an important milestone.',
    quote:
      "I would say I'm almost there and I'm carrying a lot of daily responsibility where family and peers rely on me but I am not financially independent...",
    participant: 'Alex',
  },
  {
    title: 'Family support was part of becoming independent.',
    description:
      'Both students described family as a source of care and guidance while they made more decisions for themselves.',
    quote:
      "I think they'll always look after me because that’s just our culture.",
    participant: 'Kelly',
  },
  {
    title: 'Specific decisions made growth easier to see.',
    description:
      'Kelly talked about changing her major and reconsidering activities. Alex talked about challenging his own views and becoming more comfortable leading others.',
    quote:
      "I'm still figuring out what i truly want to do, but i have a general idea.",
    participant: 'Kelly',
  },
];

function CaseNavigation() {
  const header = useRef(null);
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = chapters.map((label) =>
      document.getElementById(label.toLowerCase()),
    );
    let frame;

    function update() {
      const readingLine = header.current.getBoundingClientRect().bottom + 24;
      const current = sections.findLast(
        (section) => section.getBoundingClientRect().top <= readingLine,
      );
      const atBottom =
        Math.ceil(window.scrollY + window.innerHeight) >=
        document.documentElement.scrollHeight;
      setActive(atBottom ? 'reflection' : (current?.id ?? ''));
    }

    function scheduleUpdate() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }

    function syncHash() {
      const target = sections.find(
        (section) => '#' + section.id === window.location.hash,
      );
      if (target) target.scrollIntoView();
      scheduleUpdate();
    }

    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(document.getElementById('main'));
    observer.observe(header.current);
    syncHash();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('hashchange', scheduleUpdate);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('hashchange', scheduleUpdate);
    };
  }, []);

  const siteLink = 'flex min-h-11 items-center hover:text-seal';
  return (
    <header ref={header} className="sticky top-0 z-20 bg-paper">
      <div className="flex h-14 items-center justify-between gap-2 border-b border-rule px-4 sm:h-16 sm:px-10">
        <a
          className="flex shrink-0 items-center gap-2 text-lg leading-none font-bold sm:gap-3 sm:text-2xl"
          href="index.html"
          aria-label="Minie Xu, home"
        >
          <span className="hidden sm:inline">minie xu</span>
          <span className="sm:hidden">mx</span>
          <img
            src={seal}
            alt=""
            width="36"
            height="36"
            className="size-7 sm:size-9"
          />
        </a>
        <nav
          aria-label="Main navigation"
          className="flex items-center gap-3 font-mono text-[10px] tracking-wide text-muted uppercase sm:gap-6 sm:text-xs"
        >
          <a className={siteLink} href="index.html">
            Home
          </a>
          <a
            className={siteLink + ' font-semibold text-ink'}
            href="work.html#work"
            aria-current="true"
          >
            Projects
          </a>
          <a className={siteLink} href="photo.html">
            Gallery
          </a>
          <a className={siteLink} href="about.html">
            About
          </a>
        </nav>
      </div>
      <nav
        aria-label="Case study sections"
        className="border-b border-rule px-3"
      >
        <ul className="mx-auto grid h-11 max-w-3xl grid-cols-4 items-stretch text-center font-mono text-[11px] sm:text-sm">
          {chapters.map((label) => {
            const id = label.toLowerCase();
            return (
              <li key={id}>
                <a
                  href={'#' + id}
                  aria-current={active === id ? 'location' : undefined}
                  className="flex h-full items-center justify-center font-medium text-muted hover:text-seal aria-[current=location]:font-semibold aria-[current=location]:text-seal"
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  const metadata = [
    ['Role', 'Researcher'],
    ['Method', 'Semi-structured interviews'],
    ['Participants', '2 undergraduate students'],
    ['Scope', 'Exploratory academic study'],
  ];
  return (
    <section
      aria-labelledby="case-title"
      className="px-5 pt-14 pb-16 text-center sm:px-8 sm:pt-22 sm:pb-20"
    >
      <a
        href="work.html#work"
        className="mb-6 inline-flex min-h-11 items-center font-mono text-sm text-muted underline underline-offset-4 hover:text-seal"
      >
        ← Back to projects
      </a>
      <div>
        <h1
          id="case-title"
          className="font-serif text-[clamp(2.75rem,8.5vw,7rem)] leading-none tracking-tight text-balance"
        >
          feeling in between
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg leading-snug font-semibold text-balance sm:text-2xl">
          How do you become an adult when taking on adult responsibilities
          doesn’t necessarily make you feel like one?
        </p>
      </div>
      <dl className="mx-auto mt-8 grid w-fit max-w-full grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-4 gap-y-2 sm:mt-11 sm:gap-x-6">
        {metadata.map(([label, value]) => (
          <div key={label} className="contents">
            <dt className={labelStyle + ' text-right'}>{label}</dt>
            <dd className="text-left text-sm leading-snug sm:text-lg">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Overview() {
  return (
    <section
      id="overview"
      aria-labelledby="overview-title"
      className={chapterStyle + ' border-y border-rule'}
    >
      <h2 id="overview-title" className={titleStyle}>
        what does independence feel like?
      </h2>
      <div className={'mx-auto mt-6 max-w-2xl space-y-4 ' + bodyStyle}>
        <p>
          Psychologist Jeffrey Jensen Arnett uses “emerging adulthood” to
          describe a period, roughly ages 18 to 25, when young people explore
          who they are and may feel somewhere between adolescence and adulthood.
        </p>
        <p>
          I wanted to understand how family and cultural expectations shape that
          experience, especially when students take on more responsibility and
          continue to rely on family support.
        </p>
      </div>
      <div className="mx-auto mt-9 max-w-4xl rounded-2xl bg-wash px-5 py-8 sm:mt-11 sm:px-12 sm:py-11">
        <p className={labelStyle}>Research question</p>
        <p className="mx-auto mt-3 max-w-3xl font-serif text-3xl leading-tight text-balance sm:text-5xl">
          How do Asian American college students define adulthood, and how do
          their everyday experiences shape their sense of independence?
        </p>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-snug font-semibold text-balance sm:text-xl">
          Both students had become more independent. Neither considered
          themselves fully adult.
        </p>
        <p className={'mx-auto mt-3 max-w-xl ' + bodyStyle}>
          Their responses suggest a gap between everyday progress and the
          milestones they believed defined adulthood.
        </p>
      </div>
    </section>
  );
}

function subscribeToTheme(update) {
  window.addEventListener('minie-theme-change', update);
  return () => window.removeEventListener('minie-theme-change', update);
}

function getTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function Approach() {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme);
  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className={chapterStyle}
    >
      <h2 id="approach-title" className={titleStyle}>
        how I ran the interviews
      </h2>
      <p className={'mx-auto mt-5 max-w-xl ' + bodyStyle}>
        I used the same core questions with both students and followed up on
        experiences they brought up. I then compared how they defined adulthood
        with the responsibilities they described.
      </p>
      <div className="mx-auto mt-10 max-w-3xl">
        <h3 className="font-serif text-3xl sm:text-4xl">Who I spoke with</h3>
        <p className="mt-1 text-sm text-muted">Both names are pseudonyms.</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {participants.map(({ name, details, description }) => (
            <li key={name} className="rounded-xl border border-rule px-5 py-5">
              <h4 className="text-lg font-semibold">{name}</h4>
              <p className="mt-1 text-sm text-muted">{details}</p>
              <p className="mt-3 leading-relaxed">{description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-rule px-5 py-2 text-left">
        <Theme theme={neutralTheme} mode={theme}>
          <Collapsible
            defaultIsOpen={false}
            trigger={
              <span className="py-2 font-sans text-base font-semibold text-ink">
                Read the interview prompts
              </span>
            }
          >
            <dl className="grid gap-4 pt-2 pb-4 sm:grid-cols-2">
              {interviewPrompts.map(([topic, prompt]) => (
                <div key={topic}>
                  <dt className="font-sans text-sm font-semibold text-ink">
                    {topic}
                  </dt>
                  <dd className="mt-1 font-sans text-base leading-relaxed text-muted">
                    “{prompt}”
                  </dd>
                </div>
              ))}
            </dl>
          </Collapsible>
        </Theme>
      </div>
    </section>
  );
}

function Findings() {
  return (
    <section
      id="findings"
      aria-labelledby="findings-title"
      className={chapterStyle + ' border-y border-rule bg-wash'}
    >
      <h2 id="findings-title" className={titleStyle}>
        what I heard
      </h2>
      <ol className="mx-auto mt-7 max-w-3xl divide-y divide-rule sm:mt-9">
        {findings.map(({ title, description, quote, participant }, index) => (
          <li key={title} className="py-7 first:pt-0 last:pb-0 sm:py-9">
            <p className={labelStyle}>Finding {index + 1}</p>
            <h3 className="mx-auto mt-2 max-w-xl font-serif text-3xl leading-tight text-balance sm:text-4xl">
              {title}
            </h3>
            <p className={'mx-auto mt-3 max-w-xl ' + bodyStyle}>
              {description}
            </p>
            <figure className="mx-auto mt-5 max-w-2xl rounded-xl bg-paper px-5 py-5 sm:px-8">
              <blockquote className="text-base leading-relaxed font-medium sm:text-lg">
                “{quote}”
              </blockquote>
              <figcaption className={'mt-2 ' + labelStyle}>
                {participant}
              </figcaption>
            </figure>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Reflection() {
  return (
    <section
      id="reflection"
      aria-labelledby="reflection-title"
      className={chapterStyle}
    >
      <h2 id="reflection-title" className={titleStyle}>
        what I learned & what I’d do next
      </h2>
      <div className={'mx-auto mt-5 max-w-2xl space-y-4 ' + bodyStyle}>
        <p>
          Both students could name decisions and responsibilities that showed
          how they’d grown, but they hesitated when I asked if they felt like
          adults. Next time, I’d ask them to describe a moment when they felt
          more grown up and a moment when they felt less grown up. Comparing
          those moments could help me see what makes the difference. I’d also
          ask how their idea of adulthood compares with their family’s. Being
          trusted with more responsibility at home might make someone feel more
          grown up, even when they still turn to family for help.
        </p>
        <p>
          I spoke with two students, once each. Next time, I’d interview
          students with different work and living situations, and check back a
          few months later to ask whether they see the experiences they shared
          any differently.
        </p>
      </div>
      <div className="mx-auto mt-8 max-w-xl border-t border-rule pt-6">
        <h3 className="font-serif text-3xl sm:text-4xl">
          A question for student services
        </h3>
        <p className={'mt-3 ' + bodyStyle}>
          How could student-facing services help people recognize smaller steps
          toward independence while making room for different kinds of family
          support?
        </p>
      </div>
      <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted">
        Background reading:{' '}
        <a
          className="underline underline-offset-4 hover:text-seal"
          href="https://doi.org/10.1037/0003-066X.55.5.469"
        >
          Arnett (2000), <cite>Emerging Adulthood</cite>
        </a>
        .
      </p>
    </section>
  );
}

function CaseStudy() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-4 focus:z-30 focus:bg-paper focus:p-3"
      >
        Skip to content
      </a>
      <CaseNavigation />
      <main id="main" tabIndex={-1} className="scroll-mt-25 sm:scroll-mt-27">
        <Hero />
        <Overview />
        <Approach />
        <Findings />
        <Reflection />
      </main>
      <footer className="flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-rule px-5 py-7 font-mono text-xs sm:text-sm">
        <a
          className="underline underline-offset-4 hover:text-seal"
          href="work.html#work"
        >
          ← All projects
        </a>
        <a className="underline underline-offset-4 hover:text-seal" href="#top">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <ReadyPage>
    <CaseStudy />
  </ReadyPage>,
);
