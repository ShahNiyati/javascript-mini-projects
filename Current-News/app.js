const API_KEY ="{Your API KEY}";// put your api key
const URL = `https://newsdata.io/api/1/news?apikey={Your API KE}&language=en`;
const searchBtn = document.querySelector("#searchbtn");
//&country=in
const validCategories = [
    "business", "entertainment", "environment", "food", "health",
    "politics", "science", "sports", "technology", "top", "world"
];
async function getCountryDropdown(){
    try{
        const response = await fetch(URL);
        const data = await response.json();
        if(!data.results || data.results.length === 0){
            console.log("No news article found");
            return;
        }
        const ddCountry = document.querySelector("#countryList"); // This is your <datalist>
        for (const [name, code] of Object.entries(countryMap)) {
            const option = document.createElement("option");
            option.value = name; // show country name in dropdown
            option.setAttribute("data-code", code); // store country code
            ddCountry.appendChild(option);
        }

        const ddCategory = document.querySelector("#category_dropdown");
        validCategories.forEach(category=>{
            const option = document.createElement("option");
            option.value = category;
            option.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Capitalize first letter
            ddCategory.appendChild(option);
        });
    }
    catch (error){
        console.log("Error loading countrys : ",error);
    }
}
getCountryDropdown();
searchBtn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    const heading = document.querySelector("#headingNews");
    const subHeading = document.querySelector("#subheading");
    const newsContainer = document.querySelector("#News-container");
    document.querySelector("#News-container").scrollIntoView({
        behavior: "smooth"
    });
    newsContainer.classList.remove("hide");
    const countryNews = document.querySelector("#countryNews");
    countryNews.innerHTML = ""; 
    const countryName = document.querySelector("#countryInput").value.trim();
    if (!countryName) {
        alert("Please enter a country name.");
        return;
    }    
    let countryCode = null;
    for (const [name, code] of Object.entries(countryMap)) {
        if (name.toLowerCase() === countryName.toLowerCase()) {
            countryCode = code;
            break;
        }
    }
    if (!countryCode) {
        alert("Please select a valid country from the list.");
        return;
    }
    const category = document.querySelector("#category_dropdown").value;
    const BaseURL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en&country=${countryCode}&category=${category}`;
    try{
        const response = await fetch(BaseURL);
        const data = await response.json();
        console.log("Request URL:", BaseURL);
        console.log("API Status:", data.status);
        console.log("Total Results:", data.totalResults);
        console.log("Fetched data:", data);
        if (!Array.isArray(data.results) || data.results.length === 0) {
            countryNews.innerHTML = "<p>No news found for the selected country and category.</p>";
            return;
        }
        heading.innerText=`${countryName}'s News`;

        subHeading.innerText=`${category.toUpperCase()}`;
        data.results.forEach(news => {
            const card = document.createElement("div");
            card.classList.add("news-card");
    
            const contentDiv = document.createElement("div");
            contentDiv.classList.add("news-content");
    
            const title = document.createElement("h3");
            title.classList.add("news-title");
            title.textContent = news.title;
    
            const description = document.createElement("p");
            description.classList.add("news-description");
            description.textContent = news.description || "No content available.";
    
            const learnMore = document.createElement("a");
            learnMore.classList.add("learn-more-btn");
            learnMore.textContent = "Learn More";
            learnMore.href = news.link;
            learnMore.target = "_blank";
    
            contentDiv.appendChild(title);
            contentDiv.appendChild(description);
            contentDiv.appendChild(learnMore);
    
            const imgDiv = document.createElement("div");
            imgDiv.classList.add("news-image");
    
            if (news.image_url) {
                const img = document.createElement("img");
                img.src = news.image_url;
                img.alt = "News Image";

                // ✅ Added fallback for 403 or broken image
                img.onerror = () => {
                    img.src = "https://via.placeholder.com/150";  // Placeholder image
                    img.alt = "Image not available";
                };

                imgDiv.appendChild(img);
            }
    
            card.appendChild(contentDiv);
            card.appendChild(imgDiv);
            countryNews.appendChild(card);
        });
    }
    catch(error){
        console.error("API fetch error:", error);
        countryNews.innerHTML = "<p>Unable to load news. Please try again later.</p>";
    }
    
});

