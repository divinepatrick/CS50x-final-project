// Array of motivational quotes
const quotes = [
    "Success is no accident. Keep pushing forward!",
    "Discipline is the bridge between goals and accomplishment.",
    "Stay focused and never give up!",
    "The future depends on what you do today.",
    "Dream big, work hard, and make it happen.",
    "Small steps every day lead to big results.",
    "Your only limit is your mind. Keep going!"
];

// Function to get a random quote
const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
};

// Function to generate the HTML for the blocked page
const generateHTML = (pageName) => {
    const quote = getRandomQuote(); // Get a random quote
    return `
        <div id="clouds">
            <div class="cloud x1"></div>
            <div class="cloud x2"></div>
            <div class="cloud x3"></div>
            <div class="cloud x4"></div>
            <div class="cloud x5"></div>
            <div class="cloud x6"></div>
        </div>
        <div class="c">
            <div class="_404">404</div>
            <hr>
            <div class="_1">FOCUS MODE ACTIVATED</div>
            <div class="_2">YOUR GOALS > ${pageName}</div>
            <div class="quote">"${quote}"</div>
            <button class="back-button" onclick="window.history.back()">Go Back</button>
        </div>
    `;
};

// Function to generate the CSS styling for the blocked page
const generateSTYLING = () => {
    return `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

            body {
                background: linear-gradient(to bottom, #1e3c72, #2a5298);
                color: #fff;
                font-family: 'Roboto', sans-serif;
                margin: 0;
                padding: 0;
                height: 100vh;
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .c {
                text-align: center;
                position: relative;
                width: 80%;
                max-width: 600px;
                background: rgba(255, 255, 255, 0.1);
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            }

            ._404 {
                font-size: 120px;
                font-weight: bold;
                margin: 0;
                color: #ff6b6b;
                text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
            }

            ._1 {
                font-size: 24px;
                font-weight: bold;
                margin: 10px 0;
                text-transform: uppercase;
                letter-spacing: 2px;
            }

            ._2 {
                font-size: 18px;
                margin: 10px 0;
                color: #f0f0f0;
            }

            .quote {
                font-size: 36px;
                font-style: italic;
                margin: 20px 0;
                color: #ffdd57;
            }

            .back-button {
                background: #ff6b6b;
                color: #fff;
                border: none;
                padding: 10px 20px;
                font-size: 16px;
                border-radius: 5px;
                cursor: pointer;
                transition: background 0.3s ease;
            }

            .back-button:hover {
                background: #ff4c4c;
            }

            #clouds {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                z-index: -1;
            }

            .cloud {
                position: absolute;
                background: black;
                border-radius: 50%;
                opacity: 0.8;
                animation: moveclouds 20s linear infinite;
            }

            .cloud.x1 {
                width: 200px;
                height: 200px;
                top: 50px;
                left: 20%;
                animation-duration: 25s;
            }

            .cloud.x2 {
                width: 150px;
                height: 150px;
                top: 100px;
                left: 60%;
                animation-duration: 20s;
            }

            .cloud.x3 {
                width: 250px;
                height: 250px;
                top: 200px;
                left: 40%;
                animation-duration: 30s;
            }

            .cloud.x4 {
                width: 100px;
                height: 100px;
                top: 300px;
                left: 10%;
                animation-duration: 15s;
            }

            .cloud.x5 {
                width: 180px;
                height: 180px;
                top: 400px;
                left: 70%;
                animation-duration: 18s;
            }

            .cloud.x6 {
                width: 120px;
                height: 120px;
                top: 500px;
                left: 30%;
                animation-duration: 22s;
            }

            @keyframes moveclouds {
                0% {
                    transform: translateX(-100%);
                }
                100% {
                    transform: translateX(100%);
                }
            }
        </style>
    `;
};

// Fetch blocklist from chrome.storage.sync
chrome.storage.sync.get({ blocklist: [] }, (data) => {
    const blocklist = data.blocklist;
    const currentHostname = window.location.hostname;

    // Check if the current hostname is in the blocklist
    if (blocklist.includes(currentHostname)) {
        document.head.innerHTML = generateSTYLING();
        document.body.innerHTML = generateHTML(currentHostname.toUpperCase());
    }
});