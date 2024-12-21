module.exports = async (kernel) => {
  const config =  {
    darwin: kernel.path(kernel.envs.HOME, "Library/Application Support/Claude/claude_desktop_config.json"),
    win32: kernel.path(kernel.envs.APPDATA, 'Claude/claude_desktop_config.json')
  }
  return {
    run: async (kernel) => {
      return [
        {
          method: "json.rm",
          params: {
            [config[kernel.platform]]: ["mcpServers.puppeteer"]
          }
        },
      ]
    }
  }
}
