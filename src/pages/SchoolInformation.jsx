import { Col, Row } from "react-bootstrap";

import formJson from '../data/formdata.json';
import { Link } from "react-router-dom";
import { useEffect } from "react";

function SchoolInformation() {
    let applicantData = localStorage.getItem('applicantDetails') ? JSON.parse(localStorage.getItem('applicantDetails')) : {}
    let groupTitle = 'Schooling Information';
    let groupData = null;

    useEffect(()=>{
        document.title='Schooling Information';
    },[])

    let sepcificGroupData = formJson?.form?.groups.filter((group) => group.title === groupTitle);
    if (sepcificGroupData && sepcificGroupData.length > 0) {
        groupData = sepcificGroupData[0];
    }
 

    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-[20px]">
                {
                     Object.keys(applicantData) < 1 ?
                    <p>Please fill personal details: <Link to='/'>click here</Link></p>
                :
                        <>
                            {
                                groupData.fields.map((field, index) => {
                                    let fieldValues =[];
                                    if(field?.options && field.type ==='checkbox' && applicantData[field?.name]){ 
                                        let values = Object.keys(applicantData[field?.name]);
                                        let filterOptions= field?.options.filter((option)=> {
                                            if(values.includes(option.value)){
                                                fieldValues.push(option.label);
                                            }
                                            return option;
                                        }) 
                                    }
                                    if(field?.options && field.type ==='radio'){ 
                                        let filterOptions= field?.options.filter((option)=> {
                                            if(applicantData[field?.name] === option.value){
                                                fieldValues.push(option.label);
                                            }
                                            return option;
                                        }) 
                                    }
                                    return (
                                        <Row key={`${groupTitle}_${index}`}>
                                            <Col md={2} className="font-medium">{field.label}:</Col>
                                            <Col md={10}>{fieldValues && fieldValues.length>0 ? fieldValues.join(','): applicantData[field?.name]}</Col>
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

export default SchoolInformation;
