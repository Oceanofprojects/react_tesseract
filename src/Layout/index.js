export default function Back_Lay({attr}){
    return(
        <>
        <h1>TESTTTTT</h1>
      <section style={{position:'fixed',
top:'0',left:'0',
backgroundImage:"url("+require(attr.url)+")",
backgroundSize:'cover',backgroundPosition: 'top left',height:100vh',width:'100%',zIndex:'-2'
}}>
      </section>
          </>
    );
}
