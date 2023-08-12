import { useState } from "react";
import "./ChatInputField.css";

export default function ChatInputField() {
    const [inputValue, setInputValue] = useState("");

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            console.log(inputValue);
        }
    }

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