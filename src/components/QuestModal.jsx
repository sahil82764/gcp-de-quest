import React, { useState } from 'react';
import { Icon, SparklesIcon, QuestIcon } from './Icons';

export default function QuestModal({ quest, onClose, onComplete, isCompleted }) {
    const [geminiResponse, setGeminiResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const callGeminiAPI = async (prompt) => {
        setIsLoading(true);
        setError('');
        setGeminiResponse('');
        try {
            const apiKey = ""; // API key is injected by the environment.
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
            const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorBody = await response.text();
                throw new Error(`API call failed with status: ${response.status}. Body: ${errorBody}`);
            }

            const result = await response.json();

            if (result.candidates && result.candidates.length > 0 && result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                setGeminiResponse(text);
            } else {
                console.warn("Received an unusual response structure:", result);
                throw new Error("Invalid response structure from Gemini API.");
            }
        } catch (err) {
            console.error("Gemini API call error:", err);
            setError(err.message || "An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleGeneratePost = () => {
        const prompt = `You are a data engineering thought leader. Write a short, engaging LinkedIn post (75-150 words) about ${quest.content.topic}. The post is for a data science student documenting their learning journey. Include relevant hashtags like #GCP, #DataEngineering, #GoogleCloud, and others specific to the topic. The tone should be professional but approachable.`;
        callGeminiAPI(prompt);
    };

    const handleExplainCode = () => {
        const prompt = `You are an expert programming instructor. Explain the following Python code snippet step-by-step for a data science student who is learning data engineering. Focus on the 'why' behind each major step, not just what the code does. Use markdown for formatting.\n\nCode:\n\`\`\`python\n${quest.content.starterCode}\n\`\`\`\n`;
        callGeminiAPI(prompt);
    };

    const GeminiInteraction = ({ type }) => (
        <div className="mt-6 p-4 border-t-2 border-dashed border-slate-600">
            <button
                onClick={type === 'linkedin_post' ? handleGeneratePost : handleExplainCode}
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 mb-4 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-wait transition-all"
            >
                <SparklesIcon />
                <span>{type === 'linkedin_post' ? '✨ Generate Post Draft' : '✨ Explain Code'}</span>
            </button>
            {isLoading && <div className="text-center text-slate-400">Generating with Gemini...</div>}
            {error && <div className="text-center text-red-400 bg-red-900/50 p-3 rounded-lg">Error: {error}</div>}
            {geminiResponse && (
                <div className="mt-4 p-4 bg-slate-900/70 rounded-lg">
                    <div className="prose prose-sm prose-invert max-w-none prose-p:text-slate-200" dangerouslySetInnerHTML={{ __html: geminiResponse.replace(/\n/g, '<br />') }}></div>
                </div>
            )}
        </div>
    );

    const renderContent = () => {
        const content = quest.content;
        switch (content.type) {
            case 'info':
                return <p className="text-slate-300 whitespace-pre-wrap">{content.description}</p>;
            case 'checklist':
                return (
                    <div>
                        <p className="text-slate-300 mb-4">{content.description}</p>
                        <ul className="space-y-3">
                            {content.steps.map((step, index) => (<li key={index} className="flex items-center bg-slate-700 p-3 rounded-lg"><Icon path="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-6 h-6 text-cyan-400 mr-3" /><span>{step}</span></li>))}
                        </ul>
                    </div>
                );
            case 'code_challenge':
            case 'linkedin_post':
                return (
                    <div>
                        <p className="text-slate-300 mb-4">{content.description}</p>
                        {content.type === 'code_challenge' && (
                            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto"><code className="whitespace-pre-wrap">{content.starterCode}</code></div>
                        )}
                        <GeminiInteraction type={content.type} />
                    </div>
                );
            default:
                return <p>Quest content not available.</p>;
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={onClose}>
            <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="p-6 overflow-y-auto">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <div className="flex items-center space-x-3">
                                <span className="text-cyan-400">
                                    <QuestIcon icon={quest.icon} />
                                </span>
                                <h2 className="text-2xl font-bold text-white">{quest.title}</h2>
                            </div>
                            <span className="text-lg font-bold text-cyan-400">{quest.xp} ✨ XP</span>
                        </div>
                        <button onClick={onClose} className="text-slate-400 hover:text-white"><Icon path="M6 18L18 6M6 6l12 12" /></button>
                    </div>
                    <div>{renderContent()}</div>
                </div>
                <div className="bg-slate-900/50 px-6 py-4 mt-auto border-t border-slate-700">
                    <button onClick={() => onComplete(quest.id, quest.xp)} disabled={isCompleted} className="w-full px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 disabled:cursor-not-allowed disabled:bg-green-800 disabled:text-green-300 bg-cyan-600 hover:bg-cyan-500">
                        {isCompleted ? 'Quest Completed!' : 'Complete Quest'}
                    </button>
                </div>
            </div>
        </div>
    );
}