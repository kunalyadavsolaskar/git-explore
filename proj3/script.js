const courses = [
    {
        name: "complete react",
        price: "2.3"
    },
    {
        name: "complete anjuar",
        price: "2.8"
    },
    {
        name: "complete mern",
        price: "2.7"
    },
    {
        name: "complete C++",
        price: "2.6"
    },
    {
        name: "complete django",
        price: "3.6"
    },
    {
        name: "complete python",
        price: "2.4"
    },
]
function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML=""
    courses.forEach(course => {
        const li = document.createElement("li")
        li.classList.add("list-group-item")

        const name = document.createTextNode(course.name)
        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("float-right")
        const price = document.createTextNode("$ "+course.price)
        span.appendChild(price)
        
        li.appendChild(span)
        ul.appendChild(li)



    }
    )
}
// generateList()
window.addEventListener("load",generateList)

const button=document.querySelector(".sort-btn")
button.addEventListener("click",()=>{
    courses.sort((a,b)=>a.price-b.price)
    generateList()
})
const button2=document.querySelector(".btn-primary")
button2.addEventListener("click",()=>{
    courses.sort((a,b)=>a.price-b.price)
    courses.reverse();
    generateList()
})