import MemberEntry from "./MemberEntry";
import "./MemberList.css";
import "./scrollable.css";

export default function MemberList(props: { members: { id: string, name: string }[] }) {
    return <div className="member-list scrollable">
        <span className="member-list-title">Members</span>
        {props.members.map((mem) => <MemberEntry key={mem.id} name={mem.name} />)}
    </div>;
}
