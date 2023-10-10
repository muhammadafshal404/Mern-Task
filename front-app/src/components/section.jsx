import Select from 'react-select'
import { useContext } from 'react'
import { AppContext } from '../context/context'
const Section = () => {
	let { selectedSection, dispatchUserEvent } = useContext(AppContext)
	console.log("default value", selectedSection)
	const options = [
			{
				"value": "arts",
				"label": "Arts"
			},
			{
				"value": " automobiles",
				"label": " Automobiles"
			},
			{
				"value": " books/review",
				"label": " Books/Review"
			},
			{
				"value": " business",
				"label": " Business"
			},
			{
				"value": " fashion",
				"label": " Fashion"
			},
			{
				"value": " food",
				"label": " Food"
			},
			{
				"value": " health",
				"label": " Health"
			},
			{
					"value": " home",
					"label": " Home"
			},
			{
				"value": " insider",
				"label": " Insider"
			},
			{
				"value": " magazine",
				"label": " Magazine"
			},
			{
				"value": " movies",
				"label": " Movies"
			},
			{
				"value": " nyregion",
				"label": " Nyregion"
			},
			{
				"value": " obituaries",
				"label": " Obituaries"
			},
			{
				"value": " opinion",
				"label": " Opinion"
			},
			{
				"value": " politics",
				"label": " Politics"
			},
			{
				"value": " realestate",
				"label": " Realestate"
			},
			{
				"value": " science",
				"label": " Science"
			},
			{
				"value": " sports",
				"label": " Sports"
			},
			{
				"value": " sundayreview",
				"label": " Sundayreview"
			},
			{
				"value": " technology",
				"label": " Technology"
			},
			{
				"value": " theater",
				"label": " Theater"
			},
			{
				"value": " magazine",
				"label": " Magazine"
			},
			{
				"value": " travel",
				"label": " Travel"
			},
			{
				"value": " upshot",
				"label": " Upshot"
			},
			{
				"value": " us",
				"label": " Us"
			},
			{
				"value": " world",
				"label": " World"
			}
	]
	
	return (
		<Select style={{minWidth: "300px"}} defaultValue={options[0]} options={options} onChange={dispatchUserEvent} />
	)
}

export default Section