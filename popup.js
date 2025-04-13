document.addEventListener("DOMContentLoaded", () => {
    const websiteInput = document.getElementById("website");
    const addButton = document.getElementById("add");
    const blocklistElement = document.getElementById("blocklist");
    const socialMediaSuggestionsElement = document.getElementById("social-media-suggestions");

    // Predefined social media websites
    const socialMediaWebsites = [
        "www.youtube.com",
        "web.facebook.com",
        "www.x.com",
        "www.instagram.com",
        "www.tiktok.com",
        "www.snapchat.com",
        "www.linkedin.com",
        "www.pinterest.com",
        "www.reddit.com"
    ];

    // Load blocklist from storage
    chrome.storage.sync.get({ blocklist: [] }, (data) => {
        updateBlocklistUI(data.blocklist);
        updateSocialMediaSuggestionsUI(data.blocklist);
    });

    // Add website to blocklist
    addButton.addEventListener("click", () => {
        const website = websiteInput.value.trim();
        if (website) {
            chrome.storage.sync.get({ blocklist: [] }, (data) => {
                const blocklist = data.blocklist;
                if (!blocklist.includes(website)) {
                    blocklist.push(website);
                    chrome.storage.sync.set({ blocklist }, () => {
                        updateBlocklistUI(blocklist);
                        updateSocialMediaSuggestionsUI(blocklist);
                        websiteInput.value = "";
                    });
                }
            });
        }
    });

    // Update blocklist UI
    function updateBlocklistUI(blocklist) {
        blocklistElement.innerHTML = "";
        blocklist.forEach((site) => {
            const li = document.createElement("li");
            li.textContent = site;
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.style.marginLeft = "10px";
            removeButton.addEventListener("click", () => {
                const updatedBlocklist = blocklist.filter((item) => item !== site);
                chrome.storage.sync.set({ blocklist: updatedBlocklist }, () => {
                    updateBlocklistUI(updatedBlocklist);
                    updateSocialMediaSuggestionsUI(updatedBlocklist);
                });
            });
            li.appendChild(removeButton);
            blocklistElement.appendChild(li);
        });
    }

    // Update social media suggestions UI
    function updateSocialMediaSuggestionsUI(blocklist) {
        socialMediaSuggestionsElement.innerHTML = "";
        socialMediaWebsites.forEach((site) => {
            if (!blocklist.includes(site)) {
                const li = document.createElement("li");
                li.textContent = site;
                const addButton = document.createElement("button");
                addButton.textContent = "Add";
                addButton.style.marginLeft = "10px";
                addButton.addEventListener("click", () => {
                    chrome.storage.sync.get({ blocklist: [] }, (data) => {
                        const blocklist = data.blocklist;
                        if (!blocklist.includes(site)) {
                            blocklist.push(site);
                            chrome.storage.sync.set({ blocklist }, () => {
                                updateBlocklistUI(blocklist);
                                updateSocialMediaSuggestionsUI(blocklist);
                            });
                        }
                    });
                });
                li.appendChild(addButton);
                socialMediaSuggestionsElement.appendChild(li);
            }
        });
    }

    document.getElementById("schedule-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const startTime = document.getElementById("start-time").value;
        const endTime = document.getElementById("end-time").value;

        if (new Date(startTime) >= new Date(endTime)) {
            alert("End time must be after start time.");
            return;
        }

        chrome.storage.local.get(["schedule"], (data) => {
            const schedule = data.schedule || [];
            schedule.push({ start: startTime, end: endTime });
            chrome.storage.local.set({ schedule }, () => {
                displaySchedule(schedule);
            });
        });
    });

    function displaySchedule(schedule) {
        const list = document.getElementById("schedule-list");
        list.innerHTML = "";
        schedule.forEach((entry, index) => {
            const li = document.createElement("li");
            li.textContent = `From: ${entry.start} To: ${entry.end}`;
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", () => {
                schedule.splice(index, 1);
                chrome.storage.local.set({ schedule }, () => {
                    displaySchedule(schedule);
                });
            });
            li.appendChild(deleteBtn);
            list.appendChild(li);
        });
    }

    // Load and display schedule on popup open
    chrome.storage.local.get(["schedule"], (data) => {
        displaySchedule(data.schedule || []);
    });
});