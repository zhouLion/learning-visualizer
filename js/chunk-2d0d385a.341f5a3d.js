(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d385a"],{"5cb8":function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("h2",[e._v("Canvas学习：Canvas 里的坐标系统")]),n("p",[e._v("在 Web 页面中，或者说浏览器中有一个坐标系统。只是他和我们数学中的坐标系统不一样。Web的坐标系统的原点是在屏幕（浏览器屏幕）的左上角。")]),n("p",[e._v("它有两个坐标轴，x轴（水平轴）和y轴（垂直轴）。两轴的交汇点（左上角）为坐标原点(0,0)。原点沿x轴向右是正值，原点沿y轴向下是正值。")]),n("div",{staticClass:"wrap"},[n("label",{attrs:{for:"padding"}},[e._v(" 边距： "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.canvasSize.padding,expression:"canvasSize.padding",modifiers:{number:!0}}],attrs:{type:"range",min:20,max:100,id:"padding"},domProps:{value:e.canvasSize.padding},on:{input:e.drawWebCartesian,__r:function(a){e.$set(e.canvasSize,"padding",e._n(a.target.value))},blur:function(a){return e.$forceUpdate()}}})])]),n("div",{staticClass:"wrap"},[n("label",{attrs:{for:"grid"}},[e._v(" 网格： "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.canvasSize.grid,expression:"canvasSize.grid",modifiers:{number:!0}}],attrs:{type:"range",min:10,max:50},domProps:{value:e.canvasSize.grid},on:{input:e.drawWebCartesian,__r:function(a){e.$set(e.canvasSize,"grid",e._n(a.target.value))},blur:function(a){return e.$forceUpdate()}}})])]),n("canvas",{ref:"WebCartesian",staticStyle:{border:"2px solid #8000ff","border-radius":".5em",margin:"1em 0"},attrs:{width:e.canvasSize.width,height:e.canvasSize.height}},[e._v("你的设备太差了，不支持 canvas")]),n("small",[e._v("Web 笛卡尔坐标系")])])},i=[],r=n("1da1"),s=(n("96cf"),n("2b0e"));function o(e){return{isSleep:!1,stop:function(){this.isSleep=!1},delay:function(){var a=this;this.isSleep=!0,setTimeout((function(){a.isSleep=!1}),e)}}}var d=s["a"].extend({name:"",data:function(){return{canvasSize:{width:375,height:400,padding:40,grid:50},delayFn:o(60)}},mounted:function(){this.drawWebCartesian()},methods:{drawWebCartesian:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,t,i,r,s,o,d,c,l,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.delayFn.isSleep){a.next=2;break}return a.abrupt("return");case 2:return e.delayFn.delay(),a.next=5,e.$nextTick();case 5:if(n=e.$refs.WebCartesian,t=n.getContext("2d"),i=e.canvasSize,r=i.padding,s=i.width,o=i.height,d=i.grid,c={x:0+r,y:0+r},t){for(t.clearRect(0,0,s,o),t.lineWidth=1,t.strokeStyle="#000",t.beginPath(),t.moveTo(c.x,c.y),t.lineTo(s-r,c.y),t.stroke(),t.beginPath(),t.moveTo(c.x,c.y),t.lineTo(c.x,o-r),t.stroke(),t.beginPath(),t.lineWidth=.5,t.strokeStyle="#ccc",l=r;l<s-r;l+=d)t.moveTo(l,c.y),t.lineTo(l,o-r),t.font="12px Arial",t.fillStyle="#000",t.fillText("".concat(l-r),l,r);for(t.stroke(),t.beginPath(),u=r;u<o-r;u+=d)t.moveTo(c.x,u),t.lineTo(s-r,u),t.font="12px Arial",t.fillStyle="#0cc",t.fillText("".concat(u-r),r-20,u);t.stroke()}case 10:case"end":return a.stop()}}),a)})))()}}}),c=d,l=n("2877"),u=Object(l["a"])(c,t,i,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0d385a.341f5a3d.js.map