# `insert-between-markers` GitHub Action

This action inserts `insertion` between the `begin-marker` and `end-marker` in `target` file.

## Usage

```yaml
steps:
- uses: 'kunzese/insert-between-markers@v0'
  with:
    begin-marker: '<!-- BEGIN_MARKER -->'
    end-marker: '<!-- END_MARKER -->'
    insertion: Lorem ipsum dolor sit amet, consetetur sadipscing elitr
```

## Inputs

This action supports the following inputs:

- `target` - (optional) The name of the target file. Defaults to `README.md`.

- `encoding` - (optional) The encoding of the target file. Defaults to `utf8`.

- `begin-marker` - (required) The format of the begin marker.

- `end-marker` - (required) The format of the end marker.

- `insertion` - (required) The text which will be inserted between the begin and end marker.

## Outputs

- `changed` - Determines wheter this action changed the target file (`true`) or not (`false`).
