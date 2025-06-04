import React from "react";
import "../styles/highlights.css";

const videoData = [
  {
    id: "Onwz6V1em98",
    title: "Stroeykens Scores Against STVV",
    description: "Mario Stroeykens secures a late victory for RSC Anderlecht against STVV."
  },
  {
    id: "IPGFAr7jJ3o",
    title: "Belgian Wonderkid Highlights",
    description: "A compilation of Mario Stroeykens' best moments showcasing his talent."
  },
  {
    id: "NqBh_OGqK7w",
    title: "Goal vs Lierse",
    description: "Stroeykens nets a crucial goal in the match against Lierse."
  },
  {
    id: "tvkzzhwHmSw",
    title: "First Goals for RSC Anderlecht",
    description: "Watch Mario Stroeykens score his inaugural goals for Anderlecht."
  }
];

const Highlights = () => {
  return (
    <div className="highlights">
      <h1>Highlights</h1>
      <div className="video-gallery">
        {videoData.map((video) => (
          <div key={video.id} className="video-card">
            <div className="video-responsive">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
