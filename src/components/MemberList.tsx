import "./MemberList.css";
import MemberEntry from "./MemberEntry";

export default function MemberList(props: { members: { id: string, name: string }[] }) {
    return <div className="member-list">
        <span className='member-list-title'>Members</span>
        {props.members.map((mem) => <MemberEntry key={mem.id} name={mem.name} />)}
    </div>;
}
