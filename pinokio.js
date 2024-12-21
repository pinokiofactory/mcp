module.exports = {
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
  }).concat({
    text: "Update",
    href: "update.json"
  })
}
