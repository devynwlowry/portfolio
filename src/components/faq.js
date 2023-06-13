export const FAQ = () => {
    return (
        <>
        <div id='accordion-collapse' data-accordion='collapse' data-active-classes='bg-light-primary-bg' data-inactive-classes='bg-light-primary-bg'>
            <button type='button' className='
                group
                font-montrealbold text-light-primary-text underline iphone6:text-[2.5vh] ipadpro12:text-[1.5vh] dark:text-dark-primary-text
                opacity-75
                transition duration-300
                hover:opacity-100 hover:ease-in-out' id="accordion-collapse-heading-1" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                how much do i charge?
            </button>
            <div id='accordion-collapse-body-1' className="flex items-start justify-between hidden">
                <p className="font-montrealmedium text-light-primary-text opacity-100
                dark:text-dark-primary-text
                iphone6:text-[2vh] ipadpro12:text-[1.25vh]">i do not have set prices for projects. i quote based on the individual needs for each client. but, my minimum budget for a project is $1,000.</p>
            </div>
            <button type='button' className='
                group
                font-montrealbold text-light-primary-text underline iphone6:text-[2.5vh] ipadpro12:text-[1.5vh] dark:text-dark-primary-text
                opacity-75
                transition duration-300
                hover:opacity-100 hover:ease-in-out' id="accordion-collapse-heading-2" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                how long do projects take?
            </button>
            <div id='accordion-collapse-body-2' className="flex items-start justify-between hidden">
                <p className="font-montrealmedium text-light-primary-text opacity-100
                dark:text-dark-primary-text
                iphone6:text-[2vh] ipadpro12:text-[1.25vh]">i guarantee proper communication throughout the process but cannot provide turnaround time because every project is different. that being said, unless the project is intensive, i aim to complete all projects in under 2-3 weeks time.</p>
            </div>
            <button type='button' className='
                group
                font-montrealbold text-light-primary-text underline iphone6:text-[2.5vh] ipadpro12:text-[1.5vh] dark:text-dark-primary-text
                opacity-75
                transition duration-300
                hover:opacity-100 hover:ease-in-out' id="accordion-collapse-heading-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                will you be my friend?
            </button>
            <div id='accordion-collapse-body-3' className="flex items-start justify-between hidden">
                <p className="font-montrealmedium text-light-primary-text opacity-100
                dark:text-dark-primary-text
                iphone6:text-[2vh] ipadpro12:text-[1.25vh]">yes</p>
            </div>
        </div>
        </>
    )
}