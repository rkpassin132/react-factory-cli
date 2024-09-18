
# React Factory CLI

**React Factory CLI** is a custom command-line interface tool that simplifies the process of scaffolding and managing React components. With this CLI, developers can quickly create functional, class-based, and routed components with just a few commands. Additional features are coming soon, expanding the capabilities of the tool.

## What's New
- Initial release with component generation features
- Supports functional, class-based, and routing options

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Available Commands](#available-commands)
  - [Command Options](#command-options)
- [Roadmap](#roadmap)

## Installation

To use React Factory CLI, install it globally or locally.

### Global Installation

```bash
npm install -g react-factory-cli
```

### Local Installation

To use it locally in your project:

```bash
npm install react-factory-cli --save-dev
```

Then, you can run it with `npx`:

```bash
npx react-factory-cli <operation> <name> [options...]
```

## Usage

Run the CLI using the following syntax:

```bash
react-factory-cli <operation> <name> [options...]
```

### Available Commands

| Operation               | Description                                             |
|-------------------------|---------------------------------------------------------|
| `generate:component`     | Generates a new React component                         |
| `g c`                   | Alias for `generate:component`                          |

### Command Options

| Option                      | Description                                        |
|------------------------------|----------------------------------------------------|
| `-f, --functional`           | Generates a functional React component             |
| `-c, --class`                | Generates a class-based React component            |
| `-hof, --higher-order-functional` | Generates a higher-order functional component  |
| `-r, --routing`              | Generates a React component with routing           |




## Contributing

Contributions are welcome! To contribute to React Factory CLI, feel free to fork the repository and submit a pull request.

