export const addNewUser=async (input)=>{
    let newUser={
        firstName:input.firstName,
        lastName:input.lastName,
        email:input.email,
        password:input.password,
        userName:input.email,
        roles: [
            {
              id: 1,
              roleName:"ROLE_USER"
            }
          ]
    }
    const{data}=await fetch(`http://localhost:8080/auth/register`,{
        method:'POST',
        body:JSON.stringify(newUser),
        headers:{
            "Content-Type":'application/json',
            "Accept":"application/json"
        }
    }).then((res) => res.json())
    .then((result) => {
      
      localStorage.setItem("tokenKey",result.message);
                      localStorage.setItem("currentUser",result.userId);
                      localStorage.setItem("userName",input.username)})
    .catch((err) => console.log(err))
    return data;

}