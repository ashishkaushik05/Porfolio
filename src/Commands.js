
0./**
 * Commands.js
 * Command handlers for the terminal
 */

export const commands = {
  help: {
    description: 'Show available commands',
    execute: () => {
      return `Available commands:
  help              - Show this help message
  clear             - Clear the terminal
  ls                - List available files
  cd <path>         - Change directory (visual only)
  ./about           - View about section
  ./projects        - View projects
  ./skills          - View skills
  ./experience      - View experience
  ./contact         - View contact information
  wget resume.pdf   - Download resume
  whoami            - Show current user
  date              - Show current date/time`;
    }
  },

  clear: {
    description: 'Clear the terminal',
    execute: () => '__CLEAR_SCREEN__'
  },

  ls: {
    description: 'List available files',
    execute: () => {
      return `about\t\tprojects\tskills\t\texperience\tcontact\t\tresume.pdf`;
    }
  },

  wget: {
    description: 'Download resume',
    execute: (...args) => {
      const filename = args.join(' ').trim();
      
      if (!filename) {
        return 'wget: missing URL\nUsage: wget resume.pdf';
      }
      
      if (filename.toLowerCase() === 'resume.pdf' || filename.toLowerCase().includes('resume')) {
        // Trigger download
        const link = document.createElement('a');
        link.href = './assets/resume.pdf';
        link.download = 'Ashish_Kaushik_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        return `--2025-11-14 ${new Date().toLocaleTimeString()}--  ./assets/resume.pdf
Resolving localhost... done.
Connecting to localhost... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [application/pdf]
Saving to: 'Ashish_Kaushik_Resume.pdf'

Ashish_Kaushik_Resume.pdf    100%[===================>]   

2025-11-14 ${new Date().toLocaleTimeString()} (${Math.floor(Math.random() * 500 + 100)} KB/s) - 'Ashish_Kaushik_Resume.pdf' saved`;
      } else {
        return `wget: ${filename}: No such file or directory
Available files: resume.pdf`;
      }
    }
  },

  whoami: {
    description: 'Show current user',
    execute: () => 'ashish'
  },

  date: {
    description: 'Show current date/time',
    execute: () => new Date().toString()
  },

  pwd: {
    description: 'Print working directory',
    execute: () => '/home/ashish'
  }
};

export const getCommand = (commandName) => {
  return commands[commandName.toLowerCase()];
};

export const isValidFile = (filename) => {
  const validFiles = ['about', 'projects', 'skills', 'experience', 'contact'];
  return validFiles.includes(filename.toLowerCase());
};
