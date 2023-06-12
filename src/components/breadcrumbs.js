import { useRouter } from 'next/router.js'

export const Breadcrumbs = () => {

    const router = useRouter();
    const { pathname } = router;

    const pages = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about' },
        { name: 'CONTACT', path: '/contact' },
        { name: 'PROJECTS', path: '/projects'},
        { name: 'SERVICES', path: '/services'},
        { name: 'PROJECTS // COMPLEX', path: '/projects/complex'},
        { name: 'PROJECTS // COVR', path: '/projects/covr'},
        { name: 'PROJECTS // THEMANOR.', path: '/projects/themanor'},
        // Add more pages as needed
      ];

    const currentPage = pages.find((page) => page.path === pathname);


    return (
        <>
        <div className="fixed h-auto top-0 left-3 transform rotate-90 origin-left m-auto">
            <p className='font-montrealbold text-light-accent-color
            iphone6:text-[1.3vh] ipadpro12:text-[1.25vh]
            dark:text-dark-accent-color'>VERSION 1.0 // {currentPage ? currentPage.name : ''}</p>
        </div>
        </>
    )
}