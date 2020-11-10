import React, {FunctionComponent, useState} from 'react';



export interface UserData {
	name: string,
  tasks: {
    description: string,
    done: boolean
  }
}


const UserDataForm: React.FC = () => {

  const [userData, setUserData] = useState({name:''});

  const handleChange = (e:any) => {
    setUserData({name: e.target.value})
    
  }

  const content = ( 
 
      <div>
        <h1>TODO LIST</h1>
        <form>
          <input value={name} onChange={handleChange} />
        </form>
      </div>
    ) 

return content 
}
export default UserDataForm;