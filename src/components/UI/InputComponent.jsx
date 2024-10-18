const InputComponent=({formData={},field={},fieldIndex=0,handleInputChange,errors={}})=>{ 

    
    switch (field.type) {
        case "text":
            return (
                <div key={fieldIndex} className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                    <input
                        type="text"
                        value={formData[field.name] || ''}

                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        onChange={handleInputChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    />

                    {errors[field.name] && (
                        <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                    )}
                </div>
            );
        case 'number': // Adding support for number type
            return (
              <div key={fieldIndex} className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={formData[field.name] || ''}
                  min={field.min || ''}
                  max={field.max || ''}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full p-2 border ${
                    errors[field.name] ? 'border-red-500' : 'border-gray-300'
                  } rounded-md`}
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                )}
              </div>
            );
        case "textarea":
            return (
                <div key={fieldIndex} className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                    <textarea
                        name={field.name}
                        value={formData[field.name] || ''} 
                        placeholder={field.placeholder}
                        required={field.required}
                        onChange={handleInputChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    ></textarea>
                    {errors[field.name] && (
                        <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                    )}
                </div>
            );
        case "dropdown":
            return (
                <div key={fieldIndex} className="col-span-1">
                    <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                    <select
                        name={field.name}
                        value={formData[field.name] || ''}
                        required={field.required}
                        onChange={handleInputChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Select</option>
                        {field.options.map((option, optionIndex) => (
                            <option key={optionIndex} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    {errors[field.name] && (
                        <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                    )}
                </div>
            );
        case "radio":
            return (
                <div key={fieldIndex} className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                    <div className="mt-2 space-x-4">
                        {field.options.map((option, optionIndex) => (
                            <label key={optionIndex} className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name={field.name}
                                    checked={formData[field.name] === option.value }   
                                    onChange={(e)=>handleInputChange(e,option,'radio')}
                                    className="form-radio"
                                />
                                <span className="ml-2">{option.label}</span>
                            </label>
                        ))}
                    </div>
                    {errors[field.name] && (
                        <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                    )}
                </div>
            );
        case "checkbox":
            return (
                <div key={fieldIndex} className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                    <div className="mt-2 space-x-4">
                        {field.options.map((option, optionIndex) => (
                            <label key={optionIndex} className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name={field.name}
                                    checked={formData[field.name] && Object.keys(formData[field.name]).includes(option.value)?true:false}
                                    onChange={(e)=>handleInputChange(e,option)}
                                    className="form-checkbox"
                                />
                                <span className="ml-2">{option.label}</span>
                            </label>
                        ))}
                    </div>
                    {errors[field.name] && (
                        <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                    )}
                </div>
            );
        case "slider":
            return (
                <div key={fieldIndex} className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                    <input
                        type="range"
                        name={field.name}
                        min={field.min}
                        max={field.max}
                        value={formData[field.name] || ''}   
                        step={field.step}
                        onChange={handleInputChange}
                        className="mt-1 block w-full"
                    />
                    {errors[field.name] && (
                        <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
                    )}
                </div>
            );
        default:
            return null;
    }
}
export default InputComponent;