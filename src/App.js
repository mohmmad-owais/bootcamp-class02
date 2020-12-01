import React,{useState,useEffect}  from 'react'; 
import './App.css';


function App() {
  

  const [repos, setRepos]= useState([{}]);

  useEffect(()=>{
    
    async function getRepos()
    {
      const response = await fetch ('https://api.github.com/users/mohmmad-owais/repos');
      const data = await response.json();
      console.log(data);
      setRepos(data);

    }

    getRepos();
    
  
  
    //  fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then((response) => response.json())
  //   .then((json) => {
  //   console.log(json);
  //   setData(json);
  // })

  },[])

  return (

    
      <div>
          <h2>My GitHub Repos </h2>
          <ul>
            {repos.map((repoObj,i)=>{
              return (<li key={i}>{repoObj.name}</li>)
            })}
          </ul>



    </div>
    
  )
}

export default App;
