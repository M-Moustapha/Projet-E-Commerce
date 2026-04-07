import { Link } from "react-router-dom";
import photo from "../assets/navbar.png"
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import {motion} from "framer-motion"
export default function Home() {
  return (
    <div className="p-4">
      <motion.h1 
         initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.9,  ease: "easeInOut" }}
      className="text-3xl font-bold mb-4">Bienvenue sur YOMBLE-TECH !</motion.h1>
      
        <img src={photo} alt="" className=" w-400 h-150"/>
        <motion.div 
        initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.9,  ease: "easeInOut" }}
        className="flex gap 7 w-300 h-120">
         <video
        src={video1}
        controls
        autoPlay
        loop
        muted
        className="w-full max-w-3xl rounded-lg shadow-lg"
      ></video>
       <video
        src={video2}
        controls
        autoPlay
        loop
        muted
        className="w-full max-w-3xl rounded-lg shadow-lg"
      ></video>
     
      </motion.div> <br />
        <p className="mb-7 text-2xl">
        Découvrez nos produits, ajoutez-les au panier et profitez de nos offres.
      </p>
      <motion.div 
      initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8,  ease: "easeInOut" }}
      className="flex flex-col md:flex-row gap-4">
        <Link
          to="/products"
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded text-center"
        >
          Voir les produits
        </Link>
        <Link
          to="/cart"
          className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded text-center"
        >
          Voir le panier
        </Link>
      </motion.div>
    </div>
  );
}