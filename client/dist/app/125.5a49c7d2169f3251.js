"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[125],{3125:(v,u,r)=>{r.r(u),r.d(u,{SignModule:()=>x});var d=r(294),t=r(2096),l=r(1217),h=r(3071),c=r(1678),a=r(4182),g=r(9808);const f=["email"],m=["password"];function w(s,p){if(1&s){const e=t.EpF();t.TgZ(0,"div",4)(1,"span",5),t._uU(2,"Code:"),t.qZA(),t.TgZ(3,"input",13),t.NdJ("ngModelChange",function(i){return t.CHM(e),t.oxw().user.code=i}),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(3),t.Q6J("ngModel",e.user.code)}}const _=[{path:"",component:(()=>{class s{constructor(e,n,i,o,y){this.alert=e,this.http=n,this.hash=i,this.us=o,this.router=y,this.user={},this.reseting=!1,this.user.email=this.hash.get("email")||"ceo@webart.work",this.user.password=this.hash.get("password")||"asdasdasdasd"}email_focus(){setTimeout(()=>{this.email.nativeElement.focus()},100)}password_focus(){setTimeout(()=>{this.password.nativeElement.focus()},100)}submit(){return this.reseting&&this.user.code?this.save():this.user.email?(this.hash.set("email",this.user.email),this.user.password?void this.http.post("/api/user/status",this.user,e=>{e.email&&e.pass?this.login():e.email?this.reset():this.sign()}):(this.alert.error({text:"Enter your password"}),this.password_focus())):(this.alert.error({text:"Enter your email"}),this.email_focus())}login(){this.http.post("/api/user/login",this.user,e=>{if(!e)return this.alert.error({text:"Something went wrong"});this.us.user=e,this.http.set("token",e.token),localStorage.setItem("waw_user",JSON.stringify(e)),this.router.navigate(["/profile"])})}sign(){this.http.post("/api/user/signup",this.user,e=>{if(!e)return this.alert.error({text:"Something went wrong"});this.us.user=e,this.http.set("token",e.token),localStorage.setItem("waw_user",JSON.stringify(e)),this.router.navigate(["/profile"])})}reset(){this.http.post("/api/user/request",this.user,e=>{this.reseting=!0}),this.alert.info({text:"Mail will sent to your email"})}save(){this.http.post("/api/user/change",this.user,e=>{this.alert.info({text:e}),"Password successfully changed."==e&&this.http.post("/api/user/login",this.user,n=>{if(!n)return this.alert.error({text:"Something went wrong"});this.us.user=n,this.http.set("token",n.token),localStorage.setItem("waw_user",JSON.stringify(n)),this.router.navigate(["/profile"])})})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(l.c9),t.Y36(l.OE),t.Y36(l.ol),t.Y36(h.KD),t.Y36(c.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-sign"]],viewQuery:function(e,n){if(1&e&&(t.Gf(f,5),t.Gf(m,5)),2&e){let i;t.iGM(i=t.CRH())&&(n.email=i.first),t.iGM(i=t.CRH())&&(n.password=i.first)}},decls:19,vars:3,consts:[[1,"auth-wrapper"],[1,"auth"],[1,"auth__title"],[1,"auth__forms",3,"ngSubmit"],[1,"w-forms"],[1,"w-forms__title"],["type","text","placeholder","Email","name","email",1,"w-forms__input",3,"ngModel","keydown.enter","ngModelChange"],["email",""],["type","password","placeholder","Password","name","password",1,"w-forms__input",3,"ngModel","ngModelChange"],["password",""],["class","w-forms",4,"ngIf"],[1,"auth__btn"],["type","submit",1,"w-btn","_primary"],["type","text","placeholder","Code","name","code",1,"w-forms__input",3,"ngModel","ngModelChange"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Sign In / Sign Up"),t.qZA(),t.TgZ(4,"form",3),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(5,"div",4)(6,"span",5),t._uU(7,"Email:"),t.qZA(),t.TgZ(8,"input",6,7),t.NdJ("keydown.enter",function(){return!n.user.password&&n.password_focus()})("ngModelChange",function(o){return n.user.email=o}),t.qZA()(),t.TgZ(10,"div",4)(11,"span",5),t._uU(12,"Password:"),t.qZA(),t.TgZ(13,"input",8,9),t.NdJ("ngModelChange",function(o){return n.user.password=o}),t.qZA()(),t.YNc(15,w,4,1,"div",10),t.TgZ(16,"div",11)(17,"button",12),t._uU(18,"Let's go"),t.qZA()()()()()),2&e&&(t.xp6(8),t.Q6J("ngModel",n.user.email),t.xp6(5),t.Q6J("ngModel",n.user.password),t.xp6(2),t.Q6J("ngIf",n.reseting))},directives:[a._Y,a.JL,a.F,a.Fj,a.JJ,a.On,g.O5],styles:['[_ngcontent-%COMP%]:root{--c-white: #fff;--c-black: #000;--c-grey: #e7e7e7;--c-grey-dark: #bfbfbf;--c-basic: #3558ae;--c-primary: #256eff;--c-primary-hover: #0051f1;--c-secondary: red;--c-bg-primary: #f3f4f7;--c-bg-secondary: #ffffff;--c-bg-tertiary: #fcfdfe;--c-border: #f0f1f7;--c-shadow: #f3f3f3;--c-text-primary: #666666;--c-text-secondary: #19235c;--c-placeholder: #adb8c6;--c-warn: #e67e22;--c-error: #e74c3c;--c-error-hover: #d62c1a;--c-success: #14c76e;--c-info: #17a2b8;--container: 1210px;--b-radius: 8px;--b-radius-card: 10px;--b-radius-btn: 10px;--b-radius-img: 50%;--padding: 10px;--fs: 16px;--ff-bold: bold;--ff-base: "Poppins", sans-serif;--letter-spacing: .3px;--transition: .3s all ease-in-out}html.dark[_ngcontent-%COMP%]:root{--c-basic: #333;--c-bg-primary: #282828;--c-bg-secondary: #343434;--c-bg-tertiary: #404040;--c-border: #404040;--c-shadow: #444444;--c-text-primary: #ffffff;--c-text-secondary: #ffffff;--c-placeholder: #7a7a7a}[_nghost-%COMP%]{position:fixed;width:100%;height:100%;overflow-y:auto;display:flex;flex-direction:column}.auth-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background:var(--c-bg-primary);flex-grow:1;padding:20px}.auth[_ngcontent-%COMP%]{max-width:500px;width:100%;padding:40px;border-radius:var(--b-radius-card);box-shadow:0 0 6px var(--c-shadow);background:var(--c-white)}.auth__title[_ngcontent-%COMP%]{font-size:var(--fs)8px;font-weight:var(--ff-bold);color:var(--c-text-primary);text-align:center;margin-bottom:15px}@media (max-width: 767.9px){.auth__title[_ngcontent-%COMP%]{font-size:var(--fs)2px}}.auth__btn[_ngcontent-%COMP%]{text-align:center;margin-top:30px}.auth__btn[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%]{margin:0;width:100%}@media (max-width: 767.9px){.auth[_ngcontent-%COMP%]   .form__title[_ngcontent-%COMP%]{font-size:var(--fs)-2px}}']}),s})()}];let x=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[],imports:[[c.Bz.forChild(_),d.I]]}),s})()}}]);