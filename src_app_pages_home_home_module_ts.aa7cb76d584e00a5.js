"use strict";(self.webpackChunkhacktm_website=self.webpackChunkhacktm_website||[]).push([["src_app_pages_home_home_module_ts"],{6237:(ft,E,r)=>{r.r(E),r.d(E,{HomeModule:()=>u});var z=r(6811),t=r(4650),M=r(2469),l=r(6895),C=r(577),O=r(7695);function B(n,e){1&n&&t.GkF(0)}function W(n,e){1&n&&t.GkF(0)}function R(n,e){1&n&&(t.TgZ(0,"h2",10),t._uU(1,"12-14 MAY"),t.qZA(),t.TgZ(2,"h3",11),t._uU(3,"CRAFT"),t.qZA(),t.TgZ(4,"h4",12),t._uU(5,"(Centrul Regional de Afaceri Timi\u0219oara)"),t.qZA(),t.TgZ(6,"div",13),t._UZ(7,"app-hack-anchor",14),t.qZA()),2&n&&(t.xp6(7),t.Q6J("buttonId","get-your-ticket-hero")("link","https://now.hacktm.ro/tickets")("text","Get your ticket"))}const G=function(){return{"width.%":100,"height.%":100}};class f{}f.\u0275fac=function(e){return new(e||f)},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-start"]],decls:16,vars:4,consts:[[1,"d-lg-flex","container","pt-md-40p"],["id","hero-wrapper",1,"ms-lg-60p","d-flex","flex-column","flex-1"],[1,"heading-1","mb-10p"],[1,"heading-1","text-outline"],[1,"d-none","d-lg-block","pb-40p","mt-80p"],[4,"ngTemplateOutlet"],[1,"d-flex","flex-1"],["id","main-visual","name","main-visual",3,"svgStyle"],[1,"mobile-date-wrapper","d-flex","d-lg-none","pb-40p","mt-20p"],["details",""],[1,"heading-2","mb-10p"],[1,"heading-3","mb-10p"],[1,"heading-4","mb-60p"],[1,"d-flex"],[3,"buttonId","link","text"]],template:function(e,o){if(1&e&&(t.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"h1",2),t._uU(4,"HACK \\"),t.qZA(),t.TgZ(5,"h1",3),t._uU(6,"THE CAPITAL"),t.qZA(),t.TgZ(7,"div",4),t.YNc(8,B,1,0,"ng-container",5),t.qZA()(),t.TgZ(9,"div",6),t._UZ(10,"svg-icon",7),t.qZA(),t.TgZ(11,"div",8)(12,"div"),t.YNc(13,W,1,0,"ng-container",5),t.qZA()()(),t.YNc(14,R,8,3,"ng-template",null,9,t.W1O),t.qZA()),2&e){const a=t.MAs(15);t.xp6(8),t.Q6J("ngTemplateOutlet",a),t.xp6(2),t.Q6J("svgStyle",t.DdM(3,G)),t.xp6(3),t.Q6J("ngTemplateOutlet",a)}},dependencies:[l.tP,C.bk,O.Q],styles:["section[_ngcontent-%COMP%]{padding:25px 50px 0}section[_ngcontent-%COMP%]   .heading-1[_ngcontent-%COMP%]{white-space:nowrap}section[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{width:60%}section[_ngcontent-%COMP%]   .mobile-date-wrapper[_ngcontent-%COMP%]{justify-content:space-between}@media screen and (max-width: 992px){section[_ngcontent-%COMP%]   #hero-wrapper[_ngcontent-%COMP%]{padding-right:10%}section[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{width:100%}}section[_ngcontent-%COMP%]   #vertical-lines-wrapper[_ngcontent-%COMP%]{margin-top:-20vw}#get-your-ticket-hero[_ngcontent-%COMP%]{display:block;width:-moz-fit-content;width:fit-content}.get-tickets-button[_ngcontent-%COMP%]{height:60px;display:block;width:-moz-fit-content;width:fit-content}"]});var q=r(5926),V=r(7746),D=r(3359),U=function(){return(U=Object.assign||function(n){for(var e,o=1,a=arguments.length;o<a;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}).apply(this,arguments)},X=function(){function n(e,o,a){var i=this;this.endVal=o,this.options=a,this.version="2.4.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(s){i.startTime||(i.startTime=s);var p=s-i.startTime;i.remaining=i.duration-p,i.frameVal=i.useEasing?i.countDown?i.startVal-i.easingFn(p,0,i.startVal-i.endVal,i.duration):i.easingFn(p,i.startVal,i.endVal-i.startVal,i.duration):i.startVal+p/i.duration*(i.endVal-i.startVal),i.frameVal=(i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal)?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),p<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(s){var p,c,m,g,gt=s<0?"-":"";p=Math.abs(s).toFixed(i.options.decimalPlaces);var H=(p+="").split(".");if(c=H[0],m=H.length>1?i.options.decimal+H[1]:"",i.options.useGrouping){g="";for(var j=3,I=0,Z=0,L=c.length;Z<L;++Z)i.options.useIndianSeparators&&4===Z&&(j=2,I=1),0!==Z&&I%j==0&&(g=i.options.separator+g),I++,g=c[L-Z-1]+g;c=g}return i.options.numerals&&i.options.numerals.length&&(c=c.replace(/[0-9]/g,function(S){return i.options.numerals[+S]}),m=m.replace(/[0-9]/g,function(S){return i.options.numerals[+S]})),gt+i.options.prefix+c+m+i.options.suffix},this.easeOutExpo=function(s,p,c,m){return c*(1-Math.pow(2,-10*s/m))*1024/1023+p},this.options=U(U({},this.defaults),a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(o),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return i.handleScroll(i)}),window.onscroll=function(){window.onScrollFns.forEach(function(s){return s()})},this.handleScroll(this)))}return n.prototype.handleScroll=function(e){if(e&&window&&!e.once){var o=window.innerHeight+window.scrollY,a=e.el.getBoundingClientRect(),i=a.top+window.pageYOffset,s=a.top+a.height+window.pageYOffset;s<o&&s>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>s||i>o)&&!e.paused&&e.reset()}},n.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e,Math.abs(e-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing?(this.finalEndVal=e,this.endVal=e+(this.countDown?1:-1)*this.options.smartEasingAmount,this.duration=this.duration/2):(this.endVal=e,this.finalEndVal=null),this.useEasing=null===this.finalEndVal&&this.options.useEasing},n.prototype.start=function(e){this.error||(this.callback=e,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},n.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},n.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},n.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},n.prototype.printValue=function(e){var o=this.formattingFn(e);this.el&&("INPUT"===this.el.tagName?this.el.value=o:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=o:this.el.innerHTML=o)},n.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},n.prototype.validateValue=function(e){var o=Number(e);return this.ensureNumber(o)?o:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},n.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},n}();let $=(()=>{class n{constructor(o,a,i){this.el=o,this.zone=a,this.platformId=i,this.options={},this.reanimateOnClick=!0,this.complete=new t.vpe}onClick(){this.reanimateOnClick&&this.animate()}ngOnChanges(o){if(!(0,l.NF)(this.platformId))return;const{options:a,endVal:i}=o;void 0!==i?.currentValue?void 0!==this.countUp?this.zone.runOutsideAngular(()=>{this.countUp.update(this.endVal)}):this.initAndRun():void 0!==a?.currentValue&&this.initAndRun()}animate(){this.zone.runOutsideAngular(()=>{this.countUp.reset(),this.countUp.start(()=>{this.zone.run(()=>{this.complete.emit()})})})}initAndRun(){this.zone.runOutsideAngular(()=>{this.countUp=new X(this.el.nativeElement,this.endVal,this.options),this.options.enableScrollSpy||this.animate()})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(t.SBq),t.Y36(t.R0b),t.Y36(t.Lbi))},n.\u0275dir=t.lG2({type:n,selectors:[["","countUp",""]],hostBindings:function(o,a){1&o&&t.NdJ("click",function(){return a.onClick()})},inputs:{endVal:["countUp","endVal"],options:"options",reanimateOnClick:"reanimateOnClick"},outputs:{complete:"complete"},features:[t.TTD]}),n})(),K=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[]]}),n})();function tt(n,e){1&n&&t._UZ(0,"div",10)}const et=function(n){return{"flex-grow":n}};function nt(n,e){1&n&&t._UZ(0,"div",12),2&n&&t.Q6J("ngStyle",t.VKq(1,et,e.$implicit))}function it(n,e){if(1&n&&t.YNc(0,nt,1,3,"div",11),2&n){const o=t.oxw(2);t.Q6J("ngForOf",o.dotsFlexGrow)("ngForTrackBy",o.trackByFn)}}const ot=function(){return{enableScrollSpy:!0,scrollSpyOnce:!0,duration:3,suffix:"+"}};function at(n,e){if(1&n&&(t.TgZ(0,"div",4)(1,"span",5),t._uU(2,"0"),t.qZA(),t.TgZ(3,"div",6)(4,"span",7),t._uU(5),t.qZA(),t.YNc(6,tt,1,0,"div",8),t.YNc(7,it,1,2,"ng-template",null,9,t.W1O),t.qZA()()),2&n){const o=e.$implicit,a=t.MAs(8);t.xp6(1),t.Q6J("countUp",o.heading)("options",t.DdM(5,ot)),t.xp6(4),t.Oqu(o.subheading),t.xp6(1),t.Q6J("ngIf",!o.dottedLine)("ngIfElse",a)}}function N(n,e){return Math.floor(Math.random()*(e-n+1))+n}var F=new WeakMap;class x{constructor(e){(0,q.Z)(this,F,{writable:!0,value:void 0}),this.platformId=e,this.hackInNumbers=[{heading:2500,subheading:"people at HackTM"},{heading:580,subheading:"sleepless hours"},{heading:1820,subheading:"coffee cups"},{heading:436170,subheading:"written code lines",dottedLine:!0},{heading:500,subheading:"pitched ideas"}],this.dotsFlexGrow=Array.from({length:7},()=>N(2,25)),this.trackByFn=o=>o,(0,l.NF)(this.platformId)&&(0,D.Z)(this,F,setInterval(()=>{const o=function st(n){return[].concat(n).sort(()=>.5-Math.random())}(this.dotsFlexGrow);o.shift(),this.dotsFlexGrow=[...o,N(2,25)]},1500))}ngOnDestroy(){clearInterval((0,V.Z)(this,F))}}function rt(n,e){if(1&n&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&n){const o=e.$implicit;t.Tol("text-5 "+(o.class||"")),t.xp6(1),t.Oqu(o.content)}}x.\u0275fac=function(e){return new(e||x)(t.Y36(t.Lbi))},x.\u0275cmp=t.Xpm({type:x,selectors:[["app-hack-in-numbers"]],decls:5,vars:1,consts:[[1,"px-lg-100p","px-xl-150p","px-xxl-200p"],[1,"container","align-items-center"],[1,"heading-3","mb-50p","mb-md-80p"],["class","d-flex flex-column mt-50p mt-md-70p",4,"ngFor","ngForOf"],[1,"d-flex","flex-column","mt-50p","mt-md-70p"],[1,"big-heading","orange-color",3,"countUp","options"],[1,"d-flex"],[1,"sub-heading"],["class","ms-10p ms-md-30p line flex-grow-1 align-self-center",4,"ngIf","ngIfElse"],["dottedLine",""],[1,"ms-10p","ms-md-30p","line","flex-grow-1","align-self-center"],["class","ms-10p ms-md-30p line dotted align-self-center",3,"ngStyle",4,"ngFor","ngForOf","ngForTrackBy"],[1,"ms-10p","ms-md-30p","line","dotted","align-self-center",3,"ngStyle"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h3",2),t._uU(3,"HackTM throughout the years:"),t.qZA(),t.YNc(4,at,9,6,"div",3),t.qZA()()),2&e&&(t.xp6(4),t.Q6J("ngForOf",o.hackInNumbers))},dependencies:[l.sg,l.O5,l.PC,$],styles:[".big-heading[_ngcontent-%COMP%]{line-height:1;font-size:118px;font-weight:700}@media screen and (max-width: 1200px){.big-heading[_ngcontent-%COMP%]{font-size:110px}}@media screen and (max-width: 768px){.big-heading[_ngcontent-%COMP%]{font-size:65px}}.line[_ngcontent-%COMP%]{background:#fff;height:14px;align-self:end;border-radius:10px}@media screen and (max-width: 1200px){.line[_ngcontent-%COMP%]{height:10px}}@media screen and (max-width: 768px){.line[_ngcontent-%COMP%]{height:8px}}.dotted[_ngcontent-%COMP%]{transition:flex-grow 1s ease-in-out}"]});const lt=function(){return{"width.%":100,"height.%":100}};class _{constructor(){this.paragraphs=[{content:"In 2023, Timisoara is not only the European Capital of Culture but the Capital of Hackathons as well."},{content:"Hack the Capital is a 48h marathon of elite programming, with the purpose to generate astounding ideas applied to solve real-life community problems."},{content:"IT professionals, designers, tech enthusiasts, and non-programmers, you are all welcome at this year\u2019s HackTM. Participants can expect 48h of hardcore coding, crazed ideas, exceptional prizes and much more."},{content:"HackTM 2023 aims to gather 500+ participants, a supportive community and most probably endless cups of coffee to keep us all going."},{content:"WHEN? Between 12th - 14th of May",class:"fw-bold mt-40p blue-ish-color"},{content:"WHERE? CRAFT (Centrul Regional de Afaceri Timi\u0219oara)",class:"fw-bold mt-20p mb-40p blue-ish-color"}]}}_.\u0275fac=function(e){return new(e||_)},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-hack-the-capital-details"]],decls:15,vars:6,consts:[[1,"img-container","px-md-50p","px-lg-100p","px-xl-150p","px-xxl-200p"],[1,"container","d-flex","flex-column"],[1,"title"],[1,"heading-3","my-50p"],[1,"d-flex","flex-column-reverse","flex-md-row","content-wrapper"],[1,"flex-1","pe-md-5"],[3,"class",4,"ngFor","ngForOf"],[3,"buttonId","link","text"],[1,"flex-1","d-flex","image-wrapper"],["name","location-imagery",3,"svgStyle"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"span"),t._uU(4,"In 2023,"),t.qZA(),t.TgZ(5,"div"),t._uU(6,"we Hack The Capital!"),t.qZA()(),t.TgZ(7,"h3",3),t._uU(8," Programmers, tech enthusiasts and code aficionados - all unite! "),t.qZA(),t.TgZ(9,"div",4)(10,"div",5),t.YNc(11,rt,2,3,"p",6),t._UZ(12,"app-hack-anchor",7),t.qZA(),t.TgZ(13,"div",8),t._UZ(14,"svg-icon",9),t.qZA()()()()),2&e&&(t.xp6(11),t.Q6J("ngForOf",o.paragraphs),t.xp6(1),t.Q6J("buttonId","get-your-ticket-details")("link","https://now.hacktm.ro/tickets")("text","Get your ticket"),t.xp6(2),t.Q6J("svgStyle",t.DdM(5,lt)))},dependencies:[l.sg,C.bk,O.Q],styles:[".image-wrapper[_ngcontent-%COMP%]{max-width:700px}@media screen and (min-width: 768px){.content-wrapper[_ngcontent-%COMP%]{width:calc(100% + 40px)}}@media screen and (min-width: 992px){.content-wrapper[_ngcontent-%COMP%]{width:calc(100% + 110px)}}"]});const ct=function(){return{"width.%":100,"height.%":100}};class v{}v.\u0275fac=function(e){return new(e||v)},v.\u0275cmp=t.Xpm({type:v,selectors:[["app-what-the-hack-is-hack"]],decls:11,vars:2,consts:[[1,"px-lg-100p","px-xl-150p","px-xxl-200p"],[1,"container","align-items-center","d-flex","flex-column","flex-lg-row-reverse"],[1,"ms-lg-80p"],[1,"heading-3","mb-30p","mb-md-50p"],[1,"text-5"],[1,"text-5","mt-30p"],[1,"mt-120p","mt-lg-0"],["name","hack-tm-chip",3,"svgStyle"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h3",3),t._uU(4,"What the hack is HackTM?"),t.qZA(),t.TgZ(5,"p",4),t._uU(6," HackTM is the largest hackathon in South-Eastern Europe brought to you on a yearly basis by the people of Banat IT. It is a fun competition within the coding arena between digital pundits and coders of all kinds. "),t.qZA(),t.TgZ(7,"p",5),t._uU(8,"Lights on! Let\u2019s make this hackathon shine!"),t.qZA()(),t.TgZ(9,"div",6),t._UZ(10,"svg-icon",7),t.qZA()()()),2&e&&(t.xp6(10),t.Q6J("svgStyle",t.DdM(1,ct)))},dependencies:[C.bk],styles:["@media screen and (max-width: 992px){.main-visual[_ngcontent-%COMP%]{text-align:center}}@media screen and (max-width: 768px){.image[_ngcontent-%COMP%]{width:70%}}@media screen and (max-width: 992px){.image[_ngcontent-%COMP%]{margin-top:25px}}"]});var J=r(3949);function pt(n,e){if(1&n&&(t.TgZ(0,"div",7),t._UZ(1,"app-card",8),t.qZA()),2&n){const o=e.$implicit,a=e.first,i=e.last;t.xp6(1),t.ekj("mb-40p",!i)("mt-40p",!a),t.Q6J("card",o)}}class y{constructor(){this.cards=[{icon:"connect",title:"connect",description:"network with like-minded individuals just like you"},{icon:"gain-hand",title:"gain hands-on experience",description:"upgrade your technical skills and learn new technologies"},{icon:"brag-about",title:"brag about your coding talent",description:"show off your skills and bring cool ideas to life"},{icon:"boost-career",title:"boost your career",description:"bolster your confidence and tackle new work opportunities"},{icon:"sleep-less",title:"sleep less, have fun more",description:"and win them prizes, but of course"}]}}y.\u0275fac=function(e){return new(e||y)},y.\u0275cmp=t.Xpm({type:y,selectors:[["app-why-the-hack-join"]],decls:12,vars:2,consts:[[1,"px-lg-100p","px-xl-150p","px-xxl-200p"],[1,"container"],[1,"heading-3"],[1,"sub-heading","my-40p"],[3,"height"],[1,"d-flex","justify-content-center","row","px-xxl-150p","px-xxxl-200p"],["class","col-12 col-md-6 d-flex justify-content-center",4,"ngFor","ngForOf"],[1,"col-12","col-md-6","d-flex","justify-content-center"],[3,"card"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div")(3,"h3",2),t._uU(4,"Why the hack would you regret joining Hack?!"),t.qZA(),t.TgZ(5,"h3",2),t._uU(6,"There are no downsides."),t.qZA()(),t.TgZ(7,"p",3),t._uU(8,"HackTM 2023 is a great option to:"),t.qZA(),t._UZ(9,"app-spacer",4),t.TgZ(10,"div",5),t.YNc(11,pt,2,5,"div",6),t.qZA()()()),2&e&&(t.xp6(9),t.Q6J("height",75),t.xp6(2),t.Q6J("ngForOf",o.cards))},dependencies:[l.sg,M.Y,J.A],styles:[".header[_ngcontent-%COMP%]{font-size:64px;font-weight:700}@media screen and (max-width: 768px){.header[_ngcontent-%COMP%]{font-size:50px}}.sub-header[_ngcontent-%COMP%]{font-size:42px}@media screen and (max-width: 768px){.sub-header[_ngcontent-%COMP%]{font-size:30px}}"]});var P=r(9237),Q=r(2631);class w{}function dt(n,e){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.TgZ(2,"span",6),t._uU(3,"d"),t.qZA(),t.TgZ(4,"span",7),t._uU(5,":"),t.qZA()()),2&n){const o=t.oxw();t.xp6(1),t.hij(" ",o.timeLeft.days,"")}}function ht(n,e){if(1&n&&(t.TgZ(0,"span")(1,"span",7),t._uU(2,":"),t.qZA(),t._uU(3),t.TgZ(4,"span",6),t._uU(5,"s"),t.qZA()()),2&n){const o=t.oxw();t.xp6(3),t.hij(" ",o.timeLeft.seconds,"")}}w.\u0275fac=function(e){return new(e||w)},w.\u0275cmp=t.Xpm({type:w,selectors:[["app-people-of-hack"]],decls:5,vars:3,consts:[[1,"px-lg-100p","px-xl-150p","px-xxl-200p"],[3,"title","urls"],[1,"d-flex","justify-content-center","mt-50p"],["hack-button","","href","https://now.hacktm.ro/tickets","id","get-your-ticket-people-of-hack-section","size","large","target","_blank",3,"color"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0),t._UZ(1,"app-iframe-with-title",1),t.TgZ(2,"div",2)(3,"a",3),t._uU(4," Ready to join? "),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("title","People of Hack")("urls","https://www.youtube.com/embed/Qeni0n0CKTI"),t.xp6(2),t.Q6J("color","blueish-2"))},dependencies:[P.o,Q.a]});const d=1e3;var A=new WeakMap;class b{constructor(e){(0,q.Z)(this,A,{writable:!0,value:void 0}),this.platformId=e;const o=new Date(Date.UTC(2023,2,26,22,0,0)).getTime(),a=()=>{const i=(new Date).getTime(),s=o-i;this.timeLeft={days:Math.floor(s/864e5),hours:Math.floor(s%864e5/36e5),minutes:Math.floor(s%36e5/(60*d)),seconds:Math.floor(s%(60*d)/d)},s<0&&(this.timeLeft={days:0,hours:0,minutes:0,seconds:0},clearInterval((0,V.Z)(this,A)))};(0,l.NF)(this.platformId)&&(a(),(0,D.Z)(this,A,setInterval(a,1e3)))}ngOnDestroy(){clearInterval((0,V.Z)(this,A))}}b.\u0275fac=function(e){return new(e||b)(t.Y36(t.Lbi))},b.\u0275cmp=t.Xpm({type:b,selectors:[["app-early-bird-countdown"]],decls:20,vars:5,consts:[[1,"px-lg-100p","px-xl-150p","px-xxl-200p"],[1,"container","d-flex","flex-column","align-items-center"],[1,"d-flex","flex-column","align-items-center","mb-50p"],[1,"heading-3","mb-50p","text-center"],[1,"heading-1","text-center"],[4,"ngIf"],[1,"time-letters"],[1,"dot"],["hack-button","","href","https://now.hacktm.ro/tickets","id","get-your-ticket-early-bird","target","_blank",3,"color"]],template:function(e,o){if(1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h3",3),t._uU(4,"Early bird sale ends in"),t.qZA(),t.TgZ(5,"h1",4),t.YNc(6,dt,6,1,"span",5),t.TgZ(7,"span"),t._uU(8),t.TgZ(9,"span",6),t._uU(10,"h"),t.qZA(),t.TgZ(11,"span",7),t._uU(12,":"),t.qZA()(),t.TgZ(13,"span"),t._uU(14),t.TgZ(15,"span",6),t._uU(16,"m"),t.qZA()(),t.YNc(17,ht,6,1,"span",5),t.qZA()(),t.TgZ(18,"a",8),t._uU(19," Tickets "),t.qZA()()()),2&e){let a,i;t.xp6(6),t.Q6J("ngIf",null==o.timeLeft?null:o.timeLeft.days),t.xp6(2),t.hij(" ",null!==(a=null==o.timeLeft?null:o.timeLeft.hours)&&void 0!==a?a:0,""),t.xp6(6),t.hij(" ",null!==(i=null==o.timeLeft?null:o.timeLeft.minutes)&&void 0!==i?i:0,""),t.xp6(3),t.Q6J("ngIf",o.timeLeft&&!o.timeLeft.days),t.xp6(1),t.Q6J("color","yellow")}},dependencies:[l.O5,P.o],styles:[".time-letters[_ngcontent-%COMP%]{color:#feb600;font-size:30px}@keyframes _ngcontent-%COMP%_blink{50%{color:transparent}}.dot[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blink 1s infinite}"]});class k{}k.\u0275fac=function(e){return new(e||k)},k.\u0275cmp=t.Xpm({type:k,selectors:[["ng-component"]],decls:29,vars:8,consts:[[1,"position-relative"],[1,"blurred","blue-ish-2-bg","circle-1000","hero-blur-position"],[1,"blurred","orange-red-bg","w-100","h-100"],[3,"height"],[1,"blurred","opacity-03","circle-750","right-0","blue-ish-bg"],[1,"blurred","opacity-03","circle-750","left-blur","hack-cherry-bg"],[1,"blurred","w-100","h-100","blue-ish-2-bg"],[1,"blurred","opacity-03","circle-750","why-join-blur-position","orange-red-bg"],[1,"blurred","opacity-03","circle-750","why-join-green-blur-position","hack-green-bg"],[1,"blurred","opacity-03","circle-750","why-join-blur-position","blue-ish-2-bg"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div",1)(2,"app-start"),t.qZA(),t.TgZ(3,"div",0),t._UZ(4,"div",2)(5,"app-spacer",3)(6,"app-early-bird-countdown")(7,"app-spacer",3),t.qZA(),t._UZ(8,"app-spacer",3),t.TgZ(9,"div",0),t._UZ(10,"div",4)(11,"div",5)(12,"app-hack-in-numbers"),t.qZA(),t._UZ(13,"app-spacer",3),t.TgZ(14,"div",0),t._UZ(15,"div",6)(16,"app-hack-the-capital-details")(17,"app-spacer",3)(18,"app-what-the-hack-is-hack"),t.qZA(),t.TgZ(19,"div",0),t._UZ(20,"div",7)(21,"div",8)(22,"app-spacer",3)(23,"app-why-the-hack-join"),t.qZA(),t._UZ(24,"app-spacer",3),t.TgZ(25,"div",0),t._UZ(26,"div",9)(27,"app-people-of-hack"),t.qZA(),t._UZ(28,"app-spacer",3)),2&e&&(t.xp6(5),t.Q6J("height",150),t.xp6(2),t.Q6J("height",150),t.xp6(1),t.Q6J("height",100),t.xp6(5),t.Q6J("height",250),t.xp6(4),t.Q6J("height",200),t.xp6(5),t.Q6J("height",250),t.xp6(2),t.Q6J("height",250),t.xp6(4),t.Q6J("height",250))},dependencies:[M.Y,f,x,_,v,y,w,b],styles:[".left-blur[_ngcontent-%COMP%]{left:-50px;bottom:0}.why-join-blur-position[_ngcontent-%COMP%]{top:0;left:-50px}.why-join-green-blur-position[_ngcontent-%COMP%]{top:50%;right:0}"]});var ut=r(6880);const mt=[{path:"",component:k,resolve:{meta:ut.H},data:{metaId:"home"}}];class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[z.Bz.forChild(mt),l.ez,C._J,P.o,Q.a,M.Y,K,J.A,O.Q]})}}]);