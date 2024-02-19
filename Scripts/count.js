// const allBtn = document.getElementsByClassName("seat")
// count = 0 ;
//  for(const btn of allBtn){
//     btn.addEventListener("click", function(e){
//        count = count + 1;
//        const seatNumber = e.target.parentNode.childNodes[1].innerText
//        console.log()
//        setInnerText("seat-number", count)
//     })
//  }
//  const allBtn = document.getElementsByClassName("seat")
//  seat = 0
// //  for changing innertext
// //  function setInnerText(id, value){
// //     document.getElementById(id).innerText = value;
// //  }

const maxSeats = 4;
        const seatPrice = 550;
        let selectedSeats = [];
        let seatsLeft = 40;

        const seatGrid = document.getElementById('seatGrid');
        const selectedSeatsList = document.getElementById('selectedSeatsList');
        const totalPriceElement = document.getElementById('totalPrice');
        const seatsLeftElement = document.getElementById('seatsLeft');

        seatGrid.addEventListener('click', (e) => {
            if (e.target.classList.contains('seat')) {
                const seatNumber = e.target.dataset.seat;
                const seatIndex = selectedSeats.indexOf(seatNumber);

                if (seatIndex > -1) {
                    selectedSeats.splice(seatIndex, 1); 
                    e.target.classList.replace('bg-green-500', 'bg-gray-200');
                    seatsLeft++;
                } else {
                    if (selectedSeats.length < maxSeats) {
                        selectedSeats.push(seatNumber); 
                        e.target.classList.replace('bg-gray-200', 'bg-green-500');
                        seatsLeft--;
                    } else {
                        alert('You cannot select more than 4 seats.');
                    }
                }

                updateUI();
            }
        });

        function updateUI() {
          
            selectedSeatsList.innerHTML = selectedSeats
                .map(seat => `<li>${seat}</li>`)
                .join('');
          
            const totalPrice = selectedSeats.length * seatPrice;
            totalPriceElement.textContent = totalPrice;
           
            seatsLeftElement.textContent = seatsLeft;
        }

        const form = document.getElementById('ticketForm');
        const nextButton = document.getElementById('nextButton');
        const requiredInputs = form.querySelectorAll('input[required]');
        const seats = document.querySelectorAll('.seat'); 

        let selectedSeatsCount = 0; 

        seats.forEach(seat => {
            seat.addEventListener('click', function() {
                this.classList.toggle('selected'); 
                selectedSeatsCount = document.querySelectorAll('.seat.selected').length; 
                checkForm();
            });
        });

        function checkForm() {
            let allFilled = true;
            requiredInputs.forEach(input => {
                if (input.value === '') {
                    allFilled = false;
                }
            });

           
            nextButton.disabled = !(allFilled && selectedSeatsCount > 0);
        }

        form.addEventListener('input', checkForm);

        // ... your existing script ...

// Handle form submission

  