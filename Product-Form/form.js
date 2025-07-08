let submitBtn = document.querySelector("#submitbtn");
let resetBtn = document.querySelector("#resetbtn");
let msgContainer = document.querySelector(".msg-container");
let showtable = document.querySelector("#content");
let addMoreBtn = document.querySelector("#moreDetail");
let validation = document.querySelectorAll(".validation");
const products = () =>{
    let productId = document.getElementById("pid").value;
    let pName = document.getElementById("pname").value;
    let category= document.getElementById("category").value;
    let brand = document.getElementById("brand").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;
    let discount = document.getElementById("discount").value;
    let mdate = document.getElementById("mdate").value;
    let edate = document.getElementById("edate").value;
    let color = colors.join(", ");
    let image = document.getElementById("url").value;
    let status = document.getElementById("availability").value;
    let rating = document.getElementById("rating").value;
    let desc = document.getElementById("desc").value;

    const inputElements = [
        document.getElementById("pid"),
        document.getElementById("pname"),
        document.getElementById("category"),
        document.getElementById("brand"),
        document.getElementById("price"),
        document.getElementById("quantity"),
        document.getElementById("discount"),
        document.getElementById("mdate"),
        document.getElementById("edate"),
        document.getElementById("availability"),
    ];  
    let isValid = true;

    // Clear old messages and validate
    inputElements.forEach((input, index) => {
        const val1 = input.value.trim();
        validation[index].innerText="";
        if (val1 === "") {
            validation[index].innerText = "This field is required.";
            isValid = false;
        }
        else if((input.id === "price" || input.id === "quantity") && (isNaN(val1) || Number(val1) < 0)) {
                validation[index].innerText = "Enter a non-negative number";
                isValid = false;
        }
    });
    if(discount !==""){
        let disVal = Number(discount);
        if(isNaN(disVal) || (disVal<0 || disVal>100)){
            validation[6].innerHTML= `<p style="color:red; font-size:15px;">Discount range should be between 0% to 100%.</p>`;
            isValid=false;
        }
    }
    if(mdate!=="" && edate !=="" && new Date(mdate) > new Date(edate)){
        validation[7].innerHTML = `<p style="color:red; font-size:15px;">Manufacturing date should not be greater than expiry date.</p>`;
        isValid=false;    
    }
    if (!isValid) return; 
    else{
        msgContainer.classList.remove("hidecontent");
        document.querySelector(".msg-container").scrollIntoView({
            behavior: "smooth"
        });
        let newRow = document.createElement("tr");
        newRow.innerHTML=`
                        <td>${productId}</td>
                        <td><img src="${image}" alt="Product Image" width="100"></td>
                        <td>${pName}</td>
                        <td>${category}</td>
                        <td>${brand}</td>
                        <td>${price}</td>
                        <td>${quantity}</td>
                        <td>${discount}</td>
                        <td>${mdate}</td>
                        <td>${edate}</td>
                        <td>${color}</td>
                        <td>${status}</td>
                        <td>${rating}</td>
                        <td>${desc}</td>`;
        showtable.appendChild(newRow);
        document.querySelector("#form").reset();
        alert("Form submitted successfully.");
        validation.forEach((span)=>{
            span.innerText="";
        });
        colors = [];
        colorList.innerHTML = "";
    }
}
const addMoreDetails = ()=>{
    document.querySelector("#form").scrollIntoView({
        behavior: "smooth"
    });
    msgContainer.classList.add("hidecontent");
} 
const resetFrom = ()=>{
    
    document.querySelector("#form").reset();
    colors = [];
    colorList.innerHTML = "";
    msgContainer.classList.add("hidecontent");
}
submitBtn.addEventListener("click",products);
resetBtn.addEventListener("click",resetFrom);
addMoreBtn.addEventListener("click",addMoreDetails);
let colors=[];
let addColor = document.querySelector("#addbtn");
const colorInput = document.getElementById("pcolor");
const colorList = document.getElementById("colorList");
addColor.addEventListener("click",()=>{
    const color = colorInput.value.trim();
    if(color !== ""){
        colors.push(color);
        updateColorList();
        colorInput.value = "";
    }
});
function updateColorList() {
    colorList.innerHTML = ""; // clear existing list
    colors.forEach((col, index) => {
        const span = document.createElement("span");
        span.innerText = col;
        span.style.marginRight = "8px";
        span.style.padding = "3px 8px";
        span.style.backgroundColor = "#457B9D";
        span.style.color = "white";
        span.style.border = "1px solid #ccc";
        span.style.borderRadius = "5px";
        colorList.appendChild(span);
    });
}
