const ScrollToSection =()=>{

    const scrollToHighest=()=>{
        document.getElementById('Schooling Information').scrollIntoView({ behavior: 'smooth' }); 
    }

    const scrollTogGraduation=()=>{
        document.getElementById('Schooling Information').scrollIntoView({ behavior: 'smooth' }); 
    }

    const scrollToSkills=()=>{
        document.getElementById('Employment Details').scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToLevelOfInterest=()=>{
        document.getElementById('Hobbies and Interests').scrollIntoView({ behavior: 'smooth' });
    }


    return (
        <>
                <div class="w-full max-w-4xl mx-auto mt-8">
                        <div class="flex justify-between items-center py-4 border-b"> 
                            <div class="flex items-center space-x-2" onClick={scrollToHighest}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 18.333a8.333 8.333 0 1 1 8.333-8.333A8.343 8.343 0 0 1 10 18.333Zm-.833-12.5H9.167A2.5 2.5 0 0 0 6.667 8.75v5.417a2.5 2.5 0 0 0 2.5 2.5h.833a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 1.667h.833A.833.833 0 0 1 10 8.75v5.417a.833.833 0 0 1-.833.833h-.833a.833.833 0 0 1-.833-.833V8.75A.833.833 0 0 1 9.167 7.5ZM10 5.833a.833.833 0 1 0 .833-.833.833.833 0 0 0-.833.833Z"/>
                                </svg>
                                <span class="font-semibold">Highest</span>
                            </div>
 
                            <div class="flex items-center space-x-2" onClick={scrollTogGraduation}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 18.333a8.333 8.333 0 1 1 8.333-8.333A8.343 8.343 0 0 1 10 18.333Zm-.833-12.5H9.167A2.5 2.5 0 0 0 6.667 8.75v5.417a2.5 2.5 0 0 0 2.5 2.5h.833a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 1.667h.833A.833.833 0 0 1 10 8.75v5.417a.833.833 0 0 1-.833.833h-.833a.833.833 0 0 1-.833-.833V8.75A.833.833 0 0 1 9.167 7.5ZM10 5.833a.833.833 0 1 0 .833-.833.833.833 0 0 0-.833.833Z"/>
                                </svg>
                                <span class="font-semibold">Graduation Year</span>
                            </div>
 
                            <div class="flex items-center space-x-2" onClick={scrollToSkills}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 18.333a8.333 8.333 0 1 1 8.333-8.333A8.343 8.343 0 0 1 10 18.333Zm-.833-12.5H9.167A2.5 2.5 0 0 0 6.667 8.75v5.417a2.5 2.5 0 0 0 2.5 2.5h.833a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 1.667h.833A.833.833 0 0 1 10 8.75v5.417a.833.833 0 0 1-.833.833h-.833a.833.833 0 0 1-.833-.833V8.75A.833.833 0 0 1 9.167 7.5ZM10 5.833a.833.833 0 1 0 .833-.833.833.833 0 0 0-.833.833Z"/>
                                </svg>
                                <span class="font-semibold">Skills</span>
                            </div>
 
                            <div class="flex items-center space-x-2" onClick={scrollToLevelOfInterest}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 18.333a8.333 8.333 0 1 1 8.333-8.333A8.343 8.343 0 0 1 10 18.333Zm-.833-12.5H9.167A2.5 2.5 0 0 0 6.667 8.75v5.417a2.5 2.5 0 0 0 2.5 2.5h.833a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 1.667h.833A.833.833 0 0 1 10 8.75v5.417a.833.833 0 0 1-.833.833h-.833a.833.833 0 0 1-.833-.833V8.75A.833.833 0 0 1 9.167 7.5ZM10 5.833a.833.833 0 1 0 .833-.833.833.833 0 0 0-.833.833Z"/>
                                </svg>
                                <span class="font-semibold">Level of Interest</span>
                            </div>
                        </div>
                    </div>
                </>
    )
}

export default ScrollToSection;