
export const userLogin=async (input)=>{
  
  const{data}=await fetch(`http://localhost:8080/auth/login`,{
      method:'POST',
      headers:{
          "Content-Type":'application/json',  
          
      },
      body : JSON.stringify({
        userName : input.username, 
        password : input.password,
      }),
    }).then((res) => res.json())
    .then((result) => {localStorage.setItem("tokenKey",result.message);
                      localStorage.setItem("currentUser",result.id);
                      localStorage.setItem("userName",input.userName)})
    .catch((err) => console.log(err))

  return data;

}

