import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/context";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
const CardComponent = ()=>{
	let { selectedSection } = useContext(AppContext);
	let [articles, setArticles] = useState([]);
	let [loading, setLoading] = useState(false)
	let [error, setError]= useState('')
	console.log("updated", selectedSection)
	useEffect(()=>{
		setLoading(true)
		console.log("Use Effect Called", import.meta.env.VITE_SERVER_URL);
		let config = {
			method: "get",
			url: `${import.meta.env.VITE_SERVER_URL}?section=${selectedSection}`
		}
		axios(config).then((res) => {
			console.log("response from api", res);
			setArticles([...res?.data?.data?.results])
			setLoading(false);
			setError('')
		}). catch((err)=> {
			console.log("Error form useEffect Catch", err);
			setError("Opps!! Something Went Wrong....");
			setLoading(false)
		})
	}, [selectedSection])
	console.log("State", articles);
	console.log("error", error)
	return(
		loading ? <h4 className="headingsWrapper">loading....</h4> :
		<>
		{
			error ? 
			<h3 className="headingsWrapper">{error}</h3> :
			articles?.map(article => {
				return (
					<div className="cardWrapper">
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								sx={{ height: 140 }}
								image={article?.multimedia?.[0]?.url || 'main-qimg-1a4bafe2085452fdc55f646e3e31279c-lq.jpeg'}
								title="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div" sx={{
									display: "inline-block",
									maxHeight: "1.33em",
									width: "180px",
									whiteSpace: "nowrap",
									overflow: "hidden !important",
									textOverflow: "ellipsis"
								}}>
								{ article?.title || "Lizard" }
								</Typography>
								<Typography variant="body2" color="text.secondary" sx={{
									display: "inline-block",
									maxHeight: "1.33em",
									width: "180px",
									whiteSpace: "nowrap",
									overflow: "hidden !important",
									textOverflow: "ellipsis"
								}}>
								{ article?.abstract || "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
								</Typography>
							</CardContent>
							<CardActions>
								
								<a href={article?.url}>Read More...</a>
							</CardActions>
						</Card>
					</div>
				)
			})
			
		}
		</>
	)
}

export default CardComponent