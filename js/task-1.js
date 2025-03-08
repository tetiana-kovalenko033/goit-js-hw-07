const items = document.querySelector('#categories')
const itemNumber = items.querySelectorAll(".item");
console.log(`Number of categories: ${itemNumber.length}`);



itemNumber.forEach((item) => {
    const title = item.querySelector("h2").textContent;
    const listNumber = item.querySelectorAll("ul li").length;
    
    console.log(`Category: ${title}`);
console.log(`Elements: ${listNumber}`);
});
    
    







