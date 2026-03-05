function toggle(id){
    const allFilterBtn = document.getElementById("all-filter-btn");
    const interViewFilterBtn = document.getElementById("interview-filter-btn");
    const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

    allFilterBtn.classList.remove("btn-primary");
    interViewFilterBtn.classList.remove("btn-primary");
    rejectedFilterBtn.classList.remove("btn-primary");


    const selected = document.getElementById(id);
    selected.classList.add('btn-primary');

    currentStatus = id;

    if(id==="all-filter-btn"){
        allCardSection.classList.remove("hidden");
        filterSection.classList.add("hidden");
        renderAllJobs();
        
        
    }else if(id==="interview-filter-btn"){
        allCardSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderInterView();
        
        
       
    }else if(id==="rejected-filter-btn"){
        allCardSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderRejected();
        
    }
    
}

function renderAllJobs(){
    allCardSection.innerHTML = "";
    if(all.length<=0){
        const section = document.createElement("section");
            section.innerHTML = `
            <div class="text-center bg-white py-20 rounded-md border-gray-200 shadow-md"> 
                <img src="./assets/images/jobs.png" alt="" class="mx-auto mb-5">
                <h2 class="mb-1 font-semibold text-2xl text-[#002C5C]">No jobs available</h2>
                <p class="text-lg text-[#64748B]">Check back soon for new job opportunities</p>
            </div>
            `
         allCardSection.appendChild(section); 

    }else{
   for(let job of all){
    let div = document.createElement("div");
    let borderClass = "border-gray-200";
        if(job.jobStatus === "INTERVIEW"){
            borderClass = "border border-green-400 border-l-6";
        } 
        else if(job.jobStatus === "REJECTED"){
            borderClass = "border border-red-400 border-l-6";
        } 

        let statusBg = "bg-[#EEF4FF]";
        if(job.jobStatus === "INTERVIEW"){
            statusBg = "bg-green-200";
        } 
        else if(job.jobStatus === "REJECTED"){
            statusBg = "bg-red-200";
        }
    div.className = `job-card p-7 bg-white rounded-md  shadow-sm hover:shadow-md flex justify-between ${borderClass}`;
    div.innerHTML = `
            <div class="card-left">
                    <h2 class="job-companies mb-1 font-semibold text-lg text-[#002C5C]">${job.jobCompany}</h2>
                    <p class="job-title text-[#64748B]">${job.jobTitle}</p>
                    <p class="job-info my-5 text-[#64748B]">${job.jobInfo}</p>
                    <h2 class="job-status text-[#002C5C] ${statusBg} inline-block px-3 py-2 font-semibold text-sm rounded">${job.jobStatus}</h2>
                    <p class="job-description mt-2 mb-5">${job.jobDescription}</p>

                    <div class="job-card-buttons flex gap-3">
                        <button class="interview-btn btn btn-soft btn-success border-2 border-green-400">Interview</button>
                        <button class="rejected-btn btn btn-soft btn-error border-2 border-red-400">Rejected</button>
                    </div>
                </div>
            <div class="delete-card w-8 h-8 border border-gray-200 rounded-full cursor-pointer flex justify-center items-center shrink-0">
                <img src="./assets/images/Trash.png" alt="" class="">
            </div>
            `
    
    allCardSection.appendChild(div);
   }}
}

renderAllJobs();



mainSection.addEventListener("click", function(event){
    if(event.target.classList.contains("interview-btn")){
        let parentNode = event.target.parentElement.parentElement.parentElement;
        parentNode.classList.remove("border-gray-200", "border-red-400");
        parentNode.classList.add("border", "border-l-6", "border-green-400");
        

        const jobCompany = parentNode.querySelector(".job-companies").innerText;
        const jobTitle = parentNode.querySelector(".job-title").innerText;
        const jobInfo = parentNode.querySelector(".job-info").innerText;
        const jobDescription = parentNode.querySelector(".job-description").innerText;
        let jobStatus = parentNode.querySelector(".job-status").innerText;

        const jobObj = all.find(job => job.jobTitle === jobTitle);

        if(jobObj){
            jobObj.jobStatus = "INTERVIEW";
        }
        
        jobStatus = parentNode.querySelector(".job-status").innerText = "INTERVIEW";
        // parentNode.querySelector(".job-status").classList.remove("bg-[#EEF4FF]", "bg-red-200");
        // parentNode.querySelector(".job-status").classList.add("bg-green-200");
        

        const job = {
            jobCompany,
            jobTitle,
            jobInfo,
            jobStatus,
            jobDescription
        }

        const jobExist = interViewList.find(item => item.jobTitle===job.jobTitle);
        if(!jobExist){
            interViewList.push(job);            
        }

        rejectedList = rejectedList.filter(item => item.jobTitle !== job.jobTitle);
        
        renderInterView();
        if(currentStatus==="rejected-filter-btn"){
            renderRejected();
        }

        calculateCount();
        
    }else if(event.target.classList.contains("rejected-btn")){
        let parentNode = event.target.parentElement.parentElement.parentElement;
        parentNode.classList.remove("border-gray-200", "border-green-400");
        parentNode.classList.add("border", "border-l-6", "border-red-400");
        

        const jobCompany = parentNode.querySelector(".job-companies").innerText;
        const jobTitle = parentNode.querySelector(".job-title").innerText;
        const jobInfo = parentNode.querySelector(".job-info").innerText;
        const jobDescription = parentNode.querySelector(".job-description").innerText;
        let jobStatus = parentNode.querySelector(".job-status").innerText;

        const jobObj = all.find(job => job.jobTitle === jobTitle);

        if(jobObj){
            jobObj.jobStatus = "REJECTED";
        }
        
        jobStatus = parentNode.querySelector(".job-status").innerText = "REJECTED";
        // parentNode.querySelector(".job-status").classList.remove("bg-[#EEF4FF]");
        // parentNode.querySelector(".job-status").classList.add("bg-red-200");
        

        const job = {
            jobCompany,
            jobTitle,
            jobInfo,
            jobStatus,
            jobDescription
        }

        const jobExist = rejectedList.find(item => item.jobTitle===job.jobTitle);
        if(!jobExist){
            rejectedList.push(job);            
        }

        interViewList = interViewList.filter(item => item.jobTitle !== job.jobTitle);
        renderRejected();
        if(currentStatus==="interview-filter-btn"){
            renderInterView();
        }

        calculateCount();
        
    }else if(event.target.classList.contains("delete-card") || (event.target.closest(".delete-card"))){
        const cardItem = event.target.closest(".job-card")
        const cardName = cardItem.querySelector(".job-title").innerText;
        console.log(cardName);
          

        all = all.filter(item => item.jobTitle !== cardName);
        interViewList = interViewList.filter(item => item.jobTitle !== cardName);
        rejectedList = rejectedList.filter(item => item.jobTitle !== cardName);
        cardItem.remove();
        calculateCount();
        // if(currentStatus==="all-filter-btn"){
        // }

        if(currentStatus==="interview-filter-btn"){
            renderInterView();
        }else if(currentStatus==="rejected-filter-btn"){
            renderRejected();
        }
        
        renderAllJobs();
        
        
    }
})

function renderInterView(){
    filterSection.innerHTML = "";
    if(interViewList.length<=0){
            const section = document.createElement("section");
            // section.className = "no-jobs ";
            section.innerHTML = `
            <div class="text-center bg-white py-20 rounded-md border-gray-200 shadow-md"> 
                <img src="./assets/images/jobs.png" alt="" class="mx-auto mb-5">
                <h2 class="mb-1 font-semibold text-2xl text-[#002C5C]">No jobs available</h2>
                <p class="text-lg text-[#64748B]">Check back soon for new job opportunities</p>
            </div>
            `
         filterSection.appendChild(section);   
    }else{
    for(let list of interViewList){
        const div = document.createElement("div");
        div.className = "job-card p-7 bg-white rounded-md shadow-sm hover:shadow-md flex justify-between border border-l-6 border-green-400";
        // div.classList.add = "border border-green-400"
        div.innerHTML = `
        <div class="card-left">
                <h2 class="job-companies mb-1 font-semibold text-lg text-[#002C5C]">${list.jobCompany}</h2>
                <p class="job-title text-[#64748B]">${list.jobTitle}</p>
                <p class="job-info my-5 text-[#64748B]">${list.jobInfo}</p>
                <h2 class="job-status text-[#002C5C] bg-green-200 inline-block px-3 py-2 font-semibold text-sm rounded">${list.jobStatus}</h2>
                <p class="job-description mt-2 mb-5">${list.jobDescription}</p>

                <div class="job-card-buttons flex gap-3">
                    <button class="interview-btn btn btn-soft btn-success border-2 border-green-400">Interview</button>
                    <button class="rejected-btn btn btn-soft btn-error border-2 border-red-400">Rejected</button>
                </div>
            </div>
            <div class="delete-card w-8 h-8 border border-gray-200 rounded-full cursor-pointer flex justify-center items-center shrink-0">
                <img src="./assets/images/Trash.png" alt="" class="">
            </div>
        </div>
        `
        filterSection.appendChild(div);
    }}
}

function renderRejected(){
    filterSection.innerHTML = "";
    if(rejectedList.length<=0){
            const section = document.createElement("section");
            // section.className = "no-jobs ";
            section.innerHTML = `
            <div class="text-center bg-white py-20 rounded-md border-gray-200 shadow-md"> 
                <img src="./assets/images/jobs.png" alt="" class="mx-auto mb-5">
                <h2 class="mb-1 font-semibold text-2xl text-[#002C5C]">No jobs available</h2>
                <p class="text-lg text-[#64748B]">Check back soon for new job opportunities</p>
            </div>
            `
         filterSection.appendChild(section);   
    }else{

    for(let list of rejectedList){
        const div = document.createElement("div");
        div.className = "job-card p-7 bg-white rounded-md border border-red-400 shadow-sm hover:shadow-md flex justify-between border-l-6";
        div.innerHTML = `
        <div class="card-left">
                <h2 class="job-companies mb-1 font-semibold text-lg text-[#002C5C]">${list.jobCompany}</h2>
                <p class="job-title text-[#64748B]">${list.jobTitle}</p>
                <p class="job-info my-5 text-[#64748B]">${list.jobInfo}</p>
                <h2 class="job-status text-[#002C5C] bg-red-200 inline-block px-3 py-2 font-semibold text-sm rounded">${list.jobStatus}</h2>
                <p class="job-description mt-2 mb-5">${list.jobDescription}</p>

                <div class="job-card-buttons flex gap-3">
                    <button class="interview-btn btn btn-soft btn-success border-2 border-green-400">Interview</button>
                    <button class="rejected-btn btn btn-soft btn-error border-2 border-red-400">Rejected</button>
                </div>
            </div>
            <div class="delete-card w-8 h-8 border border-gray-200 rounded-full cursor-pointer flex justify-center items-center shrink-0">
                <img src="./assets/images/Trash.png" alt="" class="">
            </div>
        </div>
        `
        filterSection.appendChild(div);
    }}
}

