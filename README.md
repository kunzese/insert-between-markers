# `insert-between-markers` GitHub Action

This action inserts `input` between the `begin-marker` and `end-marker` in `target` file.

## Usage

```yaml
# Insert with text
steps:
- uses: 'kunzese/insert-between-markers@v0'
  with:
    begin-marker: '<!-- BEGIN_MARKER -->'
    end-marker: '<!-- END_MARKER -->'
    input: Lorem ipsum dolor sit amet, consetetur sadipscing elitr
```

```yaml
# Insert from file
steps:
- uses: 'kunzese/insert-between-markers@v0'
  with:
    begin-marker: '<!-- BEGIN_MARKER -->'
    end-marker: '<!-- END_MARKER -->'
    input: ./output.log
    input-type: file
```

## Inputs

This action supports the following inputs:

- `target` - (optional) The name of the target file. Defaults to `README.md`.

- `encoding` - (optional) The encoding of the target file. Defaults to `utf8`.

- `begin-marker` - (required) The format of the begin marker.

- `end-marker` - (required) The format of the end marker.

- `input` - (required) The text which will be inserted between the begin and end marker or a file path. If `input-type` is set to `file`, `input` is expected to be a file from which the content is read.

- `input-type` - (optional) If `input-type` is set to `file`, `input` is expected to be a file from which the content is read. Defaults to `text`.

## Outputs

- `changed` - Determines wheter this action changed the target file (`true`) or not (`false`).
