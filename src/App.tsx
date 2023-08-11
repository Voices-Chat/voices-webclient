import "./App.css"
import ChannelList from "./components/ChannelList"
import MemberList from "./components/MemberList"

const dummyMembers = [
  { id: "0", name: "CoolKind" },
  { id: "1", name: "RadiergummiHD" }
];

const dummyChannels = [
  { id: "2", name: "channel1" },
  { id: "3", name: "channel2" }
];

function App() {
  return (
    <>
      <div className="sidebar"></div>
      <div className="groupinfo"></div>
      <div className="title"></div>
      <div className="channels"><ChannelList channels={dummyChannels} /></div>
      <div className="chat"></div>
      <div className="members"><MemberList members={dummyMembers} /></div>
      <div className="userinfo"></div>
      <div className="input"></div>
      <div className="settings"></div>
    </>
  )
}

export default App
