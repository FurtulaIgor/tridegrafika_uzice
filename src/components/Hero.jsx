import { motion } from 'framer-motion';
import logo from '@assets/images/rsz_logo2.png';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative bg-gradient-to-r from-primary to-secondary"
    >
      {/* Mobile background logo */}
      <div className="md:hidden absolute inset-0 bg-contain bg-center bg-no-repeat opacity-50" style={{ backgroundImage: `url(${logo})` }}></div>
      
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Štamparija 3D grafika
            </h1>
            <p className="text-xl mb-8">
              Štamparija 3D grafika osnovana je u prošlom veku. Od tada, specijalizovali smo za kvalitetnu štampu i 
              dizajn raznih materijala, sve za Vaše potrebe i standarde.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn bg-white text-primary hover:bg-gray-100 inline-block"
            >
              Zatražite Ponudu
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="w-full h-[500px] bg-white rounded-lg shadow-2xl transform rotate-3">
                <img src={logo} alt="3D Grafika Logo" className="w-full h-full object-contain p-8" />
              </div>
              <div className="absolute top-0 left-0 w-full h-[500px] bg-white rounded-lg shadow-2xl transform -rotate-3">
                <img src={logo} alt="3D Grafika Logo" className="w-full h-full object-contain p-8" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 