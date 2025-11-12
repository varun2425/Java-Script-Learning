let employees =[
    {eid:101,ename:"Varun",gender:"Male"},
    {eid:102,ename:"Karthik",gender:"Male"},
    {eid:103,ename:"Renuka",gender:"Female"},
    {eid:104,ename:"Annu",gender:"Female"},
]
let employee=employees.find((emp)=>{
    return emp.name=="Ritivk"
})
console.log(employee)