# React Factory CLI

Imagine you're about to start a new React project, and instead of spending time configuring everything from scratch, you run a single command, and your project is set up, fully equipped with Tailwind CSS for utility-first styling and SCSS for custom CSS. That’s exactly what **React Factory CLI** offers.

**React Factory CLI** is a versatile command-line tool that simplifies the process of scaffolding and managing React projects. It allows developers to quickly generate functional, class-based, pages, services, context APIs, interface, test file, and hooks with minimal effort. A standout feature of React Factory CLI is the `rfc-config.json` file, which lets you customize your project’s folder structure and default component types.

**React Factory CLI** offers a complete React boilerplate setup via a simple setup command, including:

- Tailwind CSS for fast UI design and SCSS for custom styling.
- Routing with middlewareWrapper for enhanced route handling.
- Built-in hooks like debounce and title.
- Theme Context API for global theme management.
- Pre-built services like token management and HTTP service with token integration.
- Environment configuration for local, staging, and production.
- Implement Prettier configuration to ensure consistent code formatting.
- Set up component testing with Jest for robust testing coverage.
- Integrate SEO tags into each page component for improved search engine visibility.

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
  },
  "interface": {
    "path": "src/utils/interfaces"
  },
  "test": {
    "path": "src" // if existing project set root folder and define test file path while creating using command `rfc gt components/User/user` or `rfc gt test/user`
  }
}
```

### Available Commands

| Command               | Alias  | Description                                          |
| --------------------- | ------ | ---------------------------------------------------- |
| `setup`               | N/A    | Setup a new React project with tailwind css and scss |
| `generate:component`  | `gc`   | Generates a new React component                      |
| `generate:page`       | `gp`   | Generates a new React page component                 |
| `generate:service`    | `gs`   | Generates a new React service                        |
| `generate:context`    | `gctx` | Generates a new React Context API                    |
| `generate:hook`       | `gh`   | Generates a new React hook                           |
| `generate:intterface` | `gi`   | Generates a new Interfaces                           |
| `generate:test`       | `gt`   | Generates a new test file                            |

### Command Options

| Command                                           | Option                  | Description                                                             |
| ------------------------------------------------- | ----------------------- | ----------------------------------------------------------------------- |
| `setup`                                           | `--path <name>`         | Specify the folder to create the project in (default: `current folder`) |
| `generate:component`, `gc`, `generate:page`, `gp` | `-f, --functional`      | Generate a functional component or page component                       |
| `generate:component`, `gc`, `generate:page`, `gp` | `-c, --class`           | Generate a class-based component or page component                      |
| `generate:component`, `gc`, `generate:page`, `gp` | `-p, --path <location>` | Generate a component or page component in a different location          |
| `generate:component`, `gc`, `generate:page`, `gp` | `-t, --test`            | Generate a component or page component with test files                  |
| `generate:page`, `gp`                             | `-seo, --seoTag`        | Generate a page component include seo tags                              |

### Examples

- **Setup a new React project**:

  ```bash
  rfc setup --path my-react-app
  ```

- **Generate a functional component**:

  ```bash
  rfc gc myComponent --functional
  ```

  - **Generate a functional page component**:

  ```bash
  rfc gp myComponent --functional --seoTag --test
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

  - **Generate a interface**:
  ```bash
  rfc gi custom
  ```

  - **Generate a test file**:
  ```bash
  rfc gt custom
  ```

## Contributing

Contributions are welcome! To contribute to React Factory CLI, feel free to fork the repository and submit a pull request.
