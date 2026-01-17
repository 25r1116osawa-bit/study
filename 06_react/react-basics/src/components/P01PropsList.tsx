const UserListFrame = () => {

    const userList = [{id:1,name:"村人A"},{id:2,name:"村人B"},{id:3,name:"街人A"},{id:4,name:"街人B"},{id:5,name:"街人C"}]

    return (
        <ul>
            {userList.map((user) => 
                    <UserElement key={user.id} UserID={user.id} UserName={user.name}/>
                )
            }
        </ul>
    )
}

const UserElement = (props:{UserID:number,UserName:string}) =>{
    const {UserID,UserName} = props
    return <li> ID:{UserID} Name:{UserName}</li>
}

export default UserListFrame