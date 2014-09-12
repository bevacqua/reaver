# reaver

> Minimal asset revving CLI and API

Use as a CLI or programmatically.

## Install

```shell
npm install --save-dev reaver
```

## API

The API exposes a function.

### `reaver(files)`

Moves the specified file(s), appending to their paths a hash of their contents. Directories and missing files are ignored.

## CLI

Usage

```shell
reaver [file] [file] [file]
```

Invokes the `reaver(files)` API method, using `minimist` for option parsing.

# License

MIT
