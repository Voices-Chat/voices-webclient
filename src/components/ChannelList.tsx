import "./ChannelList.css";
import ChannelEntry from "./ChannelEntry";

export default function ChannelList(props: { channels: { id: string, name: string }[] }) {
    return <div className="channel-list">
        {props.channels.map((ch) => <ChannelEntry key={ch.id} name={ch.name} />)}
    </div>;
}
