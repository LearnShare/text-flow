'use client';

import React, {
  useEffect,
  useRef,
} from 'react';

interface LogProps {
  text: string;
  autoScroll: boolean;
}

export function Log({
  text,
  autoScroll = true,
}: LogProps) {
  // auto scroll
  const scrollTarget = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (scrollTarget.current
          && autoScroll) {
        scrollTarget.current.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }, 50);

    return () => window.clearTimeout(timer);
  }, [
    scrollTarget,
    autoScroll,
    text,
  ]);

  return (
    <div className="font-mono border rounded-sm p-2 h-[200px] overflow-y-auto bg-slate-100">
      <pre>
        <code>{ text }</code>
      </pre>
      <div ref={ scrollTarget }></div>
    </div>
  );
}
