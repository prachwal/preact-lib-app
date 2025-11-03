import type { ComponentChildren } from 'preact';

interface AppMainProps {
  children: ComponentChildren;
}

export function AppMain({ children }: AppMainProps) {
  return <main className="app-main" role="main" id="main-content">{children}</main>;
}
