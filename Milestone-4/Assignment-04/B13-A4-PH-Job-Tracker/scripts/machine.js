let interViewList = [];
let rejectedList = [];
let all = [
    {
        jobCompany: "Mobile First Corp",
        jobTitle: "React Native Developer",
        jobInfo: "Remote • Full-time • $130,000 - $175,000",
        jobStatus: "NOT APPLIED",
        jobDescription: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
    },
    {
        jobCompany: "WebFlow Agency",
        jobTitle: "Web Designer & Developer",
        jobInfo: "Los Angeles, CA • Part-time • $80,000 - $120,000",
        jobStatus: "NOT APPLIED",
        jobDescription: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends."
    },
    {
        jobCompany: "DataViz Solutions",
        jobTitle: "Data Visualization Specialist",
        jobInfo: "Boston, MA • Full-time • $125,000 - $165,000",
        jobStatus: "NOT APPLIED",
        jobDescription: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking."
    },
    {
        jobCompany: "CloudFirst Inc",
        jobTitle: "Backend Developer",
        jobInfo: "Seattle, WA • Full-time • $140,000 - $190,000",
        jobStatus: "NOT APPLIED",
        jobDescription: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure."
    },
    {
        jobCompany: "Innovation Labs",
        jobTitle: "UI/UX Engineer",
        jobInfo: "Austin, TX • Full-time • $110,000 - $150,000",
        jobStatus: "NOT APPLIED",
        jobDescription: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required."
    },
    {
        jobCompany: "MegaCorp Solutions",
        jobTitle: "JavaScript Developer",
        jobInfo: "New York, NY • Full-time • $130,000 - $170,000",
        jobStatus: "NOT APPLIED",
        jobDescription: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities."
    },
    {
        jobCompany: "StartupXYZ",
        jobTitle: "Full Stack Engineer",
        jobInfo: "Remote • Full-time • $120,000 - $160,000",
        jobStatus: "NOT APPLIED",
        jobDescription: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included."
    },
    {
        jobCompany: "TechCorp Industries",
        jobTitle: "Senior Frontend Developer",
        jobInfo: "San Francisco, CA • Full-time • $130,000 - $175,000",
        jobStatus: "NOT APPLIED",
        jobDescription: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects."
    }
];


let mainSection = document.querySelector("main");
let allCardSection = document.getElementById("job-listings");

// let noJobSection = document.querySelector(".no-jobs");

let filterSection = document.getElementById("filtered-listings");

let currentStatus = "filtered-listings";



function calculateCount(){
    let total = document.getElementById("total-counter");
    let interview = document.getElementById("interview-counter");
    let rejected = document.getElementById("rejected-counter");
    
    
    
    let interviewCount = interViewList.length;
    let rejectedCount = rejectedList.length;

    total.innerText = all.length;
    interview.innerText = interviewCount;
    rejected.innerText = rejectedCount;
    
}

calculateCount();

