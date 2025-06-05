import React, { useEffect, useState } from "react";
import actionImg from "../assets/images/12.jpg";
import "../index.css";

const milestones = [
  {
    season: "2020–21: Academy Graduate to First-Team Debut",
    text: "Joined Anderlecht’s senior squad training under Vincent Kompany. January 15, 2021: Made professional debut at 16 years old in a league match against Eupen. Appeared briefly against Charleroi and Waasland-Beveren; gained valuable experience in top-flight football.",
    stats: "3 apps"
  },
  {
    season: "2021–22: Learning the Ropes",
    text: "Featured in eight league matches, primarily as a late substitute. Balanced minutes with U21 appearances to maintain form. Signed first professional contract, extending his stay with Anderlecht until 2024.",
    stats: "8 apps"
  },
  {
    season: "2022–23: First Senior Goal & Increased Role",
    text: "October 9, 2022: Scored first senior goal in a 3–1 win at KV Mechelen. Made 20 total appearances, combining first-team and RSCA Futures duty. Gained European experience with minutes in the UEFA Europa Conference League.",
    stats: "1 goal"
  },
  {
    season: "2023–24: Breakthrough Season",
    text: "Established himself as a regular starter under coach Brian Riemer. Played 40 matches in all competitions; tallied 6 goals and 6 assists. December 7, 2023: Netted a stunning long-range strike vs Standard Liège in the Belgian Cup, securing a 2–0 victory. Contributed crucial performances that propelled Anderlecht into the championship play-offs.",
    stats: "6 G / 6 A"
  },
  {
    season: "2024–25: Consistency & Clutch Moments",
    text: "Cemented his role in Anderlecht’s midfield with 38 league appearances. July 21, 2024: Came off the bench to score a 92nd-minute winner vs STVV on opening day. Represented Belgium U21 at every youth level; captained the U20 side on multiple occasions. Renewed contract through 2026 and featured in UEFA Europa League matches.",
    stats: "38 apps"
  }
];

const Career = () => {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('show');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="career">
      <h1 className="fade-scroll">Career Highlights &amp; Milestones</h1>
      <div className="fade-scroll" style={{ maxWidth: '400px', marginBottom: '1rem' }}>
        <img src={actionImg} alt="Mario Stroeykens in action" style={{ width: '100%' }} loading="lazy" />
      </div>
      <ul className="career-timeline">
        {milestones.map((m, i) => (
          <li
            key={m.season}
            className="fade-scroll milestone"
            data-stats={m.stats}
            onClick={() => setActive(active === i ? null : i)}
          >
            <h3>{m.season}</h3>
            {active === i && <p className="details">{m.text}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Career;
