import React ,{useState,useEffect} from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa';

export default function Jobs({loggedIn}) {
  const[loading,setLoading]=useState(true);
  const [jobs, setJobs] = useState([]);
  const[value,setValue]=useState(0);
 
  async function fetchPagesAPI() {
    const page = await fetch("http://localhost:4500/jobs");
    const response = await page.json();
    setJobs(response);
    setLoading(false)

  }
  useEffect(() => {
     fetchPagesAPI();
  }, [])
  if(loading){
    return(
      <section className='section loading'>
        <h1>loading...</h1>
      </section>
    )
  }
  // deconstract the object
  const{company,dates,duties,title}=jobs[value]
  
  return (
    
    <div>
        <section className='section'>
      <div className='title'>
        <h1>Experience</h1>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
           {jobs.map((job,index)=>{

            return <button key={job.id} onClick={()=>setValue(index)} className={`job-btn ${value===index} && acive-btn`}>
              {job.company}</button>
           })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {
            duties.map((duty,index)=>{
              return (
                <div key={index} className='job-desc'>
                   <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                   <p>{duty}</p>
                </div>
              )
            })
          }
        </article>
      </div>
    </section>

    </div>
  )
        }


