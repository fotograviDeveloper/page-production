(this["webpackJsonpfotogravi-page-2"]=this["webpackJsonpfotogravi-page-2"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){"use strict";a.a="fotogravi-design-api.herokuapp.com"},,,function(e,a,t){"use strict";var c=t(2),n=t(3),s=t(5),r=t(4),i=t(1),o=t.n(i),l=t(9),j=(t(26),t(0)),b=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"boton  ",children:Object(j.jsxs)("button",{type:"button",className:"btn btn-dark",children:["   ",Object(j.jsx)(l.c,{className:"Link",to:this.props.Link,children:this.props.PalabraClave})]})})}}]),t}(o.a.Component);a.a=b},,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";var c=t(2),n=t(3),s=t(5),r=t(4),i=t(1),o=t.n(i),l=t(8),j=t.n(l),b=t(13),d=t(14),u=t(15),m=(t(51),t(52),t(0)),p=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(m.jsx)("div",{className:" cards  ",children:Object(m.jsx)("div",{className:"cardy",children:Object(m.jsxs)("a",{className:"links",href:"/portafolios/".concat(this.props.link),children:[Object(m.jsx)("img",{src:this.props.img,alt:this.props.textoAlterno}),Object(m.jsxs)("h2",{children:[" ",this.props.titulo," "]})]})})},this.props.id)}}]),t}(o.a.Component);t(53);var O=function(e){return Object(m.jsx)("div",{className:"masPortafolios",children:Object(m.jsxs)("div",{className:"Crards",children:[e.Portafolios.map((function(e){return Object(m.jsx)(p,{titulo:e.titulo,img:e.imgMin,textoAlterno:e.textoALT,link:e.link},e.id)}))," "]})})},h=function(){var e=Object(i.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1];return Object(i.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var a,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://".concat(u.a,"/api/Design"));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,c(t),console.log(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsx)(o.a.Fragment,{children:Object(m.jsx)("div",{className:"c",children:Object(m.jsx)(O,{Portafolios:t})})})},x=(t(54),function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(m.jsx)("div",{className:" cardsD  ",children:Object(m.jsx)("div",{className:"cardDesign",children:Object(m.jsxs)("a",{className:"links",href:this.props.link,children:[Object(m.jsx)("img",{src:this.props.img,alt:this.props.textoAlterno}),Object(m.jsxs)("h2",{children:[" ",this.props.titulo," "]}),Object(m.jsxs)("p",{children:["  ",this.props.desc," "]})]})})},this.props.id)}}]),t}(o.a.Component));t(55);var f=function(e){return Object(m.jsx)("div",{className:"center",children:Object(m.jsx)("div",{className:"CrardTrabajo",children:e.Trabajos.map((function(e){return Object(m.jsx)(x,{titulo:e.proyecto,img:e.imgmin,textoAlterno:"imagen min",desc:e.desc,link:e.link},e.id)}))})})},v=function(){var e=Object(i.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1];return Object(i.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var a,t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://".concat(u.a,"/api/Design/Branding"));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,c(t),console.log(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsx)(o.a.Fragment,{children:Object(m.jsx)("div",{className:"branding",children:Object(m.jsx)(f,{Trabajos:t})})})},g=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(m.jsxs)(o.a.Fragment,{children:[Object(m.jsx)("h3",{children:"Tengo experiencia en:"}),Object(m.jsx)("i",{className:"fab fa-html5",title:"html5"}),Object(m.jsx)("i",{className:"fab fa-css3-alt",title:"CSS3",children:"  "}),Object(m.jsx)("i",{className:"fab fa-js",title:"JavaScript"}),Object(m.jsx)("i",{className:"fab fa-python",title:"Python"}),Object(m.jsx)("i",{className:"fab fa-react",title:"React"}),Object(m.jsx)("i",{className:"fab fa-node",title:"node JS",children:"  "}),Object(m.jsx)("i",{className:"fas fa-database",title:"MySql"}),Object(m.jsx)("i",{className:"fas fa-pen-nib",title:"Adobe suite"})]})}}]),t}(o.a.Component),N=(t(56),function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(m.jsx)(o.a.Fragment,{children:Object(m.jsxs)("div",{className:"portafolio",id:"Portafolio",children:[Object(m.jsxs)("div",{className:"grid1",children:[Object(m.jsx)("h2",{children:"PORTAFOLIO BRANDING"}),Object(m.jsx)("div",{className:" info",children:Object(m.jsxs)("p",{children:["Distintas personas han confiado en m\xed para la elaboraci\xf3n de su identidad grafica. Estas son algunos de mis mejores trabajos que he hecho a lo largo del tiempo, te explicare como fue que cree estas marcas y sus identidades graficas. ",Object(m.jsx)("br",{}),"As\xed conocer\xe1s un poco m\xe1s mis habilidades.           ",Object(m.jsx)("i",{className:"fas fa-arrow-down"})]})}),Object(m.jsx)(v,{})]}),Object(m.jsxs)("div",{className:"grid2",children:[Object(m.jsx)("div",{className:"parrafoBranding",children:Object(m.jsx)("div",{className:"textoD",children:Object(m.jsx)("p",{children:"Tambi\xe9n podr\xe1s encontrar algunas de mis ilustraciones y matte painting que he hecho a lo largo del tiempo. Asi como mis dise\xf1os y paginas web creadas hasta ahora."})})}),Object(m.jsx)("div",{className:"portafolios",children:Object(m.jsx)(h,{})}),Object(m.jsx)("div",{className:"skills",children:Object(m.jsx)(g,{})})]})]})})}}]),t}(i.Component));a.a=N},function(e,a,t){"use strict";var c=t(1),n=t.n(c),s=t.p+"static/media/curriculum vitae.e8ec979f.pdf",r=t.p+"static/media/Raul_Garces1.5c6a0099.png",i=(t(48),t(9)),o=t(6),l=t(2),j=t(3),b=t(5),d=t(4),u=(t(26),t(0)),m=function(e){Object(b.a)(t,e);var a=Object(d.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"boton  ",children:Object(u.jsx)("a",{className:"Link",href:"/Conoceme",children:Object(u.jsx)("button",{type:"button",className:"btn btn-dark",children:"   Ver mas \ud83e\udd13\ud83d\udc4d"})})})}}]),t}(n.a.Component);a.a=function(){return Object(u.jsx)(n.a.Fragment,{children:Object(u.jsx)(i.a,{children:Object(u.jsxs)("div",{className:"abaut",id:"abautme",children:[Object(u.jsxs)("div",{className:"botonDescargaCV",children:[" ",Object(u.jsx)("div",{className:"ico",children:Object(u.jsx)("a",{href:s,download:"Curriculum Vitae Raul Garces",children:Object(u.jsx)("span",{children:Object(u.jsx)("i",{className:"fas fa-download",alt:"Descarga mi Cv",title:"Descarga mi CV"})})})})]}),Object(u.jsxs)("div",{className:" grid",children:[Object(u.jsxs)("div",{className:"information",children:[Object(u.jsx)("h2",{children:" HOLA. YO SOY RA\xdaL GARC\xc9S"}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{className:"my",children:"Tengo 23 a\xf1os. Soy de monterrey N.L. M\xe9xico. Y soy dise\xf1ador gr\xe1fico y programador web freelance."})]}),Object(u.jsxs)("div",{className:"img",children:[" ",Object(u.jsx)("img",{src:r,alt:"mi foto de perfil"})]}),Object(u.jsx)("div",{className:"parrafo",children:Object(u.jsxs)("p",{className:"pr1",children:["Dest hace mas de 4 a\xf1os me interese por el dise\xf1o grafico. Esto me llevo a aprender y desarrollar m\xfaltiples habilidades que me han ayudado a llegar hasta este punto."," "]})}),Object(u.jsx)("div",{className:"parrafo",children:Object(u.jsxs)("p",{children:["Cree mi marca personal ",Object(u.jsx)("b",{children:"Fotogravi Studio."})," ",Object(u.jsx)("br",{}),"Para ofrecer mis servicios como dise\xf1ador gr\xe1fico, programador y agente digital"]})}),Object(u.jsx)("div",{className:"parrafo",children:Object(u.jsx)("p",{children:"Busco ayudar a peque\xf1os negocios a lograr ese crecimiento y posicionamiento de marca que desean."})}),Object(u.jsxs)("div",{className:"parrafo",children:[Object(u.jsx)("p",{children:"Gracias a mi experiencia en m\xfaltiples profesiones puedo brindarte una soluci\xf3n acorde a tus necesidades."}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(o.a,{exact:!0,path:"/",component:m})})]})]})]})})})}},,,,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),s=t(29),r=t.n(s),i=(t(35),t(2)),o=t(3),l=t(5),j=t(4),b=(t(36),t(0)),d=function(e){Object(l.a)(t,e);var a=Object(j.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(b.jsx)(n.a.Fragment,{children:Object(b.jsxs)("div",{className:"carga",children:[Object(b.jsx)("div",{className:"lds-circle",children:Object(b.jsx)("div",{})}),Object(b.jsx)("h3",{children:"Cargando Pagina ..."})]})})}}]),t}(n.a.Component),u=(t(38),t(9)),m=t(6),p=function(e){Object(l.a)(t,e);var a=Object(j.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(b.jsx)(n.a.Fragment,{children:Object(b.jsx)("div",{className:"trabajosBody",children:Object(b.jsx)("h1",{children:"hola mundo soy la pagina de Trabajos"})})})}}]),t}(n.a.Component),O=function(e){Object(l.a)(t,e);var a=Object(j.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"footer",children:Object(b.jsx)("h2",{children:"este es el pie de pagina"})})}}]),t}(n.a.Component),h=t.p+"static/media/Logo2.0075d69a.png",x=(t(25),function(e){Object(l.a)(t,e);var a=Object(j.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(b.jsx)(n.a.Fragment,{children:Object(b.jsx)("div",{className:"barra",children:Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg ",children:[Object(b.jsx)(u.b,{className:"navbar-brand ml-auto",to:"/",children:Object(b.jsx)("img",{className:"img",src:h,alt:"logotipo de mi marca"})}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse justify-content-end m-5",id:"navbarNavAltMarkup",children:[Object(b.jsxs)("div",{className:"navbar-nav text-end",children:[Object(b.jsxs)(u.b,{className:"nav-item nav-link ",to:"/",children:["Inicio ",Object(b.jsx)("span",{className:"sr-only"})]}),Object(b.jsx)(u.b,{className:"nav-item nav-link",to:"/Conoceme",children:"Conoceme"}),Object(b.jsx)(u.b,{className:"nav-item nav-link",to:"/Portafolio",children:"Portafolio"}),Object(b.jsx)(u.b,{className:"nav-item nav-link",to:"/Contacto",children:"Contactame"})]}),Object(b.jsxs)("div",{className:"d-flex justify-content-end socialMedia ",children:[" ",Object(b.jsx)("a",{className:"navbar-brand",href:"https://www.facebook.com/Garces.fotogravi",target:"_bank",children:Object(b.jsx)("i",{className:"fab fa-facebook-square"})}),Object(b.jsx)("a",{className:"navbar-brand",href:"https://www.linkedin.com/in/fotogravi-studio/",target:"_bank",children:Object(b.jsx)("i",{className:"fab fa-linkedin"})})]})]})]})})})}}]),t}(c.Component)),f=(t(47),function(e){Object(l.a)(t,e);var a=Object(j.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(b.jsx)(n.a.Fragment,{children:Object(b.jsxs)("div",{className:"portada",style:{backgroundImage:"url(".concat(this.props.img,")"),fontSize:"".concat(this.props.fontSize)},children:[Object(b.jsx)("div",{className:"ico",children:Object(b.jsx)("i",{className:this.props.ico1})}),Object(b.jsx)("div",{className:"titulo",children:Object(b.jsx)("h3",{style:{fontSize:"".concat(this.props.fontSize)},children:this.props.titulo})}),Object(b.jsx)("div",{className:"ico",children:Object(b.jsx)("i",{className:this.props.ico2})})]})})}}]),t}(n.a.Component)),v=t(28);var g=function(){return Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)(f,{img:"https://images.pexels.com/photos/4954713/pexels-photo-4954713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",titulo:"Este soy yo"}),Object(b.jsx)(v.a,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"info",children:Object(b.jsx)("p",{})})})]})},N=(t(49),t.p+"static/media/Textarea.d443f85c.svg"),y=t(8),k=t.n(y),C=t(13),w=t(19),S=t(24),A=t(14),F=function(){var e=Object(c.useState)({nombre:"",apellido:"",correo:"",telefono:"",asunto:"",mensaje:""}),a=Object(A.a)(e,2),t=a[0],n=a[1],s=function(e){n(Object(S.a)(Object(S.a)({},t),{},Object(w.a)({},e.target.name,e.target.value)))},r=function(){var e=Object(C.a)(k.a.mark((function e(a){var c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c={method:"post",headers:{Accept:"application/json","content-Type":"application/json"},body:JSON.stringify(t)},e.next=4,fetch("http://localhost:3001/Contacto/send",c);case 4:alert("se envio correctamente"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:console.log("enviando datos..."+t.nombre+" "+t.apellido);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}();return Object(b.jsxs)("form",{action:"/correoEnviado",onSubmit:r,className:"Dflex",children:[Object(b.jsx)("input",{type:"text",id:"Nombre",placeholder:"\xbfCual es tu nombre?",name:"nombre",onChange:s}),Object(b.jsx)("input",{type:"text",id:"apellido",placeholder:"\xbfCual es tu apellido?",name:"apellido",onChange:s}),Object(b.jsx)("input",{type:"text",id:"correo",placeholder:"Coloca tu correo electonico  ",name:"correo",onChange:s})," ",Object(b.jsx)("input",{type:"text",id:"telefono",placeholder:"ingresa tu numero de telefono* ",name:"telefono",onChange:s}),Object(b.jsx)("input",{type:"text",id:"asunto",name:"asunto",placeholder:"Agrega un asunto",onChange:s}),Object(b.jsx)("textarea",{type:"text",className:"textarea",id:"mensaje",placeholder:"Escribe aqui tu mensaje o duda.",name:"mensaje",onChange:s}),Object(b.jsx)("button",{type:"submit",value:"Submit",children:"ENVIAR"})]})},D=function(e){Object(l.a)(t,e);var a=Object(j.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(b.jsx)(n.a.Fragment,{children:Object(b.jsx)("div",{className:" form1",children:Object(b.jsxs)("div",{className:"formGrid",children:[" ",Object(b.jsx)("div",{className:"image",children:Object(b.jsx)("img",{src:N,alt:"Esta imagen contiene una ilustracion de una chica"})}),Object(b.jsx)("div",{className:"info",children:Object(b.jsxs)("p",{children:["Ey!! si te gusto mi trabajo enviame un correo electronico."," ",Object(b.jsx)("br",{})," Solo tienes que llenar el sigiente dormulario"]})}),Object(b.jsx)("div",{className:"FormContainer",children:Object(b.jsx)(F,{})})]})})})}}]),t}(c.Component),P=function(e){Object(l.a)(t,e);var a=Object(j.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(b.jsx)(n.a.Fragment,{children:Object(b.jsx)(D,{})})}}]),t}(c.Component),T=function(e){Object(l.a)(t,e);var a=Object(j.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(b.jsx)(n.a.Fragment,{children:Object(b.jsx)("div",{className:"barra",children:Object(b.jsxs)("nav",{className:"navbar  navbar-expand-lg ",children:[Object(b.jsx)("a",{className:"navbar-brand ml-auto",href:"/",children:Object(b.jsx)("img",{className:"img",src:h,alt:"logotipo de mi marca"})}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse justify-content-end m-5",id:"navbarNavAltMarkup",children:[Object(b.jsxs)("div",{className:"navbar-nav  text-center",children:[Object(b.jsxs)("a",{className:"nav-item nav-link ",href:"#inicio",children:["Inicio ",Object(b.jsx)("span",{class:"sr-only"})]}),Object(b.jsx)("a",{className:"nav-item nav-link",href:"#abautme",children:"Conoceme"}),Object(b.jsx)("a",{className:"nav-item nav-link",href:"#Portafolio",children:"Portafolio"}),Object(b.jsx)("a",{className:"nav-item nav-link",href:"#Contactame",children:"Contactame"})]}),Object(b.jsxs)("div",{className:"d-flex justify-content-end socialMedia ",children:[" ",Object(b.jsx)("a",{className:"navbar-brand",href:"https://www.facebook.com/Garces.fotogravi",target:"_bank",children:Object(b.jsx)("i",{className:"fab fa-facebook-square"})}),Object(b.jsx)("a",{className:"navbar-brand",href:"https://www.linkedin.com/in/fotogravi-studio/",target:"_bank",children:Object(b.jsx)("i",{className:"fab fa-linkedin"})})]})]})]})})})}}]),t}(c.Component),E=t(27);var M=function(){return Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)(f,{img:"https://images.pexels.com/photos/8548383/pexels-photo-8548383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",titulo:"Mi portafolio "}),Object(b.jsx)(E.a,{})]})},B=(t(57),t(58),function(e){Object(l.a)(t,e);var a=Object(j.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(b.jsx)(n.a.Fragment,{children:Object(b.jsx)("div",{className:"navbar",children:Object(b.jsx)("h1",{children:"holamundo"})})})}}]),t}(c.Component)),L=(t(59),function(e){Object(l.a)(t,e);var a=Object(j.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"contaienr",children:[Object(b.jsx)(u.b,{to:"/",children:Object(b.jsx)("h2",{children:"inicio"})})," "]})}}]),t}(n.a.Component)),I=function(){return Object(b.jsxs)("div",{className:"page",children:["  ",Object(b.jsxs)("h2",{children:["volver a ",Object(b.jsx)("br",{})]}),Object(b.jsx)(L,{})]})},q=t(18),G=t(15),R=(t(60),function(e){Object(l.a)(t,e);var a=Object(j.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"componentParrafo",children:[Object(b.jsx)("h2",{children:this.props.tituloSeccion}),Object(b.jsx)("p",{children:this.props.parrafo})]})}}]),t}(c.Component)),z=(t(61),function(){var e=Object(m.e)().link,a=n.a.useState([]),t=Object(A.a)(a,2),c=t[0],s=t[1];return n.a.useEffect((function(){(function(){var a=Object(C.a)(k.a.mark((function a(){var t,c;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("http://".concat(G.a,"/api/Design/portafolio/").concat(e,"/contenido"));case 2:return t=a.sent,a.next=5,t.json();case 5:c=a.sent,s(c[0]),console.log(c[0].imgLogo);case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)(f,{titulo:c.nombreDProyecto,img:c.imgPortada,ico1:"",fontSize:"30px",ico2:""})," ",Object(b.jsx)("div",{className:"BrandingPage",style:{backgroundColor:c.Color},children:Object(b.jsxs)("div",{className:"container ",children:[Object(b.jsx)("div",{className:"contenido",children:Object(b.jsxs)("div",{className:"pageContent",children:[Object(b.jsxs)("div",{className:"brif",children:[Object(b.jsx)("img",{src:c.imgBrief,alt:""}),Object(b.jsxs)("div",{className:"parr1",children:["   ",Object(b.jsx)(R,{className:"brief",tituloSeccion:"Brieffing",parrafo:c.briefTXT}),Object(b.jsx)("br",{}),Object(b.jsx)(R,{className:"brief",tituloSeccion:"Analisis del mercado",parrafo:c.analisisMercado})]})]}),Object(b.jsx)("div",{className:"parrs",children:Object(b.jsx)(R,{className:"problem",tituloSeccion:"Problema",parrafo:c.problema})}),Object(b.jsx)("img",{src:c.imgProblema,alt:""}),Object(b.jsx)("div",{className:"parr",children:Object(b.jsx)(R,{className:"solucion",tituloSeccion:"Solucion",parrafo:c.propuestaDise\u00f1o})}),Object(b.jsxs)("div",{children:[" ",Object(b.jsx)("img",{className:"img",src:c.imgLogo,alt:""})]}),Object(b.jsxs)("div",{className:"container principal",children:[Object(b.jsx)("h2",{children:"Colores y tipografia usada"}),Object(b.jsxs)("div",{className:"colortipografia",children:[Object(b.jsxs)("div",{className:"colores",children:[Object(b.jsx)("div",{className:"color1",style:{backgroundColor:"#5B1DA8"},children:"#5B1DA8"}),Object(b.jsx)("div",{className:"color2",style:{backgroundColor:"#FFD81B"},children:" #FFD81B"})]}),Object(b.jsxs)("div",{className:"tipografia",children:[Object(b.jsx)("div",{className:"tipo1",children:"Montserrat"}),Object(b.jsx)("div",{className:"tipo2",children:"Bebas new"})]})]})]})]})}),Object(b.jsx)(q.a,{className:"contacto",PalabraClave:"CONTACTAME",id:"1",Link:"/Contacto"})]})})]})}),J=(t(62),function(e){Object(l.a)(t,e);var a=Object(j.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"imagen",children:Object(b.jsx)("img",{src:this.props.img,alt:this.props.alt})})}}]),t}(n.a.Component));var V=function(e){return Object(b.jsx)("div",{className:"masimagenes",children:Object(b.jsxs)("div",{className:" ImG",children:[e.Imagenes.map((function(e){return Object(b.jsx)("div",{className:"imagenes",children:Object(b.jsx)(J,{img:e.img,textoAlterno:e.textoALT})},e.id)}))," "]})})},_=(t(63),function(){var e=Object(m.e)().link,a=n.a.useState([]),t=Object(A.a)(a,2),c=t[0],s=t[1];n.a.useEffect((function(){(function(){var a=Object(C.a)(k.a.mark((function a(){var t,c;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(" http://".concat(G.a,"/api/Design/").concat(e));case 2:return t=a.sent,a.next=5,t.json();case 5:c=a.sent,s(c);case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]);var r=n.a.useState([]),i=Object(A.a)(r,2),o=i[0],l=i[1];return n.a.useEffect((function(){(function(){var a=Object(C.a)(k.a.mark((function a(){var t,c;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("http://".concat(G.a,"/api/Design/").concat(e,"/catalogo"));case 2:return t=a.sent,a.next=5,t.json();case 5:c=a.sent,l(c),console.log(c);case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsxs)("div",{className:"trabajosBody",children:[" ",Object(b.jsx)(f,{titulo:c.nombreDProyecto,img:c.imgPortada,ico1:c.icon1,ico2:c.icon2})," "]}),Object(b.jsx)("div",{className:"galImagen",children:Object(b.jsx)(V,{Imagenes:o})}),Object(b.jsx)("div",{className:"contacto",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(q.a,{PalabraClave:"CONTACTAME",id:"1",Link:"/Contacto"})})})]})}),Y=Object(c.lazy)((function(){return t.e(3).then(t.bind(null,70))}));var H=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(u.a,{children:[Object(b.jsxs)(c.Suspense,{className:"suspense",fallback:Object(b.jsx)(d,{}),children:[" ",Object(b.jsx)(m.a,{exact:!0,path:"/",component:T}),Object(b.jsx)(m.a,{exact:!0,path:"/",component:Y})," "]}),Object(b.jsx)(m.a,{path:"/",component:x}),Object(b.jsx)(m.a,{exact:!0,path:"/Design",component:p}),Object(b.jsx)(c.Suspense,{className:"suspense",fallback:Object(b.jsx)(d,{}),children:Object(b.jsx)(m.a,{path:"/Conoceme",component:g})}),Object(b.jsx)(m.a,{exact:!0,path:"/portafolio/",component:M}),Object(b.jsx)(m.a,{exact:!0,path:"/portafolios/:link",component:_}),Object(b.jsx)(m.a,{exact:!0,path:"/portafolio/Design/branding/:link",component:z}),Object(b.jsx)(m.a,{path:"/Contacto",component:P}),Object(b.jsx)(m.a,{exact:!0,path:"/correoEnviado",component:I}),Object(b.jsx)(m.a,{path:"/test",component:B}),Object(b.jsx)(O,{})]})})},X=function(e){e&&e instanceof Function&&t.e(4).then(t.bind(null,69)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,s=a.getLCP,r=a.getTTFB;t(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(H,{})}),document.getElementById("root")),X()}],[[64,1,2]]]);
//# sourceMappingURL=main.70a4c82e.chunk.js.map