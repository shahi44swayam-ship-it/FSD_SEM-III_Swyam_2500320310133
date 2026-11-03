const promise1 = new Promise((resolve, reject)=>{
    let success = false;
    if(success){
        resolve({
            id: 2930309,
            username: "john Doe"
        })  
    }
    else{
        reject(new Error("Data not found"))
    }
})
promise1
.then((response) => {
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})
async function fetchUserData(){
    return new Promise((resolve,reject)=>{
        let success=false;
        if(success){
            resolve({
                id: 2930309,
                username: "john Doe"
        });
    }
    else{
        reject(new Error("Data not found"));
    }
    });
}


function getUser(){
    const user=await fetchUserData();
}