import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaFileAlt } from 'react-icons/fa';

const Location = () => {
  return (
    <section id="location" className="section-padding bg-gray-50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Lokacija
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Informacije</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Adresa</h4>
                  <p className="text-gray-600">Vuka Karadžića 52, 31000 Užice, Srbija</p>
                </div>
              </div>
              {/* <div className="flex items-start space-x-4">
                <FaClock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Radno Vreme</h4>
                  <p className="text-gray-600">Pon - Pet: 09:00 - 17:00</p>
                </div>
              </div> */}
              <div className="flex items-start space-x-4">
                <FaPhone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Telefon</h4>
                  <p className="text-gray-600">+381 31 521 683</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaFileAlt className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Matični broj</h4>
                  <p className="text-gray-600">MB: 54692064</p>
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
            <h3 className="text-2xl font-semibold mb-6">Mapa</h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.7659089233052!2d19.827253476385252!3d43.8579111391664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759d3373756af09%3A0xba7dd5901af78ca8!2z0JLRg9C60LAg0JrQsNGA0LDRn9C40ZvQsCA1Miwg0KPQttC40YbQtQ!5e1!3m2!1ssr!2srs!4v1743585616709!5m2!1ssr!2srs" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location; 