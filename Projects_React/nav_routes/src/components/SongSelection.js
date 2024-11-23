import "./songSelectionStyles.css"
import React, { useState } from "react";

function SongSelection() {
    const bird1 = new Audio(
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
    );

    const bird2 = new Audio(
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
    );

    const [currentAudio, setCurrentAudio] = useState(null);

    const toggleAudio = (audio) => {
        if (currentAudio === audio) {
            // Pausa si selecciona el mismo audio
            audio.pause();
            setCurrentAudio(null);
        }

        else {
            // Pausa el audio anterior si hay uno sonando
            if (currentAudio) {
                currentAudio.pause();
            }
            // Reproduce el audio seleccionado
            audio.play();
            setCurrentAudio(audio);
        }
    };

    return (
        <div>
            <button className="btn" onClick={() => toggleAudio(bird1)}>Caspian Tern 1</button>
            <button className="btn" onClick={() => toggleAudio(bird2)}>Caspian Tern 2</button>
        </div>
    );
}

export default SongSelection;

