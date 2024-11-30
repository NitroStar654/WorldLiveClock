const cities = {
    "new-york": "America/New_York",
    "london": "Europe/London",
    "paris": "Europe/Paris",
    "tokyo": "Asia/Tokyo",
    "sydney": "Australia/Sydney",
    "moscow": "Europe/Moscow",
    "dubai": "Asia/Dubai",
    "shanghai": "Asia/Shanghai",
    "sao-paulo": "America/Sao_Paulo"
};

function updateTime() {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const now = new Date();
    document.getElementById("local-time").textContent = now.toLocaleTimeString("en-EN", {
        timeZone: userTimezone,
        hour12: false
    });

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    document.getElementById("hour-hand").style.transform = `rotate(${(hours % 12) * 30 + minutes * 0.5 + 90}deg)`;
    document.getElementById("minute-hand").style.transform = `rotate(${minutes * 6 + 90}deg)`;
    document.getElementById("second-hand").style.transform = `rotate(${seconds * 6 + 90}deg)`;

    for (const [id, timezone] of Object.entries(cities)) {
        document.getElementById(id).querySelector("span").textContent = new Date().toLocaleString("en-EN", {
            timeZone: timezone,
            timeStyle: "medium",
            hour12: false
        });
    }
}

setInterval(updateTime, 1000);
updateTime();