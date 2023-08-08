'use server'  

import { IUser } from '@/types/types'
import  sql  from './db'


export async function createUser( user:IUser ){
  await sql`INSERT INTO firstcrud (name, age) VALUES (${user.name}, ${user.age});`
}

export async function DeleteUser(user:number){
  await sql`delete from firstcrud where id=${user}`
}

export async function EditUser(user:IUser) {
  if(!user.id) return 
  await sql`update firstcrud set name = ${user.name}, age = ${user.age} where id = ${user.id}`
}