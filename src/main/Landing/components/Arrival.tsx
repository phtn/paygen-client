export const Arrival = ({ t }: { t: string }) => {
	const first = `lg:inset-x-20 via-indigo-500 to-transparent h-[2px] w-2/4 blur-sm`
	const second = `lg:inset-x-20 via-indigo-500 to-transparent h-px w-1/4`
	const third = `lg:inset-x-60 via-sky-500 to-transparent h-[1px] w-3/4 blur-sm`
	const fourth = `lg:inset-x-60 via-orange-300 to-transparent h-px w-1/4`
	const className = `absolute bg-gradient-to-r from-transparent`
	return (
		<>
			<div className={`${className} ${t} ${first}`} />
			<div className={`${className} ${t} ${second}`} />
			<div className={`${className} ${t} ${third}`} />
			<div className={`${className} ${t} ${fourth}`} />
		</>
	)
}
