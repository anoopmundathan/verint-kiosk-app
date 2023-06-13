import React from 'react';
import './App.css';

function Clock() {

    const hourRef = React.useRef<HTMLSpanElement | null>(null);
    const minuteRef = React.useRef<HTMLSpanElement>(null);


    const updateClock = () => {
        const now = new Date();
        // hourRef.current.textContent = String(now.getHours());
        // minuteRef.current.textContent = `0${now.getMinutes()}`.substr(-2);
        const a = document.getElementById("clock-hours");
        const b = document.getElementById("clock-mins");

        if (a) {
         a.textContent = String(now.getHours());
        }

        if (b) {
            b.textContent = `0${now.getMinutes()}`.substr(-2);
        }

    }

    React.useEffect(() => {
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="clock" role="timer" aria-live="polite">
          <span ref={hourRef} id="clock-hours"></span>
          <span ref={minuteRef} id="clock-mins"></span>
        </div>
    )
}

export default Clock;
