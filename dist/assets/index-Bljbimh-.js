(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const i=document.querySelectorAll(".brand-color"),a=document.querySelectorAll(".size_selected"),g=document.querySelectorAll(".close_modal_button");document.getElementById("product_wrapper");const m=document.getElementById("selected_image"),y=document.getElementById("add_to_cart"),f=document.getElementById("product_quentity"),b=document.getElementById("table_body"),E=document.getElementById("open_modal_button"),l=document.getElementById("my_modal"),x=["/img1.png","/img2.png","/img3.png","/img4.png"];i.forEach((c,r)=>{c.addEventListener("click",()=>{i.forEach(o=>o.classList.remove("border")),i.forEach(o=>o.removeAttribute("id")),c.classList.add("border"),c.setAttribute("id","selected_color"),m.src=x[r]})});a.forEach(c=>{c.addEventListener("click",()=>{a.forEach(o=>o.classList.remove("border-[#DBDFEA]","border-primary")),a.forEach(o=>o.removeAttribute("id")),c.classList.add("border-primary"),c.setAttribute("id","selected_sizeAndPrice");const r=c.getAttribute("data");document.getElementById("price").innerText=`$${r.split("-")[1]}`,console.log(r,"pri")})});const u=[];y.addEventListener("click",()=>{const c=document.getElementById("selected_color"),r=document.getElementById("selected_sizeAndPrice"),o=c.getAttribute("name"),d=r.getAttribute("data"),e=m.getAttribute("src"),[t,s]=d.split("-"),n={size:t,price:s,color:o,id:e.includes("img1")?1:e.includes("img2")?2:e.includes("img3")?3:4,image:e};u.push(n),f.innerText=u.length,h(u)});const h=c=>{const r=Object.groupBy(c,({id:e})=>e),o=Object.values(r).reduce((e,t)=>e+ +t.length,0),d=Object.values(r).reduce((e,t)=>e+t.reduce((s,n)=>s+ +n.price,0),0);b.innerHTML=`
  ${Object.entries(r).map(([e,t])=>{const s=t.reduce((n,p)=>n+ +p.price,0);return`<tr class="border-b border-gray-200 text-secondary">
        <td
          class="px-4 py-6 text-center flex flex-col sm:flex-row items-center gap-2"
        >
          <img
            class="w-[36px] h-[40px]"
            src=${t[0].image}
            alt=""
          /><span>Classy Modern Smart watch</span>
        </td>
        <td class="px-4 py-6 text-center capitalize">${t[0].color}</td>
        <td class="px-4 py-6 font-semibold text-center">${t.map(({size:n})=>n).join(",")}</td>
        <td class="px-4 py-6 text-center">${t.length}</td>
        <td class="px-4 py-6 text-center font-semibold">$${s}</td>
      </tr>`}).join("")}
  <tr class="font-semibold text-secondary">
    <td class="px-4 py-6" colspan="3">Total</td>
    <td class="px-4 py-6 text-center">${o}</td>
    <td class="px-4 py-6 text-center">$${d}</td>
  </tr>`,console.log(c,"cart")};E.addEventListener("click",()=>{l.classList.remove("hidden")});g.forEach(c=>{c.addEventListener("click",()=>{l.classList.add("hidden")})});window.addEventListener("click",c=>{c.target===l&&l.classList.add("hidden")});
