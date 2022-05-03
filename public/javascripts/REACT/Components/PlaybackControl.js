// import React, { useState } from "react";
// https://github.com/goldfire/howler.js#quick-start
// import { Howl, Howler } from "howler";

var sound = new Howl({
  src: ["../../AUDIO/origin.mp3"],
  html5: true,
});

function PlaybackControl() {
  // initialize timestamp to 0 second
  const [timestamp, setTimestamp] = React.useState(0);

  const play = () => {
    // get the current time
    const time = sound.seek();
    // stop the playback
    sound.stop();
    // seek
    sound.seek(time);
    // start playback
    sound.play();
    // show timestamp
    setInterval(() => {
      // update timestamp variable
      setTimestamp(() => {
        //roundup the seek value to show passed seconds
        return Math.round(sound.seek());
      });
    }, 1000); //do it every 1 second
  };

  const pause = () => {
    sound.pause();
  };

  const stop = () => {
    sound.stop();
  };

  const seek10 = () => {
    // get the current time
    const time = sound.seek();
    // stop the playback
    sound.stop();
    // seek
    sound.seek(time + 10);
    // start playback
    sound.play();
    // show timestamp
    setInterval(() => {
      // update timestamp variable
      setTimestamp(() => {
        //roundup the seek value to show passed seconds
        return Math.round(sound.seek());
      });
    }, 1000);
  };

  return (
    <div>
      {/* <br></br> */}
      {/* <p>{timestamp}</p> */}
      {/* <br></br> */}
      <button onClick={play}>Click to Play</button>
      <button onClick={pause}>Click to pause</button>
      <button onClick={stop}>Click to stop</button>
      <button onClick={seek10}>Forward 10sec</button>
    </div>
  );
}

// export default App;
