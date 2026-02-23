import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import agroBotAvatar from "@/assets/agro-bot-avatar.png";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/agro-chat`;

const AgroBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [greeted, setGreeted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  // Auto greet on first open
  useEffect(() => {
    if (open && !greeted) {
      setGreeted(true);
      const greetMsg: Msg = {
        role: "assistant",
        content: "Assalam o Alaikum! 🌾\nMain **Agro Bot** hoon, Anas Agro Services ka digital assistant!\n\nAap mujh se farming, machinery, ya services ke baare mein kuch bhi pooch sakte hain. Kaise madad kar sakta hoon? 😊",
      };
      setMessages([greetMsg]);
    }
  }, [open, greeted]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg: Msg = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";
    const upsert = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && prev.length === newMessages.length + 1) {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!resp.ok || !resp.body) {
        upsert("Maaf kijiye, abhi koi masla aa raha hai. Baad mein try karein ya WhatsApp karein: 03466539820");
        setIsLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });

        let idx: number;
        while ((idx = buf.indexOf("\n")) !== -1) {
          let line = buf.slice(0, idx);
          buf = buf.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") break;
          try {
            const parsed = JSON.parse(json);
            const c = parsed.choices?.[0]?.delta?.content;
            if (c) upsert(c);
          } catch {
            buf = line + "\n" + buf;
            break;
          }
        }
      }
    } catch {
      upsert("Connection error — please try again.");
    }
    setIsLoading(false);
  }, [input, isLoading, messages]);

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-24 right-6 z-50 w-16 h-16 rounded-full shadow-xl hover:scale-110 transition-transform overflow-hidden border-2 border-accent bg-white"
          aria-label="Open Agro Bot"
        >
          <img src={agroBotAvatar} alt="Agro Bot" className="w-full h-full object-cover" />
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-4rem)] bg-card rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-agro-gradient p-4 flex items-center gap-3">
            <img src={agroBotAvatar} alt="Agro Bot" className="w-10 h-10 rounded-full border-2 border-accent bg-white" />
            <div className="flex-1">
              <h3 className="text-white font-heading font-bold text-sm">Agro Bot 🌾</h3>
              <p className="text-white/70 text-xs">Anas Agro Services Assistant</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                {m.role === "assistant" && (
                  <img src={agroBotAvatar} alt="" className="w-7 h-7 rounded-full mr-2 mt-1 flex-shrink-0 border border-accent bg-white" />
                )}
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-xl text-sm whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <img src={agroBotAvatar} alt="" className="w-7 h-7 rounded-full mr-2 mt-1 flex-shrink-0 border border-accent bg-white" />
                <div className="bg-muted rounded-xl px-3 py-2 text-sm text-muted-foreground animate-pulse">
                  Soch raha hoon... 🤔
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Apna sawal likhein..."
                className="flex-1 px-3 py-2 rounded-lg bg-background border border-input text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-3 py-2 rounded-lg bg-accent text-accent-foreground hover:brightness-110 transition disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AgroBot;
