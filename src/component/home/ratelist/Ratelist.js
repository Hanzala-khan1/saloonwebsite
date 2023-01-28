import React from 'react'
import style from "../ratelist/ratelist.module.css"

function Ratelist() {
    return (
        <div className='main'>
            <div className={style.maindiv}>
                <div className={style.headdiv}>
                    <h1 className={style.head}>BEAUTY SALON RATES LIST</h1>
                </div>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button sta" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Bridal Makeup & Party Makeup
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show sta" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Moshaz beauty salon offers Bridal Makeup and Party Makeup, Event makeup and Dulhan Makeup. We have reasonable beauty salon rates in Rawalpindi and Islamabad, Pakistan. We have the best signature bridal makeup artists and senior artists for makeup. Moshaz is located in Chaklala Scheme 3 and Bahria Town Rawalpindi Islamabad. Moshaz is well known for being professional artists of Bridal Makeup, Mehndi Makeup, Bridal Eye Makeup, Party Makeup and Event  Makeup in Rawalpindi and Islamabad.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header " id="headingTwo">
                            <button class="accordion-button collaps stb" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Hair Care
                            </button>
                        </h2>
                        <div id="collapseTwo" class=" stb accordion-collapse  stb collaps stb" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body stb">
                                Moshaz beauty salon offers Hair salon services . We have the best hair salon for ladies in Rawalpindi and Islamabad, Pakistan. Our Hair Salon, we have hairdressing, haircuts, hair treatment and keratin treatment professionals. We have experienced and best hairstylists for hairstyling in our hair salon. We also offer keratin treatment, extenso hair treatment in Rawalpindi and Islamabad.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header " id="headingThree">
                            <button class="accordion-button collapsed sta" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Facial
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse sta" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                The Beauty Salon offers various services in Facial. Like HydraFacial, Derma Logica, Anti Aging, and much more. Our Beauty parlour rates are reasonable and we always produce satisfying results. Our Facial salon is well known for having best facial experts in Rawalpindi and Islamabad.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.headdiv}>
                    <h1 className={style.head_y}>TIMINGS</h1>
                    <h1 className={style.head_y}>11:00 AM TILL 08:30 PM</h1>
                </div>

            </div>

        </div>
    )
}

export default Ratelist
