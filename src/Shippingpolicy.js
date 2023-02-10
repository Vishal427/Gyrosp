import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
export default function Shippingpolicy() {
    return (

        <div>
            <div>
                <Header />
            </div>

            <div className="tcshpngplc">
                <nav className="fstsec" >

                    <div >
                        <h1 className="fstcareer">Shipping Policy</h1>
                    </div>

                </nav>
                <p className="terms">
                    Order once accepted will be delivered usually within 5 days. Delivery
                    times are affected by product availability, customers’ geographic
                    location, and shipping destination & courier partner’s delivery time to
                    location. A minimal fee may be applicable on orders below a defined
                    amount as displayed during checkout. In case of one or more defective
                    products in your order, please register a single complaint, as the
                    return/replacement will be arranged only once. Customers are advised not
                    to accept tampered or damaged shipments.
                </p>
            </div>
        </div>

    )
}