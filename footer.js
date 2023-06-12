const Footer = () => {
    return (
        <footer>
            <div className="footer1">
                <div className="quicklinks">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="https://iith.ac.in/">IIT HYDERABAD</a></li>
                        <li><a href="https://gymkhana.iith.ac.in/">GYMKHANA IITH</a></li>
                        <li><a href="https://gymkhana.iith.ac.in/evnts/milan/">MILAN</a></li>
                    </ul>
                </div>
                <div className="socialmedia">
                    <h2>Follow us on</h2>
                    <ul>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <li><a href="https://www.instagram.com/milan_thegc_iith/?hl=en"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="https://www.facebook.com/iithyderabad"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/milanthegc/?originalSubdomain=in"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="contactus">
                <h1>Contact Us</h1>
                <ul>
                    <li> Address: Indian Institute of technology Hyderabad
                        Near NH-65, Sangareddy, kandi, Telangana 502285</li>
                    <li>Phone: (+91) 6266875616</li>
                    <li>Mail us at: media_secy@gymkhana.iith.ac.in</li>
                </ul>
            </div>
            <div className="copyright">
                <p>Copyrights <i class="fa fa-copyright"></i>MILAN IIT Hyderabad</p>
            </div>
        </footer>
    );
}

export default Footer;
