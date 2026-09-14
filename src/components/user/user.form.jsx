import { Button, Input } from 'antd';
import { useState } from 'react'

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleClickBtn = () => {
        console.log(">>> check state: ", {fullName, email, password, phone})
    }
    return(
        <div className="user-form" style={{ margin: "20px 0"}}>
            <div style={{display: "flex", gap: "15px", flexDirection: "column"}}>
                <div>
                    <span>FullName</span>
                    <Input 
                    value={fullName}
                    onChange={(event)=> { setFullName(event.target.value) }}
                    />
                </div>
                 <div>
                    <span>Email</span>
                    <Input
                    value={email}
                    onChange={(event) => { setEmail(event.target.value)} }/>
                </div>
                 <div>
                    <span>Password</span>
                    <Input.Password
                    value={password}
                    onChange={(event) => { setPassword(event.target.value)} }/> 
                </div>
                 <div>
                    <span>Phone number</span>
                    <Input
                    value={phone}
                    onChange={(event) => { setPhone(event.target.value)} }/>
                </div>
                <div>
                    <Button
                    // onClick={() => handleClickBtn()} giong ben duoi nhung ho tro chuyen tham so vao ()
                    onClick={handleClickBtn}
                    type='primary'> Create User </Button>
                    {/*dung cho hanh dong quan trong vd: Create User, Submit, Save, Luu...*/}
                </div>
            </div>
        </div>
    )
}

export default UserForm