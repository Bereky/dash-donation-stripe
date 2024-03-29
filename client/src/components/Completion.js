import { useContext } from "react";
//import DonateContext from "../Context/DonateContext";


const Completion = () => {

    //const donateContext = useContext(DonateContext);
    
    return ( 
        <div className="h-auto min-h-56 mt-16 mb-5 flex justify-center items-center flex-col space-y-3">
            <div className="w-100 h-16 ">
                <h1 className="text-4xl text-orangeMain font-bold">Thank you!</h1>
            </div>
            <div className="w-100 h-auto flex justify-center items-center my-10">
            
                <svg width="200.777px" height="200.777px" className="fill-orangeMain" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 491.051 491.051"  >
                    <path id="XMLID_17_" d="M174.944,251.387l-8.371-53.946c-33.756,3.69-59.864,14.635-84.251,31.688
                        c-39.006,29.574-64.238,71.443-78.317,118.28c45.35-45.35,63.989-62.669,100.751-81.34
                        C127.543,256.115,146.72,251.426,174.944,251.387z"/>
                    <path id="XMLID_18_" d="M292.644,204.138l8.105,56.415c46.123-0.273,78.535-12.504,108.029-33.111
                        c39.206-29.791,64.815-72.648,78.269-118.353c-47.007,47.007-65.533,63.418-100.8,81.259
                        C355.652,203.745,332.429,207.033,292.644,204.138z"/>
                    <path id="XMLID_19_" d="M229.637,143.567c19.386-6.722,31.921-26.367,28.891-47.424c-3.514-24.532-27.532-42.963-54.437-35.782
                        l4.125,37.993L229.637,143.567z"/>
                    <path id="XMLID_20_" d="M411.069,314.805l-82.411,45.501c-21.645-30.305-12.873-18.027-37.822-52.957l-15.101-105.125
                        l12.728-27.153l24.453-52.153c0.988-2.123,1.615-4.399,1.849-6.722l9.208-93.586c1.11-11.313-7.157-21.388-18.47-22.506
                        c-11.459-1.046-21.396,7.165-22.507,18.47l-7.928,80.561c0.78,14.071-3.071,27.853-11.618,39.262
                        c-2.011,2.694-4.327,5.059-6.699,7.343l-2.957,6.296c-6.643,0.949-29.342,4.212-35.919,5.163l-25.731-54.309l-9.165-84.516
                        c-1.23-11.298-11.426-19.507-22.684-18.245c-11.305,1.222-19.474,11.385-18.244,22.683l9.544,87.974
                        c0.249,2.285,0.877,4.519,1.857,6.594l25.828,54.524l8.555,55.128l14.055,90.652c-19.645,9.286-7.188,3.4-58.224,27.516
                        c-5.7,2.692-10.155,7.461-12.447,13.33l-38.7,98.806c-4.978,12.696,1.286,27.033,13.991,32.002
                        c12.648,4.986,27.033-1.279,32.002-13.99l35.123-89.671l74.603-35.251l12.156-0.692l40.848,57.188
                        c7.325,10.253,21.107,13.299,32.043,7.26l101.667-56.133c11.941-6.594,16.275-21.621,9.682-33.563
                        C438.037,312.552,423.042,308.212,411.069,314.805z"/>
                </svg>
            </div>
            <div className="w-100 h-auto ">
                {/* <div className="h-12 text-center mt-5" >
                    <h1 className="text-4xl font-bold text-orangeMain">{donateContext.donateAmount}</h1>
                </div> */}
                <div className="h-12 w-100 flex items-center justify-center">
                    <h1 className="text-3xl text-center text-orangeMain">YOUR DONATION WAS SUCCESSFUL!</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Completion;