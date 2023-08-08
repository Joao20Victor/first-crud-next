'use client'

import { styled } from 'styled-components'
import { ReactNode, useState } from 'react'
import { DeleteUser, EditUser} from '@/server/Functions'
import { IUser } from '@/types/types'

type PropUser = {
  children: ReactNode
  user: IUser
} 

export default function Users(props:PropUser){
 const [modal, setmodal]  = useState("none")
 const [edited, setEdited] = useState(props.user)

 const StyleModal = {
  display: modal
 }

  return(
  <Wrapper className="flex gap-5">
      {props.children}
      <button type="submit" onClick={() => DeleteUser(props.user.id || 0)} >delete</button>
      <button onClick={() => setmodal("flex") } >edit</button>
      
      <section style={StyleModal} className="absolute w-screen flex  justify-center">
        <div className="p-4 rounded shadow-md flex flex-col gap-3 bg-black text-white">
          <input type="text" defaultValue={props.user.name} className="border text-black"  onChange={(e) => setEdited({...edited, name:e.target.value})}/>
          <input type="text" defaultValue={props.user.age} className="border text-black" pattern="[0-9]+"  onChange={(e) => setEdited({...edited, age:parseInt(e.target.value)})}/>
          <button onClick={() => {EditUser(edited); window.location.reload()}} >editar</button>
          <button onClick={() => setmodal("none")} >fechar</button>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 1em;
  border: solid 2px gray;
`