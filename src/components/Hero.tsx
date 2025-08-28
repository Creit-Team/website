import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, X } from "lucide-react";
import consulting from "@/assets/consulting.jpg";

const Hero = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        min-h-[92vh] lg:min-h-screen
        pt-24 pb-16 lg:pt-28 lg:pb-24
        font-['DM Sans',ui-sans-serif,system-ui]
      "
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={consulting} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        {/* Brand veil: deep navy to Creit blue */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08124d]/85 via-[#2a2f77]/72 to-[#555DEE]/68" />
        {/* Top darken for nav contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex min-h-[60vh] lg:min-h-[70vh] items-center">
            <div className="w-full">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="text-creit-accent-light font-extrabold leading-tight tracking-tight text-4xl sm:text-5xl lg:text-6xl">
                  Trusted Solutions
                  <br className="hidden sm:block" />
                  <span className="block">For Business Growth</span>
                </h1>

                <p className="mt-5 text-white text-base sm:text-lg leading-relaxed">
                  Creit Technologies Limited delivers trusted solutions for business growth through software development, digital services, growth solutions, and research.
                  <br />
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-creit-accent-light text-creit-accent-light hover:bg-creit-accent-light hover:text-creit-navy bg-transparent"
                    onClick={scrollToServices}
                  >
                    See Services
                  </Button>


                  <Button
                    size="lg"
                    className="bg-creit-primary text-creit-accent-light hover:bg-creit-primary hover:text-creit-accent-light"
                    onClick={scrollToContact}
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Chat launcher*/}
          <button
            aria-label="Open chat"
            className="
              fixed z-20
              right-5 bottom-5 lg:right-8 lg:bottom-8
              inline-flex items-center justify-center
              h-12 w-12 rounded-full shadow-lg
              bg-[#555DEE] text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/60
            "
            onClick={() => setChatOpen(true)}
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Chat slide-over */}
      {chatOpen && (
        <div className="fixed inset-0 z-30">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setChatOpen(false)}
            aria-hidden="true"
          />
          {/* panel */}
          <div
            role="dialog"
            aria-modal="true"
            className="
              absolute right-0 top-0 h-full w-full sm:w-[420px]
              bg-white shadow-2xl
              animate-[slideIn_.24s_ease-out]
              flex flex-col
            "
          >
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#555DEE] text-white">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <h2 className="text-[#08124d] font-semibold">Chat with Creit</h2>
              </div>
              <button aria-label="Close chat" onClick={() => setChatOpen(false)} className="p-1 text-[#08124d]/70 hover:text-[#08124d]">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5 space-y-4 overflow-y-auto">
              <p className="text-sm text-[#08124d]">
                How can we help?
              </p>

              {/* quick paths */}
              <div className="grid grid-cols-1 gap-3">
                <button
                  className="w-full rounded-lg border border-[#08124d]/15 px-4 py-3 text-left hover:bg-[#fce0d1]/40"
                  onClick={() => {
                    setChatOpen(false);
                    // go to project form
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Start a project
                  <div className="text-xs text-[#08124d]/70">Tell us your goals and timeline</div>
                </button>

                <button
                  className="w-full rounded-lg border border-[#08124d]/15 px-4 py-3 text-left hover:bg-[#fce0d1]/40"
                  onClick={() => {
                    setChatOpen(false);
                    const el = document.querySelector("#careers");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Join as freelancer
                  <div className="text-xs text-[#08124d]/70">Apply to our talent network</div>
                </button>

                <button
                  className="w-full rounded-lg border border-[#08124d]/15 px-4 py-3 text-left hover:bg-[#fce0d1]/40"
                  onClick={() => {
                    setChatOpen(false);
                    const el = document.querySelector("#support");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Support
                  <div className="text-xs text-[#08124d]/70">Get help with an active project</div>
                </button>
              </div>

              {/* inline mini form (kept short) */}
              <form
                className="mt-2 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setChatOpen(false);
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <input
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-md border border-[#08124d]/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#555DEE]"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md border border-[#08124d]/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#555DEE]"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Briefly share what you need"
                  rows={3}
                  className="w-full rounded-md border border-[#08124d]/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#555DEE]"
                />
                <Button type="submit" className="w-full bg-[#08124d] text-white hover:opacity-90">
                  Send and continue
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
      `}</style>
    </section>
  );
};

export default Hero;