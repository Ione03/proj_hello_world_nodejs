import "@builder.io/qwik";

declare module "@builder.io/qwik" {
  interface HTMLAttributes<T> {
    "x-data"?: string;
    "x-text"?: string;
    "x-show"?: string;
    "x-if"?: string;
    "x-for"?: string;
    "x-model"?: string;
    "x-ref"?: string;
    "x-effect"?: string;
    "x-init"?: string;
    "x-on:click"?: string;
    "x-on:input"?: string;
    "x-bind:class"?: string;
    "x-bind:disabled"?: string;
    "x-transition"?: string | boolean;
  }
}
