"use strict";(self.webpackChunkhacktm_website=self.webpackChunkhacktm_website||[]).push([["common"],{3949:(h,d,a)=>{a.d(d,{A:()=>r});var c=a(6895),e=a(577),t=a(4650);function i(s,l){if(1&s&&(t.TgZ(0,"h3",5),t._uU(1),t.qZA()),2&s){const p=t.oxw();t.xp6(1),t.Oqu(p.card.title)}}function o(s,l){if(1&s&&(t.TgZ(0,"p",6),t._uU(1),t.qZA()),2&s){const p=t.oxw();t.ekj("mt-20p",!p.card.title),t.xp6(1),t.hij(" ",p.card.description," ")}}const n=function(){return{"height.px":150,"width.px":150}};class r{}r.\u0275fac=function(l){return new(l||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-card","card",""]],inputs:{card:"card"},standalone:!0,features:[t.jDz],attrs:["card",""],decls:5,vars:7,consts:[[1,"text-center"],[1,"floating"],[1,"mb-10p",3,"name","svgStyle"],["class","heading-3 fw-bold mt-20p text-center",4,"ngIf"],["class","pt-20p text-center",3,"mt-20p",4,"ngIf"],[1,"heading-3","fw-bold","mt-20p","text-center"],[1,"pt-20p","text-center"]],template:function(l,p){1&l&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"svg-icon",2),t.qZA(),t.YNc(3,i,2,1,"h3",3),t.YNc(4,o,2,3,"p",4),t.qZA()),2&l&&(t.Udp("width","250px"),t.xp6(2),t.Q6J("name",p.card.icon)("svgStyle",t.DdM(6,n)),t.xp6(1),t.Q6J("ngIf",p.card.title),t.xp6(1),t.Q6J("ngIf",p.card.description))},dependencies:[c.O5,e._J,e.bk],styles:["@keyframes _ngcontent-%COMP%_float{0%{transform:translatey(0)}50%{transform:translatey(-20px)}to{transform:translatey(0)}}.floating[_ngcontent-%COMP%]{transform:translatey(0);animation:_ngcontent-%COMP%_float 6s ease-in-out infinite}"]})},2631:(h,d,a)=>{a.d(d,{a:()=>i});var c=a(6895),e=a(4650),t=a(1481);function _(o,n){if(1&o&&(e.TgZ(0,"div",3),e._UZ(1,"iframe",4),e.qZA()),2&o){const r=n.$implicit;e.xp6(1),e.Q6J("src",r,e.uOi)}}class i{constructor(n){this.domSanitizer=n,this._urls=[]}set urls(n){const r=Array.isArray(n)?n:[n];this._urls=r.map(s=>this.getSanitized(s))}getSanitized(n){return this.domSanitizer.bypassSecurityTrustResourceUrl(n)}}i.\u0275fac=function(n){return new(n||i)(e.Y36(t.H7))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-iframe-with-title"]],inputs:{title:"title",urls:"urls"},standalone:!0,features:[e.jDz],decls:4,vars:2,consts:[[1,"container","align-items-center"],[1,"title","mb-50p","whitespace-preline","text-center","text-lg-start"],["class","video-container d-flex position-relative align-items-center justify-content-center",4,"ngFor","ngForOf"],[1,"video-container","d-flex","position-relative","align-items-center","justify-content-center"],["height","100%","width","100%",3,"src"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"p",1),e._uU(2),e.qZA(),e.YNc(3,_,2,1,"div",2),e.qZA()),2&n&&(e.xp6(2),e.hij(" ",r.title," "),e.xp6(1),e.Q6J("ngForOf",r._urls))},dependencies:[c.ax],styles:[".video-container[_ngcontent-%COMP%]{margin:auto;max-width:80vw;height:500px}@media screen and (max-width: 768px){.video-container[_ngcontent-%COMP%]{height:300px}}.whitespace-preline[_ngcontent-%COMP%]{white-space:pre-line}"]})},2469:(h,d,a)=>{a.d(d,{Y:()=>t});var c=a(4650);class t{get heightStyle(){return this.height+"px"}}t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-spacer","height",""]],hostVars:2,hostBindings:function(i,o){2&i&&c.Udp("--height",o.heightStyle)},inputs:{height:"height"},standalone:!0,features:[c.jDz],attrs:["height",""],decls:1,vars:0,template:function(i,o){1&i&&c._UZ(0,"div")},styles:["[_nghost-%COMP%]{--height: 20px}[_nghost-%COMP%]   div[_ngcontent-%COMP%]{height:var(--height)}@media screen and (max-width: 992px){[_nghost-%COMP%]   div[_ngcontent-%COMP%]{height:calc(var(--height) * .9)}}@media screen and (max-width: 768px){[_nghost-%COMP%]   div[_ngcontent-%COMP%]{height:calc(var(--height) * .85)}}"]})}}]);