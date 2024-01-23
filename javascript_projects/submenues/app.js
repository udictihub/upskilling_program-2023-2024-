// import sublinks from "./data.js";
// const linkBtns = document.querySelectorAll(".link-btn");
// const submenu = document.querySelector(".submenu");

// linkBtns.forEach((btn)=>{
//     btn.addEventListener("mouseover",()=>{
//         const text = btn.textContent;
//         const tempBtn = btn.getBoundingClientRect();
//         const center = (tempBtn.left + tempBtn.right) / 2;
//     const bottom = tempBtn.bottom - 3;
//     const tempPage = sublinks.find(({page}) => page === text);
//     if(tempPage){
//         const {page, links} = tempPage;
//         submenu.classList.add("show");
//         submenu.style.left = `${center}px`;
//         submenu.style.top = `${bottom}px`;
//         let columns = "col-2";
//         if(links.length === 3){
//             columns = "col-3";
//         }
//         if(links.length > 3){
//             columns = "col-4";
//         }
//         submenu.innerHTML = `
//         <section>
//         <h4>${page}</h4>
//         <div class="submenu-center ${columns}">
//         ${links.map((link)=>{
//             return `<a href="${link.url}">
//             <i class="${link.icon}"></i>${link.label}
//             </a>`
//         }).join("")}
//         </div>
//         </section>
//         `;

//     }


//     })
// });