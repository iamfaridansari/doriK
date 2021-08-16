let feature = [
    {
        icon: "fas fa-dragon",
        title: "Fast & Reliable",
        sub: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatum fugit consequuntur cupiditate"
    },
    {
        icon: "fas fa-money-check-alt",
        title: "Fixed monthly rate",
        sub: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatum fugit consequuntur cupiditate"
    },
    {
        icon: "fas fa-balance-scale",
        title: "Flexible & Scalable",
        sub: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatum fugit consequuntur cupiditate"
    }
]

let grid3 = document.querySelector(".grid3");
feature.map((item) => {
    return (
        grid3.innerHTML +=
        `<div class="box">
                    <i class="${item.icon}"></i>
                    <h3 class="title">${item.title}</h3>
                    <p class="sub">${item.sub}</p>
                </div>`
    )
})

let works = [
    {
        id: "one",
        title: "#1 Submit your request",
        sub: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quisquam cumque quam veniam deserunt.Voluptatum eaque fugiat dolore aliquid quasi dolores, sit illum, incidunt sed asperiores sapiente libero accusantium qui consequuntur aliquam repellat nostrum, ipsa aut! Suscipit.",
        img: "./image//s2.svg"
    },
    {
        id: "second",
        title: "#2 We do the work",
        sub: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quisquam cumque quam veniam deserunt.Voluptatum eaque fugiat dolore aliquid quasi dolores, sit illum, incidunt sed asperiores sapiente libero accusantium qui consequuntur aliquam repellat nostrum, ipsa aut! Suscipit.",
        img: "./image//s3.svg"
    },
    {
        id: "three",
        title: "#3 Approve & Publish",
        sub: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quisquam cumque quam veniam deserunt.Voluptatum eaque fugiat dolore aliquid quasi dolores, sit illum, incidunt sed asperiores sapiente libero accusantium qui consequuntur aliquam repellat nostrum, ipsa aut! Suscipit.",
        img: "./image//s4.svg"
    },
]

let workMax = document.querySelector(".work-max")
works.map((item) => {
    return (
        workMax.innerHTML +=

        `<div class="work-grid" id="${item.id}">
            <div class="left">
                <h3 class="title">${item.title}</h3>
                <p>${item.sub}</p>
            </div>
            <div class="right">
                <img src="${item.img}" alt="img" />
            </div>
        </div>`
    )
})

let member = [
    {
        icon: "fas fa-palette",
        title: "Professional Designer",
        sub: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        icon: "fab fa-artstation",
        title: "Unique Design",
        sub: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        icon: "fab fa-google-wallet",
        title: "Unlimited Request",
        sub: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
]
let grid4 = document.querySelector(".grid4")
member.map((item) => {
    return (
        grid4.innerHTML +=
        `
            <div class="box">
                <i class="${item.icon}"></i>
                <h3 class="title">${item.title}</h3>
                <p class="sub">${item.sub}
                </p>
            </div>
        `
    )
})

let tasks = [
    "Website", "Banner Ads", "Flyers", "Brouchers", "Email Graphics", "Mobile Apps", "Icons", "Stationary", "Logos", "BillBoards", "Brand Guides", "Digital Ads", "Blog Graphics", "Facebook Cover", "Pitch Decks", "Signage"
]
let taskDiv = document.querySelector(".tasks")
tasks.map((item) => {
    return (
        taskDiv.innerHTML +=
        `<h3 class="task"> <i class="far fa-check-circle"></i>${item}</h3>`
    )
})

let list = document.querySelector('.list')
let menu = document.querySelector(".menu").addEventListener('click', () => {
    list.classList.toggle("show")
})

let nav = document.querySelector("nav")
let anchors = document.querySelectorAll(" nav .max ul li a")
let footer = document.querySelector("footer")

let theme = document.querySelector(".theme").addEventListener('click', () => {
    anchors.forEach((tag) => {
        tag.classList.toggle("white")
    })

    nav.classList.toggle("dark")
    footer.classList.toggle("dark")
    document.body.classList.toggle("dark")
})