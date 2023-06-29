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
        { name: 'DESIGN IS A PROBLEM', path:'/problem'},
        // Add more pages as needed
      ];

    const currentPage = pages.find((page) => page.path === pathname);


    return (
        <>
        <div className="fixed h-auto top-2 left-3 transform rotate-90 origin-left">
            <p className='font-montrealbold text-light-accent-color
            iphonese:text-xs iphone6:text-xs iphoneplus:text-xs iphonexrmax:text-sm ipad:text-md ipadpro:text-md ipadpro12:text-lg
            dark:text-dark-accent-color'>VERSION 1.0 // {currentPage ? currentPage.name : ''}</p>
        </div>
        </>
    )
}