# MCP

1-Click MCP Installers, powered by [pinokio.computer](https://pinokio.computer)

0. Examples
1. What is MCP?
2. What this repository does
3. How to use
4. Contribute


# 0. Examples

## SQLite

Read and Write to an SQLite database



https://github.com/user-attachments/assets/6ce9ff63-08c3-446d-8e83-6c7341f287c6



## Puppeteer

Control the browser with Claude



https://github.com/user-attachments/assets/438bd453-1912-4b95-b127-e7906e4881ba



# 1. What is MCP?

MCP (Model Context Protocol) is an open protocol that standardizes how applications provide context to LLMs. Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect your devices to various peripherals and accessories, MCP provides a standardized way to connect AI models to different data sources and tools.

- MCP: https://modelcontextprotocol.io/introduction
- MCP GitHub: https://github.com/modelcontextprotocol

# 2. What this repository does

1. **1-Click Install MCP Servers:** While MCP is really powerful, people must go through a lot of trouble to install and uninstall each MCP server. This project makes it as easy as 1 click to install or uninstall.
2. **Comprehensive Install Workflow:** While "installation" simply means adding an entry to the `claude_desktop_config.json` file, in many cases you need to go further and actually do certain things to get started (which is a huge pain). For example, to use an SQLite MCP, you first need to create an SQLite DB. These things are also taken care of with the 1-click scripts.
3. **Batteries Included:** Another huge hurdle when trying to use MCP is you need to have several programs already installed on your machine, such as Node.js, Python, UV, and more and more as we get more MCP servers. This project is powered by [Pinokio](https://pinokio.computer), which comes with these programs pre-installed in an isolated manner, not to mention including package managers such as conda or homebrew, which makes it possible to install even more programs with one line of script.

# 3. How to use

Just get [Pinokio](https://pinokio.computer) and install MCP from the Discover page. That will clone this repository and make all the scripts in this repository executable with 1-click.


# 4. Contribute

To add more MCP servers, just take a look at how existing installers are structured and create a new folder, and send a PR.

Or request MCP servers through github issues.
