let LeftSide = document.querySelector(".left_Section");



//  create raw data for 

let HospitalData = [
{
    sino:"1",
    facility:"checkup",
    amount:"500" 
},
{
    sino:"2",
    facility:"ecg",
    amount:"800" 
},
{
    sino:"3",
    facility:"tpotest",
    amount:"600" 
},
{
    sino:"4",
    facility:"bloodtest",
    amount:"500" 
},
{
    sino:"5",
    facility:"hivtest",
    amount:"800" 
},
{
    sino:"6",
    facility:"xRay",
    amount:"300" 
},
{
    sino:"7",
    facility:"sonography",
    amount:"1000" 
},
{
    sino:"8",
    facility:"dialises",
    amount:"2000" 
},{
    sino:"9",
    facility:"heartscanning ",
    amount:"700" 
},
{
    sino:"10",
    facility:"thyroidtest",
    amount:"100" 
}
,
{
    sino:"11",
    facility:"heartAttack",
    amount:"0" 
}


]


let hospitalList = ""

HospitalData.forEach((x,i)=>{
    let{facility , amount}=x;
     hospitalList +=
     `
     <tr>
        <td>${i}</td>
        <td>${facility}</td>
        <td>${amount}Rs</td>
     </tr>`
})

document.querySelector('tbody').innerHTML = hospitalList




// logic for second part

let inputName = document.querySelector('#PatientName')
let patientDetail = document.querySelector("#test")
let buttonData = document.querySelector('button')


let span = document.querySelector('.Patientname')
console.log(patientDetail.value);


function getObj(obj ,value){
    return(Object.values(obj).find(valued =>(valued.facility === value)))
    // return Object.keys(obj).find(key =>obj[key] === value)
}

let finalAmount = 0
 var i = 0;
buttonData.addEventListener('click',(e)=>{
    // console.log(patientDetail.value);
    
    if(inputName.value == ""){
        alert(" please enter the patient name ")
    }
    else{
        span.innerHTML = inputName.value
    }

    if(patientDetail.value ==""){
        alert(" patient field cant be empty")
    }
        let patientData = patientDetail.value
        

        i = ++i
    //    console.log(patientData);
       let last = getObj(HospitalData,patientData)
       console.log(last);

       let tr = document.createElement('tr')
       let td1 = document.createElement('td')
       let td2 = document.createElement('td')
       let td3 = document.createElement('td')

            tr.appendChild(td1)
            td1.innerText = i
            tr.appendChild(td2)
            td2.innerText = patientDetail.value
            tr.appendChild(td3)
            td3.innerText = last.amount
            finalAmount = finalAmount + +(last.amount)

            let tbody  = document.querySelector('.tbodyd')

            tbody.appendChild(tr)


          

    //    let secondList = ""

    //    secondList += `
    // <tr>
    //     <td> ${last.sino}</td>
    //     <td> ${patientDetail.value}</td>
    //     <td> ${last.amount}</td>

    // </tr>

    let totaled = document.querySelector(".total")
    totaled.innerText = finalAmount
    console.log(finalAmount);
    console.log(i);
    
})


