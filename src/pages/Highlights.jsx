import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "../styles/highlights.css";
import "../styles/hero.css"; // ensure hero background video displays
import highlightVideo from "../assets/images/mariovideo/mariohighlights.mp4";
import heroPoster from "../assets/mario-hero.jpg";

const videos = [
  {
    id: "NqBh_OGqK7w",
    title: "First Senior Goal – Oct 9, 2022",
    caption:
      "See Stroeykens come off the bench to score Anderlecht’s second goal in a thrilling 2–1 comeback win over Lierse during the 2022–23 season."
  },
  {
    id: "tvkzzhwHmSw",
    title: "Cup Stunner vs Standard Liège – Dec 7, 2023",
    caption:
      "Relive Mario Stroeykens’ milestone first goals for RSC Anderlecht, scored immediately after entering the match."
  },
  {
    id: "Onwz6V1em98",
    title: "Last-Minute Winner vs STVV – July 21, 2024",
    caption:
      "Watch Mario Stroeykens net the decisive 1–0 winner for Anderlecht against STVV in the 2024–25 Jupiler Pro League."
  },
  {
    id: "IPGFAr7jJ3o",
    title: "Belgium U21 Highlight",
    caption:
      "Enjoy a fast‑paced highlight reel showcasing the Belgian wonderkid’s top skills and goals for RSC Anderlecht."
  }
];

const Highlights = () => {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('show'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section className="hero highlight-hero">
        <div className="video-wrapper">
          <video
            className="hero-video"
            src={highlightVideo}
            autoPlay
            loop
            muted
            playsInline
            poster={heroPoster}
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Watch the Best of Mario Stroeykens</h1>
          <p>
            Explore Mario’s most electrifying moments—from his first senior goal to
            jaw-dropping match-winners. Click any clip to relive the action in full.
          </p>
        </div>
      </section>
      <div className="hero-divider" />
      <div className="highlights">
        <div className="video-grid">
          {videos.map(v => (
            <div
              key={v.title}
              className="thumb fade-scroll"
              onClick={() => setOpen(v)}
            >
              <img
                src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                alt={v.title}
                loading="lazy"
              />
              <span className="play">▶</span>
              <h3>{v.title}</h3>
              <p>{v.caption}</p>
            </div>
          ))}
        </div>
        {open && (
          <div className="lightbox" onClick={() => setOpen(null)}>
            <YouTube videoId={open.id} opts={{ width: '80%', height: '60%' }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Highlights;
