export const FAQ = () => {
    return (
        <>
        <div className='flex flex-col' id='accordion-collapse' data-accordion='collapse' data-active-classes='bg-light-primary-bg' data-inactive-classes='bg-light-primary-bg'>
            <button type='button' className='
                group
                self-start
                font-montrealbold text-light-primary-text underline
                iphone6:text-md iphoneplus:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro11:text-xl ipadpro12:text-2xl 
                opacity-75
                transition duration-300
                hover:opacity-100 hover:ease-in-out
                dark:text-dark-primary-text' id="accordion-collapse-heading-1" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                how much do i charge?
            </button>
            <div id='accordion-collapse-body-1' className="flex items-start justify-between hidden">
                <p className="font-montrealmedium text-light-primary-text opacity-100
                dark:text-dark-primary-text
                iphone6:text-sm iphoneplus:text-md iphonexrmax:text-md ipad:text-lg ipadpro11:text-lg ipadpro12:text-xl">i do not have set prices for projects. i quote based on the individual needs for each client. but, my minimum budget for a project is $1,000.</p>
            </div>
            <button type='button' className='
                group
                self-start
                font-montrealbold text-light-primary-text underline 
                iphone6:text-md iphoneplus:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro11:text-xl ipadpro12:text-2xl
                opacity-75
                transition duration-300
                hover:opacity-100 hover:ease-in-out
                dark:text-dark-primary-text' id="accordion-collapse-heading-2" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                how long do projects take?
            </button>
            <div id='accordion-collapse-body-2' className="flex items-start justify-between hidden">
                <p className="font-montrealmedium text-light-primary-text opacity-100
                dark:text-dark-primary-text
                iphone6:text-sm iphoneplus:text-md iphonexrmax:text-md ipad:text-lg ipadpro11:text-lg ipadpro12:text-xl">i guarantee consistent communication throughout the process but cannot provide turnaround time because every project is different. that being said, unless the project is intensive, i aim to complete all projects in under 2-3 weeks time.</p>
            </div>
            <button type='button' className='
                group
                self-start
                font-montrealbold text-light-primary-text underline 
                iphone6:text-md iphoneplus:text-lg iphonexrmax:text-lg ipad:text-xl ipadpro11:text-xl ipadpro12:text-2xl
                opacity-75
                transition duration-300
                hover:opacity-100 hover:ease-in-out
                dark:text-dark-primary-text' id="accordion-collapse-heading-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                will you be my friend?
            </button>
            <div id='accordion-collapse-body-3' className="flex items-start justify-between hidden">
                <p className="font-montrealmedium text-light-primary-text opacity-100
                dark:text-dark-primary-text
                iphone6:text-sm iphoneplus:text-md iphonexrmax:text-md ipad:text-lg ipadpro11:text-lg ipadpro12:text-xl">yes</p>
            </div>
        </div>
        </>
    )
}