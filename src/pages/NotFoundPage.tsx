import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#06080d] text-white flex flex-col justify-between">
      <Navbar />
      <div className="max-w-md mx-auto px-4 py-32 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
          <Terminal className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight">404 — Page Not Found</h1>
        <p className="text-slate-400 text-sm">
          The requested page route does not exist in the developer portfolio directory.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Portfolio Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};
