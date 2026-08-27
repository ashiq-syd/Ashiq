import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal, ArrowRight, CornerDownLeft, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, CAPABILITIES } from '../data/portfolioData';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<Array<{ type: 'cmd' | 'resp' | 'err'; text: string }>>([
    { type: 'resp', text: `Welcome to SYED ASHIQ Developer Console [v2.4-aws].\nType 'help' to view available commands, or navigate using shortcuts.` },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    const lower = cmd.toLowerCase();
    const newLogs = [...logs, { type: 'cmd' as const, text: `$ ${cmd}` }];

    if (lower === 'help') {
      newLogs.push({
        type: 'resp',
        text: `Available Commands:
  • about         - Overview and engineering background
  • skills        - Detailed technical capabilities breakdown
  • projects      - List all 5 featured cloud projects
  • certs         - AWS Certified Solutions Architect validation
  • resume        - ATS Resume details
  • contact       - Direct contact email and phone
  • terraform     - Simulate Terraform plan for multi-tier AWS VPC
  • clear         - Clear terminal screen
  • exit          - Close terminal window`,
      });
    } else if (lower === 'about') {
      newLogs.push({
        type: 'resp',
        text: `${PERSONAL_INFO.name} (${PERSONAL_INFO.title})\n${PERSONAL_INFO.heroTagline}\nEducation: SRM Institute of Science and Technology (B.Tech IT 2023-2027)`,
      });
    } else if (lower === 'skills') {
      newLogs.push({
        type: 'resp',
        text: CAPABILITIES.map((c) => `[${c.number}] ${c.category}: ${c.technologies}`).join('\n'),
      });
    } else if (lower === 'projects') {
      newLogs.push({
        type: 'resp',
        text: PROJECTS.map((p) => `• [${p.number}] ${p.title} (${p.category})`).join('\n'),
      });
    } else if (lower === 'certs' || lower === 'cert') {
      newLogs.push({
        type: 'resp',
        text: `AWS Certified Solutions Architect - Associate\nValidation Number: 8aba81942ba741778b5eef95d900aaae\nVerification URL: https://aws.amazon.com/verification`,
      });
    } else if (lower === 'contact') {
      newLogs.push({
        type: 'resp',
        text: `Email: ${PERSONAL_INFO.email}\nPhone: ${PERSONAL_INFO.phone}\nLinkedIn: https://www.linkedin.com/in/syed-a-7a4306361\nGitHub: https://github.com/ashiq-syd`,
      });
    } else if (lower === 'terraform' || lower === 'terraform plan') {
      newLogs.push({
        type: 'resp',
        text: `Terraform v1.8.4\nInitializing AWS provider...\n+ module.vpc.aws_vpc.primary (10.0.0.0/16)\n+ module.alb.aws_lb.external\n+ aws_autoscaling_group.web_fleet (min: 2, max: 8)\n+ aws_bedrock_runtime.titan\nPlan: 8 to add, 0 to change, 0 to destroy.`,
      });
    } else if (lower === 'clear') {
      setLogs([]);
      setInput('');
      return;
    } else if (lower === 'exit' || lower === 'quit') {
      onClose();
      return;
    } else {
      newLogs.push({
        type: 'err',
        text: `Command not recognized: '${cmd}'. Type 'help' for valid commands.`,
      });
    }

    setLogs(newLogs);
    setInput('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#111111] text-[#F2F1ED] border-2 border-[#E52B20] w-full max-w-2xl shadow-2xl overflow-hidden font-mono flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1C1C1C] px-4 py-3 border-b border-[#333333] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#E52B20]" />
            <span className="text-xs font-bold tracking-wider text-[#F2F1ED]">
              SYED_ASHIQ // AWS_CLI_PROMPT
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#888888] hover:text-[#E52B20] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Log Area */}
        <div
          ref={scrollRef}
          className="p-4 overflow-y-auto flex-1 space-y-2 text-xs leading-relaxed min-h-[250px] max-h-[400px]"
        >
          {logs.map((l, i) => (
            <div
              key={i}
              className={`whitespace-pre-wrap ${
                l.type === 'cmd'
                  ? 'text-amber-300 font-bold'
                  : l.type === 'err'
                  ? 'text-[#E52B20]'
                  : 'text-[#DCD9D0]'
              }`}
            >
              {l.text}
            </div>
          ))}
        </div>

        {/* Input bar */}
        <form onSubmit={handleCommand} className="p-3 bg-[#0C0C0C] border-t border-[#333333] flex items-center gap-2">
          <span className="text-[#E52B20] text-xs font-bold">ashiq@cloud:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'projects', 'terraform', 'contact'..."
            className="flex-1 bg-transparent border-none text-xs text-[#F2F1ED] focus:outline-none font-mono"
          />
          <button
            type="submit"
            className="px-2.5 py-1 bg-[#222222] hover:bg-[#E52B20] text-[#F2F1ED] text-[10px] uppercase transition-colors"
          >
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </form>
      </div>
    </div>
  );
};
