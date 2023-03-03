// TODO: add code here
window.addEventListener("load", function(){
    const div = document.getElementById('container');

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            json.sort(function(a,b){
                return b.hoursInSpace - a.hoursInSpace
            });
            
            div.innerHTML += `<h4>Astronaut Cout: ${json.length}</h4>`
            for (let i= 0; i < json.length;i++){

                div.innerHTML += 
                `
                    <div class = "astronaut">
                    <div class = "bio">
                        <h3>${json[i].firstName} ${json[i].lastName} </h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(", ")} </li>
                        </ul>
                    </div>
                    <img class="avatar" src= "${json[i].picture}"></img>
                </div>`
            }
            
            
        });


        
    });
    
})

