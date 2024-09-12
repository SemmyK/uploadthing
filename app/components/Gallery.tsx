'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const ImageGallery = () => {
	const [images, setImages] = useState<{ key: string; url: string }[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const response = await fetch('/api/list-files') // Make GET request to your API
				if (!response.ok) {
					throw new Error('Failed to fetch images')
				}
				const data = await response.json()
				console.log(data)
				setImages(data.data) // Set fetched image URLs
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (err: any) {
				err.message && setError(err.message)
			} finally {
				setLoading(false)
			}
		}

		fetchImages()
	}, [])

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error}</p>

	return (
		<div className='flex flex-wrap gap-2'>
			{images &&
				images.map(image => (
					<div key={image.key}>
						<Image
							src={image.url}
							alt={`Image ${image.key}`}
							className='w-48 h-auto'
							width={300}
							height={300}
						/>
					</div>
				))}
		</div>
	)
}

export default ImageGallery
