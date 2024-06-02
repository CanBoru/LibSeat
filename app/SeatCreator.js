// const createSeats = async () => {
//     const url = 'http://10.8.48.201:3000/LibSeat/createSeat';
//     const roomName = 'Q-Z Room'; // Replace with your actual room name

//     for (let seatId = 1; seatId <= 92; seatId++) {
//         try {
//             const response = await axios.post(url, {
//                 seatId,
//                 roomName,
//             });
//             console.log(`Seat ${seatId} created successfully`, response.data);
//         } catch (error) {
//             console.error(`Error creating seat ${seatId}`, error);
//         }
//     }
// };

// // Call the function to create the seats
// createSeats();