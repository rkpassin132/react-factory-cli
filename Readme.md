# React Factory CLI

Imagine you're about to start a new React project, and instead of spending time configuring everything from scratch, you run a single command, and your project is set up, fully equipped with Tailwind CSS for utility-first styling and SCSS for custom CSS. That’s exactly what **React Factory CLI** offers.

**React Factory CLI** is a versatile command-line tool that simplifies the process of scaffolding and managing React projects. It allows developers to quickly generate functional, class-based, pages, services, context APIs, and hooks with minimal effort. A standout feature of React Factory CLI is the `rfc-config.json` file, which lets you customize your project’s folder structure and default component types. 

One of its key features is providing a complete React boilerplate setup, including Tailwind CSS for rapid UI design and SCSS for custom styling, all through a simple setup command. The tool's ease of use, combined with its expanding feature set, makes it an indispensable resource for any React developer looking to streamline their workflow and maintain clean, well-structured code.

React Factory CLI is evolving, and with every release, it's becoming more than just a helper; it’s a tool that shapes the way developers build modern React applications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Config](#rfc-config)
  - [Available Commands](#available-commands)
  - [Command Options](#command-options)
  - [Examples](#examples)
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

### RFC Config
```json
{
  "component": {
    "path": "src/components",
    "type": "functional"
  },
  "page": {
    "path": "src/components",
    "type": "functional"
  },
  "service": {
    "path": "src/services"
  },
  "context": {
    "path": "src/context"
  },
  "hook": {
    "path": "src/hooks"
  }
}
```

### Available Commands

| Command              | Alias  | Description                          |
| -------------------- | ------ | ------------------------------------ |
| `setup`              | N/A    | Setup a new React project            |
| `generate:component` | `gc`   | Generates a new React component      |
| `generate:page`      | `gp`   | Generates a new React page component |
| `generate:service`   | `gs`   | Generates a new React service        |
| `generate:context`   | `gctx` | Generates a new React Context API    |
| `generate:hook`      | `gh`   | Generates a new React hook           |

### Command Options

| Command                    | Option                  | Description                                                           |
| -------------------------- | ----------------------- | --------------------------------------------------------------------- |
| `setup`                    | `--path <name>`         | Specify the folder to create the project in (default: `my-react-app`) |
| `generate:component`, `gc` | `-f, --functional`      | Generate a functional component                                       |
| `generate:component`, `gc` | `-c, --class`           | Generate a class-based component                                      |
| `generate:component`, `gc` | `-p, --path <location>` | Generate a component in a different location                          |

### Examples

- **Setup a new React project**:

  ```bash
  rfc setup --path my-react-app
  ```

- **Generate a functional component**:

  ```bash
  rfc gc myComponent --functional
  ```

- **Generate a service**:

  ```bash
  rfc gs api
  ```

- **Generate a Context API**:

  ```bash
  rfc gctx auth
  ```

- **Generate a custom hook**:
  ```bash
  rfc gh custom
  ```

## Contributing

Contributions are welcome! To contribute to React Factory CLI, feel free to fork the repository and submit a pull request.
