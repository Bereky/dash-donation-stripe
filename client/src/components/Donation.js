import { loadStripe } from '@stripe/stripe-js';
import { useContext, useEffect, useState } from 'react';

import { Elements } from "@stripe/react-stripe-js";

import DonationForm from './DonationForm';
import DonateContext from '../Context/DonateContext';

const Donation = () => {

    const donateContext = useContext(DonateContext);
    const [ donateAmount, setDonateAmount ] = useState()

    const [ stripePromise, setStripePromise ] = useState(null)
    const [ clientSecret, setlientSecret ] = useState("")


    useEffect(() => {
        fetch("/config").then(async (res) => {
            const { publishableKey } = await res.json()

            setStripePromise(loadStripe(publishableKey))
        })
    }, [])


    useEffect(() => {
        fetch("/create-payment-intent", {
            method: "POST",
            headers: { 
                "Content-Type" : "application/json"
                },
            body: JSON.stringify(
                {
                amount: donateAmount
                }
            ),
        })
        .then(async (res) => {
            const { clientSecret } = await res.json()

            setlientSecret(clientSecret)
        })
    }, [])

    useEffect(() => {   
        setDonateAmount(donateContext.donateAmount)

    }, [])

    /* useEffect(() => {
        console.log(stripePromise)
    }, [stripePromise]) */

    return (
        <>
        {stripePromise && clientSecret && (
        <div className="container h-auto mt-20 mb-5 flex justify-center items-center flex-row space-y-3 space-x-3 flex-wrap ">
            
            <div className=" h-96 flex items-center flex-col space-y-4">
                {/* <div className='w-1/2 align-self-start'> Go back</div> */}
                <h1 className='text-5xl font-bold text-orangeMain'>You are donating:</h1>
                <h1 className='text-4xl font-extrabold text-orangeMain'>${donateAmount}</h1>
            </div>
            <div className='w-1/2 flex items-center flex-col space-y-4'>
                    <Elements stripe={stripePromise} options={{clientSecret}}>
                        <DonationForm />
                    </Elements>
            </div>
            </div>
        )}
        </>
     );
}
 
export default Donation;