import React, { useEffect, useMemo, useState } from 'react';
import queryString from 'query-string';
import './App.css';
import { getUser, User } from './data/ts/api';
import Image from './atoms/ts/Image';

function App() {
  const params = useMemo(() => queryString.parse(window.location.search), []);
  
  const [user, setUser] = useState<User>();

  useEffect(() => {
     if(params?.id) {
      getUser(params?.id as string).then(setUser);
     }
  }, [params?.id]);

  if(!user) {
    return <div> Loading ...</div>
  }
  return ( 
   <div>
      <Image src="https://placedog.net/200" alt='Avatar' />
      Name: <input type="text" value={user?.name} /> <br />
      Email: <input type="text" value={user?.address?.email} /> <br />
    </div>
  );
}

export default App;
