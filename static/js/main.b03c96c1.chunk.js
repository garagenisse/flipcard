(this.webpackJsonpflipcard=this.webpackJsonpflipcard||[]).push([[0],{229:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(83),l=t.n(s),c=(t(90),t(10)),i=t(11),o=t(13),d=t(12),m=t(14),u=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(d.a)(a).call(this,e))).newMyLangHandler=function(e){t.setState({my_lang:e.target.value})},t.newForreignLangHandler=function(e){t.setState({forreign_lang:e.target.value})},t.state={flipped:!1,my_lang:"",forreign_lang:""},console.log("Construct flip"),t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"toggleCard",value:function(){this.setState({flipped:!this.state.flipped})}},{key:"render",value:function(){var e=this;if(null==this.props.card)return r.a.createElement("h1",null,"Well done, or cheater!!!");var a=this.props,t=a.rateEasy,n=a.rateHard,s=a.removeCard;return this.state.flipped?r.a.createElement("div",{className:"flip"},r.a.createElement("div",{className:"notification is-info"},r.a.createElement("button",{className:"delete",onClick:function(){s(),e.toggleCard()}}),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"field"},r.a.createElement("button",{className:"button is-success is-large",onClick:this.toggleCard.bind(this)},this.props.card.my_lang)),r.a.createElement("div",{className:"buttons is-grouped is-centered"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-success",onClick:function(){t(),e.toggleCard()}},"L\xe4tt")),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-danger",onClick:function(){n(),e.toggleCard()}},"Sv\xe5rt")))))):r.a.createElement("div",{className:"flip"},r.a.createElement("div",{className:"notification is-info"},r.a.createElement("div",{className:"box"},r.a.createElement("button",{className:"button is-success is-large",onClick:this.toggleCard.bind(this)},this.props.card.forreign_lang))))}}]),a}(r.a.Component),h=t(84),g=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(d.a)(a).call(this,e))).newCardChangeHandler=function(e){var a=e.target.name,n=e.target.value;t.setState(Object(h.a)({},a,n))},t.state={my_lang:"",forreign_lang:""},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.newCardSubmitHandler},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Mitt spr\xe5k",name:"my_lang",onChange:this.newCardChangeHandler}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})),r.a.createElement("span",{className:"icon is-small is-right"},r.a.createElement("i",{className:"fas fa-check"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Nytt spr\xe5k",name:"forreign_lang",onChange:this.newCardChangeHandler}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("button",{className:"button is-success"},"L\xe4gg till!"))}}]),a}(r.a.Component),f=(t(91),t(92),function(e){function a(e){var t;Object(c.a)(this,a),t=Object(o.a)(this,Object(d.a)(a).call(this,e));var n=e.cards.map((function(e,a){return{my_lang:e.my_lang,forreign_lang:e.forreign_lang,factor:100}})),r=t.randomizeCard(n);return t.state={cards:n,currentCard:r},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"randomizeCard",value:function(e){var a,t,n=e.filter((function(e){return e.factor>0})).length;if(n<=0)return-1;console.log("Remaining: ",n);do{t=e[a=Math.floor(Math.random()*this.props.cards.length)]}while(100*Math.random()>t.factor);return a}},{key:"rateHard",value:function(){console.log("Rate hard: ",this.state.cards[this.state.currentCard].my_lang);var e=this.state.cards;e[this.state.currentCard].factor+=e[this.state.currentCard].factor<100?10:0;var a=this.randomizeCard(this.state.cards);this.setState({currentCard:a})}},{key:"rateEasy",value:function(){console.log("Rate easy: ",this.state.cards[this.state.currentCard].my_lang);var e=this.state.cards;e[this.state.currentCard].factor-=e[this.state.currentCard].factor>10?10:0;var a=this.randomizeCard(this.state.cards);this.setState({currentCard:a,cards:e})}},{key:"removeCard",value:function(){console.log("Remove card: ",this.state.cards[this.state.currentCard].my_lang);var e=this.state.cards;e[this.state.currentCard].factor=0;var a=this.randomizeCard(this.state.cards);this.setState({currentCard:a,cards:e})}},{key:"handleNewCard",value:function(e){console.log("NewCard: ",e.target.value)}},{key:"render",value:function(){console.log("Current card: ",this.state);var e=this.state.currentCard>=0?this.state.cards[this.state.currentCard]:null;return r.a.createElement("div",{className:"App"},r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Flipcard - Play"),r.a.createElement("p",{className:"subtitle is-small"},r.a.createElement("i",null,"Just click the card to flip it and check your knowledge, if you feel that you know it you can delete it. Its also possible to add a new anytime, Happy learning!")),r.a.createElement(u,{card:e,removeCard:this.removeCard.bind(this),rateEasy:this.rateEasy.bind(this),rateHard:this.rateHard.bind(this)}))),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement(g,{newCardSubmitHandler:this.handleNewCard.bind(this)}))))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(f,{cards:[{my_lang:"Hej",forreign_lang:"Hello"},{my_lang:"V\xe4lkommen",forreign_lang:"Welcome"},{my_lang:"Till",forreign_lang:"To"},{my_lang:"Kort",forreign_lang:"Card"},{my_lang:"Program",forreign_lang:"App"}]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},85:function(e,a,t){e.exports=t(229)},90:function(e,a,t){},91:function(e,a,t){}},[[85,1,2]]]);
//# sourceMappingURL=main.b03c96c1.chunk.js.map