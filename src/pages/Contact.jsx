
import React from 'react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Contact Us</h2>

      <div className="space-y-4 text-gray-700">
        <p><strong>Email:</strong> upescsi@university.edu</p>
        <p><strong>Phone:</strong> +91 94538 33395</p>
        <p><strong>Venue:</strong> Block B, Main Auditorium, UPES Campus, Dehradun</p>

        <div className="pt-4">
          <h3 className="text-xl font-semibold text-gray-800">Follow us on:</h3>
          <ul className="list-disc list-inside text-blue-600">
            <li><a href="https://instagram.com/upescsi" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com/company/upescsi" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com/upescsi" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
