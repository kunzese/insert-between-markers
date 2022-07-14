const core = require('@actions/core');
const fs = require('fs');

const run = () => {
  try {
    const target = core.getInput('target');
    const encoding = core.getInput('encoding');
    const beginMarker = core.getInput('begin-marker', { required: true });
    const endMarker = core.getInput('end-marker', { required: true });
    const input = core.getInput('input', { required: true });
    const inputType = core.getInput('input-type');

    let insertion = input;

    if (inputType == 'file') {
      const buffer = fs.readFileSync(input);
      insertion = buffer.toString();
    }

    const content = fs.readFileSync(target, encoding);

    const start = content.indexOf(beginMarker);
    const end = content.lastIndexOf(endMarker);

    if (start < 0 && end < 0) {
      throw new Error(`begin and end marker not found in ${target}`);
    }

    if (start < 0) {
      throw new Error(`begin marker not found in ${target}`);
    }

    if (end < 0) {
      throw new Error(`end marker not found in ${target}`);
    }

    if (end < start) {
      throw new Error(`end marker is before the begin marker in ${target}`);
    }

    const before = content.substring(0, start);
    const after = content.substring(end + endMarker.length);

    const generated = before.concat(
      beginMarker,
      '\n',
      insertion,
      '\n',
      endMarker,
      after,
    );

    fs.writeFileSync(target, generated), { encoding: encoding, mode: 0o644 };
    core.setOutput('changed', content !== generated);
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
