import Link from 'next/link'
import React from 'react'
export default function Navbar() {
    return (
        <div>
            <div className="w-full  bg-transparent h-10">
                <ul className="flex gap-x-6 text-white justify-center p-4">
                    <li>
                        <Link href="/">
                            <p> HOME </p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <p> CONTACT </p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
