"use strict";(self.webpackChunkhacktm_website=self.webpackChunkhacktm_website||[]).push([["common"],{3949:(m,_,a)=>{a.d(_,{A:()=>r});var l=a(6895),e=a(577),t=a(4650);function i(s,p){if(1&s&&(t.TgZ(0,"h3",5),t._uU(1),t.qZA()),2&s){const c=t.oxw();t.xp6(1),t.Oqu(c.card.title)}}function o(s,p){if(1&s&&(t.TgZ(0,"p",6),t._uU(1),t.qZA()),2&s){const c=t.oxw();t.ekj("mt-20p",!c.card.title),t.xp6(1),t.hij(" ",c.card.description," ")}}const n=function(){return{"height.px":150,"width.px":150}};class r{}r.\u0275fac=function(p){return new(p||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-card","card",""]],inputs:{card:"card"},standalone:!0,features:[t.jDz],attrs:["card",""],decls:5,vars:7,consts:[[1,"text-center"],[1,"floating"],[1,"mb-10p",3,"name","svgStyle"],["class","heading-3 fw-bold mt-20p text-center",4,"ngIf"],["class","pt-20p text-center",3,"mt-20p",4,"ngIf"],[1,"heading-3","fw-bold","mt-20p","text-center"],[1,"pt-20p","text-center"]],template:function(p,c){1&p&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"svg-icon",2),t.qZA(),t.YNc(3,i,2,1,"h3",3),t.YNc(4,o,2,3,"p",4),t.qZA()),2&p&&(t.Udp("width","250px"),t.xp6(2),t.Q6J("name",c.card.icon)("svgStyle",t.DdM(6,n)),t.xp6(1),t.Q6J("ngIf",c.card.title),t.xp6(1),t.Q6J("ngIf",c.card.description))},dependencies:[l.O5,e._J,e.bk],styles:["@keyframes _ngcontent-%COMP%_float{0%{transform:translatey(0)}50%{transform:translatey(-20px)}to{transform:translatey(0)}}.floating[_ngcontent-%COMP%]{transform:translatey(0);animation:_ngcontent-%COMP%_float 6s ease-in-out infinite}"]})},3903:(m,_,a)=>{a.d(_,{o:()=>i});var l=a(577),e=a(7695),t=a(4650);const d=function(){return{"width.%":100,"height.%":100}};class i{}i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-grand-prize"]],standalone:!0,features:[t.jDz],decls:19,vars:6,consts:[[1,"container"],[1,"text-center","title"],[1,"align-items-center","d-flex","flex-column-reverse","flex-lg-row","mt-90p"],[1,"d-flex","flex-column","pe-lg-5"],[1,"sub-heading"],[1,"sub-heading","mt-10p"],[1,"heading-3","mt-50p"],[1,"heading-3","mt-10p"],[1,"text-5","mt-30p","small-text"],[1,"d-flex","mt-40p"],[3,"buttonId","link","text"],[1,"main-visual","text-center","text-lg-start","mb-5","mb-lg-0"],["name","grand-prize",1,"image",3,"applyClass","svgStyle"]],template:function(n,r){1&n&&(t.TgZ(0,"section",0)(1,"div",1),t._uU(2,"THE GRAND PRIZE"),t.qZA(),t.TgZ(3,"div",2)(4,"div",3)(5,"span",4),t._uU(6," A loot crate filled with treasures rare, "),t.qZA(),t.TgZ(7,"span",5),t._uU(8," At HackTM, it's the prize to share. "),t.qZA(),t.TgZ(9,"h3",6),t._uU(10,"Introducing the Loot Crate"),t.qZA(),t.TgZ(11,"h3",7),t._uU(12,"The one and only"),t.qZA(),t.TgZ(13,"span",8),t._uU(14," Just like previous years, the winning team takes home a box filled with gadgets worth 6000\u20ac. "),t.qZA(),t.TgZ(15,"div",9),t._UZ(16,"app-hack-anchor",10),t.qZA()(),t.TgZ(17,"div",11),t._UZ(18,"svg-icon",12),t.qZA()()()),2&n&&(t.xp6(16),t.Q6J("buttonId","get-your-ticket-grand-prize")("link","https://now.hacktm.ro/tickets")("text","Get your ticket"),t.xp6(2),t.Q6J("applyClass",!0)("svgStyle",t.DdM(5,d)))},dependencies:[l._J,l.bk,e.Q]})},2631:(m,_,a)=>{a.d(_,{a:()=>i});var l=a(6895),e=a(4650),t=a(1481);function d(o,n){if(1&o&&(e.TgZ(0,"div",3),e._UZ(1,"iframe",4),e.qZA()),2&o){const r=n.$implicit;e.xp6(1),e.Q6J("src",r,e.uOi)}}class i{constructor(n){this.domSanitizer=n,this._urls=[]}set urls(n){const r=Array.isArray(n)?n:[n];this._urls=r.map(s=>this.getSanitized(s))}getSanitized(n){return this.domSanitizer.bypassSecurityTrustResourceUrl(n)}}i.\u0275fac=function(n){return new(n||i)(e.Y36(t.H7))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-iframe-with-title"]],inputs:{title:"title",urls:"urls"},standalone:!0,features:[e.jDz],decls:4,vars:2,consts:[[1,"container","align-items-center"],[1,"title","mb-50p","whitespace-preline","text-center","text-lg-start"],["class","video-container d-flex position-relative align-items-center justify-content-center",4,"ngFor","ngForOf"],[1,"video-container","d-flex","position-relative","align-items-center","justify-content-center"],["height","100%","width","100%",3,"src"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"p",1),e._uU(2),e.qZA(),e.YNc(3,d,2,1,"div",2),e.qZA()),2&n&&(e.xp6(2),e.hij(" ",r.title," "),e.xp6(1),e.Q6J("ngForOf",r._urls))},dependencies:[l.ax],styles:[".video-container[_ngcontent-%COMP%]{margin:auto;max-width:80vw;height:500px}@media screen and (max-width: 768px){.video-container[_ngcontent-%COMP%]{height:300px}}.whitespace-preline[_ngcontent-%COMP%]{white-space:pre-line}"]})}}]);