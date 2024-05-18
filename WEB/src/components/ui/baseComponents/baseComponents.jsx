import Navbar from "../navbar/navbar";
import Menu from "../menu/menu";
import Footer from "../footer/footer";

function BaseComponents({ backgroundImage, children, className }) {

    return (
        <div className={`components ${className}`} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Navbar />
            <Menu />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    );
}


export default BaseComponents;



