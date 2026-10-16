const productData = {
  gold: {
    name: "Gold", badge: "KOMODITAS · EMAS", lead: "Emas diperdagangkan di berbagai pasar dengan instrumen dan mekanisme yang berbeda. Dalam membaca harga emas, penting untuk membedakan harga emas fisik, spot, dan kontrak berjangka yang ditawarkan pada platform tertentu.",
    stats: [["Aset dasar","Emas"],["Perhatikan","USD & suku bunga"],["Karakter","Bisa volatil"]],
    factors: [["↗","Perubahan dolar AS"],["⌁","Suku bunga & imbal hasil"],["◈","Permintaan aset safe-haven"],["◷","Data inflasi & ekonomi"]],
    caution: "Jangan mengasumsikan semua produk berlabel Gold memiliki ukuran kontrak, biaya, jam perdagangan, atau penyelesaian yang sama. Cek spesifikasi kontrak EWF yang relevan.",
    modal: "Gold dapat dipengaruhi kombinasi sentimen risiko global, nilai dolar AS, ekspektasi suku bunga, inflasi, pembelian bank sentral, dan permintaan fisik. Hubungan antar faktor tidak selalu searah atau konsisten."
  },
  hkk: {
    name: "Hang Seng / HKK", badge: "INDEKS SAHAM · HONG KONG", lead: "Hang Seng Index merupakan indeks pasar saham Hong Kong. Pada EWF, HKK50_BBJ dan HKK5U_BBJ disebut sebagai kode kontrak gulir berkala indeks asing yang mengacu pada produk derivatif indeks saham Hong Kong.",
    stats: [["Pasar acuan","Hong Kong"],["Perhatikan","China & kebijakan"],["Karakter","Indeks saham"]],
    factors: [["◈","Kondisi ekonomi Tiongkok"],["⌁","Kebijakan pemerintah"],["↗","Sektor perusahaan besar"],["◷","Sentimen global & arus modal"]],
    caution: "HKK adalah sebutan produk/kode yang digunakan pada konteks tertentu, bukan berarti semua instrumen memiliki spesifikasi yang sama. Pastikan kode, mata uang, biaya, jam, dan tanggal rollover dari dokumen resmi.",
    modal: "Hang Seng dipengaruhi kinerja emiten penyusun indeks, kondisi ekonomi Hong Kong dan Tiongkok, kebijakan, sektor keuangan dan teknologi, nilai tukar, serta sentimen investor global. Indeks tidak menggambarkan seluruh perusahaan di Hong Kong."
  },
  nikkei: {
    name: "Nikkei 225 / JPK", badge: "INDEKS SAHAM · JEPANG", lead: "Nikkei 225 adalah indeks saham utama Jepang yang mencakup 225 perusahaan. Pada daftar produk EWF, JPK50_BBJ dan JPK5U_BBJ disebut sebagai kode kontrak bergulir berkala indeks asing yang mengacu pada derivatif Nikkei 225.",
    stats: [["Pasar acuan","Jepang"],["Perhatikan","JPY & BOJ"],["Karakter","Indeks saham"]],
    factors: [["¥","Pergerakan yen"],["⌁","Kebijakan Bank of Japan"],["↗","Ekspor & laba emiten"],["◷","Data ekonomi global"]],
    caution: "Indeks Nikkei dan produk JPK di platform adalah hal yang berkaitan tetapi tidak identik. Periksa spesifikasi produk, satuan kontrak, mata uang, biaya, jam perdagangan, dan aturan rollover.",
    modal: "Nikkei 225 dapat dipengaruhi nilai yen, kebijakan moneter Jepang, kinerja perusahaan besar, perdagangan internasional, data ekonomi, dan kondisi pasar global. Pergerakan yen dapat berdampak berbeda bagi perusahaan eksportir dan importir."
  }
};
function renderDetail(key) {
  const d = productData[key]; if (!d) return;
  document.querySelectorAll(".product-tab").forEach(b => b.classList.toggle("active", b.dataset.tab === key));
  const panel = document.getElementById("detailPanel");
  panel.innerHTML = `<div class="detail-topline"><span class="detail-badge">${d.badge}</span><span style="font-size:9px;color:#b7a392">MATERI ${key === "gold" ? "01" : key === "hkk" ? "02" : "03"}</span></div>
  <h3>${d.name}</h3><p class="detail-lead">${d.lead}</p>
  <div class="detail-stats">${d.stats.map(s=>`<div class="detail-stat"><small>${s[0]}</small><strong>${s[1]}</strong></div>`).join("")}</div>
  <h4>Faktor yang layak dipelajari</h4><div class="factor-list">${d.factors.map(f=>`<div class="factor"><span>${f[0]}</span>${f[1]}</div>`).join("")}</div>
  <div class="detail-caution"><strong>Catatan penting:</strong> ${d.caution}</div>`;
}
document.querySelectorAll(".product-tab").forEach(b => b.addEventListener("click", () => renderDetail(b.dataset.tab)));
renderDetail("gold");

const modal = document.getElementById("productModal");
function openProduct(key) {
  const d = productData[key]; if (!d) return;
  document.getElementById("modalContent").innerHTML = `<span class="detail-badge">${d.badge}</span><h3 id="modalTitle">${d.name}: gambaran lebih dalam</h3><p>${d.modal}</p><h4 style="font-size:12px;margin:18px 0 8px">Checklist sebelum mempelajari produk</h4><ul><li>Pastikan nama dan kode kontrak sesuai dokumen resmi.</li><li>Cek satuan/ukuran kontrak, mata uang, margin, biaya transaksi, dan rollover.</li><li>Verifikasi jam perdagangan, hari libur, dan tanggal kontrak.</li><li>Pahami potensi kerugian dan cara kerja margin sebelum mengambil keputusan.</li></ul><p><strong>Sumber resmi:</strong> <a style="color:#c8732b;font-weight:600" href="https://www.equityworld-futures.com/produk" target="_blank" rel="noopener">halaman produk EWF ↗</a></p>`;
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
}
document.querySelectorAll(".open-product").forEach(b=>b.addEventListener("click",()=>openProduct(b.dataset.open)));
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
document.getElementById("modalClose").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

const menuToggle=document.getElementById("menuToggle"), mobileMenu=document.getElementById("mobileMenu");
menuToggle.addEventListener("click",()=>mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mobileMenu.classList.remove("open")));

const marketConfig={gold:{name:"GOLD · DEMO",price:2356.80,step:4.2},hkk:{name:"HANG SENG / HKK · DEMO",price:18240.5,step:38},nikkei:{name:"NIKKEI / JPK · DEMO",price:38650.0,step:75}};
let currentMarket="gold", marketValue=marketConfig.gold.price, priorValue=marketValue;
function formatPrice(v,key){return v.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}
function buildCandles(){
 const wrap=document.getElementById("candles");wrap.innerHTML="";
 let val=marketValue*(1+(Math.random()-.5)*.012);
 const count=38;
 for(let i=0;i<count;i++){
   const open=val, close=open+(Math.random()-.47)*marketConfig[currentMarket].step*1.65;
   const high=Math.max(open,close)+Math.random()*marketConfig[currentMarket].step*.65;
   const low=Math.min(open,close)-Math.random()*marketConfig[currentMarket].step*.65;
   const max=marketValue+marketConfig[currentMarket].step*10, min=marketValue-marketConfig[currentMarket].step*10;
   const topPct=Math.max(0,Math.min(90,(max-high)/(max-min)*100));
   const bottomPct=Math.max(topPct+3,Math.min(100,(max-low)/(max-min)*100));
   const bodyTop=Math.max(0,Math.min(96,(max-Math.max(open,close))/(max-min)*100));
   const bodyBottom=Math.max(bodyTop+2,Math.min(100,(max-Math.min(open,close))/(max-min)*100));
   const c=document.createElement("div");c.className="candle "+(close>=open?"up":"down");
   c.innerHTML=`<i class="wick" style="--wick-top:${topPct}%;--wick-height:${Math.max(3,bottomPct-topPct)}%"></i><i class="body" style="--body-top:${bodyTop}%;--body-height:${Math.max(3,bodyBottom-bodyTop)}%"></i>`;
   wrap.appendChild(c);val=close;
 }
}
function updateMarket(){
 const cfg=marketConfig[currentMarket];priorValue=marketValue;
 marketValue+=((Math.random()-.48)*cfg.step);
 const delta=(marketValue-priorValue)/priorValue*100;
 document.getElementById("marketName").textContent=cfg.name;
 document.getElementById("marketPrice").textContent=formatPrice(marketValue,currentMarket);
 const deltaEl=document.getElementById("marketDelta");deltaEl.textContent=(delta>=0?"+":"")+delta.toFixed(2)+"%";deltaEl.className=delta>=0?"positive":"negative";
 document.getElementById("lastUpdate").textContent="Update "+new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"});
 buildCandles();
 const hp=document.getElementById("heroPrice"),hc=document.getElementById("heroChange");
 const demoGold=marketConfig.gold.price+(Math.random()-.5)*12;hp.textContent=formatPrice(demoGold,"gold");hc.textContent=(Math.random()>.35?"+":"-")+(Math.random()*.65).toFixed(2)+"%";hc.className=Math.random()>.35?"positive":"negative";
}
document.getElementById("marketSelect").addEventListener("change",e=>{currentMarket=e.target.value;marketValue=marketConfig[currentMarket].price;updateMarket()});
updateMarket();setInterval(updateMarket,2500);

const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));
document.getElementById("year").textContent=new Date().getFullYear();