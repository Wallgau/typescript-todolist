import React, { FunctionComponent, useState } from 'react';
import {FormProps} from '../type'



const UserDataForm = ({ description, isDone, handleChange, addItem  }: FormProps) => {
console.log('d',description)
  const content = ( 
      <div>
        <h1>TODO LIST</h1>
        <form>
        <input value={description} onChange={handleChange} />
        <button type='button' onClick={addItem}>Add Task</button>
        </form>
      </div>
    ) 

return content 
}
export default UserDataForm;