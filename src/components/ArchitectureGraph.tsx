import React from 'react';
import { Cloud, Server, Database, Shield, Lock, Layers, Cpu, Globe, ArrowRight } from 'lucide-react';

interface ArchitectureGraphProps {
  type: 'bedrock' | 'monitoring' | 'terraform' | 'ha-web' | 'nextjs';
  isDarkMode?: boolean;
}

export const ArchitectureGraph: React.FC<ArchitectureGraphProps> = ({ type, isDarkMode = false }) => {
  const bgBox = isDarkMode ? 'bg-[#1C1C1C] border-[#333333]' : 'bg-[#EAE8E2] border-[#111111]/30';
  const textColor = isDarkMode ? 'text-[#F2F1ED]' : 'text-[#111111]';
  const subText = isDarkMode ? 'text-[#888888]' : 'text-[#555555]';

  if (type === 'bedrock') {
    return (
      <div className={`p-4 border ${bgBox} font-mono text-xs space-y-3`}>
        <div className="flex items-center justify-between text-[11px] pb-2 border-b border-current/20">
          <span className="font-bold flex items-center gap-1.5 text-[#E52B20]">
            <Cloud className="w-3.5 h-3.5" />
            AWS BEDROCK ARCHITECTURE
          </span>
          <span className={subText}>IAM LEAST-PRIVILEGE</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center py-2">
          <div className="p-2.5 border border-current/20 bg-black/5 dark:bg-white/5 space-y-1">
            <div className="text-[10px] text-[#E52B20]">CLIENT / APP</div>
            <div className="font-bold text-[11px] truncate">Python Backend</div>
            <div className="text-[9px] text-gray-500">FastAPI / Requests</div>
          </div>
          <div className="p-2.5 border border-current/20 bg-black/5 dark:bg-white/5 space-y-1">
            <div className="text-[10px] text-[#E52B20]">SECURITY LAYER</div>
            <div className="font-bold text-[11px] truncate">IAM Policy &amp; Role</div>
            <div className="text-[9px] text-gray-500">STS AssumeRole</div>
          </div>
          <div className="p-2.5 border border-current/20 bg-black/5 dark:bg-white/5 space-y-1">
            <div className="text-[10px] text-[#E52B20]">FOUNDATION MODEL</div>
            <div className="font-bold text-[11px] truncate">AWS Bedrock</div>
            <div className="text-[9px] text-gray-500">Titan / Claude</div>
          </div>
        </div>

        <div className="text-[10px] text-gray-500 flex items-center justify-between pt-1">
          <span>Payload Encryption: AES-256</span>
          <span className="text-[#E52B20]">● Zero-GPU Overhead</span>
        </div>
      </div>
    );
  }

  if (type === 'monitoring') {
    return (
      <div className={`p-4 border ${bgBox} font-mono text-xs space-y-3`}>
        <div className="flex items-center justify-between text-[11px] pb-2 border-b border-current/20">
          <span className="font-bold flex items-center gap-1.5 text-[#E52B20]">
            <Server className="w-3.5 h-3.5" />
            TRANSACTION INGESTION PIPELINE
          </span>
          <span className={subText}>FINTECH COMPLIANCE</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center py-2">
          <div className="p-2.5 border border-current/20 bg-black/5 dark:bg-white/5 space-y-1">
            <div className="text-[10px] text-[#E52B20]">OBJECT STORAGE</div>
            <div className="font-bold text-[11px] truncate">AWS S3 Bucket</div>
            <div className="text-[9px] text-gray-500">Raw Ledger Logs</div>
          </div>
          <div className="p-2.5 border border-current/20 bg-black/5 dark:bg-white/5 space-y-1">
            <div className="text-[10px] text-[#E52B20]">COMPUTE WORKER</div>
            <div className="font-bold text-[11px] truncate">AWS EC2 (Python)</div>
            <div className="text-[9px] text-gray-500">Anomaly Engine</div>
          </div>
          <div className="p-2.5 border border-current/20 bg-black/5 dark:bg-white/5 space-y-1">
            <div className="text-[10px] text-[#E52B20]">AUDIT TRAIL</div>
            <div className="font-bold text-[11px] truncate">IAM + CloudWatch</div>
            <div className="text-[9px] text-gray-500">Compliance Records</div>
          </div>
        </div>

        <div className="text-[10px] text-gray-500 flex items-center justify-between pt-1">
          <span>Batch Stream Parsing</span>
          <span className="text-[#E52B20]">● Anomaly Threshold Rule</span>
        </div>
      </div>
    );
  }

  if (type === 'terraform') {
    return (
      <div className={`p-4 border ${bgBox} font-mono text-xs space-y-3`}>
        <div className="flex items-center justify-between text-[11px] pb-2 border-b border-current/20">
          <span className="font-bold flex items-center gap-1.5 text-[#E52B20]">
            <Layers className="w-3.5 h-3.5" />
            TERRAFORM IaC LIFECYCLE
          </span>
          <span className={subText}>DECLARATIVE STATE</span>
        </div>

        <div className="grid grid-cols-4 gap-1.5 text-center py-2">
          <div className="p-2 border border-current/20 bg-black/5 dark:bg-white/5">
            <div className="text-[9px] text-[#E52B20]">STEP 01</div>
            <div className="font-bold text-[10px]">HCL Code</div>
          </div>
          <div className="p-2 border border-current/20 bg-black/5 dark:bg-white/5">
            <div className="text-[9px] text-[#E52B20]">STEP 02</div>
            <div className="font-bold text-[10px]">Plan</div>
          </div>
          <div className="p-2 border border-current/20 bg-black/5 dark:bg-white/5">
            <div className="text-[9px] text-[#E52B20]">STEP 03</div>
            <div className="font-bold text-[10px]">Apply</div>
          </div>
          <div className="p-2 border border-current/20 bg-black/5 dark:bg-white/5">
            <div className="text-[9px] text-[#E52B20]">STEP 04</div>
            <div className="font-bold text-[10px]">AWS VPC/EC2</div>
          </div>
        </div>

        <div className="text-[10px] text-gray-500 flex items-center justify-between pt-1">
          <span>Idempotent Deployments</span>
          <span className="text-[#E52B20]">● Security Group Binding</span>
        </div>
      </div>
    );
  }

  if (type === 'ha-web') {
    return (
      <div className={`p-4 border ${bgBox} font-mono text-xs space-y-3`}>
        <div className="flex items-center justify-between text-[11px] pb-2 border-b border-current/20">
          <span className="font-bold flex items-center gap-1.5 text-[#E52B20]">
            <Shield className="w-3.5 h-3.5" />
            MULTI-AZ HIGH AVAILABILITY
          </span>
          <span className={subText}>PUBLIC/PRIVATE SUBNETS</span>
        </div>

        <div className="border border-current/20 p-2.5 space-y-2 bg-black/5 dark:bg-white/5">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-[#E52B20] font-bold">INTERNET INGRESS (NACLs)</span>
            <span>AWS VPC (10.0.0.0/16)</span>
          </div>

          <div className="p-2 border border-current/20 bg-[#E52B20]/10 text-center font-bold text-[11px]">
            Application Load Balancer (ALB) — Multi-AZ Ingress
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="p-2 border border-current/20 text-center">
              <div className="text-[9px] text-[#E52B20]">PRIVATE SUBNET A</div>
              <div className="font-bold text-[10px]">EC2 Auto Scaling</div>
            </div>
            <div className="p-2 border border-current/20 text-center">
              <div className="text-[9px] text-[#E52B20]">PRIVATE SUBNET B</div>
              <div className="font-bold text-[10px]">EC2 Auto Scaling</div>
            </div>
          </div>
        </div>

        <div className="text-[10px] text-gray-500 flex items-center justify-between pt-1">
          <span>Security Groups + NACLs</span>
          <span className="text-[#E52B20]">● Zero Single Point of Failure</span>
        </div>
      </div>
    );
  }

  // Next.js AI Design
  return (
    <div className={`p-4 border ${bgBox} font-mono text-xs space-y-3`}>
      <div className="flex items-center justify-between text-[11px] pb-2 border-b border-current/20">
        <span className="font-bold flex items-center gap-1.5 text-[#E52B20]">
          <Globe className="w-3.5 h-3.5" />
          MODERN WEB APPLICATION
        </span>
        <span className={subText}>NEXT.JS &amp; TYPESCRIPT</span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center py-2">
        <div className="p-2.5 border border-current/20 bg-black/5 dark:bg-white/5 space-y-1">
          <div className="text-[10px] text-[#E52B20]">FRONTEND CORE</div>
          <div className="font-bold text-[11px]">Next.js / React</div>
          <div className="text-[9px] text-gray-500">Server &amp; Client</div>
        </div>
        <div className="p-2.5 border border-current/20 bg-black/5 dark:bg-white/5 space-y-1">
          <div className="text-[10px] text-[#E52B20]">TYPE SYSTEM</div>
          <div className="font-bold text-[11px]">TypeScript</div>
          <div className="text-[9px] text-gray-500">Strict Contracts</div>
        </div>
        <div className="p-2.5 border border-current/20 bg-black/5 dark:bg-white/5 space-y-1">
          <div className="text-[10px] text-[#E52B20]">DEPLOYMENT</div>
          <div className="font-bold text-[11px]">Vercel / Cloud</div>
          <div className="text-[9px] text-gray-500">Edge Optimized</div>
        </div>
      </div>

      <div className="text-[10px] text-gray-500 flex items-center justify-between pt-1">
        <span>Component-Driven Design</span>
        <span className="text-[#E52B20]">● Production Ready</span>
      </div>
    </div>
  );
};
