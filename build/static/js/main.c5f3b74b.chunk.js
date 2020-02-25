(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){},26:function(e,t,n){e.exports=n(45)},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},35:function(e,t,n){},36:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(21),i=n.n(r),o=(n(31),n(2)),c=n(3),u=n(5),l=n(4),m=n(6),d=n(22),h=n(11),f=(n(19),n(13)),g=n(7),y=n.n(g),p=(n(32),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this))).submitQuestion=function(e){e.preventDefault(),y.a.ajax({url:"/questions",type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({question:n.state.question,answer:n.state.answer,difficulty:n.state.difficulty,category:n.state.category}),xhrFields:{withCredentials:!0},crossDomain:!0,success:function(e){document.getElementById("add-question-form").reset()},error:function(e){alert("Unable to add question. Please try your request again")}})},n.handleChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.state={question:"",answer:"",difficulty:1,category:1,categories:{}},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.ajax({url:"/categories",type:"GET",success:function(t){e.setState({categories:t.categories})},error:function(e){alert("Unable to load categories. Please try your request again")}})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"add-form"},s.a.createElement("h2",null,"Add a New Trivia Question"),s.a.createElement("form",{className:"form-view",id:"add-question-form",onSubmit:this.submitQuestion},s.a.createElement("label",null,"Question",s.a.createElement("input",{type:"text",name:"question",onChange:this.handleChange})),s.a.createElement("label",null,"Answer",s.a.createElement("input",{type:"text",name:"answer",onChange:this.handleChange})),s.a.createElement("label",null,"Difficulty",s.a.createElement("select",{name:"difficulty",onChange:this.handleChange},s.a.createElement("option",{value:"1"},"1"),s.a.createElement("option",{value:"2"},"2"),s.a.createElement("option",{value:"3"},"3"),s.a.createElement("option",{value:"4"},"4"),s.a.createElement("option",{value:"5"},"5"))),s.a.createElement("label",null,"Category",s.a.createElement("select",{name:"category",onChange:this.handleChange},Object.keys(this.state.categories).map(function(t){return s.a.createElement("option",{key:t,value:t},e.state.categories[t])}))),s.a.createElement("input",{type:"submit",className:"button",value:"Submit"})))}}]),t}(a.Component)),v=(n(33),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={visibleAnswer:!1},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"flipVisibility",value:function(){this.setState({visibleAnswer:!this.state.visibleAnswer})}},{key:"render",value:function(){var e=this,t=this.props,n=t.question,a=t.answer,r=t.category,i=t.difficulty;return s.a.createElement("div",{className:"Question-holder"},s.a.createElement("div",{className:"Question"},n),s.a.createElement("div",{className:"Question-status"},s.a.createElement("img",{className:"category",src:"".concat(r,".svg")}),s.a.createElement("div",{className:"difficulty"},"Difficulty: ",i),s.a.createElement("img",{src:"delete.png",className:"delete",onClick:function(){return e.props.questionAction("DELETE")}})),s.a.createElement("div",{className:"show-answer button",onClick:function(){return e.flipVisibility()}},this.state.visibleAnswer?"Hide":"Show"," Answer"),s.a.createElement("div",{className:"answer-holder"},s.a.createElement("span",{style:{visibility:this.state.visibleAnswer?"visible":"hidden"}},"Answer: ",a)))}}]),t}(a.Component)),b=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={query:""},n.getInfo=function(e){e.preventDefault(),n.props.submitSearch(n.state.query)},n.handleInputChange=function(){n.setState({query:n.search.value})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.getInfo},s.a.createElement("input",{placeholder:"Search questions...",ref:function(t){return e.search=t},onChange:this.handleInputChange}),s.a.createElement("input",{type:"submit",value:"Submit",className:"button"}))}}]),t}(a.Component),E=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).getQuestions=function(){y.a.ajax({url:"/questions?page=".concat(e.state.page),type:"GET",success:function(t){e.setState({questions:t.questions,totalQuestions:t.total_questions,categories:t.categories,currentCategory:t.current_category})},error:function(e){alert("Unable to load questions. Please try your request again")}})},e.getByCategory=function(t){y.a.ajax({url:"/categories/".concat(t,"/questions"),type:"GET",success:function(t){e.setState({questions:t.questions,totalQuestions:t.total_questions,currentCategory:t.current_category})},error:function(e){alert("Unable to load questions. Please try your request again")}})},e.submitSearch=function(t){y.a.ajax({url:"/questions",type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({searchTerm:t}),xhrFields:{withCredentials:!0},crossDomain:!0,success:function(t){e.setState({questions:t.questions,totalQuestions:t.total_questions,currentCategory:t.current_category})},error:function(e){alert("Unable to load questions. Please try your request again")}})},e.questionAction=function(t){return function(n){"DELETE"===n&&window.confirm("are you sure you want to delete the question?")&&y.a.ajax({url:"/questions/".concat(t),type:"DELETE",success:function(t){e.getQuestions()},error:function(e){alert("Unable to load questions. Please try your request again")}})}},e.state={questions:[],page:1,totalQuestions:0,categories:{},currentCategory:null},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getQuestions()}},{key:"selectPage",value:function(e){var t=this;this.setState({page:e},function(){return t.getQuestions()})}},{key:"createPagination",value:function(){for(var e=this,t=[],n=Math.ceil(this.state.totalQuestions/10),a=function(n){t.push(s.a.createElement("span",{key:n,className:"page-num ".concat(n===e.state.page?"active":""),onClick:function(){e.selectPage(n)}},n))},r=1;r<=n;r++)a(r);return t}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"question-view"},s.a.createElement("div",{className:"categories-list"},s.a.createElement("h2",{onClick:function(){e.getQuestions()}},"Categories"),s.a.createElement("ul",null,Object.keys(this.state.categories).map(function(t){return s.a.createElement("li",{key:t,onClick:function(){e.getByCategory(t)}},e.state.categories[t],s.a.createElement("img",{className:"category",src:"".concat(e.state.categories[t],".svg")}))})),s.a.createElement(b,{submitSearch:this.submitSearch})),s.a.createElement("div",{className:"questions-list"},s.a.createElement("h2",null,"Questions"),this.state.questions.map(function(t,n){return s.a.createElement(v,{key:t.id,question:t.question,answer:t.answer,category:e.state.categories[t.category],difficulty:t.difficulty,questionAction:e.questionAction(t.id)})}),s.a.createElement("div",{className:"pagination-menu"},this.createPagination())))}}]),t}(a.Component),w=(n(34),n(35),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"navTo",value:function(e){window.location.href=window.location.origin+e}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App-header"},s.a.createElement("h1",{onClick:function(){e.navTo("")}},"Udacitrivia"),s.a.createElement("h2",{onClick:function(){e.navTo("")}},"List"),s.a.createElement("h2",{onClick:function(){e.navTo("/add")}},"Add"),s.a.createElement("h2",{onClick:function(){e.navTo("/play")}},"Play"))}}]),t}(a.Component)),q=n(25),C=(n(36),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this))).selectCategory=function(e){var t=e.type,a=e.id,s=void 0===a?0:a;n.setState({quizCategory:{type:t,id:s}},n.getNextQuestion)},n.handleChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.getNextQuestion=function(){var e=Object(q.a)(n.state.previousQuestions);n.state.currentQuestion.id&&e.push(n.state.currentQuestion.id),y.a.ajax({url:"/quizzes",type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({previous_questions:e,quiz_category:n.state.quizCategory}),xhrFields:{withCredentials:!0},crossDomain:!0,success:function(t){n.setState({showAnswer:!1,previousQuestions:e,currentQuestion:t.question,guess:"",forceEnd:!t.question})},error:function(e){alert("Unable to load question. Please try your request again")}})},n.submitGuess=function(e){e.preventDefault();n.state.guess.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();var t=n.evaluateAnswer();n.setState({numCorrect:t?n.state.numCorrect+1:n.state.numCorrect,showAnswer:!0})},n.restartGame=function(){n.setState({quizCategory:null,previousQuestions:[],showAnswer:!1,numCorrect:0,currentQuestion:{},guess:"",forceEnd:!1})},n.evaluateAnswer=function(){var e=n.state.guess.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();return n.state.currentQuestion.answer.toLowerCase().split(" ").includes(e)},n.state={quizCategory:null,previousQuestions:[],showAnswer:!1,categories:{},numCorrect:0,currentQuestion:{},guess:"",forceEnd:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.ajax({url:"/categories",type:"GET",success:function(t){e.setState({categories:t.categories})},error:function(e){alert("Unable to load categories. Please try your request again")}})}},{key:"renderPrePlay",value:function(){var e=this;return s.a.createElement("div",{className:"quiz-play-holder"},s.a.createElement("div",{className:"choose-header"},"Choose Category"),s.a.createElement("div",{className:"category-holder"},s.a.createElement("div",{className:"play-category",onClick:this.selectCategory},"ALL"),Object.keys(this.state.categories).map(function(t){return s.a.createElement("div",{key:t,value:t,className:"play-category",onClick:function(){return e.selectCategory({type:e.state.categories[t],id:t})}},e.state.categories[t])})))}},{key:"renderFinalScore",value:function(){return s.a.createElement("div",{className:"quiz-play-holder"},s.a.createElement("div",{className:"final-header"}," Your Final Score is ",this.state.numCorrect),s.a.createElement("div",{className:"play-again button",onClick:this.restartGame}," Play Again? "))}},{key:"renderCorrectAnswer",value:function(){this.state.guess.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();var e=this.evaluateAnswer();return s.a.createElement("div",{className:"quiz-play-holder"},s.a.createElement("div",{className:"quiz-question"},this.state.currentQuestion.question),s.a.createElement("div",{className:"".concat(e?"correct":"wrong")},e?"You were correct!":"You were incorrect"),s.a.createElement("div",{className:"quiz-answer"},this.state.currentQuestion.answer),s.a.createElement("div",{className:"next-question button",onClick:this.getNextQuestion}," Next Question "))}},{key:"renderPlay",value:function(){return 5===this.state.previousQuestions.length||this.state.forceEnd?this.renderFinalScore():this.state.showAnswer?this.renderCorrectAnswer():s.a.createElement("div",{className:"quiz-play-holder"},s.a.createElement("div",{className:"quiz-question"},this.state.currentQuestion.question),s.a.createElement("form",{onSubmit:this.submitGuess},s.a.createElement("input",{type:"text",name:"guess",onChange:this.handleChange}),s.a.createElement("input",{className:"submit-guess button",type:"submit",value:"Submit Answer"})))}},{key:"render",value:function(){return this.state.quizCategory?this.renderPlay():this.renderPrePlay()}}]),t}(a.Component)),j=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(w,{path:!0}),s.a.createElement(d.a,null,s.a.createElement(h.c,null,s.a.createElement(h.a,{path:"/",exact:!0,component:E}),s.a.createElement(h.a,{path:"/add",component:p}),s.a.createElement(h.a,{path:"/play",component:C}),s.a.createElement(h.a,{component:E}))))}}]),t}(a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(s.a.createElement(j,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");k?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):O(t,e)})}}()}},[[26,1,2]]]);
//# sourceMappingURL=main.c5f3b74b.chunk.js.map