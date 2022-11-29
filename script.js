// TODO: add code here
window.addEventListener("load",function(){
    const div = document.getElementById("container"); 
    const count = document.getElementById("count");
    
   
    async function displayAstronauts(){
        let response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json");
        let data = await response.json();
        //use data
        
        console.log(data);
        count.innerHTML = `There are ${data.length} astronauts`;
        data.sort(function(a,b){
            return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
        });

        for (let i=0;i<data.length;i++){
            let astronaut = data[i];
            
            div.innerHTML += 
            `
            <div class="astronaut">
            <div class="bio">
                <h3>${astronaut.firstName}</h3>
                <ul>
                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                    <li class="${astronaut.active ? "green" : ""}">Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills.join(", ")}</li>
                </ul>
            </div>
            <img class="avatar" src=${astronaut.picture}>
            </div>
            `     
        }          
    } 
    displayAstronauts();
});
 