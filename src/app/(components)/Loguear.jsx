"use client"

import { signIn, useSession, signOut } from 'next-auth/react'
import { useEffect } from 'react'


function SigIn() {

  const { data: session } = useSession()

  useEffect(() => {


    if (session?.user?.name != undefined) {

      setTimeout(async () => {
        await signOut({
          callbackUrl: "/",
        })
      }, 600000000);

    }
  }, [session])


  return (
    <div className='relative left-12 z-50'>

      {session?.user ? (

        <div className=' cursor-pointer' onClick={async () => {
          await signOut({
            callbackUrl: "/",
          })
        }}>


          <button

            type='button'
            className=" text-lg hover:bg-blue-500 text-black font-semibold hover:text-white py-0.5 px-2 hover:border-transparent bg-fondo1 z-50 "
          >
            <h2>SALIR</h2>

          </button>



        </div>

      ) : (


        <div className='  cursor-pointer' onClick={() => {
          signIn('google', {
            callbackUrl: "/user"
          })
        }}>
          {/* text-black  hover:bg-black/90  font-semibold hover:text-white py-0.5 px-4 bg-fondo1 hover:border-transparent rounded */}
          <button

            type='button'
            className="bg-fondo1  text-lg hover:bg-black/90 text-black font-semibold hover:text-white py-0.5 px-2 hover:border-transparent z-50"
          >
            <h2>UNIRSE</h2>

          </button>

        </div>

      )}

    </div>
  )
}

export default SigIn

