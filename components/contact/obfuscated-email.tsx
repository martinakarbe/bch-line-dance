"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getContactEmail,
  getObfuscatedContactEmail,
} from "@/lib/contact-email";

type Props = {
  withCopy?: boolean;
  className?: string;
  buttonClassName?: string;
};

export function ObfuscatedEmail({
  withCopy = false,
  className,
  buttonClassName,
}: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const email = getContactEmail();

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <span className={"inline-flex items-center gap-2 " + (className ?? "")}>
      <span>{getObfuscatedContactEmail()}</span>
      {withCopy && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleCopy}
          aria-label={copied ? "E-Mail kopiert" : "E-Mail kopieren"}
          className={`h-8 px-2 ${buttonClassName ?? ""}`}
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      )}
    </span>
  );
}
