import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const PublicHeader = () => {
    let [active, setActive] = useState(false)
    return (
        <>
            <div className='container mx-auto p-3'>
                <div className="flex items-center py-3 justify-between">
                    <div>
                        <Image
                            src={"/assets/Logo.png"}
                            alt="Logo"
                            width={165}
                            height={44}
                        />
                    </div>
                    <div className='flex py-3 text-white'>
                        <div>
                            <ul className='lg:flex hidden'>
                                <li className='mx-2 md:mx-5 font-semibold text-xl border-transparent border-b-2 hover:border-[#F8FD00]'><Link href="#">Trips</Link></li>
                                <li className='mx-2 md:mx-5 font-semibold text-xl border-transparent border-b-2 hover:border-[#F8FD00]'><Link href="#">Events</Link></li>
                                <li className='mx-2 md:mx-5 font-semibold text-xl border-transparent border-b-2 hover:border-[#F8FD00]'><Link href="#">Countries</Link></li>
                                <li className='mx-2 md:mx-5 font-semibold text-xl border-transparent border-b-2 hover:border-[#F8FD00]'><Link href="#">Hotels</Link></li>
                                <li className='mx-2 md:mx-5 font-semibold text-xl border-transparent border-b-2 hover:border-[#F8FD00]'><Link href="#">Bookings</Link></li>
                            </ul>
                        </div>
                        <div className='flex pl-3'>
                            <div className='px-2 md:px-4'>
                                <Link href="#">
                                    <Image
                                        src={"/assets/icons/Search.svg"}
                                        alt="Search"
                                        width={28}
                                        height={28}
                                    />
                                </Link>
                            </div>
                            <div className='pl-2'>
                                <Link href="#">
                                    <Image
                                        src={"/assets/icons/Account.png"}
                                        alt="Accounts"
                                        width={28}
                                        height={28}
                                    />
                                </Link>
                            </div>
                            <div className='pl-3 lg:hidden'
                                onClick={() => setActive(!active)}
                            >
                                <Image
                                    src={"/assets/icons/align-right.svg"}
                                    alt="Menu"
                                    width={28}
                                    height={28}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`bg-black transition-all w-[300px] z-10 ${active ? "right-0" : "-right-[100%]"}  absolute h-screen top-0 lg:hidden flex`}>
                <div className='w-full p-4'>
                    <div className='flex justify-end'
                        onClick={() => setActive(!active)}
                    >
                        <Image
                            src={"/assets/icons/x.svg"}
                            alt="Menu"
                            width={28}
                            height={28}
                        />
                    </div>
                    <ul className='text-white px-4 mt-2'>
                        <li className='mx-2 mt-2 md:mx-5 font-semibold text-xl border-b hover:border-[#F8FD00]'><Link href="#">Trips</Link></li>
                        <li className='mx-2 mt-2 md:mx-5 font-semibold text-xl border-b hover:border-[#F8FD00]'><Link href="#">Events</Link></li>
                        <li className='mx-2 mt-2 md:mx-5 font-semibold text-xl border-b hover:border-[#F8FD00]'><Link href="#">Countries</Link></li>
                        <li className='mx-2 mt-2 md:mx-5 font-semibold text-xl border-b hover:border-[#F8FD00]'><Link href="#">Hotels</Link></li>
                        <li className='mx-2 mt-2 md:mx-5 font-semibold text-xl border-b hover:border-[#F8FD00]'><Link href="#">Bookings</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PublicHeader