import "./App.css";
import ChannelList from "./components/ChannelList";
import MemberList from "./components/MemberList";
import ChatInputArea from "./components/ChatInputArea";
import ChatArea from "./components/ChatArea";

let dummyMembers = [
  { id: "0", name: "CoolKind" },
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
  { id: "4", authorname: "test", authorid: "1", creationdate: 0, content: "hello" },
];


function App() {
  return (
    <>
      <div className="sidebar"></div>
      <div className="groupinfo"></div>
      <div className="title"></div>
      <div className="channels"><ChannelList channels={dummyChannels} /></div>
      <div className="chat"><ChatArea messages={dummyMessages} /></div>
      <div className="members"><MemberList members={dummyMembers} /></div>
      <div className="userinfo"></div>
      <div className="input"><ChatInputArea /></div>
      <div className="settings"></div>
    </>
  );
}

export default App;
