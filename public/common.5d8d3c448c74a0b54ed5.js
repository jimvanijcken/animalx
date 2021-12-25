"use strict";(self.webpackChunkanimalx=self.webpackChunkanimalx||[]).push([[592],{31:(C,g,n)=>{n.d(g,{M:()=>v});var t=n(8002);class d{constructor(o,c,r,i,e,a,p,h){this.id=o,this.name=c,this.categoryId=r,this.description=i,this.price=e,this.country=a,this.color=p,this.images=h}static adapt(o){return new d(o.id,o.name,o.category_id,o.description,o.price,o.country,o.color,o.images.map(c=>c.filename))}}var u=n(2340),_=n(639),m=n(822),l=n(1841);let v=(()=>{class s{constructor(c,r){this._api=c,this._http=r}query(c){return this._api.get("/products",c).pipe((0,t.U)(r=>r.data.map(i=>d.adapt(i))))}get(c){return this._api.get("/products/"+c.toString()).pipe((0,t.U)(r=>d.adapt(r.data)))}create(c){return this._http.post(u.N.apiUrl+"/products",c).pipe((0,t.U)(r=>d.adapt(r.data)))}update(c,r){return this._api.patch("/products/"+c.toString(),r).pipe((0,t.U)(i=>d.adapt(i.data)))}delete(c){return this._api.delete("/products/"+c.toString())}}return s.\u0275fac=function(c){return new(c||s)(_.LFG(m.s),_.LFG(l.eN))},s.\u0275prov=_.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},4149:(C,g,n)=>{n.d(g,{R:()=>c});var t=n(639),d=n(4242),u=n(1556),_=n(31),m=n(8583);function l(r,i){if(1&r){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).updateCart(-1)}),t._uU(1,"-"),t.qZA()}}function v(r,i){if(1&r){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).updateCart(1)}),t._uU(1,"+"),t.qZA()}}function s(r,i){if(1&r){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(e);const p=t.oxw(2);return p.updateCart(-p.item.amount)}),t._uU(1,"\u2715"),t.qZA()}}function o(r,i){if(1&r&&(t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t._UZ(3,"img",4),t.qZA(),t.TgZ(4,"div",5),t.TgZ(5,"div",6),t._uU(6),t.qZA(),t.TgZ(7,"div",7),t._uU(8),t.qZA(),t.qZA(),t.TgZ(9,"div",5),t.YNc(10,l,2,0,"button",8),t.TgZ(11,"span",9),t._uU(12),t.qZA(),t.YNc(13,v,2,0,"button",8),t.qZA(),t.TgZ(14,"div",5),t._uU(15),t.ALo(16,"currency"),t.YNc(17,s,2,0,"button",8),t.qZA(),t.qZA(),t.qZA()),2&r){const e=t.oxw();t.xp6(3),t.Q6J("src",e.item.product.images[0]?"storage/"+e.item.product.images[0]:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",t.LSH),t.xp6(3),t.Oqu(e.category.name),t.xp6(2),t.Oqu(e.item.product.name),t.xp6(2),t.Q6J("ngIf",!e.disabled),t.xp6(2),t.Oqu(e.item.amount),t.xp6(1),t.Q6J("ngIf",!e.disabled),t.xp6(2),t.hij(" ",t.xi3(16,8,e.item.product.price*e.item.amount,"EUR")," "),t.xp6(2),t.Q6J("ngIf",!e.disabled)}}let c=(()=>{class r{constructor(e,a,p){this._categoryService=e,this._cartService=a,this._productService=p,this.disabled=!1}ngOnInit(){"product"in this.item?this._categoryService.get(this.item.product.categoryId).subscribe(e=>this.category=e):this._productService.get(this.item.productId).subscribe(e=>{this.item.product=e,this._categoryService.get(this.item.product.categoryId).subscribe(a=>this.category=a)})}updateCart(e){this._cartService.update(this.item.product.id,e)}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(d.H),t.Y36(u.N),t.Y36(_.M))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-cart-item-card"]],inputs:{item:"item",disabled:"disabled"},decls:1,vars:1,consts:[["class","row border-bottom",4,"ngIf"],[1,"row","border-bottom"],[1,"row","main","align-items-center"],[1,"col-2"],[1,"img-fluid","py-3",3,"src"],[1,"col"],[1,"row","text-muted"],[1,"row"],["class","btn",3,"click",4,"ngIf"],[1,"border"],[1,"btn",3,"click"]],template:function(e,a){1&e&&t.YNc(0,o,18,11,"div",0),2&e&&t.Q6J("ngIf",a.item&&a.category)},directives:[m.O5],pipes:[m.H9],styles:[""]}),r})()},3284:(C,g,n)=>{n.d(g,{Y:()=>s});var t=n(639),d=n(1556),u=n(8583),_=n(7396);const m=function(o){return["/products/",o]},l=function(o){return{"background-image":o}};function v(o,c){if(1&o){const r=t.EpF();t.TgZ(0,"div",1),t._UZ(1,"div",2),t.TgZ(2,"div",3),t.TgZ(3,"div",4),t.TgZ(4,"h5",5),t._uU(5),t.qZA(),t.TgZ(6,"div",6),t._UZ(7,"div",7),t._UZ(8,"div",7),t._UZ(9,"div",7),t._UZ(10,"div",7),t._UZ(11,"div",7),t.qZA(),t._uU(12),t.ALo(13,"currency"),t.qZA(),t.qZA(),t.TgZ(14,"div",8),t.TgZ(15,"div",4),t.TgZ(16,"button",9),t.NdJ("click",function(e){return t.CHM(r),t.oxw().addToCart(),e.stopPropagation()}),t._uU(17,"In Winkelwagen"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const r=t.oxw();t.Q6J("routerLink",t.VKq(7,m,r.product.id)),t.xp6(1),t.Q6J("ngStyle",t.VKq(9,l,"url("+r.getCoverImage(r.product)+")")),t.xp6(4),t.Oqu(r.product.name),t.xp6(7),t.hij(" ",t.xi3(13,4,r.product.price,"EUR")," ")}}let s=(()=>{class o{constructor(r){this._cartService=r}ngOnInit(){}getCoverImage(r){return r.images[0]?"storage/"+r.images[0]:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg"}addToCart(){this.product&&this._cartService.update(this.product.id,1)}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(d.N))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-card"]],inputs:{product:"product"},decls:1,vars:1,consts:[["class","card h-100",3,"routerLink",4,"ngIf"],[1,"card","h-100",3,"routerLink"],[1,"product-image",3,"ngStyle"],[1,"card-body","p-4"],[1,"text-center"],[1,"fw-bolder"],[1,"d-flex","justify-content-center","small","text-warning","mb-2"],[1,"bi-star-fill"],[1,"card-footer","p-4","pt-0","border-top-0","bg-transparent"],[1,"btn","btn-outline-dark","mt-auto",3,"click"]],template:function(r,i){1&r&&t.YNc(0,v,18,11,"div",0),2&r&&t.Q6J("ngIf",i.product)},directives:[u.O5,_.rH,u.PC],pipes:[u.H9],styles:[".card[_ngcontent-%COMP%]{cursor:pointer;transition:border-color .2s ease}.card[_ngcontent-%COMP%]:hover{border-color:var(--bs-primary)}.product-image[_ngcontent-%COMP%]{padding-top:66.6%;background-size:cover;background-position:center}"]}),o})()}}]);