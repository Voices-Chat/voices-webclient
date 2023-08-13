import "./MessageEntry.css";

export default function MessageEntry(props: { key: string, authorname: string, authorid: string, creationdate: Date, content: string }) {
    return <div message-id={props.key} author-id={props.authorid} className="message-entry">
        <div className="message-author">{props.authorname} ・ {props.creationdate.toLocaleDateString("de")}</div>
        <div className="message-text">{props.content}</div>
    </div>;
}
