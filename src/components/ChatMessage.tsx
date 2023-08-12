import "./ChatMessage.css"

export default function ChatMessage(
    props: {
        message: {
            id: string,
            authorname: string,
            authorid: string,
            creationdate: number,
            content: string
        }
    }
) {
    return <div className="chat-message">
        <p className="chat-message-header">
            <span className="chat-message-author">{props.message.authorname}</span>
            <span className="chat-message-date">{props.message.creationdate}</span>
        </p>
        <p className="chat-message-content">
            {props.message.content}
        </p>
    </div>;

}