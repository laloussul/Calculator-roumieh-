let inputs = [];
let results = [];
for(let i = 1; i <= 8; i++)
{
  inputs[i] = document.getElementById(`input${i}`)
}

for(let i = 1; i <= 4; i++)
{
  results[i] = document.getElementById(`result${i}`)
}
inputs[1].onkeyup = () => { 

  if(inputs[1].value != '')
  {
   let inputs1_2=57-0.4*+inputs[1].value
  results[1].innerText="baddak at least:"+ (inputs1_2)/0.6 ;
  
  }
  else if(inputs[1].value || inputs[1].value === '')
  {
    results[1].innerText ='RESULT';
  }
   results[1].style.animationName="disp";
 results[1].style.animationDuration="5s";
}

inputs[4].onkeyup = () => {
  if(inputs[4].value != '')
  {
   let inputs1_2 =(inputs[3].value - (inputs[4].value)*0.4)/0.6;
  results[2].innerText = inputs1_2+':3al final bala rachat w push';
  }
  else if(inputs[3].value || inputs[4].value === '')
  {
    results[2].innerText = 'RESULT';
  }
   results[2].style.animationName="disp";
 results[2].style.animationDuration="5s";

  
}

/*inputs[6].onkeyup = () => {
if(inputs[6].value != '')
  {
   let inputs1_2 = inputs[5].value * inputs[6].value;
  results[3].innerText = inputs1_2;
  }
  else if(inputs[5].value || inputs[6].value === '')
  {
    results[3].innerText = 'RESULT';
  }
}

inputs[8].onkeyup = () => {
  if(inputs[8].value != '')
  {
   let inputs1_2 = inputs[7].value / inputs[8].value;
  results[4].innerText = inputs1_2;
  }
  else if(inputs[7].value || inputs[8].value === '')
  {
    results[4].innerText = 'RESULT';
  }
} */
