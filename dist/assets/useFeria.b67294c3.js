import{a4 as v,a5 as x}from"./index.b32bce0f.js";const P=()=>{var t;const{data:e,loading:n,refetch:a}=v({fetchPolicy:"network-only"}),s=(t=e==null?void 0:e.GetFeria)!=null?t:{},[u,{loading:c}]=x();return{db:s,loading:n,refetch:a,updateFeria:async({feriaId:d,titulo:p,descripcionCorta:l,descripcionLarga:F,terminosCondiciones:f,imagenPrincipal:y,imagenSecundaria:U,fecha:k,hora:b,fechaInicial:g,horaInicial:h,fechaFinal:m,horaFinal:w,descuento:G})=>{var o,i;try{const r=await u({variables:{input:{feriaId:d,titulo:p,descripcionCorta:l,descripcionLarga:F,terminosCondiciones:f,imagenPrincipal:y,imagenSecundaria:U,fecha:k,hora:b,fechaInicial:g,horaInicial:h,fechaFinal:m,horaFinal:w,descuento:G}}});return a(),(o=r.data)!=null&&o.UpdateFeria?{ok:!0}:{ok:!1,error:(i=r.data)==null?void 0:i.UpdateFeria}}catch{return{ok:!1,error:"Hubo un error"}}},loadingUpdate:c}};export{P as u};