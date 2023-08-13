import "./ChannelTitle.css";

export default function ChannelTitle(props: {name: string, description: string}){
    return <div className="channel-title">
        <span className="channel-name">
            {props.name}:
        </span>
        <span className="channel-description">
            {props.description}
        </span>
    </div>;
}
