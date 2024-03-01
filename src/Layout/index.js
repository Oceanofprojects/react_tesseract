export default function Back_Lay({attr}){
    let data = "'"+attr.url+"'";
    return(
       <section style={{position:'fixed',
top:'0',left:'0',
backgroundImage:"url("+require(data)+")",
backgroundSize:'cover',backgroundPosition: 'top left',height:'100vh',width:'100%',zIndex:'-2'
}}></section>
    );
}
