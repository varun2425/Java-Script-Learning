let employees=[
    {'eid':101,ename:'Varun',esal:45000},
    {'eid':102,ename:'Karthik',esal:55000},
    {'eid':103,ename:'Annu',esal:65000},
    {'eid':104,ename:'Zoya',esal:75000},
]
function display_Data(){
    let rows="";
    for(let emp of employees){
        rows=rows+`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
                   </tr>`
    }
    document.getElementById('tbody_data').innerHTML=rows;
    //document.getElementById('tbody_data').innerHTML="GM"
}