export default function Back_Lay({attr}){
    return(
      <section style={{position:'fixed',
top:'0',left:'0',
backgroundImage:"linear-gradient(rgba(0, 0,0,.7), rgba(0,0,0,.4), rgba(0,0,0,.7)), url("+{require(`${attr.url}`)}+")",
backgroundSize:'cover',backgroundPosition: 'top left',height:100vh',width:'100%',zIndex:'-2'
}}>
      </section>
    );
}
