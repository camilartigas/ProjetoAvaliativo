import { Footer } from "../components/footer";
import { Header } from "../components/header";
import agostoLilas from "../img/agostoLilas.png";

function Home(){
    return(
        <>
        <Header />
        
            <img src={agostoLilas} alt="agosto lilas" style={{ maxWidth: '100%', height: 500 }}/>
      
        <Footer />
        </>
        
    )
}

export default Home