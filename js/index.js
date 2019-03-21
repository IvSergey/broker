const signUp = document.getElementById("sign-up");
const signIn = document.getElementById("sign-in");
const rowIn = document.getElementById("row-in");
const rowUp = document.getElementById("row-up");

signUp.addEventListener("click", () => {
    confirmation.style.display="none";
    rowIn.style.display="none";
    rowUp.style.display="block";
    

})
signIn.addEventListener("click", () => {
    rowUp.style.display="none";
    rowIn.style.display="block";
    enter.style.display="block";

})


const submitbutton = document.getElementById("submitbutton");
let email = document.getElementById("exampleInputEmail2");
let password = document.getElementById("exampleInputPassword2");
let checkbox2 = document.getElementById("checkbox2");
let checkbox1 = document.getElementById("checkbox1");


checkbox2.addEventListener("click", ()=>{
    if(email.value !== "" && password.value !== "" && checkbox1.checked == true ){
        submitbutton.disabled = false;
        submitbutton.style.background = "#12c49c";
   }
   else{
    submitbutton.disabled = true;
   }
})




const confirmation = document.getElementById("confirmation")
const enter = document.getElementById('enter');
submitbutton.addEventListener("click", ()=>{
    confirmation.style.display="block";
    enter.style.display="none";

})
    

// let control = document.getElementsByClassName('.confirmation-control')

// function checkform() {
//         var f = document.forms["theform"].elements;
//         var array = [...f];
//         const lastItem = document.getElementById('lastItem');
//         let filterArray = [];
        

//         filterArray = array.filter((el) => el.value);

//         if(filterArray.length = 6){
//           array.forEach(el => el.style.color = "#00a275");
          
//         } else {color = "#00a275"
//             console.log("no one");
//         }

        
//     }

    const verified = document.getElementById('verified');  
    const confForm = document.getElementById('confirmation-form');
    const problems = document.getElementById('problems');
    const success = document.getElementById('success');

    function checkform(){

        var f = document.forms["theform"].elements;
        for (var i = 0; i < f.length; i++) {
                f[i].style.color = "#0db475";
                setTimeout(function(){
                    confForm.style.display="none";
                    problems.style.display="none";
                    verified.style.display="flex";
                },3000)
                setTimeout(function(){
                    verified.style.display="none";
                    confirmation.style.display="none";
                    success.style.display="flex";
                },5000)
                
        }

    }
    

    const eye = document.getElementById('eye');
    const eye2 = document.getElementById('eye2');
    const pass = document.getElementById('exampleInputPassword1');

    eye.addEventListener("click", (e)=>{
        if(pass.getAttribute('type') === "text") {
            pass.setAttribute('type', 'password');
        } else {
            pass.setAttribute('type', 'text');
        }
        
    });
    eye2.addEventListener("click", (e)=>{
        if(password.getAttribute('type') === "text") {
            password.setAttribute('type', 'password');
        } else {
            password.setAttribute('type', 'text');
        }
        
    });

  