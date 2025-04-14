import React, { useEffect, useMemo, useState } from 'react';
import queryString from 'query-string';
import { getUser } from '../data/js/api';
import Image from '../atoms/js/Image';

function App() {
  const params = useMemo(() => queryString.parse(window.location.search), []);
  
  const [user, setUser] = useState();

  useEffect(() => {
      getUser(params.id).then(setUser);
  }, [params.id]);

  if(!user) {
    return <div> Loading ...</div>
  }
  return ( 
   <div>
      <Image src="https://placedog.net/200"  />
      Name: <input type="text" value={user.name} /> <br />
      Email: <input type="text" value={user.address.email} /> <br />
    </div>
  );
}

export default App;
