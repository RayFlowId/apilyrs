(()=>{
const API_BASE = "https://api.jaky.dev";
const endpointData = [
 {category:"Lyrics",path:"/v1/lyrics/search",desc:"Cari lirik berdasarkan kata kunci atau judul lagu."},
 {category:"Lyrics",path:"/v1/lyrics/get",desc:"Ambil lirik untuk lagu yang dipilih. Lihat dokumentasi untuk parameter ID atau judul."},
 {category:"Lyrics",path:"/v1/lyrics/charts",desc:"Jelajahi daftar lagu populer atau chart."},
 {category:"Lyrics",path:"/v1/lyrics/artist",desc:"Cari atau lihat informasi artis terkait lirik."},
 {category:"Lyrics",path:"/v1/lyrics/album",desc:"Cari atau lihat informasi album."},
 {category:"Islamic",path:"/v1/islami/sholat",desc:"Endpoint jadwal salat terbaru; menggantikan route tools/jadwal-sholat."},
 {category:"Islamic",path:"/v1/islami/quran",desc:"Akses fitur Al-Qur'an. Parameter mengikuti dokumentasi resmi."},
 {category:"Islamic",path:"/v1/islami/doa",desc:"Akses koleksi doa."},
 {category:"Islamic",path:"/v1/islami/asmaul-husna",desc:"Akses Asmaul Husna."},
 {category:"Islamic",path:"/v1/islami/kisah-nabi",desc:"Akses kisah para nabi."},
 {category:"Islamic",path:"/v1/islami/kalender",desc:"Akses kalender Islam."},
 {category:"Anime",path:"/v1/anime/season",desc:"Lihat daftar anime berdasarkan musim."},
 {category:"Anime",path:"/v1/anime/search",desc:"Cari anime."},
 {category:"Anime",path:"/v1/anime/schedule",desc:"Lihat jadwal tayang anime."},
 {category:"Anime",path:"/v1/anime/manga",desc:"Cari atau akses informasi manga."},
 {category:"Anime",path:"/v1/anime/random",desc:"Ambil anime acak."},
 {category:"Downloader",path:"/v1/download/soundcloud",desc:"Endpoint downloader SoundCloud. Gunakan hanya untuk konten yang boleh diunduh."},
 {category:"Downloader",path:"/v1/download/twitter",desc:"Endpoint downloader Twitter/X. Gunakan hanya untuk konten yang boleh diunduh."},
 {category:"Search",path:"/v1/search/soundcloud",desc:"Cari track atau konten di SoundCloud."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker",desc:"Endpoint DeepFake Maker yang disebut telah diperbaiki pada update API."},
 {category:"Legacy",path:"/v1/tools/jadwal-sholat",desc:"Route lama. Gunakan /v1/islami/sholat sebagai pengganti.",legacy:true},
 {category:"AI",path:"/v1/ai/removebg",desc:"Hapus latar belakang gambar."},
 {category:"AI",path:"/v1/ai/upscale",desc:"Perbesar resolusi gambar hingga 4x."},
 {category:"AI",path:"/v1/ai/text2image",desc:"Buat gambar dari prompt teks."},
 {category:"Internet",path:"/v1/internet/cuaca",desc:"Informasi cuaca berdasarkan kota."},
 {category:"Internet",path:"/v1/internet/crypto",desc:"Harga pasar kripto."},
 {category:"Internet",path:"/v1/internet/dns",desc:"Resolver DNS-over-HTTPS."},
 {category:"Internet",path:"/v1/internet/gempa",desc:"Info gempa terbaru BMKG."},
 {category:"Internet",path:"/v1/internet/jadwalsholat",desc:"Jadwal salat pada kategori Internet (cek docs untuk route terbaru)."},
 {category:"Internet",path:"/v1/internet/news",desc:"Berita terbaru."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/action-figure",desc:"Buat visual action figure."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/age-filter",desc:"Efek usia pada foto."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/avatar-generator",desc:"Generator avatar."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/baby-generator",desc:"Generator gambar berbasis dua foto."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/christmas-filter",desc:"Efek Natal."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/clothes-changer",desc:"Ubah pakaian pada foto."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/clothes-remover",desc:"Pemrosesan pakaian pada foto."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/fat-filter",desc:"Efek bentuk tubuh."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/generative-fill",desc:"Generative fill gambar."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/gif-generator",desc:"Generator GIF AI."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/logo-maker",desc:"Generator logo."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/map-generator",desc:"Generator peta ilustratif."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/shoulder-tattoo",desc:"Generator konsep tato."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/space-prompt",desc:"Ekstrak prompt dari gambar."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/thumbnail",desc:"Generator thumbnail."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/anime-pfp-maker",desc:"Generator anime profile picture."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/anime-photo",desc:"Ubah foto menjadi ilustrasi anime."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/background-changer",desc:"Ganti latar belakang."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/background-remover",desc:"Hapus latar belakang."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/black-friday-poster",desc:"Poster promosi."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/buzz-cut-filter",desc:"Efek gaya rambut buzz cut."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/ghibli-filter",desc:"Efek ilustrasi anime terinspirasi fantasi."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/image2image",desc:"Transformasi gambar ke gambar."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/image2prompt",desc:"Ekstrak deskripsi visual."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/jfif-to-jpg",desc:"Konversi JFIF ke JPG."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/magic-eraser",desc:"Hapus objek pada foto."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/oc-maker",desc:"Generator karakter original."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/perchance-image",desc:"Generator gambar."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/photo-editor",desc:"Edit foto dengan prompt."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/photo-restoration",desc:"Restorasi foto lama."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/remove-filter",desc:"Kurangi efek filter."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/tasks",desc:"Cek status task asynchronous."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/unblur-image",desc:"Pertajam gambar buram."},
 {category:"DeepFake Maker",path:"/v1/deepfakemaker/watermark-remover",desc:"Pemrosesan watermark; gunakan hanya pada konten yang kamu berhak edit."},
 {category:"Ephoto 360",path:"/v1/ephoto360/3d-effect",desc:"Efek grafis 3D."},
 {category:"Ephoto 360",path:"/v1/ephoto360/animations",desc:"Efek animasi."},
 {category:"Ephoto 360",path:"/v1/ephoto360/artistic-effect",desc:"Efek artistik."},
 {category:"Ephoto 360",path:"/v1/ephoto360/coins-effects",desc:"Efek koin dan medali."},
 {category:"Ephoto 360",path:"/v1/ephoto360/cover-facebook",desc:"Buat cover media sosial."},
 {category:"Ephoto 360",path:"/v1/ephoto360/cup-effects",desc:"Efek desain mug."},
 {category:"Ephoto 360",path:"/v1/ephoto360/drawing-effects",desc:"Efek gambar sketsa."},
 {category:"Ephoto 360",path:"/v1/ephoto360",desc:"Hub Ephoto 360."},
 {category:"Ephoto 360",path:"/v1/ephoto360/festival",desc:"Efek festival."},
 {category:"Ephoto 360",path:"/v1/ephoto360/fire-effects",desc:"Efek api."},
 {category:"Ephoto 360",path:"/v1/ephoto360/game-effect",desc:"Efek gaming."},
 {category:"Ephoto 360",path:"/v1/ephoto360/glass-effect",desc:"Efek kaca."},
 {category:"Ephoto 360",path:"/v1/ephoto360/halloween",desc:"Efek Halloween."},
 {category:"Ephoto 360",path:"/v1/ephoto360/happy-birthday",desc:"Efek ulang tahun."},
 {category:"Ephoto 360",path:"/v1/ephoto360/love",desc:"Efek romantis."},
 {category:"Ephoto 360",path:"/v1/ephoto360/merry-christmas",desc:"Efek Natal."},
 {category:"Ephoto 360",path:"/v1/ephoto360/new-year",desc:"Efek tahun baru."},
 {category:"Ephoto 360",path:"/v1/ephoto360/shirt-effect",desc:"Mockup kaos."},
 {category:"Ephoto 360",path:"/v1/ephoto360/sport-effects",desc:"Efek olahraga."},
 {category:"Ephoto 360",path:"/v1/ephoto360/tattoo-effects",desc:"Efek tato artistik."},
 {category:"Ephoto 360",path:"/v1/ephoto360/technology",desc:"Efek teknologi."},
 {category:"Ephoto 360",path:"/v1/ephoto360/text-effects",desc:"Efek teks dan tipografi."},
 {category:"Ephoto 360",path:"/v1/ephoto360/video-effect",desc:"Efek video."},
 {category:"Vivago AI",path:"/v1/vivago/upscale",desc:"Upscale gambar."},
 {category:"Vivago AI",path:"/v1/vivago/image2image",desc:"Restyle gambar."},
 {category:"Vivago AI",path:"/v1/vivago/image2prompt",desc:"Ekstrak prompt gambar."},
 {category:"Vivago AI",path:"/v1/vivago/image2video",desc:"Animasi gambar menjadi video."},
 {category:"Vivago AI",path:"/v1/vivago/tasks",desc:"Cek status task generasi."},
 {category:"Vivago AI",path:"/v1/vivago/text2image",desc:"Buat gambar dari teks."},
 {category:"Vivago AI",path:"/v1/vivago/text2video",desc:"Buat video dari teks."},
 {category:"Maker",path:"/v1/maker/capcut",desc:"Buat atau proses template CapCut."},
 {category:"Maker",path:"/v1/maker/paperanimation",desc:"Efek animasi kertas."},
 {category:"Search",path:"/v1/search/kbbi",desc:"Cari kata dan definisi KBBI."}
];
const $ = id => document.getElementById(id);
let selected = endpointData[0], activeCategory = "All", lastResponse = "";
const KEY_STORE = "lyrs_jaky_api_key_v1";
// Default key requested by the site owner. This is exposed in client-side source.
const DEFAULT_API_KEY = "jK591D6C4B";
const savedKey = localStorage.getItem(KEY_STORE) || DEFAULT_API_KEY;
$("endpointCount").textContent = `${endpointData.length} ROUTES`;
function categories(){return ["All",...new Set(endpointData.map(x=>x.category))]}
function renderFilters(){
 $("categoryFilters").replaceChildren(...categories().map(c=>{
  const b=document.createElement("button");b.type="button";b.className="filter-btn"+(activeCategory===c?" active":"");b.textContent=c;
  b.addEventListener("click",()=>{activeCategory=c;renderFilters();renderEndpoints()});return b;
 }));
}
function renderEndpoints(){
 const term=$("endpointSearch").value.trim().toLowerCase();
 const list=endpointData.filter(e=>(activeCategory==="All"||e.category===activeCategory)&&(`${e.path} ${e.category} ${e.desc}`).toLowerCase().includes(term));
 $("endpointCount").textContent = `${endpointData.length} ROUTES`;
 $("endpointList").replaceChildren(...list.map(e=>{
  const b=document.createElement("button");b.type="button";b.className="endpoint-item"+(selected.path===e.path?" active":"");
  const cat=document.createElement("span");cat.className="endpoint-category";cat.textContent=e.category.toUpperCase()+(e.legacy?" · LEGACY":"");
  const code=document.createElement("code");code.textContent=e.path;
  const sm=document.createElement("small");sm.textContent=e.desc;
  b.append(cat,code,sm);b.addEventListener("click",()=>chooseEndpoint(e));return b;
 }));
 if(!list.length){const p=document.createElement("p");p.className="field-help";p.textContent="Tidak ada endpoint yang cocok. Hapus kata pencarian atau pilih kategori All."; $("endpointList").append(p)}
}
function chooseEndpoint(e){
 selected=e;$("selectedTitle").textContent=e.path.split("/").filter(Boolean).slice(-1)[0].replace(/-/g," ");
 $("selectedDescription").textContent=e.desc;$("queryParams").value="";$("bodyParams").value="";if($("customPath"))$("customPath").value="";
 $("method").value="GET";updateUrl();renderEndpoints();
}
function parseObject(value,label){
 if(!value.trim())return {};
 let parsed;try{parsed=JSON.parse(value)}catch{throw new Error(`${label} harus berupa JSON yang valid.`)}
 if(!parsed||Array.isArray(parsed)||typeof parsed!=="object")throw new Error(`${label} harus berupa JSON object, contoh {"q":"kata kunci"}.`);
 return parsed;
}
function buildUrl(){
 const customPath = $("customPath")?.value.trim();
 const path = customPath && customPath.startsWith("/v1/") ? customPath : selected.path;
 const params=parseObject($("queryParams").value,"Query parameters");
 const url=new URL(path,API_BASE);
 Object.entries(params).forEach(([k,v])=>{if(v!==null&&v!==undefined)url.searchParams.set(k,typeof v==="object"?JSON.stringify(v):String(v))});
 return url.toString();
}
function updateUrl(){
 try{$("requestUrl").textContent=buildUrl()}catch{$("requestUrl").textContent=API_BASE+selected.path+"?…"}
}
function showOutput(value){lastResponse=typeof value==="string"?value:JSON.stringify(value,null,2);$("responseOutput").textContent=lastResponse}
$("endpointSearch").addEventListener("input",renderEndpoints);
$("queryParams").addEventListener("input",updateUrl);
$("method").addEventListener("change",()=>{$("requestUrl").textContent=buildUrl();});
$("copyUrl").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(buildUrl());$("requestStatus").textContent="URL copied"}catch{$("requestStatus").textContent="Copy tidak tersedia"}});
$("copyResponse").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(lastResponse);$("requestStatus").textContent="Response copied"}catch{$("requestStatus").textContent="Copy tidak tersedia"}});
$("apiKey").value=savedKey;
$("saveApiKey").addEventListener("click",()=>{const v=$("apiKey").value.trim();if(v)localStorage.setItem(KEY_STORE,v);else localStorage.removeItem(KEY_STORE);$("requestStatus").textContent=v?"API key disimpan di browser ini":"API key dihapus";});
$("clearKey").addEventListener("click",()=>{$("apiKey").value="";localStorage.removeItem(KEY_STORE);$("requestStatus").textContent="API key dihapus dari browser ini";});
$("customPath").addEventListener("input",updateUrl);
$("clearRequest").addEventListener("click",()=>{$("queryParams").value="";$("bodyParams").value="";if($("customPath"))$("customPath").value="";$("headerName").value="";$("headerValue").value="";$("method").value="GET";$("requestStatus").textContent="Reset";$("responseCode").textContent="NO RESPONSE";$("responseTime").textContent="—";showOutput({message:"Pilih endpoint lalu tekan Send request."});updateUrl()});
$("sendRequest").addEventListener("click",async()=>{
 let url, body;
 try{url=buildUrl();body=parseObject($("bodyParams").value,"Request body")}catch(e){$("requestStatus").textContent=e.message;return}
 const method=$("method").value, headers={Accept:"application/json"};
 if(method==="POST")headers["Content-Type"]=$("contentType").value;
 const key=$("apiKey").value.trim();
 const authMode=$("authMode").value;
 const hn=$("headerName").value.trim(),hv=$("headerValue").value;
 if(key){ if(authMode==="x-jaky-key") headers["x-jaky-key"]=key; else if(authMode==="bearer") headers["Authorization"]=`Bearer ${key}`; else url.searchParams.set("apikey",key); }
 if((hn&&!hv)||(!hn&&hv)){$("requestStatus").textContent="Isi nama dan nilai header, atau kosongkan keduanya.";return}
 if(hn&&hv)headers[hn]=hv;
 const options={method,headers,mode:"cors"};
 if(method==="POST")options.body=JSON.stringify(body);
 $("sendRequest").disabled=true;$("sendRequest").style.opacity=".6";$("requestStatus").textContent="Requesting…";$("responseCode").textContent="WAITING";$("responseTime").textContent="—";showOutput({message:"Request sedang diproses…"});
 const start=performance.now();
 try{
  const response=await fetch(url,options);const raw=await response.text();let data;
  try{data=JSON.parse(raw)}catch{data=raw}
  $("responseCode").textContent=`HTTP ${response.status} ${response.ok?"OK":"ERROR"}`;$("responseTime").textContent=`${Math.round(performance.now()-start)} MS`;$("requestStatus").textContent=response.ok?"Selesai":"Request selesai dengan error";
  showOutput(data);
 }catch(err){
  $("responseCode").textContent="REQUEST FAILED";$("responseTime").textContent=`${Math.round(performance.now()-start)} MS`;
  showOutput({error:err.message,possible_causes:["Server API menolak CORS dari browser.","Endpoint mungkin memerlukan autentikasi.","Periksa URL, parameter, dan dokumentasi resmi."],note:"Detail jaringan browser bisa dilihat melalui DevTools. Coba endpoint dari API Playground untuk membandingkan."});
  $("requestStatus").textContent="Gagal — cek CORS / network";
 }finally{$("sendRequest").disabled=false;$("sendRequest").style.opacity="1"}
});
renderFilters();renderEndpoints();chooseEndpoint(endpointData[0]);
// Keep the library easy to reach from the top navigation, including mobile.
document.querySelectorAll('a[href="#library"]').forEach(link=>link.addEventListener("click",()=>{const panel=$("library");if(panel){panel.scrollIntoView({behavior:"smooth",block:"start"});}}));

})();
