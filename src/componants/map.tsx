export default function Map() {
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15438.376846171547!2d-17.46648085!3d14.69038485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172579b676231%3A0x6886c68cc3c4b008!2sAv.%20Cheikh%20Anta%20Diop%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1709496000000!5m2!1sfr!2ssn";
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">        
        <div className="mb-10 text-center md:text-left">        
        </div>
             <div className="relative w-full h-[700px] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <iframe
              src={googleMapsEmbedUrl}
              className="absolute  w-full h-full ">  
                </iframe>              
            </div>
         </div>
    </section>
  );
}