let employees = [
    {
        id: "1",
        fullname: "Barty Shaughnessy",
        gender: "Male",
        email: "bshaughnessy0@webmd.com",
        registered: false
    },
    {
        id: "2",
        fullname: "Neddy Coye",
        gender: "Male",
        email: "ncoye1@home.pl",
        registered: false
    },
    {
        id: "3",
        fullname: "Nikolaus Lett",
        gender: "Male",
        email: "nlett2@reddit.com",
        registered: true
    },
    {
        id: "4",
        fullname: "Harrison Brizland",
        gender: "Male",
        email: "hbrizland3@cafepress.com",
        registered: false
    },
    {
        id: "5",
        fullname: "Aurore Vignaux",
        gender: "Non-binary",
        email: "avignaux4@gnu.org",
        registered: true
    },
    {
        id: "6",
        fullname: "Joelly Muscott",
        gender: "Female",
        email: "jmuscott5@merriam-webster.com",
        registered: false
    },
    {
        id: "7",
        fullname: "Derril Hewlings",
        gender: "Male",
        email: "dhewlings6@sciencedaily.com",
        registered: true
    },
    {
        id: "8",
        fullname: "Atlante Bend",
        gender: "Female",
        email: "abend7@shinystat.com",
        registered: false
    },
    {
        id: "9",
        fullname: "Enid Ropp",
        gender: "Non-binary",
        email: "eropp8@newsvine.com",
        registered: false
    },
    {
        id: "10",
        fullname: "Jacquelyn Gumm",
        gender: "Female",
        email: "jgumm9@example.com",
        registered: false
    }
]

let btn = document.querySelector("button")
let para = document.querySelectorAll("p")  //this will store p elements as array
let userInput = document.querySelector("input")


btn.addEventListener("click", ()=>{
    for(let i = 0; i< employees.length; i++){
        if(userInput.value == employees[i].id){
            if(employees[i].registered == true){
                para[0].textContent = `ID: ${employees[i].id}`
                para[1].textContent = `Full Name :${employees[i].fullname}`
                para[2].textContent = `Gender :${employees[i].gender}`
                para[3].textContent = `Email :${employees[i].email}`
                para[4].textContent = `Registered : ${employees[i].registered}`
            }else{
                para[0].textContent = `ID: ${employees[i].id}`
                para[1].textContent = `Full Name :${employees[i].fullname}`
                para[2].textContent = `Gender :${employees[i].gender}`
                para[3].textContent = `Email :${employees[i].email}`
                para[4].textContent = `Registered : ${employees[i].registered}`
            }
        }
    }
})