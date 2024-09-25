import React, { useState } from "react";
import news_feed from './sample_news_stories.json';
import Story from './Story';

function App() {
  // Manage the list of stories in state
  const [stories, setStories] = useState(news_feed.results);

  // Handle the removal of a story
  const removeStory = (indexToRemove) => {
    setStories(stories.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="App">
      <h1>News Feed</h1>
      {stories.length === 0 ? (
        <p>No more stories to display.</p>
      ) : (
        stories.map((story, index) => (
          <Story
            key={index}
            story={story}
            onRemove={() => removeStory(index)}
          />
        ))
      )}
    </div>
  );
}

export default App;

