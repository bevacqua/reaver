# reaver

> Minimal asset revving CLI and API

Use as a CLI or programmatically.

## API

The API exposes a function.

### `reaver(files)`

Moves the specified file(s), appending to their paths a hash of their contents.

## CLI

Usage

```shell
reaver [file] [file] [file]
```

Invokes the `.hash(files)` API method, using `minimist` for option parsing.

# License

MIT
