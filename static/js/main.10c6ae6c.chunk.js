(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1),c=n.n(o),s=n(7),a=n.n(s),i=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),o(e),c(e),s(e)}))}),h=(n(14),n(2)),l=n(3),u=n(5),b=n(4),d=function(e){e.robots;throw new Error("Noooooo!")},j=function(e){e.Searchfield;var t=e.SearchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:" pa2 bd3 b--green tc bg-light-green",type:"search",placeholder:"Search Robots",onChange:t})})},f=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"4px solid black",height:"500px"},children:e.children})},p=(n(15),function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"oops!Somethind is Missing."}):this.props.children}}]),n}(o.Component)),O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(r.jsx)("h1",{children:"Loading.."}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(r.jsx)(j,{SearchChange:this.onSearchChange}),Object(r.jsx)(f,{children:Object(r.jsx)(p,{children:Object(r.jsx)(d,{robots:t})})})]})}}]),n}(o.Component);a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),i()}},[[16,1,2]]]);
//# sourceMappingURL=main.10c6ae6c.chunk.js.map