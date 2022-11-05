import { useState } from "react";

import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"

const DonationForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [ message, setMessage ] = useState(null);
    const [ isProcessing, setIsProcessing ] = useState(null);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }

        setIsProcessing(true)

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/donation-complete`
            }
        })

        if(error){
            setMessage(error.message)
        }

        setIsProcessing(false)
    }
    
    return ( 
        <form id="payment-form" onSubmit={handleSubmit} className="flex justify-end space-y-4 flex-col items-end">
            <PaymentElement />
            <button disabled={isProcessing} className="w-40 h-10 rounded-2xl border-solid border-2 text-white bg-orangeMain border-orangeMain hover:text-orangeMain hover:bg-white text-lg font-medium  duration-300 ">
                <span id="button-text">
                    {isProcessing ? "Processing ... " : "Donate"}
                </span>
            </button>
            
            {message && <div id="payment-message">{message}</div>}
      </form>
     );
}
 
export default DonationForm;