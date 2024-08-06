"use client"

import Image from "next/image";
import Link from "next/link";

import Socials from "./Socials";
import { usePathname } from "next/navigation";

import Loguear from './Loguear';


import Logo from '../public/logo biggest.svg'
import { useAppContext } from "../(context)/AppWrapper";
import { useEffect } from "react";

const Header = () => {

  const pathname = usePathname();
  const { cambioHeader } = useAppContext()

  return (
    <div  >
      <header className={`${pathname == '/user' || pathname == '/cursos' || pathname == '/ubicacion' || pathname == '/dashboard/administrador' || pathname == '/dashboard' || pathname == '/dashboard/user' || pathname == '/eventos' || pathname == '/login' ? 'hidden' : ''} absolute z-50  w-full flex items-center   xl:h-[100px]`}>
        <div className="container mx-auto">
          <div className="items-center relative flex flex-col sm:flex-row sm:justify-between sm:items-center gap-y-8 py-8">
            <div className="">
              <Link href="/" >

                <Image
                  src={Logo}
                  width={180}
                  height={100}
                  alt=""
                  priority={true}
                  // lg:mx-0 lg:start-1 lg:translate-y-14 lg:items-start lg:-translate-x-[80px]
                  className={`${pathname == '/cursos' || pathname == '/planes' || pathname == '/about' || cambioHeader ? 'hidden -z-20' : ''} object-cover`}

                />


              </Link>
            </div>

            <Socials />

            <div className="order-first relative left-[70px] sm:left-0 sm:order-none">
              <Loguear />
            </div>

          </div>
        </div>
      </header>

    </div>
  );
};

export default Header;
