const path = require('path')
module.exports = {
  version: "3.2",
  title: "MCP",
  description: "Model Context Protocol https://modelcontextprotocol.io/introduction",
  icon: "icon.png",
  menu: async (kernel) => {
    let p
    if (kernel.platform === "darwin") {
      p = path.resolve(kernel.envs.HOME, "Library/Application Support/Claude/claude_desktop_config.json")
    } else if (kernel.platform === "win32") {
      p = path.resolve(kernel.envs.APPDATA, 'Claude/claude_desktop_config.json')
    }
    return [
      "fetch",
      "github",
      "memory",
      "filesystem",
      "puppeteer",
      "brave-search",
      "google-maps",
      "sqlite",
      "everart",
    ].map((x) => {
      return {
        icon: "fa-solid fa-square",
        text: x,
        menu: [
          { icon: 'fa-solid fa-plus', text: "Install", href: `${x}/install.js` },
          { icon: 'fa-solid fa-minus', text: "Uninstall", href: `${x}/uninstall.js` }
        ]
      }
    }).concat([{
      icon: "fa-solid fa-arrows-rotate",
      text: "Update",
      href: "update.json"
    }, {
      icon: "fa-regular fa-folder-open",
      text: "Open MCP Config File",
      href: p,
      fs: true
    }])
  }
}
