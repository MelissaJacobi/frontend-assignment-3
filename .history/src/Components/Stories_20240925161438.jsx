import React from "react";

const Story = ({ story, onRemove }) => {
  const {
    image_url,
    link,
    creator,
    description,
  } = story;

  const placeholderImage = "https://placehold.co/150x100";

  return (
    <div className="story">
      <img src={image_url || placeholderImage} alt="story" style={{ width: "150px", height: "100px" }} />
      <div className="story-details">
        <a href={link} target="_blank" rel="noopener noreferrer">
          Original Story
        </a>
        <p><strong>Author:</strong> {creator || "Unknown"}</p>
        <p><strong>Description:</strong> {description || "No description available"}</p>
      </div>
      <button onClick={onRemove}>Remove Story</button>
    </div>
  );
};

export default Story;
