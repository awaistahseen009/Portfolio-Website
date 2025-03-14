import React, { useState } from 'react'
import "./Qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState]=useState(0);
    const toggleTab= (index)=>{
        setToggleState(index)
    }
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex": "qualification__button button--flex"} onClick={()=>toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex": "qualification__button button--flex"} onClick={()=>toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>
            {/* QUALIFICATION__SECTION */}
            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active": "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">BSCIS</h3>
                            <span className="qualification__subtitle">Pakistan Institute of Engineering and Applied Sciences Nilore</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021-Present
                            </div>
                        </div>
                        <div >
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                            </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div >
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                            </div>
                        <div>
                            <h3 className="qualification__title">FSc Pre-Eng</h3>
                            <span className="qualification__subtitle">Fazaia Inter College Nurkhan Base Chaklala Rawalpindi</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019-2021
                            </div>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Data Science and MLE</h3>
                            <span className="qualification__subtitle">2 Years of Experience </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022-Present
                            </div>
                        </div>
                        <div >
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                            </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div >
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                            </div>
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">2 Years of Experience</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022-Present
                            </div>
                        </div>
                        
                    </div>
                </div>


                <div className={toggleState === 2 ? "qualification__content qualification__content-active": "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">BSCIS</h3>
                            <span className="qualification__subtitle">Pakistan Institute of Engineering and Applied Sciences Nilore</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021-Present
                            </div>
                        </div>
                        <div >
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                            </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div >
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                            </div>
                        <div>
                            <h3 className="qualification__title">FSc Pre-Eng</h3>
                            <span className="qualification__subtitle">Fazaia Inter College Nurkhan Base Chaklala Rawalpindi</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i> 2019-2021
                            </div>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Data Science and MLE</h3>
                            <span className="qualification__subtitle">2 Years of Experience </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022-Present
                            </div>
                        </div>
                        <div >
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                            </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification