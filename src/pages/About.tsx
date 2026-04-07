import Map from "../componants/map";  
import Contact from "../componants/Contact";
import {motion} from "framer-motion"

export default function About() {
  return (
    <div className="p-4">
      <motion.h1
      initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8,  ease: "easeInOut" }}
      className="text-3xl font-bold mb-4">À propos de YOMBLE-TECH</motion.h1>
      <motion.div
      initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.9,  ease: "easeInOut" }}
      >
        <h2 className="text-2xl font-bold mb-4">Présentation</h2>
      <p className="mb-4">
        YOMBLE-TECH est une plateforme e-commerce innovante spécialisée dans la vente de matériel technologique de haute qualité. 
        Notre objectif est de rendre les équipements informatiques et électroniques accessibles à tous, 
        en proposant une large gamme de produits allant des ordinateurs aux accessoires, 
        en passant par les smartphones et les périphériques.
       </p>
      </motion.div>
      
       <motion.div
       initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1,  ease: "easeInOut" }}
       >
        <h2 className="text-2xl font-bold mb-4">Mission et qualité</h2>
      <p className="mb-4">
       Chez YOMBLE-TECH, nous mettons un point d'honneur à offrir uniquement des produits fiables, 
       performants et durables. Nous sélectionnons avec soin nos équipements afin de garantir à nos clients une expérience optimale,
       que ce soit pour un usage professionnel, académique ou personnel. 
       La qualité et la satisfaction client sont au cœur de notre engagement.
      </p>
      </motion.div>
       
      <motion.div 
      initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 1.2,  ease: "easeInOut" }}
      >
        <h2 className="text-2xl font-bold mb-4">Vision et service</h2>
      <p className="mb-4">
        Notre vision est de devenir une référence dans le domaine du e-commerce technologique en Afrique et au-delà. 
        Grâce à une interface simple, un service rapide et une assistance client efficace, 
        YOMBLE-TECH s'engage à accompagner ses utilisateurs dans tous leurs besoins numériques, 
        tout en leur offrant une expérience d'achat moderne, sécurisée et agréable.
        </p>
      </motion.div>
      
      <motion.p
      initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 1.2,  ease: "easeInOut" }}
      className="text-xl font-bold mb-4">
        Merci de visiter notre site et bon shopping !
      </motion.p> <br />
      <Contact/> <br /> 
      <h1 className="text-2xl font-bold mb-4">Pour nous visiter</h1>
      <Map/>
    </div>
  );
}