import { useRouter } from "next/router"
import Link from "next/link";

export const BackButton = () => {

    const router = useRouter();

    const goBack = () => {
        router.back();
    }

    return (
        <>
            <Link href="" onClick={goBack} className='iphone6:pb-[45px] font-montrealbold text-light-primary-text dark:text-dark-primary-text uppercase underline'>Back</Link>
        </>
        
    )
}