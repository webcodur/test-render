import {useState, useLayoutEffect} from 'react'

const Csr = () => {
  useLayoutEffect(() => {
    fetch('http://localhost:4000/posts')
      .then(response => response.json())
      .then(json => setData(json))
  }, []);
  const [data, setData] = useState<any>()

  return ( <>
    <h1>Csr</h1> 
    {data && <>
      {data[0].title} | {data[1].body} <br/>
      {data[1].title} | {data[1].body} <br/>
      {data[2].title} | {data[2].body} <br/>
    </>}
  </> );
}
 
export default Csr;