import "./GroupInfo.css";

export default function GroupInfo(props: {name: string}){
    return <span className="group-name">
        {props.name}
    </span>;
}
