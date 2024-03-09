const add=document.querySelector('#add');
const courseCode=document.querySelector('#courseCode');
const unitValue=document.querySelector('#unitValue');
const grade=document.querySelector('#grade');
const tBody=document.querySelector('#tbody');
const table=document.querySelector('#table');
const tfoot=document.querySelector('#tfoot');
const calcGp=document.querySelector('#calcGp');
const reset=document.querySelector('#reset');
const fourPoint=document.querySelector('#fourPoint');
let gpArray=[];

add.addEventListener('click', () => {
    if(courseCode.value=== '' || unitValue.value <= 0 || grade.selectedIndex===0) {
        alert('Wrong/No input, check and try again')
   } else {
    const tr= document.createElement('tr');
    const tdCourseCode=document.createElement('td');
    tdCourseCode.innerHTML=courseCode.value;
    const tdUnitValue=document.createElement('td');
    tdUnitValue.innerHTML=unitValue.value;
    const tdGrade=document.createElement('td');
    tdGrade.innerHTML=grade.options[grade.selectedIndex].text;
    tr.appendChild(tdCourseCode);
    tr.appendChild(tdUnitValue);
    tr.appendChild(tdGrade);
    tBody.appendChild(tr);
    table.classList.remove('display-none');
    calcGp.classList.remove('display-none');
    reset.classList.remove('display-none');
    gpArray.push({'unitValue':unitValue.value, 'grade':grade.options[grade.selectedIndex].value});
    courseCode.value='';
    unitValue.value='';
    grade.selectedIndex='0';
   }
   
} )

calcGp.addEventListener('click', () => {
    let unitValues = 0, productOfUnitValuesAndGrades=0, 
        sumOfProductOfUnitValuesAndGrades=0;

        gpArray.forEach(result=> {
            unitValues += parseInt(result.unitValue);
            productOfUnitValuesAndGrades = parseInt(result.unitValue) * parseInt(result.grade);
            sumOfProductOfUnitValuesAndGrades += productOfUnitValuesAndGrades;
        });
        const tr=document.createElement('tr');
    tdTotalUnitValue=document.createElement('td');
    tdTotalUnitValue.innerHTML=`Total Units: ${unitValues}`;
    tdGpa=document.createElement('td');
    tdGpa.setAttribute('colspan', '2');
    tdGpa.innerHTML=`GP: ${(sumOfProductOfUnitValuesAndGrades / unitValues).toFixed(2)}`;
    tr.appendChild(tdTotalUnitValue);
    tr.appendChild(tdGpa);
    if(tfoot.querySelector('tr') !== null){
        tfoot.querySelector('tr').remove();
    }
    tfoot.appendChild(tr);
});

reset.addEventListener('click', () => {
    gpArray=[];
    tBody.querySelectorAll('*').forEach(child=> child.remove());
    if(tfoot.querySelector('tr') !== null){
        tfoot.querySelector('tr').remove();
    }
    table.classList.add('display-none');
    calcGp.classList.add('display-none');
    reset.classList.add('display-none');
})

fourPoint.addEventListener('click', () => {
    window.location.href = "index.html";
})

ourName.addEventListener('click', ()=>{
    alert('Oyerinde Sodiq, Abdulyekeen Oluwadabira, Abubakar Yetunde, Olurode Musab, Dauda Shedrack, Ademiju Paul, Bassey Shalom, Elamah Semiat, Alikeh Christoper')
})

