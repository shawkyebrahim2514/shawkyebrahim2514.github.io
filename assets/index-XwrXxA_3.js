import{s as l,b as e,H as a,r as i,c as r,C as p,L as x}from"./index-AEsN7gvZ.js";const u=async()=>await l.fetch(`*[_type == "portfolio"][0].pages[_type == "experiencePage"][0] {
        professionalExperienceSection {
            title,
            professionalExperience[] -> {
                description,
                "technologies": technologies[]->name
            }
        },
        internshipsSection {
            title,
            internships[] -> {
                description,
                "technologies": technologies[]->name
            }
        },
        certificatesSection {
            title,
            certificates[] -> {
                description,
            }
        }
    }`);function o({description:t}){return e.jsx("div",{children:e.jsx(a,{markdown:t})})}function d({certificates:t}){const s=i.useMemo(()=>({display:"flex",justifyContent:"center",flexDirection:"column",gap:"1rem"}),[]);return e.jsx(e.Fragment,{children:t.map(n=>e.jsx("div",{style:s,children:n.description&&e.jsx(o,{description:n.description})},n.description))})}function f({certificatesSection:t}){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:t.title}),e.jsx(d,{certificates:t.certificates})]})}const m=i.memo(f);function j({internships:t}){const s=i.useMemo(()=>({display:"flex",justifyContent:"center",flexDirection:"column",gap:"1rem"}),[]);return e.jsx(e.Fragment,{children:t.map(n=>e.jsx("div",{style:s,children:e.jsx(o,{description:n.description})},n.description))})}function h({internshipsSection:t}){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:t.title}),e.jsx(j,{internships:t.internships})]})}const y=i.memo(h);function g({professionalExperience:t}){const s=i.useMemo(()=>({display:"flex",justifyContent:"center",flexDirection:"column",gap:"1rem"}),[]);return e.jsx(e.Fragment,{children:t.map(n=>e.jsx("div",{style:s,children:e.jsx(o,{description:n.description})},n.description))})}function E({professionalExperienceSection:t}){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:t.title}),e.jsx(g,{professionalExperience:t.professionalExperience})]})}const C=i.memo(E);function S(){const[t,s]=i.useState(null),n=i.useMemo(()=>({display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"center",gap:"2rem"}),[]);return i.useEffect(()=>{u().then(c=>{s(c)})},[]),e.jsx(e.Fragment,{children:t?e.jsxs("div",{style:n,children:[e.jsx(C,{professionalExperienceSection:t.professionalExperienceSection}),e.jsx(y,{internshipsSection:t.internshipsSection}),e.jsx(m,{certificatesSection:t.certificatesSection})]}):e.jsx(x,{})})}const M=p(S);export{M as default};
