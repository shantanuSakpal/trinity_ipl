import UseUser from '../context/AuthContext';

export default function Login() {
    const {user} = UseUser();
  return <>
  <div>{user}</div>
  </>
  
}
