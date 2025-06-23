import React from 'react';
import { QuestIcon } from './Icons';

export default function QuestCard({ quest, onSelect, isCompleted }) {
    return (
        <button
            onClick={() => onSelect(quest)}
            disabled={isCompleted}
            className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-start space-x-3 ${isCompleted
                    ? 'bg-green-900/50 border-green-700 cursor-default'
                    : 'bg-slate-700/70 hover:bg-slate-600/90 border-slate-600 hover:border-cyan-500'
                } border`}
        >
            <div className={`flex-shrink-0 mt-1 ${isCompleted ? 'text-green-400' : 'text-cyan-400'}`}>
                <QuestIcon icon={quest.icon} />
            </div>
            <div>
                <p className={`font-semibold ${isCompleted ? 'text-slate-400 line-through' : 'text-white'}`}>{quest.title}</p>
                <p className={`text-sm ${isCompleted ? 'text-green-500' : 'text-cyan-400'}`}>{quest.xp} ✨ XP</p>
            </div>
        </button>
    );
}