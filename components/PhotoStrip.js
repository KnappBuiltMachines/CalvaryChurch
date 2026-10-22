"use client";

// =============================================================================
//  HOME PAGE PHOTO STRIP
//  A row of church-family photos that drifts slowly sideways, looping forever.
//  Photos come from the folder public/photo-strip/ and are shown in a fresh
//  random order for every visitor. Hovering pauses it.
// =============================================================================

import Image from "next/image";
import { useEffect, useState } from "react";

const SECONDS_PER_PHOTO = 5; // lower = faster drift

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function PhotoStrip({ photos = [] }) {
  const [order, setOrder] = useState(photos);
  const [paused, setPaused] = useState(false);

  // Shuffle on the visitor's device so everyone sees a different order.
  useEffect(() => { setOrder(shuffle(photos)); }, [photos]);

  if (!photos.length) return null;

  // The row is drawn twice back-to-back so the loop has no visible seam.
  const renderRow = (copy) =>
    order.map((p, i) => (
      // next/image shrinks big phone photos to a web-friendly size automatically.
      <Image
        key={`${copy}-${p.src}`}
        className="photo-strip-img"
        src={p.src}
        width={p.width}
        height={p.height}
        sizes="(max-width: 640px) 300px, 450px"
        quality={80}
        alt={copy === 0 ? p.alt : ""}
        aria-hidden={copy === 0 ? undefined : true}
        loading={i < 6 && copy === 0 ? "eager" : "lazy"}
        style={{ aspectRatio: `${p.width} / ${p.height}` }}
      />
    ));

  return (
    <section className="photo-strip" aria-label="Photos from our church family">
      <div
        className={`photo-strip-track${paused ? " is-paused" : ""}`}
        style={{ "--strip-duration": `${Math.max(order.length, 4) * SECONDS_PER_PHOTO}s` }}
      >
        {renderRow(0)}
        {renderRow(1)}
      </div>
      <button
        type="button"
        className="photo-strip-toggle"
        onClick={() => setPaused((v) => !v)}
        aria-label={paused ? "Play photo strip" : "Pause photo strip"}
      >
        {paused ? (
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9-5.5z" fill="currentColor" /></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5h3v11H3zM8 1.5h3v11H8z" fill="currentColor" /></svg>
        )}
      </button>
    </section>
  );
}
