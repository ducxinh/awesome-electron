// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// A preload script runs before the renderer process is loaded
// preload has access to both renderer globals (e.g. window and document) and a Node.js environment
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})