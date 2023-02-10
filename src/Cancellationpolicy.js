import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./Tc.css";
export default function Cancellationpolicy() {
    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="cancetc">
                <nav className="fstsec" >

                    <div >
                        <h1 className="fstcareer">Refund Policy</h1>
                    </div>

                </nav>

                <p className="terms tump">
                    Any change in order including cancellations must be communicated to us
                    before 10 pm IST the same business day. If outside of this timeline, we
                    cannot guarantee the change or cancellation.

                    Handling and Freshness

                    All products shipped from our store are shipped from our warehouse.

                    Please freeze the Dairy products immediately upon receipt. Products must
                    remain frozen until they are ready to be consumed. Failure to report
                    spoilage within 48 hours of receiving the order will be at the loss of
                    the consumer. Other defects must be reported within 30 days from receipt
                    of order.
                </p>
            </div>
        </div>

    )
}