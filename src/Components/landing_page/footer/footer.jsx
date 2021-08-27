import { Link } from "react-router-dom";
import '../footer/footer.css';
export default function Footer() {
    return <div className="footerDes">
        <div className='footerMenu'>
            <nav><Link to='/policies'>Policies</Link></nav>
            <nav><Link to='/promotions'>Promotions</Link></nav>
            <nav><Link to='/accessibility'>Accessibility Statement</Link></nav>
        </div>

        <div className='address'>
            <p>662 Main Street, Barnstable, MA, 02601, United States 508-687-0389 info@hyannisplazahotel.com</p>
        </div>
        
    </div>
}