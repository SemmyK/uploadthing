import UploadButtonComponent from './components/UploadButton'

export default function Home() {
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<main className='flex flex-col gap-8 row-start-2 justify-between items-center sm:items-start'>
				<div className='flex flex-row justify-evenly w-full'>
					{/* currently upload button is component on the home page there is also separated page for the upload button in case you want to have different home page, currently homepage and upload image page are the same    */}
					<UploadButtonComponent />
				</div>
			</main>
		</div>
	)
}
