import { state$ } from '@Prem/Utility';
import { useEffect, useState } from 'react';

export default function Root(props) {
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const subs = state$.subscribe((res)=> {
      setUserName(res?.name || '')
    })

    return () => {
      subs.unsubscribe()
    }
  }, []);

  return <section> <strong>Parcel App - User Name: </strong> `{userName}`</section>;
}
