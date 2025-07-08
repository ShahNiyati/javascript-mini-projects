const API_KEY = "{your_api_key}";//put your api key here
const URL = "https://v6.exchangerate-api.com/v6/{your api key}/latest/INR";
const dropdowns = document.querySelectorAll(".dropdown select");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
for(let select of dropdowns){//2 times
    for(currCode in countryList){//all countries (total number)
        let newOpt = document.createElement("option");
        newOpt.innerText=currCode;
        newOpt.value=currCode;
        if(select.name==="from" && currCode==="USD"){
            newOpt.selected="selected";
        }else if(select.name==="to" && currCode==="INR"){
            newOpt.selected="selected";
        }
        select.append(newOpt);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}
const updateFlag =(element)=>{
// console.log(element);
    let currCode = element.value;
    let countryCode=countryList[currCode];
    console.log(element.value);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
};
const btn = document.querySelector("#submit");
btn.addEventListener("click",async(evt) =>{
    evt.preventDefault();
    let amount = document.querySelector(".amount #inputval");
    let amtVal = amount.value;
    if(amtVal=="" || amtVal < 1){
        amtVal =1;
        amount.value = "1";
    }
    // console.log(fromCurr,toCurr);
    const URL=`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurr.value}/${toCurr.value}`;
    const response = await fetch(URL);
    const data = await response.json();
    let rate = data.conversion_rate;
    // console.log(rate);
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
});