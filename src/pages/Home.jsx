
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const dummyEvents = [
    { title: 'Tech Talk', desc: 'A deep dive into AI and Quantum Computing.' },
    { title: 'Design Sprint', desc: 'Solve UX problems in 2 hours flat.' },
    { title: 'Bug Bash', desc: 'Find and fix bugs in legacy codebases.' }
  ];

  const eventDate = new Date('2025-08-15T09:00:00');
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = eventDate - now;
      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft(null);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / 1000 / 60) % 60);
        const seconds = Math.floor((distance / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRegister = (eventTitle) => {
    navigate(`/register?event=${encodeURIComponent(eventTitle)}`);
  };

  return (
    <div className="min-h-screen bg-cover bg-center text-white p-6"
         style={{ backgroundImage: "url('/assets/rainy-blur.jpg')" }}>
      <div className="flex flex-col justify-center items-center text-center backdrop-blur-md bg-white/10 p-10 rounded-xl max-w-3xl mx-auto shadow-xl">
        <img src="/assets/upes-logo.png" alt="UPES Logo" className="h-20 mb-4" />
        <h1 className="text-4xl md:text-6xl font-bold mb-2">UPES CSI HACKATHON</h1>
        <p className="text-xl italic mb-4">Code. Create. Conquer.</p>

        {timeLeft ? (
          <div className="text-lg mb-4">
            Hackathon begins in: <br />
            <span className="font-mono text-2xl">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </span>
          </div>
        ) : (
          <p className="text-red-300">The event has started!</p>
        )}

        <p className="mb-2">📅 15th August 2025</p>
        <p className="mb-2">🕒 9:00 AM onwards</p>
        <p className="mb-4">📍 UPES Campus, Dehradun</p>

        <a href="/register" className="inline-block mt-4 bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition">
          Register Now
        </a>
      </div>

      <div className="mt-16 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
        {dummyEvents.map((event, i) => (
          <div key={i} className="bg-white/20 backdrop-blur-md rounded-lg p-6 shadow-lg text-left text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p>{event.desc}</p>
            </div>
            <button onClick={() => handleRegister(event.title)}
              className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-500 transition">
              Register
            </button>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">FAQs</h2>
        {[
          { q: 'What is the team size?', a: '2 to 4 members per team.' },
          { q: 'Are beginners allowed?', a: 'Yes, all levels are welcome!' },
          { q: 'Do I need to be from UPES?', a: 'No, the event is open to all colleges.' }
        ].map((item, i) => (
          <details key={i} className="mb-2 bg-white/20 p-3 rounded">
            <summary className="cursor-pointer font-semibold">{item.q}</summary>
            <p className="mt-2">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
