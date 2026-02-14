import { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ShareSiteLinkCard() {
  const [copied, setCopied] = useState(false);
  const siteUrl = window.location.origin;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-blue-600/10 to-cyan-500/10 border border-blue-200/20">
      <h3 className="font-semibold text-lg mb-2">Share This Site</h3>
      <p className="text-muted-foreground mb-4">
        Share this portfolio with others using the link below
      </p>
      <div className="flex items-center gap-2">
        <div className="flex-1 px-4 py-2 bg-background/50 rounded-md border border-border text-sm truncate">
          {siteUrl}
        </div>
        <Button
          onClick={handleCopy}
          variant="outline"
          size="icon"
          className="shrink-0"
          title="Copy link"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
        <Button
          asChild
          variant="outline"
          size="icon"
          className="shrink-0"
          title="Open in new tab"
        >
          <a href={siteUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
