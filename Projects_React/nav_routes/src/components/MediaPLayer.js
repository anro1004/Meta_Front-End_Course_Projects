import React from "react";
import ReactPlayer from "react-player";

function MediaPlayer() {
    return (
        <div className="player">
            <h1>Media Player</h1>
            <ReactPlayer
                url="/assets/movie.mov"
                playing={false}
                volume={0.5}
                controls
            />
        </div>
    );
}

export default MediaPlayer;
