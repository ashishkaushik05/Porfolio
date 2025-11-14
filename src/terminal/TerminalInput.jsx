/**
 * TerminalInput.jsx
 * Input component for terminal with tab autocomplete
 */

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

// Available commands and files for autocomplete
const AVAILABLE_COMMANDS = [
  'help', 'clear', 'ls', 'whoami', 'date', 'pwd', 'cd', 'wget'
];

const AVAILABLE_FILES = [
  'about', 'projects', 'skills', 'experience', 'contact'
];

const DOWNLOADABLE_FILES = [
  'resume.pdf'
];

const getAutocompleteSuggestions = (input) => {
  const trimmed = input.trim();
  
  // If input starts with ./, autocomplete section files
  if (trimmed.startsWith('./')) {
    const partial = trimmed.slice(2).toLowerCase();
    return AVAILABLE_FILES
      .filter(file => file.startsWith(partial))
      .map(file => `./${file}`);
  }
  
  // If input starts with wget, autocomplete downloadable files
  if (trimmed.toLowerCase().startsWith('wget ')) {
    const partial = trimmed.slice(5).toLowerCase();
    return DOWNLOADABLE_FILES
      .filter(file => file.startsWith(partial))
      .map(file => `wget ${file}`);
  }
  
  // Otherwise autocomplete commands
  const partial = trimmed.toLowerCase();
  return AVAILABLE_COMMANDS
    .filter(cmd => cmd.startsWith(partial));
};

const TerminalInput = forwardRef(({ onSubmit, isVisible }, ref) => {
  const inputRef = useRef(null);
  const [input, setInput] = React.useState('');
  const [history, setHistory] = React.useState([]);
  const [historyIndex, setHistoryIndex] = React.useState(-1);
  const [suggestions, setSuggestions] = React.useState([]);
  const [suggestionIndex, setSuggestionIndex] = React.useState(-1);

  // Expose focus method to parent
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    }
  }));

  useEffect(() => {
    if (isVisible && inputRef.current) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        inputRef.current.focus();
      }, 100);
    }
  }, [isVisible]);

  const handleTabComplete = () => {
    const suggestions = getAutocompleteSuggestions(input);
    
    if (suggestions.length === 0) {
      // No suggestions available
      return;
    }
    
    if (suggestions.length === 1) {
      // Exactly one match - auto-complete it
      setInput(suggestions[0] + ' ');
      setSuggestions([]);
      setSuggestionIndex(-1);
    } else {
      // Multiple suggestions - cycle through them
      const nextIndex = (suggestionIndex + 1) % suggestions.length;
      setSuggestionIndex(nextIndex);
      setSuggestions(suggestions);
      setInput(suggestions[nextIndex]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      handleTabComplete();
    } else if (e.key === 'Enter') {
      if (input.trim()) {
        onSubmit(input);
        setHistory([...history, input]);
        setHistoryIndex(-1);
        setInput('');
        setSuggestions([]);
        setSuggestionIndex(-1);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (suggestions.length > 0) {
        // If suggestions are active, close them
        setSuggestions([]);
        setSuggestionIndex(-1);
      } else {
        // Otherwise navigate history
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (suggestions.length > 0) {
        // If suggestions are active, close them
        setSuggestions([]);
        setSuggestionIndex(-1);
      } else {
        // Otherwise navigate history
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex] || '');
        }
      }
    } else {
      // Clear suggestions on any other key
      setSuggestions([]);
      setSuggestionIndex(-1);
    }
  };

  return (
    <div className="terminal-input-wrapper">
      <div className="terminal-input-line">
        <span className="terminal-prompt">ashish@portfolio</span>
        <span className="terminal-colon">:</span>
        <span className="terminal-path">~</span>
        <span className="terminal-prompt-end">$ </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="terminal-input"
          autoComplete="off"
          spellCheck="false"
        />
        <span className="terminal-cursor"></span>
      </div>
      
      {/* Autocomplete Suggestions */}
      {suggestions.length > 0 && (
        <div className="terminal-suggestions">
          {suggestions.map((suggestion, idx) => (
            <div
              key={idx}
              className={`suggestion ${idx === suggestionIndex ? 'active' : ''}`}
            >
              {suggestion}
              {idx === suggestionIndex && <span className="suggestion-hint"> (press Tab to cycle)</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default TerminalInput;
