import  { useState,useEffect  } from 'react';
import formJson from '../data/formdata.json'; 
import InputComponent from '../components/UI/InputComponent';


function Personal() {
    const [formData, setFormData] = useState(localStorage.getItem('applicantDetails')?JSON.parse(localStorage.getItem('applicantDetails')):{});
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

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

    useEffect(() => {
        validateForm();
      }, [formData]);

      console.log(`formData--->`,formData)

    return (
        <>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold mb-6">{formJson.form.title}</h1>
                <p className="mb-6 text-gray-600">{formJson.form.description}</p>

                {formJson.form.groups.map((group, groupIndex) => (
                    <div key={groupIndex} className="mb-8">
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
