import { BackButton } from "@/components/backbutton";
import { Layout } from "@/components/layout";

export default function Problem() {
    return (
        <>
        <Layout/>
        <BackButton/>
        <section className="h-screen flex bg-light-primary-background dark:bg-dark-primary-background">
            <div className="justify-center align-center m-auto">
                <h1 className="font-montrealbold uppercase">
                    This page is under construction.
                </h1>
            </div>
        </section>
        </>
    )
}