export const Philosophy = () => {
    return (
        <>
            <div className='bg-blueberry max-h-[50vh] p-12 flex flex-col justify-center items-start' id='accordion-collapse' data-accordion='collapse' data-active-classes='bg-blueberry max-h-[50vh] flex flex-col justify-center items-start' data-inactive-classes='bg-blueberry max-h-[50vh] flex flex-col justify-center items-start'>
                <button type='button' className='
                group
                text-[20vh] font-glacialbold uppercase text-orangejuice
                pb-8
                opacity-75
                transition duration-300
                hover:opacity-100 hover:ease-in-out' id="accordion-collapse-heading-2" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                Philosophy
                <span className="block h-2 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orangejuice"/></button>
                <div id='accordion-collapse-body-2' className="flex items-start w-full gap-x-8 justify-between hidden">
                    <p>Design is simply a medium for solving a problem. Designers are not meant to be artists, we're high-tech problem solvers.</p>
                </div>
            </div>
        </>
    )
}