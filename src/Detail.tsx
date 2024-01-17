import { useState, useEffect } from 'react'
import { useParams } from "react-router"

function Detail( ) {
	let { idNum } = useParams()
	const [user, setUser] = useState({})

	useEffect(() => {
		fetch("https://randomuser.me/api/?seed=kmactane-amex&results=10&inc=gender,name,location,email,dob,phone,picture")
			.then(res => {
				return res.json()
			})
			.then((data) => {
				setUser(data.results[idNum-1])
			})
	}, [])

	const prettyDate = iso8601 => {
		const months = [, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		let [year, month, date] = iso8601.split('T')[0].split('-')
		month = months[parseInt(month, 10)]
		date = date.replace(/^0/, '')
		return `${month} ${date}, ${year}`
	}
	

	if (! user?.name) {
		return (
			<>
				<h1>Detail Page</h1>
				<p>Loading...</p>
				<p><a href="/">Back to Listing</a></p>
			</>
		)
	}
	return (
		<>
			<img src={user.picture.large} alt="" className="bigPic" />
			<h1>{user.name.first} {user.name.last}</h1>
			<p><strong>Age:</strong> {user.dob.age}</p>
			<p>
				<strong>Full Address:</strong><br/>
				{user.location.street.number} {user.location.street.name}<br/>
				{user.location.city}, {user.location.state} {user.location.postcode}<br/>
				{user.location.country}
			</p>
			<p>
				<strong>Email Address:</strong> {user.email}
			</p>
			<p>
				<strong>Date of Birth:</strong> {prettyDate(user.dob.date)}
			</p>
			<p>
				<strong>Phone Number:</strong> {user.phone}
			</p>
			<p><a href="/">Back to Listing</a></p>
		</>
	)
}

export default Detail