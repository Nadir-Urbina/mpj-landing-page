"use client";

/**
 * Configuration for the embedded Sanity Studio mounted at /studio.
 * Project values come from env (see .env.local.example).
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId: projectId || "missing-project-id",
  dataset: dataset || "production",
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
