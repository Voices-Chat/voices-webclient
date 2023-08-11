import "./ChannelEntry.css"

export default function ChannelEntry(props: { key: string, name: string }) {
    return <div channel-id={props.key} className="channel-entry">
        {props.name}
    </div>
}
