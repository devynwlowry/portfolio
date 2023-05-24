

export const ProcessAccordion = () => {
    return (
        <>
            <div className='bg-peach max-h-[50vh] p-12 flex flex-col justify-center items-start' id='accordion-collapse' data-accordion='collapse' data-active-classes='bg-peach max-h-[50vh] flex flex-col justify-center items-start' data-inactive-classes='bg-peach max-h-[50vh] flex flex-col justify-center items-start'>
                <button type='button' className='
                group
                text-[20vh] font-glacialbold uppercase text-blueberry
                pb-8
                opacity-75
                transition duration-300
                hover:opacity-100 hover:ease-in-out' id="accordion-collapse-heading-1" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                Process
                <span className="block h-2 max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blueberry"/></button>
                <div id='accordion-collapse-body-1' className="flex items-start w-full gap-x-8 justify-between hidden">
                    <div className="w-1/4">
                        <h2 className="text-2xl text-kindagrey font-glacialbold pb-2">But first, ☕️</h2>
                        <p className="font-montrealmedium text-kindagrey">I love coffee, every day I pull a shot of espresso from one of the many local nyc roasters. My current favorite is Founders.</p>
                    </div>
                    <div className="w-1/4">
                        <h2 className="text-2xl text-kindagrey font-glacialbold pb-2">Then, Research 🔍</h2>
                        <p className="font-montrealmedium text-kindagrey">I can't do my best work without asking the important questions. My process depends on not only understanding your brand but I also need to understand your users, conducting frequent user research is the cornerstone to a successful software product.</p>
                    </div>
                    <div className="w-1/4">
                        <h2 className="text-2xl text-kindagrey font-glacialbold pb-2">After that, LoFi UX/UI ✍️</h2>
                        <p className="font-montrealmedium text-kindagrey">I put pen to paper, literally. After I'm done with research I move on to sketches, I sketch out low fidielity wireframes on paper before digitzing them into an interactive wireframe in Sketch.</p>
                    </div>
                    <div className="w-1/4">
                        <h2 className="text-2xl text-kindagrey font-glacialbold pb-2">And finally, HiFi UX/UI 🖥️</h2>
                        <p className="font-montrealmedium text-kindagrey">After any revisions have been made to the low fidielity mockups, I move on to the high fidielity. Incorporating your brands colors, typography, into an interactive design in Sketch.</p>
                    </div>
                </div>
            </div>
        </>
    )
}