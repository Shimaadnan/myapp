import React ,{useState,useEffect} from 'react'

export default function Admin() {
  const [pages, setPages] = useState([]);
 
  async function fetchPagesAPI() {
    const page = await fetch("http://localhost:4500/pages");
    const response = await page.json();
    setPages(response);

  }

  useEffect(() => {
     fetchPagesAPI();
  }, [])
   console.log(pages);
  return (
    <div>
       

    </div>
  )
}
