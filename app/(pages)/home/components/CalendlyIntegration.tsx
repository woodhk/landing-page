'use client';

import React, { useEffect } from 'react';

interface CalendlyProps {
  url: string;
  onDateSelected: (date: string) => void;
}

const CalendlyIntegration = ({ url, onDateSelected }: CalendlyProps) => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Define the event handler function
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        if (e.data.event === 'calendly.event_scheduled') {
          // Handle the scheduled event
          // You would want to extract the date from e.data.payload
          const scheduledDate = new Date(e.data.payload.event.start_time).toLocaleString();
          onDateSelected(scheduledDate);
        }
      }
    };

    // Set up event listener for date selection
    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      // Clean up script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      
      // Remove event listener
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, [url, onDateSelected]);

  return (
    <div 
      className="calendly-inline-widget" 
      data-url={url}
      style={{ minWidth: '320px', height: '400px' }}
    />
  );
};

export default CalendlyIntegration;