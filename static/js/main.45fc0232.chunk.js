(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(2),u=a.n(s),r=(a(12),a(3)),c=a(4),o=a(6),l=a(5),m=(a(13),function(e){var t=e.title,a=e.tabIndex,n=e.onFocus,s=e.index;return i.a.createElement("button",{type:"button",href:"#",className:a===s?"tab active":"tab",onFocus:function(){return n(s)}},t)}),d=(a(14),function(e){var t=e.info,a=e.tabIndex,n=e.index;return i.a.createElement("div",{className:a===n?"info info--active":"info"},t)}),b=(a(15),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,{props:e})).onFocus=function(e){n.setState({tabIndex:e})},n.state={tabIndex:0},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.tabs,a=this.state.tabIndex;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"tabs-wrapper"},i.a.createElement("ul",{className:"tabs-list"},t.map((function(t,n){return i.a.createElement("li",{className:"tabs-list__item",key:t.title},i.a.createElement(m,{title:t.title,tabIndex:a,index:n,onFocus:e.onFocus}))})))),i.a.createElement("div",{className:"info-wrapper"},i.a.createElement("ul",{className:"info-list"},t.map((function(e,t){return i.a.createElement("li",{className:"info-list__item",key:e.title},i.a.createElement(d,{info:e.content,tabIndex:a,index:t}))})))))}}]),a}(i.a.Component)),p=[{title:"Tab 1",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.\n    Quis nobis accusantium dignissimos deserunt laudantium iste,\n    quo at minus adipisci cupiditate quaerat,\n    impedit aliquid labore in quibusdam? Rerum illo voluptate hic?"},{title:"Tab 2",content:"Officiis quod, tenetur alias rerum quam adipisci expedita,\n    repellendus culpa et pariatur voluptatum asperiores at sed\n    eaque cumque quibusdam rem vero laboriosam distinctio reiciendis dicta!\n    Facilis, dolorem est! Doloribus, vitae."},{title:"Tab 3",content:"Eaque libero dignissimos necessitatibus accusantium,\n    voluptatum molestiae nesciunt tempora quam nulla odio ut aliquid\n    sint quas aliquam perspiciatis qui esse?\n    Quibusdam tenetur impedit excepturi consequatur,\n    odio doloremque facere enim doloribus."}],f=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"React tabs"),i.a.createElement(b,{tabs:p}))};u.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.45fc0232.chunk.js.map