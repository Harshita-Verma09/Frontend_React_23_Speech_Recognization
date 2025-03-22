import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from 'react';
import './Speech.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import copy from 'copy-to-clipboard';

const Speech = () => {
    const [isListening, setIsListening] = useState(false);
    const [copied, setCopied] = useState(false);

    // Start listening with continuous mode
    const startListening = () => {
        setIsListening(true);
        SpeechRecognition.startListening({ 
            continuous: true, 
            language: 'en-IN',
            interimResults: true  
        });
    };

    // Stop listening
    const stopListening = () => {
        setIsListening(false);
        SpeechRecognition.stopListening();
    };

    // Auto restart if speech stops unexpectedly
    useEffect(() => {
        if (isListening) {
            SpeechRecognition.startListening({ continuous: true, language: 'en-IN', interimResults: true });
        }
    }, [isListening]);

    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <p>Your browser does not support speech recognition.</p>;
    }

    // Function to copy text
    const handleCopy = () => {
        if (transcript) {
            copy(transcript);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
        }
    };

    return (
        <div className="speech-container">
            <div className="speech-box">
                {/* Header */}
                <h1 className="speech-title">Speech Recognition App</h1>

                {/* Paragraph Box */}
                <div className={`speech-text ${transcript ? "active" : ""}`}>
                    <p>{transcript || "Start speaking..."}</p>
                </div>

                {/* Buttons */}
                <div className="speech-buttons">
                    <button className="speech-button copy-btn" onClick={handleCopy}>
                        Copy Speech
                    </button>
                    <button onClick={startListening} className="speech-button start-btn">Start Listening</button>
                    <button onClick={stopListening} className="speech-button stop-btn">Stop Listening</button>
                </div>

                {/* Copy success message */}
                {copied && <p style={{ color: "green", marginTop: "10px" }}>Copied to clipboard!</p>}
            </div>
        </div>
    );
};

export default Speech;
