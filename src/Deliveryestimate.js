import React from "react";
import $ from 'jquery'
export default function deliveryestimate() {
    $(function () {

        $('.btn-2').click(function () {
            alert('Estimated delivery within 3-5 days')
        });
    });
    return (
        <div>
            <div class="delivery-estimate" id="deliveryestimate">
                <input type="text" placeholder="Enter Pincode" class="delivery-pincode" id="pincode" style={{ backgroundColor: "beige", width: "17rem", height: "37px" }} />
                <button class="btn-2 btn btn-primary m-2">Check</button>
            </div>

        </div>
    )
}