import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

type ExplorerNode = {
  isFolder: boolean
  slugSegment: string
}

componentRegistry.setOptionOverrides("@quartz-community/explorer", {
  sortFn: (a: ExplorerNode, b: ExplorerNode) => {
    if (a.isFolder !== b.isFolder) {
      return a.isFolder ? -1 : 1
    }

    return a.slugSegment.localeCompare(b.slugSegment, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
