import "./App.css";
import ChannelList from "./components/ChannelList";
import MemberList from "./components/MemberList";
import MessageList from "./components/MessageList";
import Input from "./components/Input";

const dummyMembers = [
  { id: "0", name: "CoolKindCoolKindCoolKindCoolKindCoolKindCoolKindCoolKind" },
  { id: "1", name: "RadiergummiHD" }
];

for (let i = 2; i < 50; i++) {
  dummyMembers.push({ id: i + "", name: i + "" });
}

const dummyChannels = [
  { id: "2", name: "channel1" },
  { id: "3", name: "channel2" }
];

const dummyMessages = [
  { id: "1", authorname: "test", authorid: "1", creationdate: 0, content: "helloohellohellohellohellohellohellohelloohellohellohellohellohellohellohelloohellohellohellohellohellohellohelloohellohellohellohellohellohellohelloohellohellohellohellohellohellohelloohellohellohellohellohellohellohelloohellohellohellohellohellohellohelloohellohellohellohellohellohellohello" },
  { id: "2", authorname: "test", authorid: "1", creationdate: 0, content: "hello" },
  { id: "3", authorname: "test", authorid: "1", creationdate: 0, content: "hello" },
  { id: "4", authorname: "test", authorid: "1", creationdate: 0, content: "hello" }
];


function App() {
  return (
    <>
      <div className="sidebar"></div>
      <div className="groupinfo"></div>
      <div className="title"></div>
      <div className="channels"><ChannelList channels={dummyChannels} /></div>
      <div className="chat"><MessageList messages={dummyMessages} /></div>
      <div className="members"><MemberList members={dummyMembers} /></div>
      <div className="userinfo"></div>
      <div className="input"><Input /></div>
      <div className="settings"></div>
    </>
  );
}

export default App;
