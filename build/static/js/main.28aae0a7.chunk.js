(this["webpackJsonprumah-kembang"]=this["webpackJsonprumah-kembang"]||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/icon-search.174272f3.svg"},34:function(e,t,a){e.exports=a.p+"static/media/icon-cart.e3ce101b.svg"},52:function(e,t,a){},55:function(e,t,a){e.exports=a.p+"static/media/instagram.8290266a.png"},56:function(e,t,a){e.exports=a.p+"static/media/icon-arrow-left-short.58514925.svg"},57:function(e,t,a){e.exports=a.p+"static/media/icon-cart-plus.fbaaf51d.svg"},58:function(e,t,a){e.exports=a(97)},64:function(e,t,a){},65:function(e,t,a){},83:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=a(6),m=a(28);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(64),a(65);var s=a(3),u=a(8),i=a(4),d=a.n(i),p=(a(83),{index:function(){return d.a.create({baseURL:"https://rumah-kembang-api.herokuapp.com/api/v1/Category"})},getAllProducts:function(e){return d()({method:"GET",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Product/getAllProducts",cancelToken:e})},getProductByID:function(e,t){return d()({method:"POST",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Product/getProductByID",data:{kode:t},cancelToken:e})},getProductByCategory:function(e,t){return d()({method:"POST",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Product/getProductByCategory",data:{categoryName:t},cancelToken:e})},getProductByTag:function(e,t){return d()({method:"POST",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Product/getProductByTag",data:{tagName:t},cancelToken:e})},getProductByRecommend:function(e){return d()({method:"GET",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Product/getProductByRecommend",cancelToken:e})}});var E=function(e){var t=r.a.useState(""),a=Object(s.a)(t,2),n=a[0],l=a[1],c=r.a.useState({}),m=Object(s.a)(c,2),u=m[0],i=m[1];return r.a.useEffect((function(){var e=!0,t=d.a.CancelToken.source();return""!==n&&p.getProductByTag(t.token,n).then((function(t){!0===e&&i(t.data)})).catch((function(e){return console.log(e)})),function(){e=!1,t.cancel()}}),[n]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.active?"fixed-top p-2 bg-light border-bottom rounded-bottom":""},r.a.createElement("input",{id:"searchInput",onInput:function(e){return l(e.currentTarget.value)},type:"text",className:"form-control form-control-sm",placeholder:"Cari tag produk..."})),!0===e.active&&""!==n?r.a.createElement("div",{className:"mt-5"},r.a.createElement("p",null,"Hasil pencarian : ",r.a.createElement("b",null,n)),r.a.createElement("div",{className:"list-unstyled list-group"},void 0===u.result?r.a.createElement(r.a.Fragment,null):u.result.map((function(e,t){return function(e,t,a){var n=t.tags.split(", ");for(var l in n)if(-1!==n[l].indexOf(e))return r.a.createElement(o.b,{key:t.kode,to:"/produk/"+t.kode,className:"list-group-item list-item-action flex-fill p-1"},r.a.createElement("img",{id:"searchImg",src:t.foto,className:"img-fluid",alt:"Photo: "+t.kode}),r.a.createElement("span",{className:"ml-3"},n[l]))}(n,e)})))):r.a.createElement(r.a.Fragment,null))},g=a(54);var b=function(e){var t=r.a.useState(null),a=Object(s.a)(t,2),n=a[0],l=a[1];return r.a.useEffect((function(){if(e.active&&" cart-button bottom-side"===e.ids){var t={};if(sessionStorage.length>0){for(var a=0;a<sessionStorage.length;a++)t["".concat(sessionStorage.key(a))]=sessionStorage.getItem(sessionStorage.key(a));l(t)}}return function(){return e.active}}),[e.active,e.ids]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",{className:"mb-3 pb-2 border-bottom"},r.a.createElement("b",null,"Keranjang"))," cart-button bottom-side"===e.ids?null===n||void 0===n?r.a.createElement("p",null,"---- Keranjang kosong ----"):r.a.createElement("table",{className:"table table-sm table-bordered"},r.a.createElement("tbody",null,Object.keys(n).map((function(e,t){return r.a.createElement("tr",{key:e},r.a.createElement("td",{className:"col-9 align-middle"},r.a.createElement(o.b,{to:"/produk/"+e},e)),r.a.createElement("td",{className:"col-3"},r.a.createElement("input",{type:"number",value:n[e],onChange:function(t){return function(e,t){sessionStorage.setItem(t,e.currentTarget.value),l(Object(g.a)({},t,sessionStorage.getItem(t)))}(t,e)},className:"form-control form-control-sm"})),r.a.createElement("td",{className:"align-middle p-0"},r.a.createElement("span",{className:"navbar-toggler text-danger",type:"button",onClick:function(t){return sessionStorage.removeItem(e)}},"x")))})))):"")};var h=function(e){var t=" "+e.ids,a=" "+e.classes,n=e.active;return r.a.createElement("main",{id:"side-wrapper"+t,className:"bg-light"+(n?" active position-absolute":"")+a},r.a.createElement("div",{className:"container py-2"},(console.log(t)," search-button top-side"===t?r.a.createElement(E,{active:n}):r.a.createElement(b,{active:n,ids:t}))))},f=a(40),k=a(12),v=(a(89),a(55)),N=a.n(v),y={index:function(){return d.a.create({baseURL:"https://rumah-kembang-api.herokuapp.com/api/v1/Category"})},getAllCategories:function(e){return d()({method:"GET",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Category/getAllCategories",cancelToken:e})}},x={index:function(){return d.a.create({baseURL:"https://rumah-kembang-api.herokuapp.com/api/v1/Carousel"})},getAllCarousels:function(e){return d()({method:"GET",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Carousel/getAllCarousels",cancelToken:e})}};var w=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],c=a[1],m=Object(n.useState)(null),u=Object(s.a)(m,2),i=u[0],E=u[1],g=Object(n.useState)([]),b=Object(s.a)(g,2),h=b[0],v=b[1],w=Object(n.useState)([]),O=Object(s.a)(w,2),S=O[0],j=O[1],C=Object(n.useState)([]),T=Object(s.a)(C,2),I=T[0],P=T[1];return Object(n.useEffect)((function(){var e=d.a.CancelToken.source();return Promise.all([y.getAllCategories(e.token),p.getProductByRecommend(e.token),x.getAllCarousels(e.token)]).then((function(e){c(!0),j(e[0].data.result),P(e[1].data.result),v(e[2].data.result)})).catch((function(e){E(e)})),function(){return e.cancel()}}),[]),r.a.createElement("main",{id:"welcome"},function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t[0]?console.log(t[0]):t[1]?r.a.createElement(f.a,{id:"home-carousel"},t[2].map((function(e,t){return r.a.createElement(f.a.Item,{as:o.b,to:"/produk/"+e.kode,key:e.id,className:"text-center"},r.a.createElement("img",{src:e.banner,className:"text-white",alt:"Slide "+(t+1)}))}))):r.a.createElement("div",{className:"text-center"},r.a.createElement(k.a,{role:"loading",animation:"grow",variant:"secondary"}))}(i,l,h),r.a.createElement("div",{className:"container mt-2 border bg-light py-3"},r.a.createElement("h6",null,r.a.createElement("b",null,"KATEGORI")),function(){for(var e=["danger","warning","success","primary","secondary"],t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return a[0]?console.log(a[0]):a[1]?r.a.createElement("div",{className:"list-unstyled list-group list-group-horizontal overflow-auto"},a[2].map((function(t,a){return r.a.createElement(o.b,{key:a+Math.random(9),to:"/kategori/"+t.slug,className:"text-capitalize font-italic border rounded-circle text-dark mr-3 list-group-item list-group-item-action flex-fill text-center list-group-item-"+e[a]},t.nama)}))):r.a.createElement("div",{className:"text-center"},r.a.createElement(k.a,{role:"loading",animation:"grow",variant:"secondary"}))}(i,l,S)),r.a.createElement("div",{className:"container mt-2 py-3 border bg-light"},r.a.createElement("h6",null,r.a.createElement("b",null,"REKOMENDASI")),function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t[0]?console.log(t[0]):t[1]?r.a.createElement("div",{className:"list-unstyled list-group list-group-horizontal overflow-auto"},t[2].map((function(e,t){return r.a.createElement(o.b,{key:t+Math.random(9),to:"/produk/"+e.kode,className:"list-group-item text-decoration-none p-1 border-0 rounded-0 text-dark text-center col-6"},r.a.createElement("div",{className:"card list-group-item-action",value:e.kode},r.a.createElement("img",{src:e.foto,className:"card-img-top p-1 border-bottom",alt:"Photo: "+e.kode}),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",null,r.a.createElement("b",null,e.kode)))))}))):r.a.createElement("div",{className:"text-center"},r.a.createElement(k.a,{role:"loading",animation:"grow",variant:"secondary"}))}(i,l,I)),r.a.createElement("div",{className:"container mt-3 py-1 bg-light"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},"Follow us on :"),r.a.createElement("div",{className:"col px-0"},r.a.createElement("a",{href:"https://instagram.com/rumahkembang29",target:"new-tab"},r.a.createElement("img",{src:N.a,className:"img-fluid",alt:"...",style:{width:"20px"}}))))))},O=(a(52),a(33)),S=a.n(O),j=a(34),C=a.n(j);var T=function(e){return r.a.createElement("header",{id:"main-header"},r.a.createElement("nav",{className:"navbar fixed-top bg-light border-bottom p-0"},r.a.createElement("div",{className:"col-8 pl-2 pr-0 justify-content-start"},r.a.createElement(o.b,{to:"/#",className:"navbar-brand mr-0"},r.a.createElement("span",{className:"text-dark font-italic ml-1"},r.a.createElement("b",null,"Rumah Kembang")))),r.a.createElement("div",{className:"row col mr-2 justify-content-end"},r.a.createElement("div",{className:"col-4 m-auto"},r.a.createElement("span",{className:"navbar-toggler",type:"button",id:"search-button top-side",onClick:e.toggleWrapper,onInput:null},r.a.createElement("img",{src:S.a,alt:"icon-search"}))),r.a.createElement("div",{className:"col-4 m-auto"},r.a.createElement("span",{type:"button",id:"cart-button bottom-side",className:"navbar-toggler",onClick:e.toggleWrapper},r.a.createElement("img",{src:C.a,alt:"icon-cart"}))))))},I=a(56),P=a.n(I);var A=function(e){var t=Object(u.f)(),a=t.pathname.split("/")[1],n="";return void 0!==t.pathname.split("/")[2]&&(n=t.pathname.split("/")[2]),r.a.createElement("header",{id:"header2",className:"superuser"===a?"d-none":""},r.a.createElement("nav",{className:"navbar fixed-top bg-light border-bottom p-0"},r.a.createElement("div",{className:"col-2 justify-content-start"},r.a.createElement("span",{type:"button",className:"navbar-toggler",onClick:function(e){return window.history.back()}},r.a.createElement("img",{src:P.a,alt:"icon-arrow-left-short"}))),r.a.createElement("div",{className:"col pl-1 pr-0 justify-content-start"},function(e,t){return"kategori"===e?r.a.createElement("span",{className:"navbar-brand text-capitalize"},r.a.createElement("b",null,t.replace("-"," "))):"myorder"===e?r.a.createElement("span",{className:"navbar-brand"},r.a.createElement("b",null,"My Order")):"superuser"===e?r.a.createElement("span",{className:"navbar-brand"},r.a.createElement("b",null,"Admin")):r.a.createElement("span",{className:"navbar-brand"},r.a.createElement("b",null,"#"+t.replace("-"," ")))}(a,n)),r.a.createElement("div",{className:"row col mr-2 justify-content-end"},r.a.createElement("div",{className:"col-4 mr-1"},r.a.createElement("span",{className:"navbar-toggler",type:"button",id:"search-button top-side",onClick:e.toggleWrapper},r.a.createElement("img",{src:S.a,alt:"icon-search"}))),r.a.createElement("div",{className:"col-4 mr-1"},r.a.createElement("span",{type:"button",id:"cart-button bottom-side",className:"navbar-toggler",onClick:e.toggleWrapper},r.a.createElement("img",{src:C.a,alt:"icon-cart"}))))))};a(90);var D=function(e){var t=r.a.useState(!1),a=Object(s.a)(t,2),n=a[0],l=a[1],c=r.a.useState(null),m=Object(s.a)(c,2),u=m[0],i=m[1],E=r.a.useState({}),g=Object(s.a)(E,2),b=g[0],h=g[1];return r.a.useEffect((function(){var t=!0,a=d.a.CancelToken.source();return p.getProductByCategory(a.token,e.match.params.categoryName).then((function(e){t&&(l(!0),h(e.data))})).catch((function(e){return i(e)})),function(){t=!1,a.cancel()}}),[e.match.params.categoryName]),r.a.createElement("main",{id:"categories"},r.a.createElement("div",{className:"container mb-3 border bg-light"},u?console.log(u):n?r.a.createElement("div",{className:"list-group list-group-horizontal row"},void 0===b.result?r.a.createElement("span",null,"Error! Couldnt fetch data"):0===b.result.length?r.a.createElement("p",{className:"text-center"},"--- Maaf, tidak ada produk ---"):b.result.map((function(e,t){return r.a.createElement(o.b,{key:t+Math.random(9),to:"/produk/"+e.kode,className:"list-group-item text-decoration-none p-1 border-0 rounded-0 text-dark text-center col-6"},r.a.createElement("div",{className:"card list-group-item-action",value:"product-id"},r.a.createElement("img",{src:e.foto,className:"card-img-top p-1 border-bottom",alt:"..."}),r.a.createElement("small",{className:"card-text"},r.a.createElement("b",null,e.kode))))}))):r.a.createElement("div",{className:"text-center"},r.a.createElement(k.a,{role:"loading",animation:"grow",variant:"secondary"}))))};a(91);var B=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],c=a[1],m=Object(n.useState)(null),u=Object(s.a)(m,2),i=u[0],E=u[1],g=Object(n.useState)({}),b=Object(s.a)(g,2),h=b[0],f=b[1];return Object(n.useEffect)((function(){var t=d.a.CancelToken.source();return p.getProductByTag(t.token,e.match.params.tagName).then((function(e){c(!0),f(e.data)})).catch((function(e){return E(e)})),function(){return t.cancel()}}),[e.match.params.tagName]),r.a.createElement("main",{id:"tags"},r.a.createElement("div",{className:"container mb-3 border bg-light"},i?console.log(i):l?r.a.createElement("div",{className:"list-group list-group-horizontal row"},void 0===h.result?r.a.createElement("span",null,"Error! Couldnt fetch data"):0===h.result.length?r.a.createElement("p",{className:"text-center"},"--- Maaf, tidak ada produk ---"):h.result.map((function(t,a){return function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];var l=a[0].tags.split(", ");for(var c in l)if(l[c]===e.match.params.tagName)return r.a.createElement(o.b,{key:a[1]+Math.random(9),to:"/produk/"+a[0].kode,className:"list-group-item text-decoration-none p-1 border-0 rounded-0 text-dark text-center col-6"},r.a.createElement("div",{className:"card list-group-item-action",value:"product-id"},r.a.createElement("img",{src:a[0].foto,className:"card-img-top p-1 border-bottom",alt:"..."}),r.a.createElement("small",{className:"card-text"},a[0].kode)))}(t,a)}))):r.a.createElement("div",{className:"text-center"},r.a.createElement(k.a,{role:"loading",animation:"grow",variant:"secondary"}))))},M=a(41),R=(a(92),a(57)),W=a.n(R),_=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];if(t[0])console.log(t[0]);else{if(!t[1])return r.a.createElement("div",{className:"text-center"},r.a.createElement(k.a,{role:"loading",animation:"grow",variant:"secondary"}));if(void 0===t[2].result)return r.a.createElement("span",null,"Error! Couldnt fetch data");switch(t[3]){case"product-price":return r.a.createElement("p",{className:"h5"},r.a.createElement("span",{className:"ml-2 text-sm font-weight-bold"},r.a.createElement("span",null,"Rp "+new Intl.NumberFormat("id-ID").format(t[2].result[0].harga))));case"product-img":return r.a.createElement("img",{src:t[2].result[0].foto,alt:"...",className:"w-75"});case"product-id":return t[2].result[0].kode;case"product-size":return"bunga-papan"===t[2].result[0].kategori?r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Ukuran (PxL)"))),r.a.createElement("td",null,"125cm x 100cm")):r.a.createElement("tr",null);case"product-category":return r.a.createElement(o.b,{className:"text-link text-capitalize",to:"/kategori/"+t[2].result[0].kategori},t[2].result[0].kategori.replace("-"," "));case"product-tags":return t[2].result[0].tags.split(",").map((function(e,t){return r.a.createElement(o.b,{key:e+Math.random(1),className:"text-link",to:"/tag/"+e.trim()},"#"+e.trim()+" ")}))}}};var K=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],c=a[1],m=Object(n.useState)(null),u=Object(s.a)(m,2),i=u[0],E=u[1],g=Object(n.useState)({}),b=Object(s.a)(g,2),h=b[0],f=b[1],k=r.a.useState(!1),v=Object(s.a)(k,2),N=v[0],y=v[1];return Object(n.useEffect)((function(){var t=!0,a=d.a.CancelToken.source();return p.getProductByID(a.token,e.match.params.kode).then((function(e){t&&(c(!0),f(e.data))})).catch((function(e){return E(e)})),function(){t=!1,a.cancel()}}),[e.match.params.kode]),r.a.createElement("main",{id:"detail"},r.a.createElement("div",{className:"container p-0"},r.a.createElement("div",{id:"product-img",className:"text-center"},_(i,l,h,"product-img"))),r.a.createElement("div",{className:"container mt-2 pt-2 pb-5 px-2 border bg-light"},r.a.createElement("div",{className:"mt-2"},r.a.createElement("div",{className:"mt-2 mb-3"},_(i,l,h,"product-price")),r.a.createElement("table",{className:"table table-sm table-bordered"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Kode Produk"))),r.a.createElement("td",null,_(i,l,h,"product-id"))),_(i,l,h,"product-size"),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Kategori"))),r.a.createElement("td",null,_(i,l,h,"product-category"))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Tags"))),r.a.createElement("td",null,_(i,l,h,"product-tags"))))))),r.a.createElement(M.a,{id:"cart-added-toast",className:"mx-2 fixed-bottom",show:N,autohide:!0,delay:3e3,onClose:function(){return y(!1)},style:{boxShadow:"none"}},r.a.createElement(M.a.Body,null,"Produk ".concat(e.match.params.kode," ditambahkan ke dalam keranjang"))),r.a.createElement("div",{className:"container mt-2 border bg-light fixed-bottom"},r.a.createElement("div",{className:"row p-2"},r.a.createElement(o.b,{to:"/checkout",id:"order-now",type:"button",className:"btn btn-outline-success col mr-1"},"Pesan"),r.a.createElement("span",{id:"add-to-cart",type:"button",onClick:function(t){return a=e.match.params.kode,null===sessionStorage.getItem(a)?sessionStorage.setItem(a,1):sessionStorage.setItem(a,parseInt(sessionStorage.getItem(a))+1),void y(!0);var a},className:"btn btn-warning col-2 btn-block"},r.a.createElement("img",{src:W.a,alt:"icon-cart-plus"})))))},L=a(18),F=(a(93),{index:function(){return d.a.create({baseURL:"https://rumah-kembang-api.herokuapp.com/api/v1/Order"})},orderNow:function(e){return d()({method:"POST",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Order/createNewOrder",headers:{"Content-Type":"application/json"},data:e})}});var z=function(e){var t=r.a.useState(null),a=Object(s.a)(t,2),n=a[0],l=a[1],c=r.a.useState(!1),m=Object(s.a)(c,2),u=m[0],i=m[1];return r.a.createElement("main",{id:"checkout"},r.a.createElement("div",{className:"container my-2 py-2 bg-light"},r.a.createElement("h6",null,r.a.createElement("b",null,"INFORMASI PEMESANAN")),r.a.createElement("form",{method:"POST",id:"checkout_form",className:"mt-3",onSubmit:function(e){e.preventDefault(),i(!0);for(var t=e.currentTarget,a=t.elements[0].value,n=t.elements[1].value,r=t.elements[2].value,c=t.elements[3].value,o={},m=0;m<sessionStorage.length;m++)o["".concat(sessionStorage.key(m))]=sessionStorage.getItem(sessionStorage.key(m));var s={nama_lengkap:a,no_hp:n,alamat_kirim:r,keterangan:c,referrer:document.referrer,cart_data:o},u="";""!==document.cookie&&(u=document.cookie.split("; ").find((function(e){return e.startsWith("customer_id")})).split("=")[1]);var d={customer_id:u,order_data:JSON.stringify(s).toString()};return F.orderNow(d).then((function(e){return l(e.data.result)}),(function(e){return l(e)})).catch((function(e){return console.log(e)}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-sm",placeholder:"Nama lengkap",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"phone",className:"form-control form-control-sm",placeholder:"No.HP",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control",rows:"2",placeholder:"Alamat tujuan pengiriman...",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control",rows:"4",placeholder:"Beri keterangan tentang pemesanan...",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-secondary btn-block",disabled:!!u},u?null===n?r.a.createElement(k.a,{"aria-hidden":"true",className:"submit-spinner",animation:"border",role:"status",variant:"warning"}):"Terkirim":"Kirim"))),null!==n?function(e,t){var a=encodeURIComponent(document.cookie.split("; ").find((function(e){return e.startsWith("customer_id")})).split("=")[1]);return r.a.createElement(L.a,{show:e,onHide:function(){return null},"aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(L.a.Body,null,"order-success"===t.message?r.a.createElement("div",{className:"text-center"},r.a.createElement("h5",null,"Terima kasih, pesanan anda telah kami terima"),r.a.createElement("small",null,"Order ID: "),r.a.createElement("h3",{className:"text-break"},t.orderId),r.a.createElement(o.b,{to:"/myorder/"+a},r.a.createElement("small",null,"Cek status")),sessionStorage.clear()):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Maaf, proses pemesanan gagal"),r.a.createElement("p",null,"Silahkan pesan beberapa saat lagi"))))}(!0,n):r.a.createElement(r.a.Fragment,null)))},H=(a(95),{index:function(){return d.a.create({baseURL:"https://rumah-kembang-api.herokuapp.com/api/v1/Admin"})},getAllOrders:function(e){return d()({method:"GET",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Admin/Order/getAllOrders",cancelToken:e})}});var U=function(e){var t=r.a.useState([]),a=Object(s.a)(t,2),n=a[0],l=a[1],c=r.a.useState(!1),o=Object(s.a)(c,2),m=o[0],u=o[1],i=r.a.useState(null),p=Object(s.a)(i,2),E=p[0],g=p[1];return r.a.useEffect((function(){var e=d.a.CancelToken.source();return H.getAllOrders(e.token).then((function(e){l(e.data.result)})).catch((function(e){return console.log(e)})),function(){return e.cancel()}})),r.a.createElement("main",{id:"admin"},r.a.createElement("div",{className:"container my-2 py-2 bg-light px-2"},function(e,t){return r.a.createElement("table",{className:"table table-responsive"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Order ID"),r.a.createElement("th",null,"Tanggal"),r.a.createElement("th",null,"Waktu"),r.a.createElement("th",null,"Detail"))),r.a.createElement("tbody",null,e.map((function(e,a){return r.a.createElement("tr",{key:Math.random(1)},r.a.createElement("td",{className:"align-middle"},a+1),r.a.createElement("td",{className:"align-middle"},r.a.createElement("b",null,e.id)),r.a.createElement("td",{className:"align-middle"},new Date(e.tanggal).toLocaleDateString()),r.a.createElement("td",{className:"align-middle"},e.waktu),r.a.createElement("td",{className:"align-middle"},r.a.createElement("button",{className:"btn btn-link btn-sm",orderData:JSON.stringify(e),dataTarget:"#order-detail",onClick:t},"Detail")))}))))}(n,(function(e){u(!0),function(e){var t=e.currentTarget,a=JSON.parse(t.getAttribute("orderdata"));g(a)}(e)}))),r.a.createElement(L.a,{id:"order-detail",show:m,onHide:function(){return u(!1)},"aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(L.a.Header,{closeButton:!0},r.a.createElement("h5",{className:"my-0"},r.a.createElement("b",null,"Order Detail"))),r.a.createElement(L.a.Body,null,null===E?"No data":function(e){return r.a.createElement("table",{className:"table table-sm table-bordered"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Order ID"))),r.a.createElement("td",{className:"text-break"},r.a.createElement("b",null,e.id))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Tanggal"))),r.a.createElement("td",{className:"text-break"},new Date(e.tanggal).toLocaleDateString())),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Waktu"))),r.a.createElement("td",{className:"text-break"},e.waktu)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Customer ID"))),r.a.createElement("td",{className:"text-break"},e.customer_id)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Nama"))),r.a.createElement("td",{className:"text-break"})),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"No. HP"))),r.a.createElement("td",{className:"text-break"})),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Alamat Kirim"))),r.a.createElement("td",{className:"text-break"})),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Keterangan"))),r.a.createElement("td",{className:"text-break"})),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Barang"))),r.a.createElement("td",{className:"text-break"}))))}(E))))},G=(a(96),{index:function(){return d.a.create({baseURL:"https://rumah-kembang-api.herokuapp.com/api/v1/Customer"})},getCustomerOrders:function(e,t){return d()({method:"POST",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Customer/getCustomerOrders",cancelToken:e,data:{customer_id:t}})}});var J=function(e){var t=r.a.useState(!1),a=Object(s.a)(t,2),n=a[0],l=a[1],c=r.a.useState([]),o=Object(s.a)(c,2),m=o[0],u=o[1],i=r.a.useState(!1),p=Object(s.a)(i,2),E=p[0],g=p[1],b=r.a.useState(null),h=Object(s.a)(b,2),f=h[0],v=h[1];return r.a.useEffect((function(){var t=d.a.CancelToken.source();return G.getCustomerOrders(t.token,e.match.params.customerId).then((function(e){l(!0),u(e.data.result)})).catch((function(e){return console.log(e)})),function(){return t.cancel()}}),[e.match.params.customerId]),r.a.createElement("main",{id:"customer-my-order"},r.a.createElement("div",{className:"container my-2 py-2 bg-light px-2"},function(e,t,a){return r.a.createElement("table",{className:"table table-sm table-bordered table-responsive"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Order ID"),r.a.createElement("th",null,"Tanggal"),r.a.createElement("th",null,"Waktu"),r.a.createElement("th",null,"Detail"))),r.a.createElement("tbody",null,e?t.map((function(e,t){return r.a.createElement("tr",{key:Math.random(1)},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.id),r.a.createElement("td",null,new Date(e.tanggal).toLocaleDateString()),r.a.createElement("td",null,e.waktu),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-link btn-sm",dataOrder:e,onClick:a},"Detail")))})):r.a.createElement("div",{className:"text-center"},r.a.createElement(k.a,{role:"loading",animation:"grow",variant:"secondary"}))))}(n,m,(function(e){g(!0),function(e){var t=e.currentTarget,a=JSON.parse(t.getAttribute("orderdata"));v(a)}(e)}))),r.a.createElement(L.a,{id:"order-detail",show:E,onHide:function(){return g(!1)},"aria-labelledby":"contained-modal-title-vcenter",centered:!0},r.a.createElement(L.a.Header,{closeButton:!0},r.a.createElement("h5",{className:"my-0"},r.a.createElement("b",null,"Order Detail"))),r.a.createElement(L.a.Body,null,null===f?"No data":function(e){return r.a.createElement("table",{className:"table table-sm table-bordered"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Order ID"))),r.a.createElement("td",{className:"text-break"},r.a.createElement("b",null,e.id))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Tanggal"))),r.a.createElement("td",{className:"text-break"},new Date(e.tanggal).toLocaleDateString())),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Waktu"))),r.a.createElement("td",{className:"text-break"},e.waktu)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Customer ID"))),r.a.createElement("td",{className:"text-break"},e.customer_id)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Nama"))),r.a.createElement("td",{className:"text-break"})),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"No. HP"))),r.a.createElement("td",{className:"text-break"})),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Alamat Kirim"))),r.a.createElement("td",{className:"text-break"})),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Keterangan"))),r.a.createElement("td",{className:"text-break"})),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("small",null,r.a.createElement("b",null,"Barang"))),r.a.createElement("td",{className:"text-break"}))))}(f))))};var q=function(e){var t=r.a.useState(!1),a=Object(s.a)(t,2),n=a[0],l=a[1],c=r.a.useState("left"),o=Object(s.a)(c,2),m=o[0],i=o[1],p=r.a.useState(""),E=Object(s.a)(p,2),g=E[0],b=E[1];r.a.useEffect((function(){var e=d.a.CancelToken.source();return""===document.cookie&&(d()({method:"GET",url:"https://rumah-kembang-api.herokuapp.com/api/v1/Customer/setCustomerCookie",cancelToken:e.token}).then((function(e){document.cookie="customer_id=".concat(encodeURIComponent(e.data.result.customerId),"; path=/; max-age=3600")})).catch((function(e){return console.log(e)})),console.log(document.cookie)),function(){return e.cancel()}}));var f=function(e){e.preventDefault();var t=e.currentTarget.id;switch(t.split(" ")[1]){case"top-side":b(t),i("top rounded-bottom w-100 h-auto mh-75");break;case"right-side":b(t),i("right");break;case"bottom-side":b(t),i("bottom rounded-top w-100 h-50");break;default:b(t),i("left")}l(!n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{exact:!0,path:"/superuser",component:U}),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(T,{toggleWrapper:f}),r.a.createElement(w,null)),r.a.createElement(u.a,{path:"/:type"},r.a.createElement(A,{toggleWrapper:f}),r.a.createElement(u.a,{exact:!0,path:"/myorder/:customerId",component:J}),r.a.createElement(u.a,{exact:!0,path:"/checkout",component:z}),r.a.createElement(u.a,{exact:!0,path:"/kategori/:categoryName",component:D}),r.a.createElement(u.a,{exact:!0,path:"/tag/:tagName",component:B}),r.a.createElement(u.a,{exact:!0,path:"/produk/:kode",component:K})),r.a.createElement(u.a,{exact:!0,path:"/404"})),r.a.createElement(h,{active:n,ids:g,classes:m}),r.a.createElement("div",{className:"overlay"+(n?" active":""),onClick:function(e){return l(!n)}}))};document.oncontextmenu=function(){return!1},m.isMobileOnly&&(m.isAndroid||m.isIOS||m.isWinPhone)?c.a.render(r.a.createElement(o.a,null,r.a.createElement(q,null)),document.getElementById("root")):c.a.render(r.a.createElement("div",{className:"container-fluid position-absolute text-center",style:{top:"40%",bottom:"40%"}},r.a.createElement("h5",null,"Maaf, website hanya tersedia pada browser handphone"),r.a.createElement("p",null,"Silahkan buka website pada browser handphone anda")),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.28aae0a7.chunk.js.map