import './MemberList.css';
import MemberEntry from './MemberEntry';

let memberInfos = [
    { name: "CoolKind", category: "Chad", img: "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg?20070224000419" },
    { name: "RadiergummiHD", category: "NotSoChad", img: "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg?20070224000419" }
];

export default function MemberList() {
    let i = 0;
    const memberComponents = memberInfos.map((memberInfo) => (
        <MemberEntry key={i++} memberInfo={memberInfo} />
    ));

    return <div className="member-list">
        {memberComponents}
    </div>;
}