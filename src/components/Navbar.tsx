
import Link from 'next/link'
import { buttonVariants } from './ui/Button'
import { authOptions, getAuthSession } from '@/lib/auth'
import { UserAccountNav } from './UserAccountNav'
import { SearchBar } from './SearchBar'
import LogoImage from '../../public/reddit.png'
import Image from 'next/image'


export async function Navbar() {

    const session = await getAuthSession(authOptions)

    return(
        <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2'>
            <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
                {/* logo */}
                <Link href='/' className='flex gap-2 items-center'>
                    <Image src={LogoImage} alt='Reddit Logo' className='h-12 w-12 sm:h-12 sm:w-12' />
                    <p className='hidden text-zinc-700 text-sm font-medium md:block'>Reddit</p>
                </Link>


                {/* Seach bar */}
                <SearchBar />

                {session?.user ? (
                    <UserAccountNav user={session.user}/>
                ) : (
                    <Link href='/sign-in' className={buttonVariants()}>
                        Sign In
                    </Link>
                )}
            </div>
        </div>
    )
}