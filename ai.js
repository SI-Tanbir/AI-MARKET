// console.log('connected ss')

async function aiData() {
    let res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    let data=await res.json();
    let aiTools=data.data.tools;
    console.log(aiTools);
    // aiTools.foreach( ai => {
    //     console.log(ai);
    // })   
    aiTools.forEach(ai => {
        console.log(ai)


        //selecting div for appending
       let aiContaner=document.getElementById('ai-contaner');
        let div= document.createElement('div');
        div.innerHTML=`
         <div class="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="${ai.image}"
                alt="chat bot" />
            </figure>
            <div class="card-body">
            <h2 class="card-title">Name:${ai.name}</h2>
              <h2 class="card-title">Features</h2>
              <p>${ai.features}</p>
             
            </div>
          </div>

        
        `;
        aiContaner.appendChild(div);
    });

}

//calling the aiData() 
aiData();