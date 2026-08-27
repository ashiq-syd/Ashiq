import React, { useState } from 'react';
import { Copy, Check, Terminal, Play, RotateCcw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface TerminalBlockProps {
  interactive?: boolean;
}

export const TerminalBlock: React.FC<TerminalBlockProps> = ({ interactive = true }) => {
  const [activeTab, setActiveTab] = useState<'config' | 'terraform' | 'cli'>('config');
  const [copied, setCopied] = useState(false);
  const [cliInput, setCliInput] = useState('');
  const [cliHistory, setCliHistory] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([
    {
      cmd: 'aws sts get-caller-identity',
      output: JSON.stringify(
        {
          UserId: 'AROA7ASHIQ2026IAMDEV',
          Account: '8220981125',
          Arn: 'arn:aws:iam::8220981125:user/syed-ashiq',
          Role: 'Cloud & DevOps Engineer',
          Status: 'AVAILABLE_FOR_HIRE',
        },
        null,
        2
      ),
    },
  ]);

  const handleCopy = () => {
    const textToCopy =
      activeTab === 'config'
        ? PERSONAL_INFO.terminalObject
        : activeTab === 'terraform'
        ? terraformCode
        : cliHistory.map((h) => `$ ${h.cmd}\n${typeof h.output === 'string' ? h.output : ''}`).join('\n\n');

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const terraformCode = `// main.tf — Cloud Infrastructure Architecture
module "vpc_production" {
  source             = "terraform-aws-modules/vpc/aws"
  cidr               = "10.0.0.0/16"
  enable_nat_gateway = true
  single_nat_gateway = true
}

resource "aws_bedrock_foundation_model" "core_ai" {
  model_id = "amazon.titan-text-express-v1"
  security_profile = {
    iam_least_privilege = true
    encryption_at_rest  = "AES256"
  }
}`;

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = cliInput.trim().toLowerCase();
    if (!cleanCmd) return;

    let response: string | React.ReactNode = '';

    switch (cleanCmd) {
      case 'help':
        response = 'Available commands: about, skills, certs, projects, contact, terraform, clear, whoami';
        break;
      case 'whoami':
      case 'about':
        response = `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}\n${PERSONAL_INFO.heroTagline}`;
        break;
      case 'skills':
        response = 'AWS (EC2, S3, VPC, IAM, Bedrock), Terraform, Linux, Git, Docker, Python, Shell, High Availability Architecture';
        break;
      case 'certs':
      case 'cert':
        response = 'AWS Certified Solutions Architect - Associate\nValidation: 8aba81942ba741778b5eef95d900aaae\nVerify: https://aws.amazon.com/verification';
        break;
      case 'projects':
        response = '1. AWS Bedrock Generative AI App\n2. Transaction Monitoring System\n3. Terraform Infrastructure Automation\n4. Secure Scalable Web App on AWS\n5. AI Design Website';
        break;
      case 'contact':
        response = `Email: ${PERSONAL_INFO.email}\nPhone: ${PERSONAL_INFO.phone}\nLinkedIn: linkedin.com/in/syed-a-7a4306361\nGitHub: github.com/ashiq-syd`;
        break;
      case 'terraform':
      case 'terraform plan':
        response = 'Plan: 8 to add, 0 to change, 0 to destroy.\n✓ AWS VPC (10.0.0.0/16)\n✓ ALB + Auto Scaling EC2 Instances\n✓ IAM Least Privilege Policies\n✓ S3 Bucket with SSE-KMS';
        break;
      case 'clear':
        setCliHistory([]);
        setCliInput('');
        return;
      default:
        response = `Command not found: "${cleanCmd}". Type "help" for a list of available commands.`;
    }

    setCliHistory((prev) => [...prev, { cmd: cliInput, output: response }]);
    setCliInput('');
  };

  return (
    <div
      id="developer-terminal-block"
      className="w-full bg-[#111111] text-[#F2F1ED] border border-[#111111] shadow-2xl rounded-none overflow-hidden font-mono"
    >
      {/* Terminal Titlebar */}
      <div className="bg-[#1C1C1C] border-b border-[#2A2A2A] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#E52B20] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#DCD9D0]/40 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#DCD9D0]/20 inline-block" />
          <span className="text-xs text-[#888888] ml-2 tracking-wider flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#E52B20]" />
            {activeTab === 'config' && 'syed_ashiq.config.ts'}
            {activeTab === 'terraform' && 'infra.tf — plan'}
            {activeTab === 'cli' && 'bash — aws-cli-session'}
          </span>
        </div>

        {/* Tab switcher & actions */}
        <div className="flex items-center gap-2">
          {interactive && (
            <div className="flex items-center bg-[#111111] p-0.5 border border-[#333333]">
              <button
                type="button"
                onClick={() => setActiveTab('config')}
                className={`px-2.5 py-1 text-[11px] font-mono tracking-wider transition-colors ${
                  activeTab === 'config'
                    ? 'bg-[#E52B20] text-[#F2F1ED] font-bold'
                    : 'text-[#888888] hover:text-[#F2F1ED]'
                }`}
              >
                CONFIG
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('terraform')}
                className={`px-2.5 py-1 text-[11px] font-mono tracking-wider transition-colors ${
                  activeTab === 'terraform'
                    ? 'bg-[#E52B20] text-[#F2F1ED] font-bold'
                    : 'text-[#888888] hover:text-[#F2F1ED]'
                }`}
              >
                TERRAFORM
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('cli')}
                className={`px-2.5 py-1 text-[11px] font-mono tracking-wider transition-colors ${
                  activeTab === 'cli'
                    ? 'bg-[#E52B20] text-[#F2F1ED] font-bold'
                    : 'text-[#888888] hover:text-[#F2F1ED]'
                }`}
              >
                AWS_CLI
              </button>
            </div>
          )}

          <button
            onClick={handleCopy}
            title="Copy Code"
            className="p-1.5 text-[#888888] hover:text-[#F2F1ED] hover:bg-[#2A2A2A] border border-[#333333] transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-6 text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[220px]">
        {activeTab === 'config' && (
          <div className="space-y-1">
            <p className="text-[#666666] italic">// Syed Ashiq — Cloud & DevOps Engineer Profile</p>
            <p>
              <span className="text-[#E52B20] font-bold">const</span>{' '}
              <span className="text-amber-200">SYED_ASHIQ</span> = {'{'}
            </p>
            <p className="pl-4">
              <span className="text-cyan-300">focus</span>:{' '}
              <span className="text-[#888888]">[</span>
              <span className="text-emerald-300">&quot;AWS&quot;</span>,{' '}
              <span className="text-emerald-300">&quot;DevOps&quot;</span>,{' '}
              <span className="text-emerald-300">&quot;Terraform&quot;</span>
              <span className="text-[#888888]">]</span>,
            </p>
            <p className="pl-4">
              <span className="text-cyan-300">builds</span>:{' '}
              <span className="text-[#888888]">[</span>
              <span className="text-emerald-300">&quot;Cloud Infrastructure&quot;</span>,{' '}
              <span className="text-emerald-300">&quot;AI Applications&quot;</span>
              <span className="text-[#888888]">]</span>,
            </p>
            <p className="pl-4">
              <span className="text-cyan-300">principles</span>:{' '}
              <span className="text-[#888888]">[</span>
              <span className="text-emerald-300">&quot;Security&quot;</span>,{' '}
              <span className="text-emerald-300">&quot;Reliability&quot;</span>,{' '}
              <span className="text-emerald-300">&quot;Automation&quot;</span>
              <span className="text-[#888888]">]</span>
            </p>
            <p>{'};'}</p>
            <div className="pt-4 flex items-center gap-2 text-xs text-[#888888]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>Status: Ready for infrastructure deployment</span>
              <span className="animate-cursor-blink text-[#E52B20] font-bold">_</span>
            </div>
          </div>
        )}

        {activeTab === 'terraform' && (
          <pre className="text-xs sm:text-sm text-[#DCD9D0] leading-relaxed">
            <code>
              <span className="text-[#666666]">// Automated Infrastructure as Code (HCL)</span>{'\n'}
              <span className="text-[#E52B20]">module</span> <span className="text-emerald-300">&quot;vpc_production&quot;</span> {'{'}{'\n'}
              {'  '}<span className="text-cyan-300">source</span>             = <span className="text-amber-200">&quot;terraform-aws-modules/vpc/aws&quot;</span>{'\n'}
              {'  '}<span className="text-cyan-300">cidr</span>               = <span className="text-amber-200">&quot;10.0.0.0/16&quot;</span>{'\n'}
              {'  '}<span className="text-cyan-300">enable_nat_gateway</span> = <span className="text-[#E52B20]">true</span>{'\n'}
              {'  '}<span className="text-cyan-300">single_nat_gateway</span> = <span className="text-[#E52B20]">true</span>{'\n'}
              {'}'}{'\n\n'}
              <span className="text-[#E52B20]">resource</span> <span className="text-emerald-300">&quot;aws_bedrock_model_invocation&quot;</span> <span className="text-amber-200">&quot;genai&quot;</span> {'{'}{'\n'}
              {'  '}<span className="text-cyan-300">model_id</span>           = <span className="text-amber-200">&quot;amazon.titan-text-express-v1&quot;</span>{'\n'}
              {'  '}<span className="text-cyan-300">iam_role</span>           = <span className="text-amber-200">&quot;arn:aws:iam::8220981125:role/BedrockExecution&quot;</span>{'\n'}
              {'}'}
            </code>
          </pre>
        )}

        {activeTab === 'cli' && (
          <div className="space-y-3">
            <div className="text-xs text-[#888888] pb-1 border-b border-[#222222]">
              Interactive Shell. Type <span className="text-[#E52B20]">help</span>, <span className="text-[#E52B20]">skills</span>, <span className="text-[#E52B20]">certs</span>, <span className="text-[#E52B20]">projects</span>, or <span className="text-[#E52B20]">terraform</span>.
            </div>

            {cliHistory.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-amber-300">
                  <span className="text-[#E52B20] font-bold">ashiq@aws-cloud:~$</span>
                  <span>{item.cmd}</span>
                </div>
                <div className="text-[#DCD9D0] pl-4 whitespace-pre-wrap font-mono text-xs bg-[#181818] p-2 border-l-2 border-[#E52B20]/60">
                  {item.output}
                </div>
              </div>
            ))}

            <form onSubmit={handleCliSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-[#E52B20] font-bold">ashiq@aws-cloud:~$</span>
              <input
                type="text"
                value={cliInput}
                onChange={(e) => setCliInput(e.target.value)}
                placeholder="Type command (e.g. skills)..."
                className="flex-1 bg-transparent border-none text-[#F2F1ED] focus:outline-none font-mono text-xs sm:text-sm"
              />
              <button
                type="submit"
                className="px-2 py-1 bg-[#222222] hover:bg-[#E52B20] text-[#F2F1ED] text-[10px] uppercase font-mono tracking-wider transition-colors"
              >
                RUN
              </button>
              {cliHistory.length > 1 && (
                <button
                  type="button"
                  onClick={() => setCliHistory([])}
                  title="Clear Output"
                  className="p-1 text-[#666666] hover:text-[#F2F1ED]"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </form>
          </div>
        )}
      </div>

      {/* Terminal Footer Bar */}
      <div className="bg-[#0C0C0C] px-4 py-2 border-t border-[#222222] flex items-center justify-between text-[11px] text-[#666666]">
        <div className="flex items-center gap-3">
          <span>REGION: us-east-1</span>
          <span className="hidden sm:inline">STACK: AWS · Terraform · Linux</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-emerald-400">AWS SAA VERIFIED</span>
          <span className="text-[#444444]">|</span>
          <span>UTF-8</span>
        </div>
      </div>
    </div>
  );
};
