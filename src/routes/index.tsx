import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <main class="flex min-h-screen flex-col items-center justify-center gap-10 p-8">

      {/* ── Hero Section (Qwik + Tailwind) ─────────────────────────── */}
      <div class="text-center space-y-4">
        <div class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm ring-1 ring-white/20">
          <span class="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
          Powered by Qwik · Alpine.js · Tailwind CSS
        </div>

        <h1 class="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 bg-clip-text text-transparent">
          Hello, Iwan!
        </h1>

        <p class="text-lg text-slate-400 max-w-md mx-auto">
          A minimal starter combining <span class="text-purple-300 font-medium">Qwik</span>'s
          resumability, <span class="text-green-300 font-medium">Alpine.js</span>'s
          reactivity, and <span class="text-sky-300 font-medium">Tailwind</span>'s utility-first
          styling.
        </p>
      </div>

      {/* ── Alpine.js Interactive Counter ───────────────────────────── */}
      <div
        x-data="{ count: 0 }"
        class="flex flex-col items-center gap-6 rounded-2xl bg-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10 w-full max-w-sm shadow-xl"
      >
        <h2 class="text-xl font-semibold text-slate-200">Alpine.js Counter</h2>

        <span
          x-text="count"
          class="text-7xl font-bold tabular-nums text-white"
        ></span>

        <div class="flex gap-4 w-full">
          <button
            x-on:click="count--"
            class="flex-1 rounded-xl bg-pink-500/20 px-5 py-3 text-lg font-semibold text-pink-300 hover:bg-pink-500/40 transition-colors ring-1 ring-pink-500/30"
          >
            −
          </button>
          <button
            x-on:click="count = 0"
            class="flex-1 rounded-xl bg-white/10 px-5 py-3 text-lg font-semibold text-slate-300 hover:bg-white/20 transition-colors ring-1 ring-white/20"
          >
            Reset
          </button>
          <button
            x-on:click="count++"
            class="flex-1 rounded-xl bg-purple-500/20 px-5 py-3 text-lg font-semibold text-purple-300 hover:bg-purple-500/40 transition-colors ring-1 ring-purple-500/30"
          >
            +
          </button>
        </div>

        <p class="text-sm text-slate-500">
          Click the buttons — Alpine.js handles the state reactively!
        </p>
      </div>

      {/* ── Tech Stack Badges (Tailwind) ─────────────────────────────── */}
      <div class="flex flex-wrap justify-center gap-4">
        <span class="rounded-full bg-purple-500/20 px-4 py-2 text-sm font-medium text-purple-300 ring-1 ring-purple-500/40">
          ⚡ Qwik v1
        </span>
        <span class="rounded-full bg-green-500/20 px-4 py-2 text-sm font-medium text-green-300 ring-1 ring-green-500/40">
          🏔 Alpine.js v3
        </span>
        <span class="rounded-full bg-sky-500/20 px-4 py-2 text-sm font-medium text-sky-300 ring-1 ring-sky-500/40">
          🎨 Tailwind CSS v3
        </span>
      </div>

    </main>
  );
});

export const head: DocumentHead = {
  title: "Hello World | Qwik + Alpine + Tailwind",
  meta: [
    {
      name: "description",
      content: "Hello World app built with Qwik, Alpine.js, and Tailwind CSS",
    },
  ],
};
