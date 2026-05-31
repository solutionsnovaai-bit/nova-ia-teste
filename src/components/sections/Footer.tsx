"use client";

export function Footer() {
  return (
    <footer className="relative px-6 py-12 border-t border-line">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="font-display text-xl font-bold tracking-wide">
          Nova <span className="text-accent font-medium">AI</span>{" "}
          <span className="text-sm font-light text-muted">Solutions</span>
        </div>
        <p className="text-xs font-light text-muted">
          © {new Date().getFullYear()} Nova AI Solutions · Inteligência sob
          medida para negócios de elite.
        </p>
      </div>
    </footer>
  );
}
