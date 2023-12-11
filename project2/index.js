const form = document.querySelector('form');
//we cannot select height , weight outside function because if we write here it will
// store empty values.

form.addEventListener('submit' , (e)=> {
    e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results');


  if(height === '' || height<0   || isNaN(height)){
      results.innerHTML =  `Please give valid height ${height}`;
  }
    else if(weight === '' || weight<0   || isNaN(weight)){
    results.innerHTML =  `Please give valid weight ${weight}`;
    }

    else {
       const bmi =  (weight / ((height*height)/10000)).toFixed(2);
       if(bmi < 18.6  ){
        results.innerHTML = `Under Weight <br> <span>${bmi}</span>`
       } 
       else if(bmi > 18.6 && bmi < 24.9){
        results.innerHTML = `Normal Weight <br> <span>${bmi}</span>`
       }
       else{
        results.innerHTML = `Over Weight <br> <span>${bmi}</span>`
       }
        
        
    }
})