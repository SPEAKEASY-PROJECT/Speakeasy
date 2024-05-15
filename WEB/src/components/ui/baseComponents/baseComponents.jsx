import Navbar from "../navbar/navbar";
import Menu from "../menu/menu";
import Footer from "../footer/footer";

function BaseComponents({ backgroundImage }) {

    return (
        <div className="components" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }} >
            <Navbar />
            <Menu />
            <Footer />
        </div>
    );
}


export default BaseComponents;



