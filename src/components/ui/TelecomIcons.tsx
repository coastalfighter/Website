import type { SVGProps } from "react";

/**
 * A small library of telecom/network line icons, all 24x24, stroke-based,
 * matching the style already used for the Solutions cards. Used both for
 * real UI (solution cards) and as the sprite sheet for FloatingIcons'
 * decorative easter eggs.
 */

export function SignalBarsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="3" y="14" width="3.5" height="7" rx="0.75" />
      <rect x="9" y="10" width="3.5" height="11" rx="0.75" />
      <rect x="15" y="6" width="3.5" height="15" rx="0.75" />
    </svg>
  );
}

export function WifiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M2 8.5c5.5-5 14.5-5 20 0" strokeLinecap="round" />
      <path d="M5.5 12.5c3.5-3 9.5-3 13 0" strokeLinecap="round" />
      <path d="M9 16.5c1.7-1.5 4.3-1.5 6 0" strokeLinecap="round" />
      <circle cx="12" cy="20" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CellTowerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M12 3v18" strokeLinecap="round" />
      <path d="M8 21h8" strokeLinecap="round" />
      <path d="M9 12l3-9 3 9" strokeLinejoin="round" />
      <path d="M6.5 8.5a8 8 0 0 1 11 0" strokeLinecap="round" />
      <path d="M4.5 5.5a11.5 11.5 0 0 1 15 0" strokeLinecap="round" />
    </svg>
  );
}

export function SatelliteDishIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M4 14a9 9 0 0 1 9-9" strokeLinecap="round" />
      <path d="M3 20 13.5 9.5" strokeLinecap="round" />
      <path d="M14.5 4.5c3 1 5 3 6 6" strokeLinecap="round" />
      <circle cx="9" cy="15" r="2.2" />
      <path d="M9 17.2V21" strokeLinecap="round" />
      <path d="M6.5 21h5" strokeLinecap="round" />
    </svg>
  );
}

export function SimCardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M7 3h8l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" strokeLinejoin="round" />
      <rect x="8.5" y="9" width="7" height="6" rx="1" />
      <path d="M10.5 9v6M13.5 9v6" />
    </svg>
  );
}

export function RouterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <path d="M8 13V9a2 2 0 0 1 2-2M16 13V9a2 2 0 0 0-2-2M12 7V4" strokeLinecap="round" />
      <circle cx="7.5" cy="16.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="16.5" r="0.75" fill="currentColor" stroke="none" />
      <path d="M15 16.5h4" strokeLinecap="round" />
    </svg>
  );
}

export function HandsetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path
        d="M6 4c1.5 0 2.7.6 3.3 2 .4 1 .1 2.1-.7 2.9l-1 .9c1 2.2 2.7 3.9 4.9 4.9l.9-1c.8-.8 1.9-1.1 2.9-.7 1.4.6 2 1.8 2 3.3 0 1.7-1.3 3-3 3-7.2 0-13-5.8-13-13 0-1.7 1.3-3 3-3Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NetworkNodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M12 7v5M12 12l-5.5 4M12 12l5.5 4" strokeLinecap="round" />
    </svg>
  );
}
