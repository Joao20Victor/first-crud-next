'use client'

import { useState } from "react"
import { createUser } from "app/server/Functions"
import { IUser } from '@/types/types'


export default function AddUsers() {

  const [userData, setuserData] = useState<IUser>({
    name:"",
    age: 0
  })

  function handleName (e:any){
    setuserData({
      ...userData,
      name: e.target.value
    })
  }

  function handleAge (e:any){
    setuserData({
      ...userData,
      age: e.target.value
    })
  }


  return(
    <form>
      <h1>Cadastrar usuários</h1>
      <input placeholder="nome" type="text" onChange={handleName} />
      <input placeholder="idade" type="text" onChange={handleAge} />
      <button type='submit' onClick={() => {createUser(userData)}} >Adicionar</button>
    </form>
  )
}