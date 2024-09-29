import React, { useEffect } from "react";
import '../index.css';

function Booking() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://app.reclaim.ai/scripts/embed-scheduling-link.0.x.x.js";
        script.setAttribute('data-id', '52e479f8-bde6-4d65-b989-c042334275e6');
        script.setAttribute('data-redirect', 'NONE');
        script.async = true;

        document.body.appendChild(script);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="m-10" id="booking-container"></div>
    );
}

export default Booking;
