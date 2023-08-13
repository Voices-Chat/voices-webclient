import ChannelEntry from "./ChannelEntry";
import "./ChannelList.css";

export default function ChannelList(props: { channels: { id: string, name: string }[] }) {
    return <div className="channel-list">
        {props.channels.map((ch) => <ChannelEntry key={ch.id} name={ch.name} />)}
    </div>;
}
