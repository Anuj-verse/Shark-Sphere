import React, { useState } from 'react';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Placeholder: simulate submission
      console.log('Contact form submitted:', form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-2">Contact Us</h2>
        <p className="text-gray-300 mb-8">Have a question or feedback? Send us a message and we’ll get back to you.</p>

        {status === 'success' && (
          <div className="mb-6 rounded-lg bg-emerald-500/20 text-emerald-200 border border-emerald-400/40 p-3">
            Thanks! Your message has been sent.
          </div>
        )}
        {status === 'error' && (
          <div className="mb-6 rounded-lg bg-rose-500/20 text-rose-200 border border-rose-400/40 p-3">
            Something went wrong. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-200 mb-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-200 mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="jane@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm text-gray-200 mb-1">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              className="w-full rounded-lg bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Shark data inquiry"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-gray-200 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-white/5 border border-white/20 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Write your message here..."
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-400">We typically respond within 1–2 business days.</p>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

