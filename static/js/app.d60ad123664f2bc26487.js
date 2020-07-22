webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),a=n("Au9i"),o=void 0,c={components:{"mt-button":a.Button,"mt-cell":a.Cell,"message-box":a.MessageBox,"mt-field":a.Field},name:"ChatRoom",data:function(){return{messages:[],message:"",connected:!1,serverAddress:""}},methods:{connect:function(){var e=this;""!==this.serverAddress?(console.log(this.serverAddress),(o=new WebSocket(this.serverAddress)).onopen=function(){console.log("已经连接上服务器"),e.connected=!0},o.onmessage=function(t){var n=JSON.parse(t.data);e.messages.unshift({from:n.from,content:n.content})},o.onclose=function(t){e.messages.unshift({from:"console",content:"断开连接"}),e.connected=!1},o.onerror=function(t){Object(a.Toast)("连接失败"),e.connected=!1}):Object(a.Toast)("请先输入地址")},disconnect:function(){o.close()},sendMessage:function(){""!==this.message.trim()?(o.send(this.message),this.message=""):Object(a.Toast)("请输入内容")}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("mt-cell",[n("mt-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){e.messages=[]}}},[e._v("清空记录")]),e._v(" "),e.connected?e._e():n("mt-button",{attrs:{size:"small",type:"primary"},nativeOn:{click:function(t){return e.connect(t)}}},[e._v("点击链接服务器")]),e._v(" "),e.connected?n("mt-button",{attrs:{size:"small",type:"default"},nativeOn:{click:function(t){return e.disconnect(t)}}},[e._v("断开连接服务器")]):e._e()],1),e._v(" "),n("mt-cell",{directives:[{name:"show",rawName:"v-show",value:!e.connected,expression:"!connected"}]},[n("mt-field",{attrs:{label:"服务器请求地址"},model:{value:e.serverAddress,callback:function(t){e.serverAddress=t},expression:"serverAddress"}})],1),e._v(" "),n("mt-cell",[n("mt-field",{ref:"post_message",model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),n("mt-button",{attrs:{size:"small",type:"primary"},nativeOn:{click:function(t){return e.sendMessage(t)}}},[e._v("发送消息")])],1),e._v(" "),n("hr"),e._v(" "),e._l(e.messages,function(t){return n("mt-cell",[e._v("\n    "+e._s(t.from)+":"+e._s(t.content)+"\n  ")])})],2)},staticRenderFns:[]};var i={components:{ChatRoom:n("VU/8")(c,r,!1,function(e){n("ObV+")},null,null).exports,"mt-header":a.Header,"mt-nav-bar":a.Navbar,"mt-tab-item":a.TabItem,"mt-tab-container":a.TabContainer,"mt-tab-container-item":a.TabContainerItem},name:"App",data:function(){return{title:"mc云玩家网页工具",selected:"1"}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("mt-header",{staticClass:"mint-header",attrs:{title:e.title}}),e._v(" "),n("mt-nav-bar",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[n("mt-tab-item",{attrs:{id:"1"}},[e._v("服务器聊天\n    ")]),e._v(" "),n("mt-tab-item",{attrs:{id:"2"}},[e._v("服务器状态查询(未完工)\n    ")])],1),e._v(" "),n("mt-tab-container",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[n("mt-tab-container-item",{attrs:{id:"1"}},[n("chat-room")],1),e._v(" "),n("mt-tab-container-item",{attrs:{id:"2"}})],1)],1)},staticRenderFns:[]},m=n("VU/8")(i,l,!1,null,null,null).exports;n("d8/S");s.default.config.productionTip=!1,new s.default({el:"#app",components:{App:m},template:"<App/>"})},"ObV+":function(e,t){},"d8/S":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d60ad123664f2bc26487.js.map