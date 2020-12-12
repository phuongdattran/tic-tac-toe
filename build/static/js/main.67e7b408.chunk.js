(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{47:function(t,e,a){},48:function(t,e,a){},80:function(t,e,a){"use strict";a.r(e);for(var n=a(0),s=a(1),r=a.n(s),c=a(39),i=a.n(c),o=(a(47),a(41)),l=a(2),u=a(3),d=a(5),h=a(4),j=(a(48),a(40)),b=a.n(j),p=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var t=this.props,e=t.onPlay,a=t.caseInfo;return Object(n.jsx)("div",{className:"case",onClick:function(){e(a)},case:a.status,children:"available"!==a.status&&a.status})}}]),a}(s.Component),O=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){for(var t=this.props,e=t.size,a=t.onPlay,s=t.caseInfo,r=[],c=0;c<e;c++)r.push(c);return Object(n.jsx)("div",{id:"board",children:r.map((function(t,e){return Object(n.jsx)(p,{onPlay:a,caseInfo:s[e]},e)}))})}}]),a}(s.Component),v=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={},t}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{id:"btnContainer",children:Object(n.jsx)("button",{id:"resetBtn",onClick:this.props.onReset,children:"Reset"})})}}]),a}(s.Component),f=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{id:"btnContainer",children:[Object(n.jsx)("label",{children:"Game Id"}),Object(n.jsx)("input",{type:"text",id:"gameId",name:"gameId",value:this.props.gameId,onChange:this.props.onChange}),Object(n.jsx)("button",{id:"joinBtn",onClick:this.props.onJoin,children:"Join"})]})}}]),a}(s.Component),g=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={},t}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{id:"btnContainer",children:Object(n.jsx)("button",{id:"createBtn",onClick:this.props.onCreate,children:"Create a new game"})})}}]),a}(s.Component),m=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var t=this.props,e=t.player,a=t.clientId;return Object(n.jsxs)("div",{className:"currentPlayer",children:[e===a?"You are":"Opponent is"," playing"]})}}]),a}(s.Component),y=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var t=this.props,e=t.clientId,a=t.player;return Object(n.jsxs)("div",{children:[a.clientId===e?"You":"Opponent",": ",a.score]})}}]),a}(s.Component),I=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var t=this.props,e=t.players,a=t.clientId;return Object(n.jsx)("div",{className:"gameInfo",children:e.map((function(t,e){return Object(n.jsx)(y,{player:t,clientId:a},e)}))})}}]),a}(s.Component),C=[],x=0;x<9;x++)C.push({position:x,status:"available"});var P=b()("https://tic-tac-toe-react-multi.herokuapp.com"),k=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={clientId:"",gameId:"",caseInfo:C,gameOver:!1,players:[],sign:"#",currentPlayer:""},t.handleOnPlay=function(e){var a=Object(o.a)(t.state.caseInfo);if(!t.state.gameOver&&t.state.currentPlayer===t.state.clientId&&"available"===a[e.position].status){a[e.position].status=t.state.sign;var n=t.state.gameOver,s=!1;a[0].status===a[1].status&&a[1].status===a[2].status&&"available"!==a[0].status||a[3].status===a[4].status&&a[4].status===a[5].status&&"available"!==a[3].status||a[6].status===a[7].status&&a[7].status===a[8].status&&"available"!==a[6].status||a[0].status===a[3].status&&a[3].status===a[6].status&&"available"!==a[0].status||a[1].status===a[4].status&&a[4].status===a[7].status&&"available"!==a[1].status||a[2].status===a[5].status&&a[5].status===a[8].status&&"available"!==a[2].status||a[0].status===a[4].status&&a[4].status===a[8].status&&"available"!==a[0].status||a[2].status===a[4].status&&a[4].status===a[6].status&&"available"!==a[2].status?(n=!0,s=!0):t.state.caseInfo.some((function(t){return"available"===t.status}))||(n=!0);var r=t.state,c={clientId:r.clientId,gameId:r.gameId,board:a,gameOver:n,currentPlayer:r.currentPlayer,players:r.players,gotWinner:s};P.emit("play",c)}},t.handleJoin=function(){var e=t.state,a=e.gameId,n={clientId:e.clientId,gameId:a};P.emit("join",n)},t.handleCreate=function(){var e={clientId:t.state.clientId,board:C};P.emit("create",e)},t.handleReset=function(){for(var e=[],a=0;a<9;a++)e.push({position:a,status:"available"});var n={gameId:t.state.gameId,board:e,gameOver:!1};P.emit("reset",n)},t.handleGameIdChange=function(e){t.setState({gameId:e.target.value})},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;P.on("play",(function(e){t.setState({caseInfo:e.board,gameOver:e.gameOver,currentPlayer:e.currentPlayer,players:e.players})})),P.on("reset",(function(e){t.setState({caseInfo:e.board,gameOver:e.gameOver})})),P.on("clientConnect",(function(e){t.setState({clientId:e}),console.log("Client ".concat(e," has connected"))})),P.on("create",(function(e){t.setState({gameId:e.id,caseInfo:e.board}),console.log("Game ".concat(e.id," has been created"))})),P.on("join",(function(e){var a=e.clients.find((function(e){return e.clientId===t.state.clientId}));console.log("".concat(e.clients[e.clients.length-1].clientId," joined game ").concat(e.id)),t.setState({sign:a.sign,players:e.clients,currentPlayer:e.currentPlayer})}))}},{key:"render",value:function(){return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)("h1",{children:"Tic-tac-toe"}),Object(n.jsxs)("div",{id:"gameTitle",children:["Game ID: ",this.state.gameId]}),Object(n.jsx)(I,{players:this.state.players,clientId:this.state.clientId}),Object(n.jsx)(g,{onCreate:this.handleCreate}),Object(n.jsx)(f,{onJoin:this.handleJoin,onChange:this.handleGameIdChange,gameId:this.state.gameId}),2===this.state.players.length?Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(O,{size:9,onPlay:this.handleOnPlay,caseInfo:this.state.caseInfo}),!this.state.gameOver&&Object(n.jsx)(m,{player:this.state.currentPlayer,clientId:this.state.clientId})]}):1===this.state.players.length&&Object(n.jsx)("div",{id:"waitingMsg",children:"Waiting for another player"}),this.state.gameOver&&Object(n.jsx)(v,{onReset:this.handleReset})]})}}]),a}(s.Component),S=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,81)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,r=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),r(t),c(t)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),S()}},[[80,1,2]]]);
//# sourceMappingURL=main.67e7b408.chunk.js.map