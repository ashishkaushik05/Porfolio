/**
 * TerminalParser.js
 * Parses raw terminal input into structured commands
 */

export const parseCommand = (input) => {
  const trimmed = input.trim();
  
  if (!trimmed) {
    return { type: 'EMPTY', raw: '' };
  }

  // Split by spaces but preserve quoted strings
  const parts = trimmed.split(/\s+/);
  const command = parts[0];
  const args = parts.slice(1);

  // Check for file execution (./)
  if (command.startsWith('./')) {
    const filename = command.slice(2);
    return {
      type: 'EXEC_FILE',
      file: filename,
      raw: trimmed
    };
  }

  // Check for directory change (cd)
  if (command === 'cd') {
    return {
      type: 'CD',
      path: args[0] || '/',
      raw: trimmed
    };
  }

  // Standard command
  return {
    type: 'COMMAND',
    command: command.toLowerCase(),
    args: args,
    raw: trimmed
  };
};
