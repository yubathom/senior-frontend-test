(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{174:function(e,t,r){var content=r(188);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(38).default)("b2d7918c",content,!0,{sourceMap:!1})},175:function(e,t,r){var content=r(190);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(38).default)("2917d449",content,!0,{sourceMap:!1})},176:function(e,t,r){"use strict";r.r(t);r(108);var n={name:"IconArrow",props:{strokeWidth:{type:Number,default:1}}},o=r(5),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{width:"18",height:"10",viewBox:"0 0 18 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M1 0.999999L9 9L17 1",stroke:"white","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":this.strokeWidth}})])}),[],!1,null,null,null);t.default=component.exports},177:function(e,t,r){var n=r(27),o=r(83),l=r(29),c=r(18),d=r(182);e.exports=function(e,t){var r=1==e,f=2==e,h=3==e,m=4==e,v=6==e,y=5==e||v,x=t||d;return function(t,d,w){for(var C,_,k=l(t),S=o(k),O=n(d,w,3),j=c(S.length),I=0,F=r?x(t,j):f?x(t,0):void 0;j>I;I++)if((y||I in S)&&(_=O(C=S[I],I,k),e))if(r)F[I]=_;else if(_)switch(e){case 3:return!0;case 5:return C;case 6:return I;case 2:F.push(C)}else if(m)return!1;return v?-1:h||m?m:F}}},178:function(e,t,r){"use strict";var n=r(7),o=r(177)(6),l="findIndex",c=!0;l in[]&&Array(1)[l]((function(){c=!1})),n(n.P+n.F*c,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r(82)(l)},179:function(e,t,r){"use strict";r.r(t);r(108);var n={name:"FormInputHandler",props:{name:{type:String,required:!0},minlength:{type:Number,required:!0},type:{type:String,required:!0},placeholder:{type:String,default:""},initialValue:{type:String,default:""}},data:function(){return{content:"",focused:!1,pristine:!0}},computed:{valid:function(){var e=this;return{text:this.content.length>=this.minlength,email:/\S+@\S+\.\S+/.test(e.content),phone:/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(e.content)}[this.type]},error:function(){return!this.pristine&&!this.valid}},created:function(){this.content=this.initialValue},methods:{handleInput:function(e,t,content,r){r&&(this.focused=!1),this.$emit("checkInput",e,t,content)}}},o=r(5),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return"checkbox"===e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],staticClass:"w-full rounded border border-solid p-2 bg-white shadow-micro border-primary-darkblue transition-colors duration-300",class:{"border-accent-blue":e.valid&&e.focused,"border-accent-red":e.error},attrs:{name:e.name,minlength:e.minlength,placeholder:e.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.content)?e._i(e.content,null)>-1:e.content},on:{"~focus":function(t){e.pristine=!1},focus:function(t){e.focused=!0},blur:function(t){return e.handleInput(e.error,e._uid,e.content,!0)},keyup:function(t){return t.preventDefault(),e.handleInput(e.error,e._uid,e.content,!1)},change:function(t){var r=e.content,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=e._i(r,null);n.checked?l<0&&(e.content=r.concat([null])):l>-1&&(e.content=r.slice(0,l).concat(r.slice(l+1)))}else e.content=o}}}):"radio"===e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],staticClass:"w-full rounded border border-solid p-2 bg-white shadow-micro border-primary-darkblue transition-colors duration-300",class:{"border-accent-blue":e.valid&&e.focused,"border-accent-red":e.error},attrs:{name:e.name,minlength:e.minlength,placeholder:e.placeholder,type:"radio"},domProps:{checked:e._q(e.content,null)},on:{"~focus":function(t){e.pristine=!1},focus:function(t){e.focused=!0},blur:function(t){return e.handleInput(e.error,e._uid,e.content,!0)},keyup:function(t){return t.preventDefault(),e.handleInput(e.error,e._uid,e.content,!1)},change:function(t){e.content=null}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],staticClass:"w-full rounded border border-solid p-2 bg-white shadow-micro border-primary-darkblue transition-colors duration-300",class:{"border-accent-blue":e.valid&&e.focused,"border-accent-red":e.error},attrs:{name:e.name,minlength:e.minlength,placeholder:e.placeholder,type:e.type},domProps:{value:e.content},on:{"~focus":function(t){e.pristine=!1},focus:function(t){e.focused=!0},blur:function(t){return e.handleInput(e.error,e._uid,e.content,!0)},keyup:function(t){return t.preventDefault(),e.handleInput(e.error,e._uid,e.content,!1)},input:function(t){t.target.composing||(e.content=t.target.value)}}})}),[],!1,null,null,null);t.default=component.exports},180:function(e,t,r){"use strict";r.r(t);var n={name:"IconExclamationCircle"},o=r(5),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18 10C18 12.1217 17.1571 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84285 14.1566 2 12.1217 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10ZM11 14C11 14.2652 10.8946 14.5196 10.7071 14.7071C10.5196 14.8946 10.2652 15 10 15C9.73478 15 9.48043 14.8946 9.29289 14.7071C9.10536 14.5196 9 14.2652 9 14C9 13.7348 9.10536 13.4804 9.29289 13.2929C9.48043 13.1054 9.73478 13 10 13C10.2652 13 10.5196 13.1054 10.7071 13.2929C10.8946 13.4804 11 13.7348 11 14ZM10 5C9.73478 5 9.48043 5.10536 9.29289 5.29289C9.10536 5.48043 9 5.73478 9 6V10C9 10.2652 9.10536 10.5196 9.29289 10.7071C9.48043 10.8946 9.73478 11 10 11C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5Z",fill:"#FF7B92"}})])}),[],!1,null,null,null);t.default=component.exports},181:function(e,t,r){"use strict";var n=r(7),o=r(177)(5),l=!0;"find"in[]&&Array(1).find((function(){l=!1})),n(n.P+n.F*l,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r(82)("find")},182:function(e,t,r){var n=r(183);e.exports=function(e,t){return new(n(e))(t)}},183:function(e,t,r){var n=r(13),o=r(109),l=r(2)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),n(t)&&null===(t=t[l])&&(t=void 0)),void 0===t?Array:t}},184:function(e){e.exports=JSON.parse('{"b":[{"id":1,"title":"Headquarters","address":"3763 W. Dallas St.","name":"Hellena John","role":"Software Tester","email":"geogia.young@example.com","phone":"(808) 555-0111","color":"accent-blue"},{"id":2,"title":"Headquarters","address":"3763 W. Dallas St.","name":"John Helena","role":"Software Developer","email":"geogia.young@example.com","phone":"(808) 555-0111","color":"accent-yellow"},{"id":3,"title":"Headquarters","address":"3763 W. Dallas St.","name":"John Smith","role":"Software Developer","email":"geogia.young@example.com","phone":"(808) 555-0111","color":"accent-red"},{"id":4,"title":"Headquarters","address":"3763 W. Dallas St.","name":"John Smith","role":"Software Developer","email":"geogia.young@example.com","phone":"(808) 555-0111","color":"primary-grey"},{"id":5,"title":"Headquarters","address":"3763 W. Dallas St.","name":"John Smith","role":"Software Developer","email":"geogia.young@example.com","phone":"(808) 555-0111","color":"primary-darkblue"},{"id":6,"title":"Headquarters","address":"3763 W. Dallas St.","name":"John Smith","role":"Software Developer","email":"geogia.young@example.com","phone":"(808) 555-0111","color":"accent-blue"}],"a":{"title":"","address":"","name":"","role":"","email":"","phone":"","color":"primary-grey"}}')},185:function(e,t,r){var n=r(7),o=r(186)(!1);n(n.S,"Object",{values:function(e){return o(e)}})},186:function(e,t,r){var n=r(8),o=r(28),l=r(23),c=r(52).f;e.exports=function(e){return function(t){for(var r,d=l(t),f=o(d),h=f.length,i=0,m=[];h>i;)r=f[i++],n&&!c.call(d,r)||m.push(e?[r,d[r]]:d[r]);return m}}},187:function(e,t,r){"use strict";var n=r(174);r.n(n).a},188:function(e,t,r){(t=r(37)(!1)).push([e.i,".colors-move{transform:translateX(70px)}.colors-enter-active,.colors-leave-active{position:absolute;transition:all .3s;z-index:100;opacity:1}.colors-enter,.colors-leave-to{transform:translateY(70px);opacity:0}",""]),e.exports=t},189:function(e,t,r){"use strict";var n=r(175);r.n(n).a},190:function(e,t,r){(t=r(37)(!1)).push([e.i,".office-card{height:156px;transition:all .3s ease-in-out}.office-card--active{height:393px}",""]),e.exports=t},191:function(e,t,r){"use strict";r.r(t);r(51),r(16),r(36),r(67),r(35);var n=r(4),o=r(22),l=(r(17),r(11),r(185),r(50),r(66),r(14));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"FormIndex",props:{userSchema:{type:Object,required:!0}},data:function(){return{fields:{},changed:!1,errors:[]}},computed:{disabled:function(){return this.errors.length>0||!this.changed||this.emptyFields},pageTitle:function(){return this.$route.query.edit?"Edit Location":"New Location"},emptyFields:function(){return Object.values(this.fields).includes("")}},created:function(){this.fields=d({},this.userSchema)},methods:d(d({},Object(l.b)("ui",["setTooltip"])),{},{setField:function(e,t){this.fields[e]===t?this.changed=!1:this.changed=!0,this.fields[e]=t},handleInput:function(e,t,r){var n=r.key,o=r.value;this.changed=!0,e&&!this.errors.includes(t)?this.errors.push(t):e||(this.errors=this.errors.filter((function(e){return e!==t})),this.fields[n]=o)},goBack:function(){this.$emit("close")},handleSave:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$router,n=e.setTooltip,o=e.$route,t.next=3,setTimeout((function(){r.push({path:"/"});var e=o.query.edit?"The location has been updated":"The location has been created";n(e)}),500);case 3:e.goBack();case 4:case"end":return t.stop()}}),t)})))()}}),watch:{fields:{deep:!0,handler:function(e){this.changed&&this.$router.replace({query:e})}}},transition:{name:"grow",scrollToTop:!0}},h=r(5),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"w-full bg-white rounded-xl shadow-xl rounded-lg p-6"},[r("div",{staticClass:"flex justify-between"},[r("h3",{staticClass:"font-bold text-primary-darkblue"},[e._v(e._s(e.pageTitle))]),e._v(" "),r("button",{on:{click:function(t){return t.preventDefault(),e.goBack(t)}}},[r("icon-close")],1)]),e._v(" "),r("form",{staticClass:"mt-8"},[r("form-color-selector",{attrs:{"main-color":e.fields.color},on:{setColor:e.setField}}),e._v(" "),r("form-input",{attrs:{label:"Title",name:"title",placeholder:"Headquarters",type:"text",initialValue:e.fields.title,required:!0,minlength:1},on:{check:e.handleInput}}),e._v(" "),r("form-input",{attrs:{label:"Enter the address",name:"address",placeholder:"0000 W. Some St.",type:"text",initialValue:e.fields.address,required:!0,minlength:2},on:{check:e.handleInput}}),e._v(" "),r("section",{staticClass:"mt-10"},[r("h4",{staticClass:"mb-6 pb-3 uppercase text-sm text-accent-blue border-b"},[e._v("\n        Contact information\n      ")]),e._v(" "),r("form-input",{attrs:{label:"Full name",name:"name",placeholder:"John Smith",type:"text",initialValue:e.fields.name,required:!0,minlength:2},on:{check:e.handleInput}}),e._v(" "),r("form-input",{attrs:{label:"Job Position",name:"role",placeholder:"Software Engineer",type:"text",initialValue:e.fields.role,required:!0,minlength:2},on:{check:e.handleInput}}),e._v(" "),r("form-input",{attrs:{label:"Email address",name:"email",placeholder:"name@example.com",type:"email",initialValue:e.fields.email,required:!0,minlength:3},on:{check:e.handleInput}}),e._v(" "),r("form-input",{attrs:{label:"Phone",name:"phone",placeholder:"(xxx) xxx-xxxx",type:"phone",initialValue:e.fields.phone,required:!0,minlength:7},on:{check:e.handleInput}})],1),e._v(" "),r("form-button",{staticClass:"mt-4",attrs:{title:"Save",disabled:e.disabled,"data-test":"btn-save"},on:{click:function(t){return t.preventDefault(),e.handleSave(t)}}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{IconClose:r(79).default,FormColorSelector:r(194).default,FormInput:r(195).default,FormButton:r(196).default})},192:function(e,t,r){"use strict";r.r(t);var n={name:"IconPlus"},o=r(5),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("line",{attrs:{x1:"9",y1:"5.37286e-08",x2:"9",y2:"16",stroke:"white"}}),this._v(" "),t("line",{attrs:{x1:"16.5",y1:"8.5",x2:"0.5",y2:"8.5",stroke:"white"}})])}),[],!1,null,null,null);t.default=component.exports},193:function(e,t,r){"use strict";r.r(t);r(108);var n={name:"OfficeCard",props:{id:{type:Number,required:!0},title:{type:String,required:!0},phone:{type:String,required:!0},email:{type:String,required:!0},role:{type:String,required:!0},name:{type:String,required:!0},address:{type:String,required:!0},color:{type:String,default:"primary-grey"},deleted:{type:Boolean,required:!0}},data:function(){return{active:!1,activeDelayed:!1}},watch:{active:function(e){var t=this;setTimeout((function(){return t.activeDelayed=e}),100)}},methods:{remove:function(e){this.$emit("delete",e)},edit:function(e){this.$emit("edit",e)}}},o=(r(189),r(5)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"office-card flex-col rounded-b-lg mt-6 transition-opacity rounded-t-lg bg-white",class:{"office-card--active":e.active,"opacity-0":e.deleted}},[r("article",{staticClass:"flex items-center justify-between py-12 px-6 rounded-lg shadow-xl text-white cursor-pointer",class:"bg-"+e.color,on:{click:function(t){e.active=!e.active}}},[r("div",[r("h3",{staticClass:"text-2xl font-bold"},[e._v(e._s(e.title))]),e._v(" "),r("p",{staticClass:"text-base"},[e._v(e._s(e.address))])]),e._v(" "),r("icon-arrow",{staticClass:"transform duration-300",class:{"-rotate-180":e.active}})],1),e._v(" "),e.active?r("article",{staticClass:"pt-6 px-6 pb-3 leading-9 shadow-lg rounded-lg opacity-0 transition-opacity duration-300 ease-in-out",class:{"opacity-100":e.activeDelayed}},[r("h3",{staticClass:"text-xl font-bold"},[e._v(e._s(e.name))]),e._v(" "),r("section",[r("p",[e._v(e._s(e.role))]),e._v(" "),r("p",[r("a",{attrs:{href:"mailto:"+e.email+"?subject=Offices%20-%20"+e.title}},[e._v(e._s(e.email))])]),e._v(" "),r("p",[e._v(e._s(e.phone))])]),e._v(" "),r("section",{staticClass:"border-t w-full flex justify-between mt-2 pt-2 pb-1 text-xs text-primary-grey"},[r("button",{staticClass:"flex items-center",on:{click:function(t){return t.preventDefault(),e.edit(e.id)}}},[r("icon-pencil"),r("span",{staticClass:"ml-2"},[e._v("EDIT")])],1),e._v(" "),r("button",{staticClass:"flex items-center",on:{click:function(t){return t.preventDefault(),e.remove(e.id)}}},[r("icon-trash"),r("span",{staticClass:"ml-2 text-accent-red"},[e._v("DELETE")])],1)])]):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{IconArrow:r(176).default,IconPencil:r(197).default,IconTrash:r(198).default})},194:function(e,t,r){"use strict";r.r(t);r(178);var n=r(176),o=r(68),l={name:"FormColorSelector",components:{IconArrow:n.default,IconCheck:o.default},props:{mainColor:{type:String,default:"primary-grey"},colors:{type:Array,default:function(){return["accent-yellow","accent-red","accent-blue","primary-grey","primary-darkblue"]}}},data:function(){return{open:!1,selectedIndex:0}},computed:{activeBgColor:function(){return this.open?"bg-primary-grey":"bg-".concat(this.colors[this.selectedIndex])}},methods:{change:function(e){this.selectedIndex=e,this.open=!1,this.$emit("setColor","color",this.colors[e])}},created:function(){var e=this;this.selectedIndex=this.colors.findIndex((function(t){return t===e.mainColor}))}},c=(r(187),r(5)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",{staticClass:"flex justify-center items-center shadow-lg rounded-lg h-32 w-full mt-2 mb-6 cursor-pointer transition-colors duration-300",class:e.activeBgColor,on:{click:function(t){e.open=!e.open}}},[r("p",{staticClass:"mr-2 text-white font-bold"},[e._v("Select Color")]),e._v(" "),r("icon-arrow",{staticClass:"transform scale-50",class:{"rotate-180":!e.open,"rotate-0":e.open},attrs:{"stroke-width":3}})],1),e._v(" "),r("li",[r("transition",{attrs:{name:"fade"}},[e.open?r("ul",e._l(e.colors,(function(t,n){return r("li",{key:n,staticClass:"color"},[r("button",{staticClass:"flex justify-center items-center h-32 w-full my-2 rounded-lg",class:"bg-"+t,on:{click:function(t){return t.preventDefault(),e.change(n)}}},[n===e.selectedIndex?r("icon-check",{staticClass:"transform scale-125"}):e._e()],1)])})),0):e._e()])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{IconArrow:r(176).default,IconCheck:r(68).default})},195:function(e,t,r){"use strict";r.r(t);r(30),r(50),r(66),r(108);var n=r(179),o=r(180),l={name:"FormInput",components:{FormInputHandler:n.default,IconExclamationCircle:o.default},props:{name:{type:String,required:!0},label:{type:String,required:!0},minlength:{type:Number,default:1},placeholder:{type:String,default:""},required:{type:Boolean,default:!1},initialValue:{type:String,default:""},type:{validator:function(e){return["text","email","phone"].includes(e)}}},data:function(){return{errorStatus:!1}},computed:{errorMessage:function(){return{text:"This field cannot be empty",email:"This is not a valid email",phone:"This is not a valid phone number"}[this.type]}},methods:{handleInput:function(e,t,r){this.errorStatus=e,this.$emit("check",e,t,{key:this.name,value:r})}}},c=r(5),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("fieldset",{staticClass:"flex flex-col text-base mb-6"},[r("label",{attrs:{for:e.name}},[e._v(e._s(e.label)+"\n    "),e.required?r("span",{staticClass:"text-primary-grey"},[e._v("*")]):e._e()]),e._v(" "),r("div",{staticClass:"relative"},[r("form-input-handler",{attrs:{minlength:e.minlength,placeholder:e.placeholder,name:e.name,initialValue:e.initialValue,type:e.type},on:{checkInput:e.handleInput}}),e._v(" "),r("icon-exclamation-circle",{staticClass:"absolute top-0 right-0 mt-3 mr-2 opacity-0 transition duration-300",class:{"opacity-100":e.errorStatus}}),e._v(" "),e.errorStatus?r("p",{staticClass:"text-xs text-accent-red mt-1"},[e._v("\n      "+e._s(e.errorMessage)+"\n    ")]):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FormInputHandler:r(179).default,IconExclamationCircle:r(180).default})},196:function(e,t,r){"use strict";r.r(t);var n={name:"FormButton",props:{title:{type:String,required:!0},disabled:{type:Boolean,default:!0}},methods:{click:function(e){this.$emit("click",e)}}},o=r(5),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{staticClass:"bg-accent-blue hover:bg-primary-darkblue disabled:bg-primary-grey disabled:opacity-50 text-white font-base py-2 px-4 rounded transition-all duration-200",class:{"cursor-not-allowed":e.disabled},attrs:{disabled:e.disabled},on:{click:function(t){return t.preventDefault(),e.click(t)}}},[e._v("\n  "+e._s(e.title)+"\n")])}),[],!1,null,null,null);t.default=component.exports},197:function(e,t,r){"use strict";r.r(t);var n={name:"IconPencil",props:{stroke:{type:String,default:"#989EA7"}}},o=r(5),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M15.232 5.23199L18.768 8.76799M16.732 3.73199C17.2009 3.26309 17.8369 2.99966 18.5 2.99966C19.1631 2.99966 19.7991 3.26309 20.268 3.73199C20.7369 4.2009 21.0003 4.83687 21.0003 5.49999C21.0003 6.16312 20.7369 6.79909 20.268 7.26799L6.5 21.036H3V17.464L16.732 3.73199Z",stroke:this.stroke,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,null,null);t.default=component.exports},198:function(e,t,r){"use strict";r.r(t);var n={name:"IconTrash",props:{stroke:{type:String,default:"#FF7B92"}}},o=r(5),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M10 11V17M14 11V17M4 7H20M19 7L18.133 19.142C18.0971 19.6466 17.8713 20.1188 17.5011 20.4636C17.1309 20.8083 16.6439 21 16.138 21H7.862C7.35614 21 6.86907 20.8083 6.49889 20.4636C6.1287 20.1188 5.90292 19.6466 5.867 19.142L5 7H19ZM15 7V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3H10C9.73478 3 9.48043 3.10536 9.29289 3.29289C9.10536 3.48043 9 3.73478 9 4V7H15Z",stroke:this.stroke,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,null,null);t.default=component.exports},199:function(e,t,r){"use strict";r.r(t);r(51),r(16),r(17),r(11),r(36),r(67),r(181),r(178),r(35);var n=r(4),o=r(22),l=r(14),c=r(184);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"Ofices",data:function(){return{displayForm:!1,users:[],userSchema:c.a}},methods:f(f({},Object(l.b)("ui",["setTooltip","resetTooltip"])),{},{deleteCard:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.users.findIndex((function(t){return t.id===e})),t.users[n].deleted=!0,r.next=4,setTimeout((function(){t.users=t.users.filter((function(t){return t.id!==e})),t.setTooltip("The location has been deleted")}),300);case 4:case"end":return r.stop()}}),r)})))()},editCard:function(e){this.resetTooltip();var t=this.users.find((function(t){return t.id===e}));this.$router.replace({query:f({edit:!0},t)}),this.userSchema=t,this.displayForm=!0},setNewForm:function(){this.$router.replace({query:f({},c.a)}),this.userSchema=c.a,this.displayForm=!0},resetForm:function(){this.displayForm=!1,this.$router.push({query:{}})}}),created:function(){var e=this.$route;this.users=c.b.map((function(e){return e.deleted=!1,e})),e.query.edit&&e.query.id?this.editCard(e.query.id):e.query.displayForm&&(this.displayForm=!0)},transition:{name:"grow"},scrollToTop:!0},m=r(5),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"relative"},[r("transition",{attrs:{name:"grow-up"}},[e.displayForm?r("form-index",{attrs:{userSchema:e.userSchema},on:{close:e.resetForm}}):e._e()],1),e._v(" "),r("transition",{attrs:{name:"fade"}},[e.displayForm?e._e():r("div",{staticClass:"flex items-center justify-between p-4 bg-accent-red text-base text-white rounded-lg shadow-xl cursor-pointer",attrs:{"data-test":"new-office"},on:{click:function(t){return t.preventDefault(),e.setNewForm(t)}}},[r("p",[e._v("Add New Location")]),e._v(" "),r("icon-plus")],1)]),e._v(" "),r("transition",{attrs:{name:"fade"}},[e.displayForm?e._e():r("ul",e._l(e.users,(function(t){return r("li",{key:t.id},[r("office-card",e._b({on:{delete:e.deleteCard,edit:e.editCard}},"office-card",t,!1))],1)})),0)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FormIndex:r(191).default,IconPlus:r(192).default,OfficeCard:r(193).default})}}]);