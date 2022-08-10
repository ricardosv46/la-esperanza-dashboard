import{a6 as v,r as d,a1 as L,u as z,j as r,C as j,F as l,b as e,B as F,U as k,H,G as p,a7 as n,c as T,T as D}from"./index.b32bce0f.js";import{u as W}from"./useFeria.b67294c3.js";import{u as B}from"./useForm.c271e1a4.js";import{I as y}from"./InputImage.9a98cd58.js";import"./useAllImagenes.696f7c03.js";import"./chakra-ui-spinner.esm.cdc97e94.js";const i={descuento:0,descripcionCorta:"",descripcionLarga:"",fecha:"",fechaFinal:"",fechaInicial:"",hora:"",horaFinal:"",horaInicial:"",terminosCondiciones:"",titulo:"",feriaId:""},V=()=>{const{state:a}=v(),{updateFeria:P}=W(),[c,u]=d.exports.useState({}),[m,h]=d.exports.useState({}),b=L();console.log({detalle:a});const g=z();console.log(c),i.titulo=a.abonados.titulo,i.descuento=a.abonados.descuento,i.descripcionCorta=a.abonados.descripcionCorta,i.descripcionLarga=a.abonados.descripcionLarga,i.fecha=a.abonados.fecha,i.fechaFinal=a.abonados.fechaFinal,i.fechaInicial=a.abonados.fechaInicial,i.hora=a.abonados.hora,i.horaFinal=a.abonados.horaFinal,i.horaInicial=a.abonados.horaInicial,i.terminosCondiciones=a.abonados.terminosCondiciones,i.feriaId=a.abonados.feriaId;const{values:S,...o}=B({initialValues:i}),A=async()=>{const{...t}=S;P({...t,imagenPrincipal:Number(c.id),imagenSecundaria:Number(m.id)}).then(s=>{s!=null&&s.ok?g({title:"Abonado Actualizado Correctamente",position:"top-right",isClosable:!0,status:"success"}):g({title:"Abonado Actualizado Inrrectamente",position:"top-right",isClosable:!0,status:"error"}),b(-1)})};return d.exports.useEffect(()=>{var t,s,f,C,x,I;a&&(u({id:(t=a.abonados.imagenPrincipal.id)!=null?t:"",url:(s=a.abonados.imagenPrincipal.url)!=null?s:"",titulo:(f=a.abonados.imagenPrincipal.titulo)!=null?f:""}),h({id:(C=a.abonados.imagenSecundaria.id)!=null?C:"",url:(x=a.abonados.imagenSecundaria.url)!=null?x:"",titulo:(I=a.abonados.imagenSecundaria.titulo)!=null?I:""}))},[a]),r(j,{maxWidth:"1930px",p:"10",children:[r(l,{flexDir:"column",children:[e(F,{maxWidth:"full",children:r(l,{alignItems:"center",columnGap:4,children:[e(l,{justifyContent:"center",alignItems:"center",padding:1.5,bg:"primary.500",rounded:"full",cursor:"pointer",_dark:{bg:"#F0AC42",color:"primary.500"},onClick:()=>b(-1),children:e(k,{color:"white"})}),e(H,{as:"h1",fontSize:22,children:"Actualizar Abonado"})]})}),r(F,{maxWidth:"full",children:[r(p,{mt:5,templateColumns:{base:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},gap:6,children:[e(n,{type:"text",label:"Titulo",...o.inputProps("titulo")}),e(n,{type:"text",label:"Descuento (%)",...o.inputProps("descuento"),pattern:"[0-9]{0,3}",onChange:t=>{t.target.validity.valid&&o.setField("descuento",t.target.value)}}),e(n,{type:"date",label:"Fecha",...o.inputProps("fecha")}),e(n,{type:"time",label:"Hora",...o.inputProps("hora")}),e(n,{type:"date",label:"Fecha Inicial",...o.inputProps("fechaInicial")}),e(n,{type:"date",label:"Fecha Final",...o.inputProps("fechaFinal")}),e(n,{type:"time",label:"Hora Inicial",...o.inputProps("horaInicial")}),e(n,{type:"time",label:"Hora Final",...o.inputProps("horaFinal")})]}),r(p,{mt:5,templateColumns:{base:"repeat(1, 1fr)"},gap:6,children:[e(n,{type:"text",label:"Descripci\xF3n Corta",...o.inputProps("descripcionCorta"),h:"150px"}),e(n,{type:"text",label:"Descripci\xF3n Larga",...o.inputProps("descripcionLarga"),h:"150px"}),e(n,{type:"text",label:"Terminos Condiciones",...o.inputProps("terminosCondiciones"),h:"200px"})]}),r(p,{mt:5,templateColumns:{base:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},gap:6,children:[e(y,{label:" Imagen Principal",onChange:t=>u(t),value:c}),e(y,{label:" Imagen Secundaria",onChange:t=>h(t),value:m})]})]})]}),e(l,{justifyContent:"center",py:14,children:e(T,{type:"button",w:96,py:7,colorScheme:"primary",onClick:A,_dark:{bg:"#F0AC42"},children:e(D,{fontWeight:"bold",fontSize:"xl",children:"Actualizar Abonado"})})})]})};export{V as default};
