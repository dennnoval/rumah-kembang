(this["webpackJsonprumah-kembang"]=this["webpackJsonprumah-kembang"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/icon-search.174272f3.svg"},32:function(e,t,a){e.exports=a.p+"static/media/icon-cart.e3ce101b.svg"},48:function(e,t,a){},51:function(e,t,a){e.exports=a.p+"static/media/instagram.8290266a.png"},52:function(e,t,a){e.exports=a.p+"static/media/icon-arrow-left-short.58514925.svg"},53:function(e,t,a){e.exports=a.p+"static/media/icon-cart-plus.fbaaf51d.svg"},54:function(e,t,a){e.exports=a(92)},60:function(e,t,a){},61:function(e,t,a){},79:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=a(6),m=a(27);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(60),a(61);var s=a(5),i=a(7),u=a(3),d=a.n(u),p=a(49),g=a.n(p),E=(a(79),{index:function(){return d.a.create({baseURL:"https://rumah-kembang-api.herokuapp.com/api/v1/Category"})},getAllProducts:function(e){return d()({method:"GET",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Product/getAllProducts",cancelToken:e})},getProductByID:function(e,t){return d()({method:"POST",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Product/getProductByID",data:{kode:t},cancelToken:e})},getProductByCategory:function(e,t){return d()({method:"POST",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Product/getProductByCategory",data:{categoryName:t},cancelToken:e})},getProductByTag:function(e,t){return d()({method:"POST",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Product/getProductByTag",data:{tagName:t},cancelToken:e})},getProductByRecommend:function(e){return d()({method:"GET",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Product/getProductByRecommend",cancelToken:e})}});var b=function(e){var t=r.a.useState(""),a=Object(s.a)(t,2),n=a[0],l=a[1],c=r.a.useState({}),m=Object(s.a)(c,2),i=m[0],u=m[1];return r.a.useEffect((function(){var e=!0,t=d.a.CancelToken.source();return""!==n&&E.getProductByTag(t.token,n).then((function(t){!0===e&&u(t.data)})).catch((function(e){return console.log(e)})),function(){e=!1,t.cancel()}}),[n]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.active?"fixed-top p-2 bg-light border-bottom rounded-bottom":""},r.a.createElement("input",{id:"searchInput",onInput:function(e){return l(e.currentTarget.value)},type:"text",className:"form-control form-control-sm",placeholder:"Cari tag produk..."})),!0===e.active&&""!==n?r.a.createElement("div",{className:"mt-5"},r.a.createElement("p",null,"Hasil pencarian : ",r.a.createElement("b",null,n)),r.a.createElement("div",{className:"list-unstyled list-group"},void 0===i.result?r.a.createElement(r.a.Fragment,null):i.result.map((function(e,t){return function(e,t,a){var n=t.tags.split(", ");for(var l in n)if(-1!==n[l].indexOf(e))return r.a.createElement(o.b,{key:t.kode,to:"/produk/"+t.kode,className:"list-group-item list-item-action flex-fill p-1"},r.a.createElement("img",{id:"searchImg",src:t.foto,className:"img-fluid",alt:"Photo: "+t.kode}),r.a.createElement("span",{className:"ml-3"},n[l]))}(n,e)})))):r.a.createElement(r.a.Fragment,null))};var h=function(e){var t=" "+e.ids,a=" "+e.classes,n=e.active;return r.a.createElement("main",{id:"side-wrapper"+t,className:"bg-light"+(n?" active position-absolute":"")+a},r.a.createElement("div",{className:"container py-2"}," search-button top-side"===t?r.a.createElement(b,{active:n}):r.a.createElement("p",null,"---- Keranjang kosong ----")))},f=a(37),v=a(10),k=(a(85),a(51)),N=a.n(k),y={index:function(){return d.a.create({baseURL:"https://rumah-kembang-api.herokuapp.com/api/v1/Category"})},getAllCategories:function(e){return d()({method:"GET",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Category/getAllCategories",cancelToken:e})}},w={index:function(){return d.a.create({baseURL:"https://rumah-kembang-api.herokuapp.com/api/v1/Carousel"})},getAllCarousels:function(e){return d()({method:"GET",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Carousel/getAllCarousels",cancelToken:e})}};var x=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],c=a[1],m=Object(n.useState)(null),i=Object(s.a)(m,2),u=i[0],p=i[1],g=Object(n.useState)([]),b=Object(s.a)(g,2),h=b[0],k=b[1],x=Object(n.useState)([]),O=Object(s.a)(x,2),j=O[0],C=O[1],S=Object(n.useState)([]),T=Object(s.a)(S,2),P=T[0],A=T[1];return Object(n.useEffect)((function(){var e=d.a.CancelToken.source();return Promise.all([y.getAllCategories(e.token),E.getProductByRecommend(e.token),w.getAllCarousels(e.token)]).then((function(e){c(!0),C(e[0].data.result),A(e[1].data.result),k(e[2].data.result)})).catch((function(e){p(e)})),function(){return e.cancel()}}),[]),r.a.createElement("main",{id:"welcome"},function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t[0]?console.log(t[0]):t[1]?r.a.createElement(f.a,{id:"home-carousel"},t[2].map((function(e,t){return r.a.createElement(f.a.Item,{as:o.b,to:"/produk/"+e.kode,key:e.id,className:"text-center"},r.a.createElement("img",{src:e.banner,className:"text-white",alt:"Slide "+(t+1)}))}))):r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{role:"loading",animation:"grow",variant:"secondary"}))}(u,l,h),r.a.createElement("div",{className:"container mt-2 border bg-light py-3"},r.a.createElement("h6",null,r.a.createElement("b",null,"KATEGORI")),function(){for(var e=["danger","warning","success","primary","secondary"],t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return a[0]?console.log(a[0]):a[1]?r.a.createElement("div",{className:"list-unstyled list-group list-group-horizontal overflow-auto"},a[2].map((function(t,a){return r.a.createElement(o.b,{key:a+Math.random(9),to:"/kategori/"+t.slug,className:"text-capitalize font-italic border rounded-circle text-dark mr-3 list-group-item list-group-item-action flex-fill text-center list-group-item-"+e[a]},t.nama)}))):r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{role:"loading",animation:"grow",variant:"secondary"}))}(u,l,j)),r.a.createElement("div",{className:"container mt-2 py-3 border bg-light"},r.a.createElement("h6",null,r.a.createElement("b",null,"REKOMENDASI")),function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t[0]?console.log(t[0]):t[1]?r.a.createElement("div",{className:"list-unstyled list-group list-group-horizontal overflow-auto"},t[2].map((function(e,t){return r.a.createElement(o.b,{key:t+Math.random(9),to:"/produk/"+e.kode,className:"list-group-item text-decoration-none p-1 border-0 rounded-0 text-dark text-center col-6"},r.a.createElement("div",{className:"card list-group-item-action",value:e.kode},r.a.createElement("img",{src:e.foto,className:"card-img-top p-1 border-bottom",alt:"Photo: "+e.kode}),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",null,r.a.createElement("b",null,e.kode)))))}))):r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{role:"loading",animation:"grow",variant:"secondary"}))}(u,l,P)),r.a.createElement("div",{className:"container mt-3 py-1 bg-light"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},"Follow us on :"),r.a.createElement("div",{className:"col px-0"},r.a.createElement("a",{href:"https://instagram.com/rumahkembang29",target:"new-tab"},r.a.createElement("img",{src:N.a,className:"img-fluid",alt:"...",style:{width:"20px"}}))))))},O=(a(48),a(31)),j=a.n(O),C=a(32),S=a.n(C);var T=function(e){return r.a.createElement("header",{id:"main-header"},r.a.createElement("nav",{className:"navbar fixed-top bg-light border-bottom p-0"},r.a.createElement("div",{className:"col-8 pl-2 pr-0 justify-content-start"},r.a.createElement(o.b,{to:"/#",className:"navbar-brand mr-0"},r.a.createElement("span",{className:"text-dark font-italic ml-1"},r.a.createElement("b",null,"Rumah Kembang")))),r.a.createElement("div",{className:"row col mr-2 justify-content-end"},r.a.createElement("div",{className:"col-4 m-auto"},r.a.createElement("span",{className:"navbar-toggler",type:"button",id:"search-button top-side",onClick:e.toggleWrapper,onInput:null},r.a.createElement("img",{src:j.a,alt:"icon-search"}))),r.a.createElement("div",{className:"col-4 m-auto"},r.a.createElement("span",{type:"button",id:"cart-button bottom-side",className:"navbar-toggler",onClick:e.toggleWrapper},r.a.createElement("img",{src:S.a,alt:"icon-cart"}))))))},P=a(52),A=a.n(P);var I=function(e){var t=Object(i.f)(),a=t.pathname.split("/")[1],n="";return void 0!==t.pathname.split("/")[2]&&(n=t.pathname.split("/")[2]),r.a.createElement("header",{id:"header2",className:"superuser"===a?"d-none":""},r.a.createElement("nav",{className:"navbar fixed-top bg-light border-bottom p-0"},r.a.createElement("div",{className:"col-2 justify-content-start"},r.a.createElement("span",{type:"button",className:"navbar-toggler",onClick:function(e){return window.history.back()}},r.a.createElement("img",{src:A.a,alt:"icon-arrow-left-short"}))),r.a.createElement("div",{className:"col pl-1 pr-0 justify-content-start"},"kategori"===a?r.a.createElement("span",{className:"navbar-brand text-capitalize"},r.a.createElement("b",null,n.replace("-"," "))):r.a.createElement("span",{className:"navbar-brand"},r.a.createElement("b",null,"#"+n.replace("-"," ")))),r.a.createElement("div",{className:"row col mr-2 justify-content-end"},r.a.createElement("div",{className:"col-4 mr-1"},r.a.createElement("span",{className:"navbar-toggler",type:"button",id:"search-button top-side",onClick:e.toggleWrapper},r.a.createElement("img",{src:j.a,alt:"icon-search"}))),r.a.createElement("div",{className:"col-4 mr-1"},r.a.createElement("span",{type:"button",id:"cart-button bottom-side",className:"navbar-toggler",onClick:e.toggleWrapper},r.a.createElement("img",{src:S.a,alt:"icon-cart"}))))))};a(86);var B=function(e){var t=r.a.useState(!1),a=Object(s.a)(t,2),n=a[0],l=a[1],c=r.a.useState(null),m=Object(s.a)(c,2),i=m[0],u=m[1],p=r.a.useState({}),g=Object(s.a)(p,2),b=g[0],h=g[1];return r.a.useEffect((function(){var t=!0,a=d.a.CancelToken.source();return E.getProductByCategory(a.token,e.match.params.categoryName).then((function(e){t&&(l(!0),h(e.data))})).catch((function(e){return u(e)})),function(){t=!1,a.cancel()}}),[e.match.params.categoryName]),r.a.createElement("main",{id:"categories"},r.a.createElement("div",{className:"container mb-3 border bg-light"},i?console.log(i):n?r.a.createElement("div",{className:"list-group list-group-horizontal row"},void 0===b.result?r.a.createElement("span",null,"Error! Couldnt fetch data"):0===b.result.length?r.a.createElement("p",{className:"text-center"},"--- Maaf, tidak ada produk ---"):b.result.map((function(e,t){return r.a.createElement(o.b,{key:t+Math.random(9),to:"/produk/"+e.kode,className:"list-group-item text-decoration-none p-1 border-0 rounded-0 text-dark text-center col-6"},r.a.createElement("div",{className:"card list-group-item-action",value:"product-id"},r.a.createElement("img",{src:e.foto,className:"card-img-top p-1 border-bottom",alt:"..."}),r.a.createElement("small",{className:"card-text"},r.a.createElement("b",null,e.kode))))}))):r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{role:"loading",animation:"grow",variant:"secondary"}))))};a(87);var D=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],c=a[1],m=Object(n.useState)(null),i=Object(s.a)(m,2),u=i[0],p=i[1],g=Object(n.useState)({}),b=Object(s.a)(g,2),h=b[0],f=b[1];return Object(n.useEffect)((function(){var t=d.a.CancelToken.source();return E.getProductByTag(t.token,e.match.params.tagName).then((function(e){c(!0),f(e.data)})).catch((function(e){return p(e)})),function(){return t.cancel()}}),[e.match.params.tagName]),r.a.createElement("main",{id:"tags"},r.a.createElement("div",{className:"container mb-3 border bg-light"},u?console.log(u):l?r.a.createElement("div",{className:"list-group list-group-horizontal row"},void 0===h.result?r.a.createElement("span",null,"Error! Couldnt fetch data"):0===h.result.length?r.a.createElement("p",{className:"text-center"},"--- Maaf, tidak ada produk ---"):h.result.map((function(t,a){return function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];var l=a[0].tags.split(", ");for(var c in l)if(l[c]===e.match.params.tagName)return r.a.createElement(o.b,{key:a[1]+Math.random(9),to:"/produk/"+a[0].kode,className:"list-group-item text-decoration-none p-1 border-0 rounded-0 text-dark text-center col-6"},r.a.createElement("div",{className:"card list-group-item-action",value:"product-id"},r.a.createElement("img",{src:a[0].foto,className:"card-img-top p-1 border-bottom",alt:"..."}),r.a.createElement("small",{className:"card-text"},a[0].kode)))}(t,a)}))):r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{role:"loading",animation:"grow",variant:"secondary"}))))},M=(a(88),a(53)),R=a.n(M);var W=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],c=a[1],m=Object(n.useState)(null),i=Object(s.a)(m,2),u=i[0],p=i[1],g=Object(n.useState)({}),b=Object(s.a)(g,2),h=b[0],f=b[1];return Object(n.useEffect)((function(){var t=!0,a=d.a.CancelToken.source();return E.getProductByID(a.token,e.match.params.kode).then((function(e){t&&(c(!0),f(e.data))})).catch((function(e){return p(e)})),function(){t=!1,a.cancel()}}),[e.match.params.kode]),r.a.createElement("main",{id:"detail"},r.a.createElement("div",{className:"container p-0"},r.a.createElement("div",{id:"product-img",className:"text-center"},function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];if(!t[0])return t[1]?void 0===t[2].result?r.a.createElement("span",null,"Error! Couldnt fetch data"):r.a.createElement("img",{src:t[2].result[0].foto,alt:"...",className:"w-75"}):r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{role:"loading",animation:"grow",variant:"secondary"}));console.log(t[0])}(u,l,h))),r.a.createElement("div",{className:"container mt-2 pt-2 pb-5 px-2 border bg-light"},r.a.createElement("div",{className:"mt-2"},r.a.createElement("div",{className:"mt-2 mb-3"},function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];if(!t[0])return t[1]?void 0===t[2].result?r.a.createElement("span",null,"Error! Couldnt fetch data"):r.a.createElement("p",{className:"h5"},r.a.createElement("span",{className:"ml-2 text-sm font-weight-bold"},r.a.createElement("span",null,"Rp "+new Intl.NumberFormat("id-ID").format(t[2].result[0].harga)))):r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{role:"loading",animation:"grow",variant:"secondary"}));console.log(t[0])}(u,l,h)),r.a.createElement("table",{className:"table table-sm table-bordered"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Kode Produk"))),r.a.createElement("td",null,function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];if(!t[0])return t[1]?void 0===t[2].result?r.a.createElement("span",null,"Error! Couldnt fetch data"):t[2].result[0].kode:r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{role:"loading",animation:"grow",variant:"secondary"}));console.log(t[0])}(u,l,h))),function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];if(!t[0])return t[1]?void 0===t[2].result?r.a.createElement("tr",null,r.a.createElement("td",null,'"Error! Couldnt fetch data"')):"bunga-papan"===t[2].result[0].kategori?r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Ukuran (PxL)"))),r.a.createElement("td",null,"125cm x 100cm")):r.a.createElement("tr",null):r.a.createElement("tr",{className:"text-center"},r.a.createElement("td",null,r.a.createElement(v.a,{role:"loading",animation:"grow",variant:"secondary"})));console.log(t[0])}(u,l,h),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Kategori"))),r.a.createElement("td",null,function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];if(!t[0])return t[1]?void 0===t[2].result?r.a.createElement("span",null,"Error! Couldnt fetch data"):r.a.createElement(o.b,{key:t[2].result[0].kategori+Math.random(1),className:"text-link text-capitalize",to:"/kategori/"+t[2].result[0].kategori},t[2].result[0].kategori.replace("-"," ")):r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{role:"loading",animation:"grow",variant:"secondary"}));console.log(t[0])}(u,l,h))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Tags"))),r.a.createElement("td",null,function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];if(!t[0])return t[1]?void 0===t[2].result?r.a.createElement("span",null,"Error! Couldnt fetch data"):t[2].result[0].tags.split(",").map((function(e,t){return r.a.createElement(o.b,{key:e+Math.random(1),className:"text-link",to:"/tag/"+e.trim()},"#"+e.trim()+" ")})):r.a.createElement("div",{className:"text-center"},r.a.createElement(v.a,{role:"loading",animation:"grow",variant:"secondary"}));console.log(t[0])}(u,l,h))))))),r.a.createElement("div",{className:"container mt-2 border bg-light fixed-bottom"},r.a.createElement("div",{className:"row p-2"},r.a.createElement(o.b,{to:"/checkout",id:"order-now",type:"button",className:"btn btn-outline-success col mr-1"},"Pesan"),r.a.createElement("span",{id:"add-to-cart",type:"button",className:"btn btn-warning col-2 btn-block"},r.a.createElement("img",{src:R.a,alt:"icon-cart-plus"})))))},F=a(21),K=(a(89),{index:function(){return d.a.create({baseURL:"https://rumah-kembang-api.herokuapp.com/api/v1/Order"})},orderNow:function(e){return d()({method:"POST",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Order/createNewOrder",data:e})}});var z=function(e){var t=r.a.useState(null),a=Object(s.a)(t,2),n=a[0],l=a[1],c=r.a.useState(!1),m=Object(s.a)(c,2),i=m[0],u=m[1];return r.a.createElement("main",{id:"checkout"},r.a.createElement("div",{className:"container my-2 py-2 bg-light"},r.a.createElement("h6",null,r.a.createElement("b",null,"INFORMASI PEMESANAN")),r.a.createElement("form",{method:"POST",id:"checkout_form",className:"mt-3",onSubmit:function(e){e.preventDefault(),u(!0);var t=e.currentTarget,a=t.elements[0].value,n=t.elements[1].value,r=t.elements[2].value,c=t.elements[3].value,o=(t.elements[4],{nama_lengkap:a,no_hp:n,alamat_kirim:r,keterangan:c,referrer:document.referrer}),m=(new Date,{order_data:JSON.stringify(o).toString()});return K.orderNow(m).then((function(e){return l(e.data.result)}),(function(e){return l(e)})).catch((function(e){return console.log(e)}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-sm",placeholder:"Nama lengkap",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"phone",className:"form-control form-control-sm",placeholder:"No.HP",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control",rows:"2",placeholder:"Alamat tujuan pengiriman...",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control",rows:"4",placeholder:"Beri keterangan tentang pemesanan...",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-secondary btn-block",disabled:!!i},i?null===n?r.a.createElement(v.a,{"aria-hidden":"true",className:"submit-spinner",animation:"border",role:"status",variant:"warning"}):"Terkirim":"Kirim"))),null!==n?function(e,t){return r.a.createElement(F.a,{show:e,onHide:function(){return null},"aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(F.a.Body,null,"order-success"===t.message?r.a.createElement("div",{className:"text-center"},r.a.createElement("h5",null,"Terima kasih, pesanan anda telah kami terima"),r.a.createElement("small",null,"Order ID: "),r.a.createElement("h3",null,t.orderId),r.a.createElement(o.b,{to:"/myorder/CookieID"},r.a.createElement("small",null,"Cek status"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Maaf, proses pemesanan gagal"),r.a.createElement("p",null,"Silahkan pesan beberapa saat lagi"))))}(!0,n):r.a.createElement(r.a.Fragment,null)))},G=(a(91),{index:function(){return d.a.create({baseURL:"https://rumah-kembang-api.herokuapp.com/api/v1/Admin"})},getAllOrders:function(e){return d()({method:"GET",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Admin/Order/getAllOrders",cancelToken:e})}});var L=function(e){var t=r.a.useState(!1),a=Object(s.a)(t,2),n=(a[0],a[1]),l=r.a.useState(null),c=Object(s.a)(l,2),o=(c[0],c[1],r.a.useState([])),m=Object(s.a)(o,2),i=m[0],u=m[1],p=r.a.useState(!1),g=Object(s.a)(p,2),E=g[0],b=g[1];return r.a.useEffect((function(){var e=d.a.CancelToken.source();return G.getAllOrders(e.token).then((function(e){n(!0),u(e.data.result)})).catch((function(e){return console.log(e)})),function(){return e.cancel()}})),r.a.createElement("main",{id:"admin"},r.a.createElement("div",{className:"container my-2 py-2 bg-light px-2"},function(e,t){return r.a.createElement("table",{className:"table table-sm table-bordered table-responsive"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Order ID"),r.a.createElement("th",null,"Tanggal"),r.a.createElement("th",null,"Waktu"),r.a.createElement("th",null,"Detail"))),r.a.createElement("tbody",null,e.map((function(e,a){return r.a.createElement("tr",{key:Math.random(1)},r.a.createElement("td",null,a+1),r.a.createElement("td",null,e.id),r.a.createElement("td",null,new Date(e.tanggal).toLocaleDateString()),r.a.createElement("td",null,e.waktu),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-link btn-sm",onClick:t},"Detail")))}))))}(i,(function(e){return b(!0)}))),r.a.createElement(F.a,{show:E,onHide:function(){return b(!1)},"aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(F.a.Header,{closeButton:!0},r.a.createElement("h5",{className:"my-0"},r.a.createElement("b",null,"123456"))),r.a.createElement(F.a.Body,null,r.a.createElement("p",null,"Order ID : 123456"),r.a.createElement("p",null,"Tanggal : "),r.a.createElement("p",null,"Waktu : "),r.a.createElement("p",null,"Customer ID : "),r.a.createElement("p",null,"Nama : "),r.a.createElement("p",null,"No. Hp : "),r.a.createElement("p",null,"Alamat Kirim : "),r.a.createElement("p",null,"Katerangan : "),r.a.createElement("p",null,"Barang : "))))};var H=function(e){var t=r.a.useState(!1),a=Object(s.a)(t,2),n=a[0],l=a[1],c=r.a.useState("left"),o=Object(s.a)(c,2),m=o[0],u=o[1],p=r.a.useState(""),E=Object(s.a)(p,2),b=E[0],f=E[1],v=function(e){e.preventDefault();var t=e.currentTarget.id;switch(t.split(" ")[1]){case"top-side":f(t),u("top rounded-bottom w-100 h-auto mh-75");break;case"right-side":f(t),u("right");break;case"bottom-side":f(t),u("bottom rounded-top w-100 h-50");break;default:f(t),u("left")}l(!n)};return r.a.useEffect((function(){var e=d.a.CancelToken.source();return null!==document.cookie&&void 0!==document.cookie&&""!==document.cookie||d()({method:"GET",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Customer/setCustomerCookie",withCredentials:!0,cancelToken:e.token}).then((function(e){console.log(e),void 0!==e.data.result.customerId&&(document.cookie=e.data.result.customerId,console.log(e.status),console.log(document.cookie))})).catch((function(e){return console.log(e)})),console.log(document.cookie),console.log(g.a.get("customer_id")),function(){return e.cancel()}})),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{exact:!0,path:"/superuser",component:L}),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(T,{toggleWrapper:v}),r.a.createElement(x,null)),r.a.createElement(i.a,{path:"/:type"},r.a.createElement(I,{toggleWrapper:v}),r.a.createElement(i.a,{exact:!0,path:"/checkout",component:z}),r.a.createElement(i.a,{exact:!0,path:"/kategori/:categoryName",component:B}),r.a.createElement(i.a,{exact:!0,path:"/tag/:tagName",component:D}),r.a.createElement(i.a,{exact:!0,path:"/produk/:kode",component:W})),r.a.createElement(i.a,{exact:!0,path:"/404"})),r.a.createElement(h,{active:n,ids:b,classes:m}),r.a.createElement("div",{className:"overlay"+(n?" active":""),onClick:function(e){return l(!n)}}))};document.oncontextmenu=function(){return!1},m.isMobileOnly&&(m.isAndroid||m.isIOS||m.isWinPhone)?c.a.render(r.a.createElement(o.a,null,r.a.createElement(H,null)),document.getElementById("root")):c.a.render(r.a.createElement("div",{className:"container-fluid position-absolute text-center",style:{top:"40%",bottom:"40%"}},r.a.createElement("h5",null,"Maaf, website hanya tersedia pada browser handphone"),r.a.createElement("p",null,"Silahkan buka website pada browser handphone anda")),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.d946c35c.chunk.js.map