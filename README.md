# reaver

> Minimal asset hashing CLI and API

Use as a CLI or programmatically.

## Install

```shell
npm install --save-dev reaver
```

## API

The API exposes a function.

### `reaver(files, options)`

Moves the specified file(s), appending to their paths a hash of their contents. Directories and missing files are ignored.

If a `manifest: true` option is passed, it returns a map of file paths to the resulting hashes. The manifest always uses absolute paths.

## CLI

Usage

```shell
reaver [options] [file] [file] [file]
```

Invokes the `reaver(files, options)` API method, using `minimist` for option parsing.


## Example

Usage example below

```shell
touch foo{,.js}
reaver *
ls
# foo.d41d8cd9    foo.d41d8cd9.js
```

# License

MIT
