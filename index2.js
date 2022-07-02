let inputName1 = document.querySelector('#PatientName')
let patientDetail1 = document.querySelector("#test")
let buttonData1 = document.querySelector('button')
let Hospitaldata = 
{
  
    500 : "generalcheckup",
    150 :" ecg",
    1020:"antitpotest",
    500 : "generalcheckup",
    150 : "ecg",
    1020:"antitpotest",
    
}





let data = "thyroid"


// console.log(Object.keys(HospitalData).find(key =>HospitalData[key] === "thyroidtest"));

function getObj(obj ,value){
    // console.log(Object.values(obj).find(key =>obj[key] === value));
    return Object.keys(obj).find(key =>obj[key] === value)
}
// console.log(
//     getObj(Hospitaldata ,"ecg"));

let valudate = patientDetail1.value

console.log(patientDetail1);
console.log(getObj(Hospitaldata , valudate));
  

    // function getObj(obj ,value){
    //     return Object.values(obj).find(value =>obj[value] === value)
    // }
    // console.log(
    //     getObj(HospitalData ,"checkup"));4




let secondList = ""

buttonData1.addEventListener('click',(e)=>{

    let dat2 = patientDetail.value
getObj(Hospitaldata ,"dat2")


secondList += `
    <tr>
        <td> ${1}</td>
        <td> ${patientDetail.value}</td>
        <td> "try "</td>

    </tr>

`

})

document.querySelector('.tbodyd').innerHTML = secondList