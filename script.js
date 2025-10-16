function updateTime() {
      const now = new Date();
      const milliseconds = now.getTime(); // current time in ms
      const date = now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      document.getElementById("time").textContent = milliseconds;
      document.getElementById("date").textContent = date;
    }

    setInterval(updateTime, 1); // update every millisecond
    updateTime();