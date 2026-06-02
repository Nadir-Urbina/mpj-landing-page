import { defineCliConfig } from "sanity/cli";

import { dataset, projectId } from "./src/sanity/env";

export default defineCliConfig({
  api: { projectId, dataset },
  /**
   * Studio is served by Next at /studio, so autoUpdates from the hosted
   * Studio are disabled here.
   */
  autoUpdates: false,
});
