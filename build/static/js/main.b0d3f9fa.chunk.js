(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,a,t){e.exports=t(261)},134:function(e,a,t){},261:function(e,a,t){"use strict";t.r(a);var n,l,c,i=t(0),r=t.n(i),s=t(49),o=t.n(s),m=(t(134),t(10)),u=t(11),p=t(18),d=t(12),E=t(19),h=t(265),b=t(41),A=function(e){function a(){return Object(m.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#achievements"},"Achievementss")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},r.a.createElement("span",{className:"span"})),r.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.roleDescription),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement(h.a,{size:"huge",color:e.color},r.a.createElement(b.a,{name:e.name})," ",e.header)))})))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(i.Component),f=function(e){function a(){return Object(m.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"avatar-img",src:"images/pic.jpeg",alt:""})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,e.aboutme),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("h2",null,"Contact Details"),r.a.createElement("p",{className:"address"},r.a.createElement("span",null,e.name),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("a",{href:"mailto: lakshitmadaan@gmail.com"},"Send Email  ",r.a.createElement("i",{className:"fa fa-envelope"})," ")),r.a.createElement("br",null),r.a.createElement("span",{className:"address"},r.a.createElement("a",{href:"tel:8377057734"},"Make a Phone call  ",r.a.createElement("i",{className:"fa fa-phone"})," ")),r.a.createElement("br",null),r.a.createElement("span",null,e.address),r.a.createElement("br",null),r.a.createElement("a",{href:e.website},e.website)),r.a.createElement("a",{href:"images/resume.pdf",download:!0},r.a.createElement(h.a,{size:"huge",color:"green"},"Resume   ",r.a.createElement("i",{className:"fa fa-download"})," ")))))))}}]),a}(i.Component),g=function(e){function a(){return Object(m.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education ",r.a.createElement("i",{className:"fa fa-pencil"})," "))),r.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null,e.UniversityName),r.a.createElement("p",{className:"info"},e.specialization,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),r.a.createElement("p",null,e.Achievements,r.a.createElement("hr",{style:{borderTop:"4px solid teal"}}))))}))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Experience ",r.a.createElement("i",{className:"fa fa-globe"})," "))),r.a.createElement("div",{className:"nine columns main-col"},e.Experience&&e.Experience.map(function(e){return r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("h3",null,e.CompanyName),r.a.createElement("p",{className:"info"},e.specialization,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),r.a.createElement("p",null,e.Achievements,r.a.createElement("hr",{style:{borderTop:"4px solid teal"}}))))}))),r.a.createElement("div",{className:"row skill"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"My Skills ",r.a.createElement("i",{className:"fa fa-code"})," "))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("p",null,e.skillsDescription),r.a.createElement("div",{className:"bars"},r.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return r.a.createElement("li",null,r.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),r.a.createElement("em",null,e.skillname))}))))))}}]),a}(i.Component),v=function(e){function a(){return Object(m.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",null,"My projects"),r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return r.a.createElement("a",{href:"".concat(e.link)},r.a.createElement("div",{className:"columns portfolio-item"},r.a.createElement("div",{className:"item-wrap"},r.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",null,e.name),r.a.createElement("p",null,e.description))))))})))))}}]),a}(i.Component),k=function(e){function a(){return Object(m.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("section",{id:"achievements"},r.a.createElement("div",{className:"text-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Client Testimonials"))),r.a.createElement("div",{className:"ten columns flex-container"},r.a.createElement("div",{className:"flexslider"},r.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return r.a.createElement("li",null,r.a.createElement("blockquote",null,r.a.createElement("p",null,e.description),r.a.createElement("a",{style:{color:"#fff"},href:e.name},e.name)))})))," ")," ")," "),"  ")}}]),a}(i.Component),N=t(264),w=(i.Component,function(e){function a(){return Object(m.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement(h.a,{size:"huge",color:e.color},r.a.createElement(b.a,{name:e.name})," ",e.header)))}))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(i.Component)),y=t(42),U={imagebaseurl:"",name:"Lakshit Madaan",role:"",linkedinId:"Your LinkedIn Id",skypeid:"Your skypeid",roleDescription:"I am a Full stack web developer with more than 2 year of experience, Currently working on new technologies like Blockchain and also on research papers realted to blockchain technology",socialLinks:[(n={name:"linkedin",url:"https://www.linkedin.com/in/lakshit-madaan-589b3316b/"},Object(y.a)(n,"name","linkedin"),Object(y.a)(n,"color","linkedin"),Object(y.a)(n,"header","linkedin"),n),(l={name:"github",url:"https://github.com/lakshitmadaan20"},Object(y.a)(l,"name","github"),Object(y.a)(l,"color","github"),Object(y.a)(l,"header","github"),l),(c={name:"facebook",url:"https://www.facebook.com/lakshit.madaan/"},Object(y.a)(c,"name","facebook"),Object(y.a)(c,"color","facebook"),Object(y.a)(c,"header","facebook"),c)],aboutme:"Building quality websites and applications with React.js,Node.js,Express.js and handling database with Mongo.db. Hard-working web developer with a flair for creating elegant solutions in the least amount of time. Developed quality and responsive projects using MERN stack and Ethereum DApps. More than 1 year of experience as a web and blockchain developer",address:" Delhi, India",website:"",education:[{UniversityName:"HMR Institute Of Technology & Managemment",specialization:"Btech CSE",MonthOfPassing:"August",YearOfPassing:"2021",Achievements:"Pursuing graduation from HMRITM in Computer Science"},{UniversityName:"N.K Bagrodia Public School",specialization:"Non Medical",MonthOfPassing:"June",YearOfPassing:"2017",Achievements:"Did high school from N.K. Bagrdoia PUblic School in Non Medical Science"}],Experience:[{CompanyName:"Globalshala",specialization:"Web Developer",MonthOfLeaving:"September",YearOfLeaving:"2020",Achievements:"Did internship with Globalshala"},{CompanyName:"Press Trust of India",specialization:"Web Developer",MonthOfLeaving:"July",YearOfLeaving:"2020",Achievements:"Intern as a full stack web developer for 2 months and getting to work on realtime projects."},{CompanyName:"Brain Mentors PVT. LTD.",specialization:"MERN/UI Development",MonthOfLeaving:"July",YearOfLeaving:"2020",Achievements:"Student Training in MERN stack and UI development"}],skillsDescription:"My Skills",skills:[{skillname:"Reactjs"},{skillname:"Nodejs"},{skillname:"Expressjs"},{skillname:"MongoDB"},{skillname:"Blockchain"},{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Ethereum"},{skillname:"SmartContract"},{skillname:"AWS"},{skillname:"javascript"}],portfolio:[{link:"https://github.com/danisharora099/facial_recog/",name:"Maximising Security Using Blockchain And ML",description:"Webapp/DApp",imgurl:"https://t-images.imgix.net/https%3A%2F%2Fstatic.t-cdn.net%2F5e564d5760a1b0133aba2215%2Fposts%2F5edf34bfc3488338faaecc33%2F5edf34bfc3488338faaecc33_53285.png?width=1240&w=1240&auto=format%2Ccompress&ixlib=js-2.3.1&s=b546126d09e0c5206ced4f70dc4af2ec"},{link:"https://github.com/lakshitmadaan20/Marketplace/",name:"Blockchain Marketplace",description:"DApp",imgurl:"https://www.gminsights.com/assets/img/blockchain-technology-market.png"},{link:"https://pti-1.herokuapp.com/",name:"Basketing News",description:"webapp",imgurl:"data:image/jpeg;base64,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"},{link:"https://pacific-ravine-69958.herokuapp.com/",name:"Chat Bot",description:"webapp",imgurl:"data:image/png;base64,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"}],testimonials:[{description:"First Author on paper 'Working Principle, Application Areas and Challenges of Blockchain Technology' ",name:"https://ieeexplore.ieee.org/document/9115794"},{description:"Winner at Hackerearth globalshala hackathon",name:""},{description:"First Author on research article 'Secure and Enhance Crowdfunding Solution Using Blockchain Technology' ",name:"accepted in springer nature book and yet to be published"},{description:"Participated in Hack In India Hackathon",name:""},{description:"Blockchain Specilisation",name:"Blockchain specialisation course from coursera and organised by University of New York"},{description:"MERN/UI Development",name:""},{description:"E book Author of Book 'Blockchain: the Revolutionizing Technology' ",name:"https://www.amazon.in/dp/B091KXPR3Q/ref=sr_1_29?dchild=1&keywords=Blockchain+revolution&qid=1617439359&sr=8-29"}]},S=function(e){function a(){return Object(m.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(A,{resumeData:U}),r.a.createElement(f,{resumeData:U}),r.a.createElement(g,{resumeData:U}),r.a.createElement(v,{resumeData:U}),r.a.createElement(k,{resumeData:U}),r.a.createElement(w,{resumeData:U}))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[129,2,1]]]);
//# sourceMappingURL=main.b0d3f9fa.chunk.js.map