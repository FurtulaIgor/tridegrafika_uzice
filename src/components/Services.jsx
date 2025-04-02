import { motion } from 'framer-motion';
import { FaBook, FaAd, FaTag, FaBox } from 'react-icons/fa';

const services = [
  {
    icon: <FaBook className="w-12 h-12" />,
    title: 'Katalozi i brošure',
    description: 'Časopisi, knjige, prospekti i lifleti',
  },
  {
    icon: <FaAd className="w-12 h-12" />,
    title: 'Propagandni materijal',
    description: 'Flajeri, plakati, reklamni blokovi',
  },
  {
    icon: <FaTag className="w-12 h-12" />,
    title: 'Etikete i nalepnice',
    description: 'Deklaracije i promo nalepnice',
  },
  {
    icon: <FaBox className="w-12 h-12" />,
    title: 'Ambalaža',
    description: 'Laka hromokartonska ambalaža i kutije',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Naše Usluge
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 