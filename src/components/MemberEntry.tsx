import './MemberEntry.css'

export default function MemberEntry(props: any) {
    return <div className='member-entry'>
        <img src={props.memberInfo.img} className='profile-picture' />
        {props.memberInfo.name}
    </div>
}