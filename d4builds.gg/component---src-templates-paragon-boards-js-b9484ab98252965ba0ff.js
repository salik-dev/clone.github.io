"use strict";(self.webpackChunksite_name_here=self.webpackChunksite_name_here||[]).push([[581],{2944:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var s=a(5007),r=a(1385),l=a(3751),n=a(1195),o=a(5511),i=a(5304),c=a(3490);function u(e){var t=e.pageContext.paragonBoards,a=(0,s.useState)(""),u=a[0],f=a[1],d=(0,s.useState)(""),m=d[0],h=d[1],p=(0,s.useState)(t),v=p[0],w=p[1],g=(0,s.useState)(0),C=g[0],E=g[1],S=(0,s.useState)([]),b=S[0],k=S[1],L=function(){var e=window.pageYOffset;E(e)};(0,s.useEffect)((function(){return Z(),window.addEventListener("scroll",L,{passive:!0}),function(){window.removeEventListener("scroll",L)}}),[u,m]);var Z=function(){var e=t.filter((function(e){var t=(e.title+e.description+(e.effects?e.effects.join(""):"")).toLowerCase();return(!m||(m===e.class||!e.class))&&(0===b.length||!!e.filters&&b.every((function(t){return e.filters.indexOf(t)>=0})))&&t.toLowerCase().includes(u.toLowerCase())}));w(e)},y=v.map((function(e,t){return s.default.createElement(n.Z,{key:t,paragon:e})}));return s.default.createElement(r.Z,null,s.default.createElement(l.Z,{title:"Diablo 4 Paragon Boards",description:"A list of all the Paragon Boards available for each class in Diablo 4."}),s.default.createElement(o.Z,{searchTerm:u,setSearchTerm:f,selectedClass:m,setSelectedClass:h,title:"Diablo 4 Paragon Boards",gameFilters:!0,filtersArr:b,setFiltersArr:k,updateResults:Z,placeholder:"Search by name or keyword..."}),s.default.createElement(c.Z,{text:"Legendary Aspect slots have been updated to match the latest version!"}),s.default.createElement(i.Z,{selectedClass:m,setSelectedClass:h,scrollPosition:C,tags:!0}),s.default.createElement("ul",{className:"skills"},y))}}}]);