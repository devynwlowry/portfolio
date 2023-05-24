export const ProcessAccordion = () => {
    return (
        <>
            <div className='flex items-center justify-between bg-peach max-h-[50vh] p-12' id='process'>
                <div className='flex items-center justify-start'>
                    <h1 className='font-glacialbold text-blueberry text-[16vh] uppercase'>process</h1>
                </div>
                <div className='flex items-center justify-end w-[36vw]' id='processcollapse'>
                    <div id='accordion-flush' data-accordion='collapse' data-active-classes="bg-peach text-almostblack opacity-100" data-inactive-classes="text-almostlblack opacity-75" className='font-glacialbold text-almostblack opacity-75 uppercase'>
                        <h2 id='accordion-flush-heading-1'>
                            <div type='button' className='flex items-center justify-between' data-accordion-target='#accordion-flush-body-1' aria-expanded='false' aria-controls='accordion-flush-body-1'>
                                <span className='text-4xl uppercase'>01. ☕️</span>
                            </div>
                        </h2>
                        <div id='accordion-flush-body-1' className='hidden' aria-labelledby='accordion-flush-heading-1'>
                            <div class='py-4 border-b-2 border-blueberry'>
                                <p className='text-sm font-montrealmedium normal-case'>But first, coffee.</p>
                            </div>
                        </div>
                        <h2 id='accordion-flush-heading-2'>
                            <button type='button' className='flex items-center justify-between' data-accordion-target='#accordion-flush-body-2' aria-expanded='false' aria-controls='accordion-flush-body-2'>
                                <span className='text-4xl uppercase'>02. Research Research Research</span>
                                <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div id='accordion-flush-body-2' className='hidden' aria-labelledby='accordion-flush-heading-2'>
                            <div class='py-4 border-b-2 border-blueberry'>
                                <p className='text-sm font-montrealmedium normal-case'>Every client is different. All of my projects start a with rigorous research phase consisting of market research, meeting with the client and other stakeholders. Not only do I want to understand the big picture of the company/brand but I want to get a sense of who the people behind the brand are and who I'm going to be working with throughout the project.  </p>
                            </div>
                        </div>
                        <h2 id='accordion-flush-heading-3'>
                            <button type='button' className='flex items-center justify-between' data-accordion-target='#accordion-flush-body-3' aria-expanded='false' aria-controls='accordion-flush-body-3'>
                                <span className='text-4xl uppercase'>03. LowFi UX/UI</span>
                                <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div id='accordion-flush-body-3' className='hidden' aria-labelledby='accordion-flush-heading-3'>
                            <div class='py-4 border-b-2 border-blueberry'>
                                <p className='text-sm font-montrealmedium normal-case'>After I've collected all of the information I need I begin with low fidelity designs. Starting with wireframe sketches of the common user interactions then digitzing those into interactive flows using Sketch. </p>
                            </div>
                        </div>
                        <h2 id='accordion-flush-heading-4'>
                            <button type='button' className='flex items-center justify-between' data-accordion-target='#accordion-flush-body-4' aria-expanded='false' aria-controls='accordion-flush-body-4'>
                                <span className='text-4xl uppercase'>04. HiFi UX/UI</span>
                                <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div id='accordion-flush-body-4' className='hidden' aria-labelledby='accordion-flush-heading-4'>
                            <div class='py-4 border-b-2 border-blueberry'>
                                <p className='text-sm font-montrealmedium normal-case'>After any necessary revisions have been completed from the low fidelity mocks I then move on to high fidelity mockups. This stage takes the longest as it requires the most attention to detail, ensuring colors, typography, margins, hierarchy and everything work together is one of the most important factors in any project.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}