import ChannelEntry from "./ChannelEntry";
import "./ChannelList.css";
import "./scrollable.css";

export default function ChannelList(props: { channels: { id: string, name: string }[] }) {
    return <div className="channel-list scrollable">
        {props.channels.map((ch) => <ChannelEntry key={ch.id} name={ch.name} />)}
    </div>;
}
