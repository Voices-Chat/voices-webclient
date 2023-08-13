import MessageEntry from "./MessageEntry";
import "./MessageList.css";
import "./scrollable.css";

export default function MessageList(props: { messages: { id: string, authorname: string, authorid: string, creationdate: number, content: string }[] }) {
    return <div className="message-list scrollable">
        {props.messages.map((msg) => <MessageEntry key={msg.id} authorname={msg.authorname} authorid={msg.authorid} creationdate={new Date(msg.creationdate)} content={msg.content} />)}
    </div>;
}
