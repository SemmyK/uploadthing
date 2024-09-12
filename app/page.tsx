import Link from 'next/link'

export default function Home() {
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-8 row-start-2 justify-between items-center sm:items-start'>
				<div className='flex flex-row justify-evenly w-full'>
					<button className='btn btn-blue'>
						{' '}
						<Link
							href='/upload-button'
							className='btn btn-blue bg-blue-800 p-4 mx-2 rounded'
						>
							Upload Button
						</Link>
					</button>
					<button className='btn btn-blue bg-blue-500 p-2 mx-2 rounded'>
						<Link
							href='/upload-dnd'
							className='btn btn-blue'
						>
							Upload Drag n&apos; Drop
						</Link>
					</button>
				</div>
			</main>
		</div>
	)
}
