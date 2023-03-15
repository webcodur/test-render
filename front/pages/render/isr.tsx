
import { useState } from 'react'
export async function getStaticProps(){
  const res =  await fetch('http://localhost:4000/posts')
  const data = await res.json()
  return {
    props : {data},
    revalidate:60,
  }
}

const Isr = (props:any) => {
  const [data, setData] = useState(props.data)
  return ( <>
    <h1>Isr</h1> 
    {data && <>
      {data[0].title} | {data[1].body} <br/>
      {data[1].title} | {data[1].body} <br/>
      {data[2].title} | {data[2].body} <br/>
    </>}
  </> );
}
 
export default Isr;