import { defineCliConfig } from 'sanity/cli'
import { createClient } from '@sanity/client'

export default defineCliConfig({
  api: {
    projectId: 'omqqd1mv',
    dataset: 'production',
    useCdn: true,
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})

