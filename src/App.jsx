import React, { useState } from 'react';

function App() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const run = async () => {
        // Prevent running if a request is already in progress or prompt is empty
        if (loading || !prompt) {
            if (!prompt) setError('Please enter a prompt.');
            return;
        }

        setLoading(true);
        setError('');
        setResponse('');

        try {
            // This now securely calls your new /api/gemini file
            const res = await fetch('/api/gemini', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error.message || 'An unknown error occurred');
            }

            const data = await res.json();
            setResponse(data.text);
        } catch (err) {
            setError(err.message);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Gemini AI</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <input
                        type='text'
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder='Enter Your Prompt'
                        onKeyDown={(e) => e.key === 'Enter' && run()} // Optional: Run on Enter key
                    />
                </div>
            </div>
            <div className='submit-container'>
                <div className={loading ? 'submit gray' : 'submit'} onClick={run}>
                    Generate
                </div>
            </div>
            <div className='response-container'>
                {loading && <div className='loading-spinner'></div>}
                {error && <div className='error-message'>{error}</div>}
                {response && <pre className='response-text'>{response}</pre>}
            </div>
        </div>
    );
}

export default App;