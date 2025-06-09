import{s as a,r as n,b as e,M as r,H as c,C as l,c as d,L as u}from"./index-AEsN7gvZ.js";import{L as m}from"./ListButtons-DWqpJVV_.js";const x=async()=>await a.fetch(`*[_type == "portfolio"][0].pages[_type == "educationPage"][0] {
        title,
        education {
            name,
            description,
            location,
            date,
            courses[] -> {
                description,
                "technologies": technologies[]->name
            }
        }
    }`);function p({courses:t}){const s=n.useMemo(()=>({display:"flex",flexDirection:"column",gap:"1rem"}),[]);return e.jsx(e.Fragment,{children:t.map((i,o)=>e.jsx(r,{children:e.jsxs("div",{style:s,children:[e.jsx(c,{markdown:i.description}),i.technologies&&e.jsx(m,{elements:i.technologies})]})},i.description))})}const f=n.memo(p);function j({education:t}){const s=n.useMemo(()=>({display:"flex",justifyContent:"center",flexDirection:"column",gap:"1rem"}),[]);return e.jsx(r,{subtitle:t.description,children:e.jsxs("div",{style:s,children:[e.jsx("div",{children:e.jsx(c,{markdown:t.description})}),e.jsx(f,{courses:t.courses})]})})}const y=n.memo(j);function g(){const[t,s]=n.useState(null),i=n.useMemo(()=>({display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"center",gap:"2rem"}),[]);return n.useEffect(()=>{x().then(o=>{s(o)})},[]),e.jsx(e.Fragment,{children:t?e.jsxs("div",{style:i,children:[e.jsx(d,{title:t.title}),e.jsx(y,{education:t.education})]}):e.jsx(u,{})})}const M=l(g);export{M as default};
