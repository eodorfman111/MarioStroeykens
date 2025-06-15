import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "../styles/highlights.css";
import highlightVideo from "../assets/images/mariovideo/mariohighlights.mp4";
import heroPoster from "../assets/mario-hero.jpg";

const videos = [
  { id: "Onwz6V1em98", title: "Career Compilation", caption: "All the best plays, goals, and assists in one epic reel." },
  { id: "NqBh_OGqK7w", title: "First Senior Goal – Oct 9, 2022", caption: "Mario’s composed finish vs KV Mechelen to open his scoring account." },
  { id: "tvkzzhwHmSw", title: "Cup Stunner vs Standard Liège – Dec 7, 2023", caption: "A 25-yard rocket in the Belgian Cup that left fans speechless." },
  { id: "Onwz6V1em98", title: "Last-Minute Winner vs STVV – July 21, 2024", caption: "Mario’s 92nd-minute beauty to secure a 1–0 win on opening day." },
  { id: "IPGFAr7jJ3o", title: "Belgium U21 Highlight", caption: "A glimpse of Mario’s magic on the international stage." }
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
          <p>Explore Mario’s most electrifying moments—from his first senior goal to jaw-dropping match-winners. Click any clip to relive the action in full.</p>
        </div>
      </section>
      <div className="hero-divider" />
      <div className="highlights">
        <div className="video-grid">
          {videos.map(v => (
            <div key={v.title} className="thumb fade-scroll" onClick={() => setOpen(v)}>
              <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} loading="lazy" />
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
