export const sendFormRequest = async (loginData, /* isRegister */) => {

//Как бы я написал:

  /*    const FAKE_ADDRESS = ""; 
   const endpoint = isRegister ? "/register" : "/login"; 
   try {
     const response = await fetch(`${FAKE_ADDRESS}${endpoint}`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(loginData),
     });
 
     const data = await response.json();
     console.log(data);
     return data;
   } catch (error) {
     console.error("Error:", error);
   } */


     const fakeResponse = {
      message: "Success", 
      data: loginData, 
    };
 
  
    const FAKE_DELAY = 1000;
 

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeResponse); 
      }, FAKE_DELAY);
    });
 };