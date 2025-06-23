import React from 'react';
import QuestCard from './QuestCard';

export default function DayColumn({ day, quests, onSelectQuest, completedQuests }) {
    return (
        <div className="bg-slate-800/60 p-4 rounded-lg border border-slate-700 h-full">
            <h3 className="text-lg font-bold text-center text-white border-b border-slate-600 pb-2 mb-4">{day}</h3>
            <div className="space-y-3">
                {quests.length > 0 ? (
                    quests.map(quest => (
                        <QuestCard
                            key={quest.id}
                            quest={quest}
                            onSelect={onSelectQuest}
                            isCompleted={completedQuests.includes(quest.id)}
                        />
                    ))
                ) : (
                    <p className="text-slate-500 text-center text-sm py-8">Weekend! Time to review or rest.</p>
                )}
            </div>
        </div>
    );
}