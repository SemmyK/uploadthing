'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function NavigationBar() {
	const pathname = usePathname()

	return (
		<nav className='flex justify-center mx-auto  mb-6  shadow-md shadow-gray-500'>
			<Link
				href='/'
				className={`block mx-2 my-4 border-2 p-2 rounded ${
					pathname === '/' ? 'active' : ''
				}`}
			>
				Home
			</Link>
			<Link
				href='/gallery'
				className={`block mx-2 my-4 border-2 p-2 rounded ${
					pathname === '/gallery' ? 'active' : ''
				}`}
			>
				Gallery
			</Link>
			<Link
				href='/upload-button'
				className={`block mx-2 my-4 border-2 p-2 rounded ${
					pathname === '/upload-button' ? 'active' : ''
				}`}
			>
				Upload Image
			</Link>
		</nav>
	)
}
