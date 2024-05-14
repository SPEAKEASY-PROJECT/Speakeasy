import Navbar from "../navbar/navbar";
import Menu from "../menu/menu";
import Footer from "../footer/footer";

function BaseComponents({ backgroundImage }) {

    return (
        <div className="components" style={{ backgroundImage: `${backgroundImage}` }} >
            <Navbar />
            <Menu />
            <Footer />
        </div>
    );
}

BaseComponents.defaultProps = {
    backgroundColor: 'blue'
}

export default BaseComponents;



