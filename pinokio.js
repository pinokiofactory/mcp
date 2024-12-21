const path = require('path')
module.exports = async (kernel) => {
  let p
  if (kernel.platform === "darwin") {
    p = `${path.resolve(kernel.envs.HOME, "Library/Application Support/Claude/claude_desktop_config.json")}`
  } else if (kernel.platform === "win32") {
    p = `${path.resolve(kernel.envs.APPDATA, 'Claude/claude_desktop_config.json')}"
  }
  return {
    version: "2.2",
    title: "MCP",
    description: "",
    icon: "icon.png",
    menu: [
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
        text: x,
        menu: [
          { text: "Install", href: `${x}/install.js` },
          { text: "Uninstall", href: `${x}/uninstall.js` }
        ]
      }
    }).concat([{
      text: "Update",
      href: "update.json"
    }, {
      text: "Open MCP Config File",
      href: p,
      fs: true
    }])
  }
}
