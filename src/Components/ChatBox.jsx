import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* --- Bouton flottant --- */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* --- Fenêtre du chat --- */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden">
          {/* En-tête */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <h3 className="font-semibold">ChatBox</h3>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Contenu du chat (vide pour l’instant) */}
          <div className="flex-1 p-3 overflow-y-auto text-gray-500 text-sm flex items-center justify-center">
            Posez votre question
          </div>

          {/* Barre d’envoi */}
          <div className="p-2 border-t flex">
            <input
              type="text"
              placeholder="Écris un message..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none"
            />
            <button className="ml-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
