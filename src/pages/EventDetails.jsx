
import React from 'react';

export default function EventDetails() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-6 mt-8">
      <h2 className="text-3xl font-bold text-center text-purple-700">Event Details</h2>

      <section>
        <h3 className="text-xl font-semibold text-gray-800">About the Event</h3>
        <p className="text-gray-600">
          The UPES CSI Hackathon is a 24-hour coding challenge where participants will tackle real-world problems, collaborate with peers, and develop innovative tech solutions. Open to all enthusiastic coders, developers, and designers.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800">Schedule</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Opening Ceremony - 9:00 AM</li>
          <li>Hackathon Kickoff - 10:00 AM</li>
          <li>Checkpoint & Mentoring - 6:00 PM</li>
          <li>Submission Deadline - Next Day 10:00 AM</li>
          <li>Judging & Result Announcement - 12:00 PM</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800">Rules & Guidelines</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Teams of 2-4 participants allowed</li>
          <li>All code must be written during the event</li>
          <li>Internet usage is allowed</li>
          <li>Respect the time limits and submit your project on time</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-800">Prizes & Benefits</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>🏆 Winner: ₹25,000 + Internship Opportunities</li>
          <li>🥈 Runner-Up: ₹15,000 + Goodies</li>
          <li>🎖️ Certificates for all participants</li>
          <li>🎁 Surprise Swag and Tech Giveaways</li>
        </ul>
      </section>
    </div>
  );
}
