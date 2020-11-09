import React, {FunctionComponent, useState} from 'react';



export interface UserData {
	name: string,
  tasks: {
    description: string,
    done: boolean
  }
}


export const UserDataForm: React.FC<UserData> = ({ name, tasks} ) => {

  const [userData, setUserData] = useState({name: undefined});
  console.log('n&t', userData)
  const handleChange = (e:any) => {
    setUserData({name: e.target.value})
    console.log(e);
    console.log(userData)
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