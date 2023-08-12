import './App.css'
import MemberList from './components/MemberList'
import ChatInputArea from './components/ChatInputArea'

function App() {
  return (
    <>
      <div className="sidebar"></div>
      <div className="groupinfo"></div>
      <div className="title"></div>
      <div className="channels"></div>
      <div className="chat"></div>
      <div className="members"><MemberList /></div>
      <div className="userinfo"></div>
      <div className="input"><ChatInputArea /></div>
      <div className="settings"></div>
    </>
  )
}

export default App
