import { contextBridge } from 'electron'

// Custom APIs for renderer
const api = {}

if (!process.contextIsolated) {
  throw new Error('contextIsolated is not enabled')
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
try {
  // contextBridge.exposeInMainWorld('electron', electronAPI)
  // contextBridge.exposeInMainWorld('api', api)
  contextBridge.exposeInMainWorld('context', {
    // TODO
  })
} catch (error) {
  console.error(error)
}
