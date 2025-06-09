import React, { useEffect } from "react";
import "../index.css";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("show");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about">
      <div className="fade-scroll" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginTop: '2rem' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h1>About Mario Stroeykens</h1>
        </div>
      </div>
      <div className="fade-scroll">
        <p><strong>Born on September 29, 2004, in Zellik, Belgium</strong>, Mario Stroeykens grew up in a sports-loving family with a Belgian father and Congolese mother. From the moment he kicked his first ball, it was clear football ran in his blood. As a young child, Mario joined local side Toekomst Relegem, where coaches noticed his vision, technique, and fearless style on the pitch.</p>
      </div>
      <div className="fade-scroll">
        <p>At age eight, he earned a scholarship to <strong>Anderlecht’s famed youth academy</strong> in Neerpede. Over the next eight years, Mario balanced schoolwork with intense training sessions, developing under legendary coaches and forging friendships with Belgium’s brightest prospects. His maturity and work ethic set him apart even as a teenager.</p>
      </div>
      <div className="fade-scroll">
        <p>In January 2021, just 16 years old, Mario made his professional debut for <strong>RSC Anderlecht</strong> under coach <strong>Vincent Kompany</strong>—one of the youngest debutants in club history. That breakthrough confirmed what fans and staff already suspected: this homegrown talent was destined for big things. Off the field, Mario remains humble, approachable, and always eager to learn.</p>
      </div>
      <div className="fade-scroll">
        <p>When he’s not creating magic on the pitch, Mario is an avid art enthusiast—often spotted exploring Brussels art galleries or sketching in his free time. He speaks French, Dutch, and English fluently, making him a natural leader in the locker room. While deeply focused on his football career, he cares about giving back, frequently visiting youth clinics to inspire the next generation.</p>
      </div>
      <div className="fade-scroll">
        <p>Today, Mario Stroeykens stands as one of Anderlecht’s brightest stars: a midfielder with vision, creativity, and a tireless work rate. With a growing partnership with <strong>Nike</strong> and a spot on Belgium’s youth national teams, his journey is only just beginning. To his fans, coaches, and teammates, Mario represents the perfect blend of talent, humility, and relentless ambition.</p>
      </div>
    </div>
  );
};

export default About;
