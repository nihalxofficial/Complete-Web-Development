let thrivingList = [];
let strugglingList = [];
let currentStatus = "all";

let total = document.getElementById("total");
let thrivingCount = document.getElementById("thriving-count")
let strugglingCount = document.getElementById("struggling-count");

const allFilterBtn = document.getElementById("all-filter-button");
const thrivingFilterButton = document.getElementById("thriving-filter-button");
const strugglingFilterButton = document.getElementById("struggling-filter-button");


const allCardSection = document.getElementById("all-cards");
const mainContainer = document.querySelector("main");

const filterSection = document.getElementById("filtered-section")

function calculateCount(){
    total.innerText = allCardSection.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;
}

calculateCount();


function toggleStyle(id){
    allFilterBtn.classList.remove("bg-black", "text-white");
    thrivingFilterButton.classList.remove("bg-black", "text-white");
    strugglingFilterButton.classList.remove("bg-black", "text-white");


    allFilterBtn.classList.add("bg-gray-300", "text-black");
    thrivingFilterButton.classList.add("bg-gray-300", "text-black");
    strugglingFilterButton.classList.add("bg-gray-300", "text-black");

    const selected = document.getElementById(id);
    currentStatus = id;
    selected.classList.remove("bg-gray-300", "text-black");
    selected.classList.add("bg-black", "text-white");

    if(id == "thriving-filter-button"){
        allCardSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderThriving();
    }else if(id =="all-filter-button"){
        allCardSection.classList.remove("hidden");
        filterSection.classList.add("hidden");
        
    }else if(id=="struggling-filter-button"){
        allCardSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderStruggling();
    }
    
}


mainContainer.addEventListener("click", function(event){
    
    if(event.target.classList.contains("thriving-btn")){
        const parentNode = event.target.parentElement.parentElement;
        const plantName = parentNode.querySelector(".plant-name").innerText;
        const latinName = parentNode.querySelector(".latin-name").innerText;
        const light = parentNode.querySelector(".light").innerText;
        const water = parentNode.querySelector(".water").innerText;
        let status = parentNode.querySelector(".status").innerText;
        const notes = parentNode.querySelector(".notes").innerText;
        status = parentNode.querySelector(".status").innerText = "Thrive";    
        

        const cardInfo = {
            plantName,
            latinName,
            light,
            water,
            status,
            notes
        }

        const plantExist = thrivingList.find(item => item.plantName == cardInfo.plantName);

        if(!plantExist){
            thrivingList.push(cardInfo);        
        }


        strugglingList = strugglingList.filter(item => item.plantName != cardInfo.plantName);
        if(currentStatus== "struggling-filter-button"){
                renderStruggling();
            }
        calculateCount();
        // renderThriving();
        }else if(event.target.classList.contains("struggling-btn")){
            const parentNode = event.target.parentElement.parentElement;
            const plantName = parentNode.querySelector(".plant-name").innerText;
            const latinName = parentNode.querySelector(".latin-name").innerText;
            const light = parentNode.querySelector(".light").innerText;
            const water = parentNode.querySelector(".water").innerText;
            let status = parentNode.querySelector(".status").innerText;
            const notes = parentNode.querySelector(".notes").innerText;
            status = parentNode.querySelector(".status").innerText = "Struggle";    
            

            const cardInfo = {
                plantName,
                latinName,
                light,
                water,
                status,
                notes
            }

            const plantExist = strugglingList.find(item => item.plantName == cardInfo.plantName);

            if(!plantExist){
                strugglingList.push(cardInfo);        
            }


            
            thrivingList = thrivingList.filter(item => item.plantName != cardInfo.plantName);

            if(currentStatus== "thriving-filter-button"){
                renderThriving();
            }
            
            calculateCount();
            // renderStruggling();
            }
        }
)

function renderThriving(){
    filterSection.innerHTML = "";

    for(let thrive of thrivingList){
        
        let div = document.createElement("div");
        div.className = "card flex justify-between border p-8";
        div.innerHTML = `
        <div class="space-y-6">
                    <!-- Part 1 -->
                    <div>
                        <p class="plant-name text-3xl mb-2.5">${thrive.plantName}</p>
                        <p class="latin-name">${thrive.latinName}</p>
                    </div>
                    <!-- Part 2 -->
                    <div class="flex gap-2">
                        <p class="light bg-gray-200 px-5">${thrive.light}</p>
                        <p class="water bg-gray-200 px-5">${thrive.water}</p>
                    </div>
                     <!-- Part3 -->
                      <p class="status">${thrive.status}</p>
                      <p class="notes">${thrive.notes}</p>
                      <!-- part 4 -->
                    <div class="flex gap-5">
                        <button class="thriving-btn bg-green-200 px-4 py-2 cursor-pointer">Thrive</button>
                        <button class="struggling-btn bg-red-200 px-4 py-2 cursor-pointer">Struggle</button>
                    </div>
                </div>
                <!-- Card Right -->
                <div>
                    <button class="btn-delete bg-red-200 text-red-600 px-4 py-2 cursor-pointer">Delete</button>
                </div>
        `

        filterSection.appendChild(div)
    }
}

function renderStruggling(){
    filterSection.innerHTML = "";

    for(let struggle of strugglingList){
        
        let div = document.createElement("div");
        div.className = "card flex justify-between border p-8";
        div.innerHTML = `
        <div class="space-y-6">
                    <!-- Part 1 -->
                    <div>
                        <p class="plant-name text-3xl mb-2.5">${struggle.plantName}</p>
                        <p class="latin-name">${struggle.latinName}</p>
                    </div>
                    <!-- Part 2 -->
                    <div class="flex gap-2">
                        <p class="light bg-gray-200 px-5">${struggle.light}</p>
                        <p class="water bg-gray-200 px-5">${struggle.water}</p>
                    </div>
                     <!-- Part3 -->
                      <p class="status">${struggle.status}</p>
                      <p class="notes">${struggle.notes}</p>
                      <!-- part 4 -->
                    <div class="flex gap-5">
                        <button class="thriving-btn bg-green-200 px-4 py-2 cursor-pointer">Thrive</button>
                        <button class="struggling-btn bg-red-200 px-4 py-2 cursor-pointer">Struggle</button>
                    </div>
                </div>
                <!-- Card Right -->
                <div>
                    <button class="btn-delete bg-red-200 text-red-600 px-4 py-2 cursor-pointer">Delete</button>
                </div>
        `

        filterSection.appendChild(div)
    }
}