/**
 * Terminal.jsx
 * Main terminal component
 */

import React, { useState, useRef, useEffect } from 'react';
import TerminalInput from './TerminalInput.jsx';
import Modal from '../ui/Modal.jsx';
import { parseCommand } from '../TerminalParser.js';
import { commands, getCommand, isValidFile } from '../Commands.js';

import About from '../components/About.jsx';
import Projects from '../components/Projects.jsx';
import Skills from '../components/Skills.jsx';
import Experience from '../components/Experience.jsx';
import Contact from '../components/Contact.jsx';

const Terminal = ({ onSwitchMode }) => {
  const [output, setOutput] = useState([
    { type: 'text', content: '╔════════════════════════════════════════════════════════════╗' },
    { type: 'text', content: '║       Welcome to Ashish\'s Terminal Portfolio v1.0          ║' },
    { type: 'text', content: '╠════════════════════════════════════════════════════════════╣' },
    { type: 'text', content: '║  Type "help" to see available commands                     ║' },
    { type: 'text', content: '║  Run commands like: ./about, ./projects, ./skills, etc.    ║' },
    { type: 'text', content: '║  Use "clear" to clear the screen                           ║' },
    { type: 'text', content: '╚════════════════════════════════════════════════════════════╝' },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const outputEndRef = useRef(null);
  const inputRef = useRef(null);

  const componentMap = {
    about: { component: About, title: 'About Me' },
    projects: { component: Projects, title: 'Projects' },
    skills: { component: Skills, title: 'Skills' },
    experience: { component: Experience, title: 'Experience' },
    contact: { component: Contact, title: 'Get In Touch' }
  };

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  // Focus input when modal closes
  useEffect(() => {
    if (!modalOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [modalOpen]);

  // Click anywhere to focus terminal
  const handleTerminalClick = () => {
    if (!modalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommand = (input) => {
    // Add user input to output
    setOutput(prev => [...prev, { type: 'input', content: input }]);

    const parsed = parseCommand(input);

    if (parsed.type === 'EMPTY') {
      return;
    }

    if (parsed.type === 'EXEC_FILE') {
      if (isValidFile(parsed.file)) {
        const fileData = componentMap[parsed.file.toLowerCase()];
        if (fileData) {
          setModalTitle(fileData.title);
          setModalContent(<fileData.component />);
          setModalOpen(true);
          setOutput(prev => [...prev, { type: 'text', content: `Opening ${parsed.file}...` }]);
        }
      } else {
        setOutput(prev => [...prev, { type: 'error', content: `bash: ./${parsed.file}: No such file or directory` }]);
      }
      return;
    }

    if (parsed.type === 'COMMAND') {
      const cmd = getCommand(parsed.command);
      if (cmd) {
        const result = cmd.execute(...parsed.args);
        if (result === '__CLEAR_SCREEN__') {
          setOutput([]);
        } else {
          setOutput(prev => [...prev, { type: 'text', content: result }]);
        }
      } else {
        setOutput(prev => [...prev, { type: 'error', content: `bash: ${parsed.command}: command not found` }]);
      }
      return;
    }

    if (parsed.type === 'CD') {
      setOutput(prev => [...prev, { type: 'text', content: `Changed directory to: ${parsed.path}` }]);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  const renderOutput = (line) => {
    switch (line.type) {
      case 'input':
        return (
          <div key={Math.random()} className="terminal-line terminal-input-line">
            <span className="terminal-prompt">ashish@portfolio</span>
            <span className="terminal-colon">:</span>
            <span className="terminal-path">~</span>
            <span className="terminal-prompt-end">$ </span>
            <span>{line.content}</span>
          </div>
        );
      case 'error':
        return (
          <div key={Math.random()} className="terminal-line terminal-error">
            {line.content}
          </div>
        );
      default:
        return (
          <div key={Math.random()} className="terminal-line">
            {line.content}
          </div>
        );
    }
  };

  return (
    <div className="terminal-container" onClick={handleTerminalClick}>
      <div className="terminal-header">
        <span className="terminal-title">Terminal</span>
        <button
          className="btn btn-secondary terminal-mode-toggle"
          onClick={onSwitchMode}
          title="Switch to visual mode"
        >
          ☀️ Visual Mode
        </button>
      </div>

      <div className="terminal-output">
        <div>
          {output.map(renderOutput)}
          <div ref={outputEndRef} />
        </div>
      </div>

      <TerminalInput 
        onSubmit={handleCommand} 
        isVisible={!modalOpen}
        ref={inputRef}
      />

      {modalOpen && modalContent && (
        <Modal
          isOpen={true}
          onClose={handleCloseModal}
          title={modalTitle}
        >
          {modalContent}
        </Modal>
      )}
    </div>
  );
};

export default Terminal;
