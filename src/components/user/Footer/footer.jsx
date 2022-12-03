import { Fragment } from "react";
import './footer.css'

function FooterUser() {
    return ( 
        <Fragment>
            <div className="footer_container">
                {/* <div className="links">
                    <span>جدیدترین آپارتمان های تهران</span>
                    <span>جدیدترین آپارتمان های تهران</span>
                    <span>جدیدترین آپارتمان های تهران</span>
                </div> */}
               
                <div>
                    <h5>تماس با ما</h5>
                    <div className="info">
                        <p>آدرس: لرستان ، الیگودرز ، خیابان هلال احمر ، روبروی مخابرات ، املاک ملل</p>
                        <a href="tel:06643328410"> تلفن تماس 06643328410 </a>
                        <a>نشانی در مسیریاب نشان</a>
                    </div>
                   
                </div>


            </div>
        </Fragment>
     );
}

export default FooterUser;