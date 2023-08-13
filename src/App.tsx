import "./App.css";
import ChannelList from "./components/ChannelList";
import MemberList from "./components/MemberList";
import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";

const dummyMembers = [
  { id: "0", name: "CoolKindCoolKindCoolKindCoolKindCoolKindCoolKindCoolKind" },
  { id: "1", name: "RadiergummiHD" }
];

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

for (let i = 5; i < 50; i++) {
  dummyMessages.push({ id: i+"", authorname: "test", authorid: i+"1", creationdate: i*10000000, content: "hello" });
  dummyMembers.push({ id: i +"", name: i + "" });
  dummyChannels.push({ id: i+"", name: "channel"+i });
}

dummyMessages.reverse();


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
      <div className="input"><ChatInput /></div>
      <div className="settings"></div>
    </>
  );
}

export default App;
