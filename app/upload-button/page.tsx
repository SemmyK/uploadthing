'use client'

import { UploadButton } from '../utils/uploadthing'

const UploadButtonPage = () => {
	return (
		<article className='flex min-h-screen flex-col items-center justify-between p-24'>
			<UploadButton
				endpoint='imageUploader'
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				onClientUploadComplete={(res: any) => {
					// Do something with the response
					console.log('Files: ', res)
					alert('Upload Completed')
				}}
				onUploadError={(error: Error) => {
					// Do something with the error.
					alert(`ERROR! ${error.message}`)
				}}
			/>
		</article>
	)
}
export default UploadButtonPage
