import "./MemberEntry.css";

export default function MemberEntry(props: { key: string, name: string }) {
    return <div member-id={props.key} className="member-entry">
        {props.name}
    </div>;
}
