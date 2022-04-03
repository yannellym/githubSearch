import "./styles.css"
import 'animate.css';

const Header = () => {

    function refreshPage() {
        window.location.reload(false);
    }
      
    return (
        <div className="header-container">
            <h1 onClick={refreshPage} class="animate__animated animate__rubberBand">
                <img src="./images/book.png" alt="book" className="book" />
                Github Pages: Find users in one click
            </h1>
        </div>
     );
}
 
export default Header;
