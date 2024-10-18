import { Col, Row } from "react-bootstrap";

import formJson from '../data/formdata.json';
import { Link } from "react-router-dom";
import { useEffect } from "react";

function ContactInformation() {
    let applicantData = localStorage.getItem('applicantDetails') ? JSON.parse(localStorage.getItem('applicantDetails')) : {}
    let groupTitle = 'Contact Information';
    let groupData = null;

    
    useEffect(()=>{
        document.title='Contact Information';
    },[])

    let sepcificGroupData = formJson?.form?.groups.filter((group) => group.title === groupTitle);
    if (sepcificGroupData && sepcificGroupData.length > 0) {
        groupData = sepcificGroupData[0];
    }

    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-[20px]">
                {
                    !groupData ?
                    <p>Please fill personal details: <Link to='/'>click here</Link></p>
                :
                        <>
                            {
                                groupData.fields.map((field, index) => {
                                    return (
                                        <Row key={`${groupTitle}_${index}`}>
                                            <Col md={2} className="font-medium">{field.label}:</Col>
                                            <Col md={10}>{applicantData[field?.name]}</Col>
                                        </Row>
                                    )
                                })
                            }
                        </>
                }

            </div>
        </>
    );
}

export default ContactInformation;
