# Speech Recognition App

This is a simple React application that utilizes the `react-speech-recognition` library to convert speech to text.

## Features

-   **Speech to Text:** Converts spoken words into written text in real-time.
-   **Continuous Listening:** The app listens continuously until manually stopped.
-   **Language Support:** Configured to listen in English (India).
-   **Copy to Clipboard:** Allows users to easily copy the transcribed text.
-   **User-Friendly Interface:** Simple and intuitive design.
-   **Automatic Restart:** Restarts listening if speech stops unexpectedly.
-   **Browser Support Check:** Notifies users if their browser does not support speech recognition.

## Technologies Used

-   React
-   `react-speech-recognition`
-   `copy-to-clipboard`
-   `regenerator-runtime`

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm start
    ```

4.  Open your browser and navigate to `http://localhost:3000`.

## Usage

1.  Click the "Start Listening" button to begin speech recognition.
2.  Speak into your microphone. The transcribed text will appear in the text box.
3.  Click the "Stop Listening" button to stop speech recognition.
4.  Click the "Copy Speech" button to copy the transcribed text to your clipboard.
5.  If your browser does not support speech recognition, a message will be displayed.

## Dependencies

-   `react`: ^18.2.0
-   `react-dom`: ^18.2.0
-   `react-scripts`: 5.0.1
-   `react-speech-recognition`: ^3.10.0
-   `copy-to-clipboard`: ^3.3.3
-   `regenerator-runtime`: ^0.13.9

## Notes

-   Ensure your browser supports speech recognition. Most modern browsers do.
-   Grant microphone access when prompted.
-   For best results, speak clearly and in a quiet environment.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

