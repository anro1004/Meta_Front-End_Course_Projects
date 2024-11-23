import { useState } from 'react';

export default function InputComponent() {
    const [inputText, setText] = useState('Hello');

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div>
            <input value={inputText} onChange={handleChange} />
            <p>You typed: {inputText}</p>
            <button onClick={() => setText('Hello')}>
                Reset
            </button>
        </div>
    );
} 