import { signIn, signOut, useSession } from "next-auth/react";

import { cn } from '@/utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'

import LargeHeading from '@/components/ui/LargeHeading'
import { Button, buttonVariants} from '@/components/ui/Button'
import { Link } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

type NavbarProps = {
  title?: string
}


const Navbar = ({title} : NavbarProps) => {
  const { data: sessionData } = useSession();

  return (
    <nav className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
      <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
        <LargeHeading 
            size='sm'
            className='three-d'>
          {sessionData?.user?.name ? `Notes for ${sessionData.user.name}` : title}
        </LargeHeading>
      
      {/* <Link href='/' className={buttonVariants({ variant: 'link' })}>
          Text Similarity v2.0
        </Link> */}

        {/* <div className='md:hidden'>
          <ThemeToggle />
        </div> */}

        

        <div className='flex gap-4'>
            <ThemeToggle />
         {/* <Link
            href='/documentation'
            className={buttonVariants({ variant: 'ghost' })}>
            Documentation
          </Link>
        </div> */}
          <div className="dropdown-end dropdown">
            {sessionData?.user ? (
              <label
                tabIndex={0}
                className="btn-ghost btn-circle avatar btn"
                onClick={() => void signOut()}
              >
                <div className="w-10 rounded-full dark:bg-white">
                  <img
                    src={sessionData?.user?.image ?? ""}
                    alt={sessionData?.user?.name ?? ""}
                  />
                </div>
              </label>
            ) : (
              <Button
                className="btn-ghost rounded-btn btn"
                onClick={() => void signIn()}
              >
                Sign in
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar