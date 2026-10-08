
import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Bonjour ! Je suis ZAMOS l'assistant virtuel de Soriba FOFANA. Posez-moi vos questions sur son parcours, ses compétences ou ses projets informatiques."
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, isOpen]);

  async function handleSend(e) {
    e?.preventDefault();

    const question = input.trim();

    if (!question || loading) return;

    const updatedMessages = [
      ...messages,
      { role: "user", content: question }
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: updatedMessages
            .filter((message) => 
              message.role === "user" ||
              message.role === "assistant"
            )
            .map(({ role, content }) => ({ role, content }))
            .slice(-12)
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Impossible de contacter l'assistant."
        );
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: data.reply
        }
      ]);
    } catch (err) {
      setError(
        err.message ||
          "Une erreur est survenue. Réessayez dans un instant."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Ouvrir le chat"
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {isOpen && (
        <div className="w-[min(360px,calc(100vw-2rem))] h-[min(500px,calc(100dvh-2rem))] bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Assistant IA</h3>
              <p className="text-xs text-blue-100">
                Portfolio de Soriba FOFANA
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fermer le chat"
              className="p-1 hover:bg-blue-700 rounded"
            >
              <X size={20} />
            </button>
          </div>

          <div
            className="flex-1 p-3 overflow-y-auto bg-gray-50 space-y-3"
            aria-live="polite"
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-2 ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Bot size={16} />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-xl px-3 py-2 text-sm whitespace-pre-wrap break-words ${
                    message.role === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  {message.content}
                </div>

                {message.role === "user" && (
                  <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center shrink-0">
                    <User size={16} />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="text-sm text-gray-500 animate-pulse">
                L'assistant réfléchit...
              </div>
            )}

            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-2 rounded-lg">
                {error}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <form
            onSubmit={handleSend}
            className="p-2 border-t flex gap-2 bg-white"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pose ta question..."
              aria-label="Votre message"
              disabled={loading}
              maxLength={1000}
              className="min-w-0 flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Envoyer le message"
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white p-2 rounded-lg"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}