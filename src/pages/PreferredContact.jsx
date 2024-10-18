import { Col, Row } from "react-bootstrap";

import formJson from '../data/formdata.json';
import { Link } from "react-router-dom";
import { useEffect } from "react";

function PreferredContact() {
    let applicantData = localStorage.getItem('applicantDetails') ? JSON.parse(localStorage.getItem('applicantDetails')) : {}
    
    useEffect(()=>{
        document.title='Preffered Contact Method';
    },[])

    
    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-[20px]">
                {
                     Object.keys(applicantData) < 1  ?
                    <p>Please fill personal details: <Link to='/'>click here</Link></p>
                :
                        <>
                             <Row key={`prefered_contact`}>
                                <Col md={2} className="font-medium">Prefered Contact:</Col>
                                <Col md={10}> {applicantData['contactMethod']}</Col>
                            </Row>
                        </>
                }

            </div>
        </>
    );
}

export default PreferredContact;
