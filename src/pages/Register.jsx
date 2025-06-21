
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Register() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const eventFromQuery = queryParams.get('event') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    teamName: '',
    teamSize: '',
    role: '',
    event: eventFromQuery,
    agreed: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      setShowModal(true);
      return;
    }
    if (formData.name && formData.email && formData.phone && formData.college && formData.event) {
      setSubmitted(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12 px-6">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md relative">
        <h2 className="text-2xl font-semibold mb-4">Register for {formData.event || "an Event"}</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange}
              className="w-full p-2 border rounded" required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
              className="w-full p-2 border rounded" required />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}
              className="w-full p-2 border rounded" required />
            <input type="text" name="college" placeholder="College" value={formData.college} onChange={handleChange}
              className="w-full p-2 border rounded" required />

            <input type="text" name="teamName" placeholder="Team Name" value={formData.teamName} onChange={handleChange}
              className="w-full p-2 border rounded" />
            <input type="number" name="teamSize" placeholder="Number of Members" value={formData.teamSize} onChange={handleChange}
              className="w-full p-2 border rounded" />
            <input type="text" name="role" placeholder="Your Role (e.g. Developer, Designer)" value={formData.role} onChange={handleChange}
              className="w-full p-2 border rounded" />

            <select name="event" value={formData.event} onChange={handleChange} className="w-full p-2 border rounded" required>
              <option value="">Select Event</option>
              <option value="UPES CSI Hackathon">UPES CSI Hackathon</option>
              <option value="Tech Talk">Tech Talk</option>
              <option value="Design Sprint">Design Sprint</option>
              <option value="Bug Bash">Bug Bash</option>
            </select>

            <label className="block">
              <input type="checkbox" name="agreed" checked={formData.agreed} onChange={handleChange} className="mr-2" />
              I agree to the <span className="text-blue-600 cursor-pointer" onClick={() => setShowModal(true)}>Terms & Conditions</span>
            </label>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center text-green-600 font-semibold">
            🎉 You have successfully registered for {formData.event}!
          </div>
        )}

        {/* Terms Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg">
              <h3 className="text-lg font-bold mb-2">Terms & Conditions</h3>
              <p className="text-sm mb-4">
                You must follow all event rules, avoid plagiarism, and maintain respectful conduct. Organizers reserve the right to disqualify teams for any misconduct.
              </p>
              <div className="flex justify-end space-x-4">
                <button onClick={() => setShowModal(false)} className="text-red-600 font-semibold">Cancel</button>
                <button onClick={() => { setFormData(prev => ({ ...prev, agreed: true })); setShowModal(false); }} className="text-green-600 font-semibold">Agree</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
