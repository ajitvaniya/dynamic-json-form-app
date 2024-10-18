import  { useState,useEffect  } from 'react';
import formJson from '../data/formdata.json'; 
import InputComponent from '../components/UI/InputComponent';
import { Col, Row } from 'react-bootstrap';
import ScrollToSection from './elements/ScrollToSection';


function Personal() {
    const [formData, setFormData] = useState(localStorage.getItem('applicantDetails')?JSON.parse(localStorage.getItem('applicantDetails')):{});
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [image, setImage] = useState(localStorage.getItem('profilePhoto') ? localStorage.getItem('profilePhoto'): null);

    const handleInputChange = (e,checkboxOption={},typefield='') => {
        const { name, value, type, checked } = e.target;
        if (typefield === "radio") { 
            setFormData({
                ...formData,
                [name]:checkboxOption.value,
            }); 
        }else if (type === "checkbox") { 
            setFormData({
                ...formData,
                [name]: {
                    ...formData[name],
                    [checkboxOption.value]: checked,
                },
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        } 
        if (value) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
    
        formJson.form.groups.forEach((group) => {
          group.fields.forEach((field) => { 
            const fieldValue = formData[field.name];
            if (field.required && !formData[field.name]) {
              isValid = false;
              newErrors[field.name] = `${field.label} is required.`;
            }
            if (field.type === 'number' && fieldValue) {
                const value = Number(fieldValue);
                if (field.min && value < field.min) {
                  isValid = false;
                  newErrors[field.name] = `${field.label} must be at least ${field.min}.`;
                }
                if (field.max && value > field.max) {
                  isValid = false;
                  newErrors[field.name] = `${field.label} cannot exceed ${field.max}.`;
                }
              }
          });
        });
    
        setErrors(newErrors);
        setIsFormValid(isValid);
    };

    const handleSubmit =()=>{ 
        localStorage.setItem('applicantDetails',JSON.stringify(formData));
        alert('data saved successfully...!')
    }



    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => { 
                localStorage.setItem('profilePhoto', reader.result);
                setImage(URL.createObjectURL(file)); 
            };
            reader.readAsDataURL(file);
        }
    }; 

    useEffect(() => {
        validateForm();
    }, [formData]); 
    
   


    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-6">
              


                <ScrollToSection />


                <h1 className="text-3xl font-bold mb-6 mt-5">{formJson.form.title}</h1>
                <p className="mb-6 text-gray-600">{formJson.form.description}</p>
                <div key={`profile_photo`} className="mb-8"> 
                        <h2 className="text-2xl font-semibold mb-4">Profile Image</h2>

                        <Row>
                            
                            <Col md={2}>
                            <input type="file" accept="image/*" onChange={handleFileChange} /> 
                            </Col> 
                            {image  && ( 
                                <Col md={8}> 
                                        <img src={image} alt="Profile" style={{ width: '60px', height: '60px', borderRadius: '60px' }} /> 
                                </Col> 
                            )}
                        </Row>  
                </div>
                
                {formJson.form.groups.map((group, groupIndex) => (
                    <div key={groupIndex} className="mb-8" id={`${group.title}`}>
                        <h2 className="text-2xl font-semibold mb-4">{group.title}</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {group.fields.map((field, fieldIndex) => {
                                return <InputComponent key={`group_${group.title}_${fieldIndex}`} formData={formData} fieldIndex={fieldIndex} field={field} handleInputChange={handleInputChange} errors={errors} />
                            })}
                        </div>
                    </div>
                ))}

                <button
                    className={`bg-black text-white py-2 px-4 rounded-md ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!isFormValid}
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </>
    );
}

export default Personal;
