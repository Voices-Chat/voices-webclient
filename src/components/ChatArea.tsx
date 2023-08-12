import "./ChatArea.css";
import ChatMessage from "./ChatMessage";

export default function ChatArea(
    props: {
        messages: {
            id: string,
            authorname: string,
            authorid: string,
            creationdate: number,
            content: string
        }[]
    }
) {

    const messageComponents = props.messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
    ));

    return <div className="chat-message-area">
        <div className="chat-message-list">
            {messageComponents}
        </div>
    </div>;
}