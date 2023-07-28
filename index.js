const btn = document.querySelector('button')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const divCard = document.querySelector('.card-div')
let clickedCountry;

fetch('https://restcountries.com/v3.1/all')
.then(res => {
     return res.json()
}).then(res => {
    res.forEach(el => {
        createElements(el)
    });
   
})

const createElements = (country) => {
        
        const markup = `
        <div class="card">
            <img src="${country.flags.svg}" alt="">
            <h5 class="country">${country.name.common}</h5>
            <h5>Capital : ${country.capital + ''}</h5>
            <h5>Population : ${country.population}</h5>
        </div>
        `
        container.insertAdjacentHTML('afterbegin', markup)
        
}

const myFunction = () => {
        const countryList = document.querySelectorAll('.country')
        

        countryList.forEach(el => {
            if(el.textContent.toUpperCase().startsWith(input.value.toUpperCase())){
                el.parentElement.style.display = "flex"
            }else{
                el.parentElement.style.display = "none"
            }
        })
        
        
    }


window.addEventListener('click', (e) => {
    const card = e.target.closest('.card')
    if(card){
        countryList = card.querySelector('.country').textContent
        fetch(`https://restcountries.com/v3.1/name/${countryList}`)
        .then(res => {
            res.json()
            console.log(res)
        })
        
    }
})
        
    
  

   
    
   


