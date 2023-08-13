import "./MemberEntry.css";

export default function MemberEntry(props: { key: string, name: string }) {
    return <div member-id={props.key} className="member-entry">
        <div className="member-name">
            {props.name}
        </div>
    </div>;
}
