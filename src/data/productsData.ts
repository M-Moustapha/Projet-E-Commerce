import casque from "../assets/casqueAudio.jpg"
import chargeurDell from "../assets/ChargeurDell.jpg"
import chargeurHP from "../assets/ChargeurHP.webp"
import chargeuriPHone from "../assets/ChargeurIphone.webp"
import TypeC from "../assets/ChargeurTypeC.jpg"
import clavier from "../assets/clavierMecanique.avif"
import USB from "../assets/cleUSB.png"
import ecran from "../assets/Ecran.jpg"
import gammeurDEll from "../assets/GammeurDELL.avif"
import gammeurHP from "../assets/GammeurHP.jpg"
import glaxyS23 from "../assets/GlaxyS23.webp"
import hautParleur from "../assets/HautParleur.jpg"
import HDD from "../assets/HDD.webp"
import watch from "../assets/imageAppleWatch.jpg"
import iphone11 from "../assets/Iphone11.jpg"
import iphone12 from "../assets/Iphone12.webp"
import iphone13 from "../assets/Iphone13.png"
import iphone14 from "../assets/Iphone14.jpg"
import iphone15 from "../assets/Iphone15.webp"
import iphone16 from "../assets/Iphone16.jpg"
import iphone17 from "../assets/Iphone17.jpg"
import wifi from "../assets/modemeWifi.jpg"
import sacOrdi from "../assets/sac-ordinateur.webp"
import sacDos from "../assets/SacDos.avif"
import glaxyS21 from "../assets/SamsungGalaxyS21.jpg"
import samsung from "../assets/samsung.webp"
import souris from "../assets/souris.jpg"
import SSD from "../assets/SSD.jpg"
import tablette from "../assets/Tablette.jpg"
import tecno from "../assets/Tecno.jpg"
import webcam from "../assets/Webcam.jpg"
import play3 from "../assets/Play3.webp"
import play4 from "../assets/Play4.jpg"
import play5 from "../assets/Play5.jpg"
import drone from "../assets/Drone.jpg"
import airPod from "../assets/AirPods.jpg"
import adaptateur from "../assets/adaptateur.jpg"
import manette from "../assets/manette.webp"

type productsData = {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
  
};

const productsData: productsData[] = [
  { id: 1, name: "Casque Audio", price: 5000, image: casque, stock:15 },
  { id: 2, name: "Clavier Mécanique", price: 12000, image:clavier, stock:15 },
  { id: 3, name: "Écran 24 pouces", price: 45000, image:ecran, stock:25 },
  { id: 4, name: "Disque Dur HDD 1TO", price: 15000, image:HDD, stock:30 },
  { id: 5, name: "Disque Dur SSD 1TO", price: 50000, image:SSD, stock:30 },
  { id: 6, name: "Chargeur Dell", price: 10000, image: chargeurDell, stock:25 },
  { id: 7, name: "Chargeur HP", price: 10000, image: chargeurHP, stock:25 },
  { id: 8, name: "Chargeur iPhone", price: 5000, image: chargeuriPHone, stock:25 },
  { id: 9, name: "Chargeur Type C", price: 4500, image:TypeC, stock:25 },
  { id: 10, name: "Cle USB 32G", price: 15000, image:USB, stock:50 },
  { id: 11, name: "Machine Gammeur Dell", price: 850000, image:gammeurDEll, stock:10 },
  { id: 12, name: "Machine Gammeur HP", price: 900000, image:gammeurHP, stock:10 },
  { id: 13, name: "Samsung Glaxsy S23", price: 250000, image:glaxyS23, stock:15 },
  { id: 14, name: "Samsung Glaxsy S21", price: 200000, image:glaxyS21, stock:15 },
  { id: 15, name: "Samsung ", price: 180000, image:samsung, stock:15 },
  { id: 16, name: "Tecno", price: 175000, image:tecno, stock:20 },
  { id: 17, name: "Tablette", price: 90000, image:tablette, stock:15 },
  { id: 18, name: "Haut Parleur", price: 15000, image:hautParleur, stock:20 },
  { id: 19, name: "Apple Watch", price: 20000, image:watch, stock:30 },
  { id: 20, name: "iPhone 11 Pro Max", price: 180000, image:iphone11, stock:12 },
  { id: 21, name: "iPhone 12 Pro Max", price: 220000, image:iphone12, stock:12 },
  { id: 22, name: "iPhone 13 Pro Max", price: 260000, image:iphone13, stock:12 },
  { id: 23, name: "iPhone 14 Pro Max", price: 280000, image:iphone14, stock:12 },
  { id: 24, name: "iPhone 15 Pro Max", price: 300000, image:iphone15, stock:12 },
  { id: 25, name: "iPhone 16 Pro Max", price: 350000, image:iphone16, stock:12 },
  { id: 26, name: "iPhone 17 Pro Max", price: 500000, image:iphone17, stock:12 },
  { id: 27, name: "Modeme Wifi", price: 25000, image:wifi, stock:10 },
  { id: 28, name: "Sac Ordinateur et Outils", price: 15000, image:sacOrdi, stock:35 },
  { id: 29, name: "Sac a Dos", price: 12500, image:sacDos, stock:15 },
  { id: 30, name: "Souris Ordinateur", price: 4500, image:souris, stock:25 },
  { id: 31, name: "Webcam HD", price: 8000, image:webcam, stock:20 },
  { id: 32, name: "Play 3", price: 8000, image:play3, stock:14 },
  { id: 33, name: "Play 4", price: 25000, image:play4, stock:14 },
  { id: 34, name: "Play 5", price: 50000, image:play5, stock:14 },
  { id: 35, name: "Drone", price: 100000, image:drone, stock:10 },
  { id: 36, name: "Manette", price: 3000, image:manette, stock:13 },
  { id: 37, name: "Adaptateur", price: 5000, image:adaptateur, stock:19 },
  { id: 38, name: "AirPod", price: 15000, image:airPod, stock:18 },



];

export default productsData;