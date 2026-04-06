import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Merci pour votre message ! Nous vous répondrons bientôt.");
    setFormData({ name: "", email: "", message: "" }); // reset form
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contactez-nous</h2>
      <p className="mb-6 text-gray-600">
        Vous avez des questions ou besoin d'aide ? Envoyez-nous un message.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Envoyer
        </button>
      </form>

      <div className="mt-8 text-gray-700">
        <p><strong>Email :</strong> yombletech@gmail.com</p>
        <p><strong>Téléphone :</strong> +221 77 744 20 55</p>
        <p><strong>Adresse :</strong> Dakar, Sénégal</p>
      </div>
    </div>
  );
}