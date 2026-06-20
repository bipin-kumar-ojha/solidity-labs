import Link from 'next/link';
import { ArrowRight, Calculator, ChevronRight } from 'lucide-react';

type MegaMenuServicesProps = {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const linkClassName =
  'group/item flex items-center justify-between rounded-md px-2.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950';

const textItemClassName =
  'flex items-center justify-between rounded-md px-2.5 py-2 text-sm font-medium text-slate-500';

export default function MegaMenuServices({ onMouseEnter, onMouseLeave }: MegaMenuServicesProps) {
  return (
    <div
      className="absolute left-0 top-full z-50 w-[920px] pt-3"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="grid grid-cols-[1.15fr_0.95fr_0.9fr_0.85fr_1fr] gap-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl shadow-slate-950/20">
        {/* COLUMN 1 — AI */}
        <div className="border-r border-slate-100 p-5">
          <h4 className="mb-3 text-[11px] font-bold uppercase text-slate-400">AI Development</h4>
          <ul className="space-y-1">
            <li>
              <Link className={linkClassName} href="/services/ai-development/ai-agent-development/">
                <span>AI Agent Development 🔥</span>
                <ChevronRight className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover/item:text-slate-700" />
              </Link>
            </li>
            <li>
              <Link className={linkClassName} href="/services/ai-development/ai-chatbot-development/">
                <span>AI Chatbot Development</span>
                <ChevronRight className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover/item:text-slate-700" />
              </Link>
            </li>
            <li>
              <Link className={linkClassName} href="/services/ai-development/ai-workflow-automation/">
                <span>AI Workflow Automation</span>
                <ChevronRight className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover/item:text-slate-700" />
              </Link>
            </li>
            <li>
              <Link className={linkClassName} href="/services/ai-development/chatgpt-integration/">
                <span>ChatGPT Integration</span>
                <ChevronRight className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover/item:text-slate-700" />
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 2 — BLOCKCHAIN */}
        <div className="border-r border-slate-100 p-5">
          <h4 className="mb-3 text-[11px] font-bold uppercase text-slate-400">Blockchain</h4>
          <ul className="space-y-1">
            <li>
              <Link className={linkClassName} href="/services/blockchain-development/smart-contract-development/">
                <span>Smart Contract</span>
                <ChevronRight className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover/item:text-slate-700" />
              </Link>
            </li>
            <li>
              <Link className={linkClassName} href="/services/blockchain-development/token-creation/">
                <span>Token Creation</span>
                <ChevronRight className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover/item:text-slate-700" />
              </Link>
            </li>
            <li>
              <Link className={linkClassName} href="/services/blockchain-development/defi-platform-development/">
                <span>DeFi Platform</span>
                <ChevronRight className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover/item:text-slate-700" />
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="border-r border-slate-100 p-5">
          <h4 className="mb-3 text-[11px] font-bold uppercase text-slate-400">Automation & SaaS</h4>
          <ul className="space-y-1">
            <li>
              <Link className={linkClassName} href="/services/automation-development/">
                <span>Automation</span>
                <ChevronRight className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover/item:text-slate-700" />
              </Link>
            </li>
            <li>
              <Link className={linkClassName} href="/services/saas-development/">
                <span>SaaS Development</span>
                <ChevronRight className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover/item:text-slate-700" />
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div className="border-r border-slate-100 p-5">
          <h4 className="mb-3 text-[11px] font-bold uppercase text-slate-400">Web & Mobile</h4>
          <ul className="space-y-1">
            <li className={textItemClassName}>Web Development</li>
            <li className={textItemClassName}>Mobile Apps</li>
          </ul>
        </div>

        {/* COLUMN 5 — CTA */}
        <div className="bg-slate-950 p-5 text-white">
          <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15">
            <Calculator className="h-[18px] w-[18px]" />
          </div>
          <p className="mb-2 text-xs font-semibold uppercase text-cyan-200">Free estimate</p>
          <h4 className="mb-3 text-base font-semibold leading-snug">Project cost calculator</h4>
          <Link
            href="/resources/project-cost-calculator/"
            className="group/cta inline-flex items-center gap-2 rounded-md bg-white px-3.5 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-100"
          >
            Try it free
            <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
