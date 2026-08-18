"use client";

import { useState } from "react";
import { loginAdmin } from "../actions";
import { motion } from "framer-motion";
import { Lock, User, ShieldCheck } from "lucide-react";

export default function AdminLogin() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    try {
      const result = await loginAdmin(formData);
      if (result?.error) {
        setError(result.error);
        setLoading(false);
      } else if (result?.success) {
        // Redirect manually on the client
        window.location.href = "/admin/dashboard";
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111A2C] py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-[400px] w-full bg-[#182235] p-10 rounded-[24px] shadow-2xl border border-white/[0.02]"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-[#2563EB] rounded-2xl shadow-[0_8px_32px_rgba(37,99,235,0.25)] flex items-center justify-center mb-6">
            <ShieldCheck className="text-white w-10 h-10" strokeWidth={2} />
          </div>
          <h2 className="text-center text-[28px] font-bold text-white tracking-tight">
            Admin Portal
          </h2>
          <p className="mt-2 text-center text-[15px] text-[#8F9BB3] font-medium">
            Secure access to Scale Limited dashboard
          </p>
        </div>
        
        <form className="space-y-5" action={handleSubmit}>
          {error && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="bg-red-500/10 border border-red-500/50 text-red-200 p-3 rounded-xl text-sm flex items-center gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
              {error}
            </motion.div>
          )}

          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-[18px] w-[18px] text-[#A9C3F4]" />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="block w-full pl-[44px] pr-4 py-3.5 bg-[#EAF0FC] border-none rounded-[14px] text-[#111A2C] placeholder-[#111A2C] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all text-[15px] font-medium"
                placeholder="admin@scalelimited.com"
              />
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-[18px] w-[18px] text-[#A9C3F4]" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full pl-[44px] pr-4 py-3.5 bg-[#EAF0FC] border-none rounded-[14px] text-[#111A2C] placeholder-[#111A2C] focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all text-[15px] font-medium tracking-[0.2em]"
                placeholder="••••••••••"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-[14px] px-4 rounded-[14px] text-white bg-[#2563EB] hover:bg-[#1D4ED8] focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(37,99,235,0.3)] text-[15px] font-bold"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Authenticating...
                </div>
              ) : (
                "Secure Sign In"
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
