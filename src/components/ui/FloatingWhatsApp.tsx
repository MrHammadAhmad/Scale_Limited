import React from "react";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <a
        href="https://wa.me/16478709695"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-bounce relative flex items-center justify-center w-14 h-14 rounded-full"
        aria-label="Chat on WhatsApp"
      >
        <div className="wa-ripple-3 absolute inset-0 w-full h-full rounded-full bg-[#25d366]/20 pointer-events-none"></div>
        <div className="wa-ripple-3 absolute inset-0 w-full h-full rounded-full bg-[#25d366]/20 pointer-events-none" style={{ animationDelay: '0.7s' }}></div>
        
        <div className="relative flex items-center justify-center w-full h-full rounded-full bg-[#25d366] shadow-[0_4px_24px_rgba(37,211,102,0.5)] hover:bg-[#1ebe5d] hover:shadow-[0_6px_32px_rgba(37,211,102,0.7)] hover:scale-110 transition-all duration-300 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8"
          >
            <path d="M11.996 2.002a9.972 9.972 0 0 0-8.528 4.887L2.004 22l5.318-1.401a9.957 9.957 0 0 0 4.674 1.157h.004c5.518 0 10-4.482 10-10.002 0-2.671-1.04-5.184-2.929-7.073A9.948 9.948 0 0 0 11.996 2.002zm5.378 14.545c-.227.639-1.326 1.233-1.848 1.341-.522.109-1.203.208-3.411-.707-2.67-1.107-4.385-3.83-4.516-4.004-.131-.174-1.077-1.433-1.077-2.733 0-1.3.676-1.942.915-2.203.24-.261.522-.326.696-.326s.348 0 .5.022c.153.022.37-.066.588.457.218.522.74 1.806.805 1.936.065.131.109.283.022.457-.087.174-.131.283-.261.435-.131.153-.272.338-.392.447-.131.12-.272.25-.12.511.153.261.685 1.132 1.469 1.828 1.012.892 1.871 1.164 2.132 1.295.261.131.413.109.566-.065.152-.174.653-.762.827-1.023.174-.261.348-.218.587-.131.24.087 1.524.718 1.785.849.261.131.435.196.5.305.065.108.065.631-.162 1.27z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
