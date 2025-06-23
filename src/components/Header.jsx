import React from 'react';

export default function Header({ HUD, xpPercentage }) {
    return (
        <header className="bg-slate-800/50 p-4 rounded-xl shadow-lg border border-slate-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white">GCP Data Engineer Ascent</h1>
                    <p className="text-slate-400">Player: {HUD.playerName}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 sm:mt-0 text-center">
                    <div className="bg-slate-700/50 p-2 rounded-lg"><p className="text-sm text-cyan-400">Level</p><p className="text-xl font-bold">{HUD.level}</p></div>
                    <div className="bg-slate-700/50 p-2 rounded-lg"><p className="text-sm text-cyan-400">XP</p><p className="text-xl font-bold">{HUD.xp.toLocaleString()}</p></div>
                    <div className="bg-slate-700/50 p-2 rounded-lg"><p className="text-sm text-cyan-400">LinkedIn Streak</p><p className="text-xl font-bold">🔥 {HUD.linkedInStreak}</p></div>
                    <div className="bg-slate-700/50 p-2 rounded-lg"><p className="text-sm text-cyan-400">GCP Credits</p><p className="text-xl font-bold">${HUD.gcpCredits}</p></div>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-sm text-right text-slate-400 mb-1">{HUD.xp.toLocaleString()} / {HUD.totalXp.toLocaleString()} XP</p>
                <div className="w-full bg-slate-700 rounded-full h-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-4 rounded-full transition-all duration-500" style={{ width: `${xpPercentage}%` }}></div>
                </div>
            </div>
        </header>
    );
}