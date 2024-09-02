import React, { useState, useEffect } from 'react';
import { fetchAPI } from './api.js';
import Header from './Header';

const BookingForm = (props) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [occasion, setOccasion] = useState('');
    const [guests, setGuests] = useState("");
    const [availableTimes, setAvailableTimes] = useState([]);

    const occasions = ['Birthday', 'Engagement', 'Anniversary','Business Meeting', 'Casual Gathering'];

    useEffect(() => {
        if (props.submitForm) {
            console.log('submitForm function is available as a prop.');
        } else {
            console.error('submitForm function is NOT available as a prop.');
        }
    }, [props.submitForm]);

    const initializeTimes = async (date) => {
      try {
        const response = await fetchAPI(date); // Call the API function with the date
        setTime(''); // Clear the selected time before displaying new options
        setAvailableTimes(response); // Update the state with fetched available times
      } catch (error) {
        console.error('Error fetching available times:', error);
      }
    };

    const updateTimes = async (selectedDate) => {
      await initializeTimes(selectedDate); // Call the updated initializeTimes
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            date,
            time,
            occasion,
            guests,
        };

        console.log('Attempting to submit form with data:', formData);

        if (props.submitForm) {
            props.submitForm(formData);
        } else {
            console.error('submitForm function is not passed as a prop', formData);
        }

        /*didnt have time to api fetch and submit  window.location.reload(); */
       
    };

    useEffect(() => {
        initializeTimes(new Date().toISOString().slice(0, 10)); // Get today's date
    }, []);

    return (
        <>

        <Header/>

        <h1 style={{ textAlign: "center", paddingTop:'7rem'}}>Online Reservation for Little Lemon Restaurant</h1>
        <div className='booking'>
        <form style={{ display: 'grid', maxWidth: '500px', gap: '40px'}} onSubmit={handleSubmit}>
            <label style={{ textAlign: "center", fontSize:"45px"}} htmlFor="res-date">CHOOSE DATE</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => {
                    setDate(e.target.value);
                    updateTimes(e.target.value);
                }}
                style={{ textAlign: "center", fontSize:"45px"}}
            />
            <label style={{ textAlign: "center", fontSize:"45px"}} htmlFor="res-time">CHOOSE TIME</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                style={{ textAlign: "center", fontSize:"45px"}}
            >
                <option value="">Time</option>
                {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
            </select>
            <label style={{ textAlign: "center", fontSize:"45px"}} htmlFor="occasion">CHOOSE OCCASION</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                style={{ textAlign: "center", fontSize:"45px"}}
            >
                <option value="">Occasion</option>
                {occasions.map((event) => (
                    <option key={event} value={event}>
                        {event}
                    </option>
                ))}
            </select>
            <label style={{ textAlign: "center", fontSize:"45px"}} htmlFor="guests">TOTAL NUMBER OF GUESTS</label>
            <input id="book-guests"
                   min="1"
                   max={6}
                   placeholder={0}
                   value={guests}
                   onChange={(e) => {setGuests(e.target.value)}}
                   type={"number"}
                   required
                   style={{ textAlign: "center", fontSize:"45px"}} />
            <button className='button-yellow' aria-label="On Click" type={"submit"} >MAKE YOUR RESERVATION</button>

        </form>
        </div>
        </>
    );
};

export default BookingForm;