import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@styles/page.module.css' 
import stylesHome from '@styles/home.module.css' 
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import Link from 'next/link';
import SignOut from './signout'


const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1 className={inter.className}>Welcome!</h1>
        <h4 className={inter.className}>{session?.user?.name ?? "Guest"}</h4>
        { session?.user &&<h4 className={inter.className}>Your token :</h4>}
        { session?.user && <h4 className={`${inter.className} ${stylesHome.text}`}>{session.user.accessToken}</h4>}
      </div>

      <div className={stylesHome.button}>
      {session?.user ? (
          <SignOut />
        ) : (
          <Link
          href="/login"
        ><div className={stylesHome.card}>
          <h2 className={inter.className}>
          Sign In
          </h2>
          </div>
          </Link>
        )}
      </div>
    </main>
  )
}
