import React, { useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/fontawesome-free-solid';

export default function Converter() {

	const [rates,setRates] = useState([]);
	const [rateValues,setRateValues] = useState([]);
	const [rate,setRate] = useState();
	const [amount,setAmount] = useState();

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '0ec2eb3989msh0df7efb9b38b80ep1db4c9jsn95c04e21b8c2',
			'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
		}
	};


	useEffect(() => {
		const fetchApiValues = async() => {
			try {
				const response = await fetch('https://exchangerate-api.p.rapidapi.com/rapid/latest/INR', options);
				const value = await response.json();
				setRates(Object.keys(value.rates));
				setRateValues(value.rates);
			}	catch (error) {
				console.log("Error",error);
			}
		};

		fetchApiValues();
	}, []);
			console.log(rateValues);
			const currencyValues = rates.map(rate => {
		return <option className={rate}>{rate}</option>
	})

	return (
		<div className='converter'>
			<div className='amountInput'>
				<label className='amount'>Enter the amount: </label>
				<input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}></input>
			</div>
			<div className='currencyValues'>
				<label for="rates">Choose a Currency: </label>
				<select className="rateOptions" value={rate} onChange={(e) => setRate(e.target.value)}>
					{currencyValues}
				</select>
			</div>
			<div className='icon'>
				<FontAwesomeIcon icon={faArrowRight} />
			</div>
			<p>INR Value: {(amount*(1/rateValues[rate])).toLocaleString('en-IN')}</p>
		</div>
	)
}