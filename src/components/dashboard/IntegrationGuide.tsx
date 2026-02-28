"use client";

import React from "react";
import { Copy, FileCode } from "lucide-react";

export const IntegrationGuide = () => {
    const iframeCode = `<iframe 
  src="https://firestudio.com/embed?key=fstudio_live_8a7d3f9e2b5c1k4m" 
  width="100%" 
  height="700px"
  style="border-radius: 12px; border: none;"
  allow="cross-origin-isolated"
></iframe>`;

    const scriptCode = `// Push starter code to editor
const iframe = document.querySelector('iframe');
iframe.contentWindow.postMessage({
  type: 'LOAD_LESSON',
  files: {
    'main.py': 'print("Hello, World!")\\n\\n# Your code here'
  }
}, '*');`;

    const CodeBlock = ({ code, title }: { code: string; title?: string }) => (
        <div className="relative mb-4 rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 last:mb-0">
            <button className="absolute right-4 top-4 flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs text-white transition-colors hover:bg-fire-primary">
                <Copy size={12} /> Copy
            </button>
            <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-fire-secondary">
                {code}
            </pre>
        </div>
    );

    return (
        <div className="glass mb-8 rounded-3xl p-6">
            <div className="mb-6">
                <h2 className="text-h2 flex items-center gap-2">
                    <FileCode size={20} className="text-fire-primary" />
                    Integration Code
                </h2>
                <p className="text-body mt-1 text-fire-text-secondary">Copy this code to embed Fire Studio in your website:</p>
            </div>

            <CodeBlock code={iframeCode} />
            <CodeBlock code={scriptCode} />
        </div>
    );
};
