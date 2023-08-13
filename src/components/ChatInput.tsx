import { useState } from "react";
import "./ChatInput.css";

export default function ChatInput() {
    const [inputValue, setInputValue] = useState("");

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            console.log(inputValue);
        }
    };

    return (
        <input
            type="text"
            id="chat-input-field"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Enter your message here"
        />
    );
} 
