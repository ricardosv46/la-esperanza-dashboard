import{r as s}from"./index.b32bce0f.js";const D=({validate:n,initialValues:f})=>{const[p,S]=s.exports.useState(!1),[o,u]=s.exports.useState(f),[x,l]=s.exports.useState({}),[d,b]=s.exports.useState({}),E=s.exports.useCallback(()=>u(f),[]),g=s.exports.useCallback((e,t)=>{if(typeof e=="function"){const r=e(o);u(c=>({...c,...r}));return}u(r=>({...r,[e]:t}))},[o]),h=s.exports.useCallback(e=>{u(t=>({...t,...e}))},[]),C=s.exports.useCallback(e=>{const t=e.target.name,r=e.target.value;u(c=>({...c,[t]:r}))},[]),a=s.exports.useCallback(e=>{const t=e.target.name;b(r=>({...r,[t]:!0}))},[]),k=s.exports.useCallback(e=>{S(t=>typeof e=="boolean"?e:!t)},[]),y=s.exports.useCallback(e=>Object.keys(e).length!==0,[]),F=e=>({name:e,error:x[e],value:o[e],onBlur:a,onChange:C}),i=(e,t)=>({name:e,value:o[e],onBlur:a,onChange:({value:r,label:c})=>{if(t!=null&&t.resetFields){h({...t==null?void 0:t.resetFields,[e]:r});return}g(e,r)}}),v=s.exports.useCallback(e=>t=>{if(t==null||t.preventDefault(),typeof n=="function"){k(!0);const r=n(o);if(y(r)){l(r);return}e();return}e()},[o]);return s.exports.useEffect(()=>{if(p&&typeof n=="function"){const e=n(o);l(e)}},[o,p]),{values:o,errors:x,touched:d,hasErrors:y,clear:E,onSubmit:v,setField:g,setFields:h,setErrors:l,setTouched:b,handleBlur:a,inputProps:F,selectProps:i,toggleDirty:k,handleChange:C}};export{D as u};
