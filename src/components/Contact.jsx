import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    // Inicijalizacija EmailJS
    emailjs.init("uB1rE9xIzEaoAmo-B");
  }, []);

  // Dodajemo useEffect za auto-hide funkcionalnost
  useEffect(() => {
    if (status.type === 'success') {
      const timer = setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000); // 5000ms = 5 sekundi

      return () => clearTimeout(timer); // Cleanup timer-a ako se komponenta unmount-uje
    }
  }, [status.type]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Slanje poruke...' });

    try {
      await emailjs.send(
        'service_eqf0fmk',
        'template_etvt46v',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      setStatus({ type: 'success', message: 'Poruka je uspešno poslata!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Došlo je do greške prilikom slanja poruke.' });
      console.error('Error sending email:', error);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Kontakt
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Kontakt Informacije</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <FaEnvelope className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:terminalkog@gmail.com" className="text-gray-600 hover:text-primary">
                    terminalkog@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaPhone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Telefon</h4>
                  <a href="tel:+38131521683" className="text-gray-600 hover:text-primary">
                    +381 31 521 683
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Adresa</h4>
                  <p className="text-gray-600">Mališe Atanackovića 18, 31000 Užice, Srbija</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Pošaljite Poruku</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Ime
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Naslov
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Poruka
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
              >
                Pošalji Poruku
              </button>
            </form>
            {status.message && (
              <div className={`mt-4 p-4 rounded-md ${
                status.type === 'success' ? 'bg-green-100 text-green-700' :
                status.type === 'error' ? 'bg-red-100 text-red-700' :
                'bg-blue-100 text-blue-700'
              }`}>
                {status.message}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 