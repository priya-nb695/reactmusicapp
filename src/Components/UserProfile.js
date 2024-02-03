import React from "react";
function UserProfile() {
  let initAudio = () => {
    const targetAudio = document.getElementsByClassName("audioBtn")[0];
    targetAudio.play();
  };
  return (
    <div>
      <button className="playaudio" onClick={initAudio}>
        Play Mp3 Audio ok
      </button>
      <audio className="audioBtn" controls>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"></source>
      </audio>
      <audio className="audioBtn" controls>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"></source>
      </audio>
      <audio className="audioBtn" controls>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></source>
      </audio>
      <audio className="audioBtn" controls>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"></source>
      </audio>
    </div>
  );
}
export default UserProfile;