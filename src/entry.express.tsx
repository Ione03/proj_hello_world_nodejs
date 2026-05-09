import express from "express";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { createQwikCity } from "@builder.io/qwik-city/middleware/node";
import qwikCityPlan from "@qwik-city-plan";
import render from "./entry.ssr";
import { manifest } from "@qwik-client-manifest";

const { router, notFound } = createQwikCity({ render, qwikCityPlan, manifest });

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const distDir = join(__dirname, "..", "dist");
const buildDir = join(distDir, "build");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(`/build`, express.static(buildDir, { immutable: true, maxAge: "1y" }));
app.use(express.static(distDir, { redirect: false }));
app.use(router);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
