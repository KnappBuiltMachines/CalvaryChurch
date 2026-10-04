"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "../app/site";

const LINKS = [
  { href: "/about", label: "About", children: [
    { href: "/about", label: "Who we are" },
    { href: "/pastor", label: "Meet our pastor" },
    { href: "/staff", label: "Our staff" },
    { href: "/beliefs", label: "Statement of faith" },
  ]},
  { href: "/watch", label: "Watch" },
  { href: "/ministries", label: "Ministries" },
  { href: "/events", label: "Events" },
  { href: "/connect", label: "Connect" },
  { href: "/give", label: "Give" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const pathname = usePathname();

  // A route is "active" when it matches exactly or is a sub-path.
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  // A top-level item is active if its own route or any of its children match.
  const groupActive = (l) =>
    isActive(l.href) || (l.children && l.children.some((c) => isActive(c.href)));

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand" onClick={close} aria-label={site.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo.png" alt={site.name} className="brand-logo" />
        </Link>

        <div className={open ? "nav-links open" : "nav-links"}>
          {LINKS.map((l) =>
            l.children ? (
              <div className="has-drop" key={l.label}>
                <Link
                  href={l.href}
                  onClick={close}
                  className={groupActive(l) ? "active" : undefined}
                  aria-current={groupActive(l) ? "page" : undefined}
                >
                  {l.label}
                </Link>
                <div className="drop">
                  {l.children.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      onClick={close}
                      className={isActive(c.href) ? "active" : undefined}
                      aria-current={isActive(c.href) ? "page" : undefined}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={l.label}
                href={l.href}
                onClick={close}
                className={isActive(l.href) ? "active" : undefined}
                aria-current={isActive(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            )
          )}
          <Link href="/visit" className="btn btn-primary nav-cta" onClick={close}>
            Plan your visit
          </Link>
        </div>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
          )}
        </button>
      </div>
    </nav>
  );
}
