
import sql from '../server/db'
import User from "./components/user"
import AddUsers from './components/AddUsers'
import {IUser} from '@/types/types'

export default async function Home() {


  let users:IUser[] = await sql`select * from firstcrud`

  return (
    <div>
      <AddUsers/>
      <div >
        <h1>Usuários:</h1>
        {users.map((u:IUser) => <User user={u} key={u.id} >
          <p>
            {u.name}
          </p>
          <p>
            {u.age}
          </p>
        </User> )}
      </div>
      
    </div>

  )
}



