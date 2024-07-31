
       let form = document.getElementById('myform');
       let countryDocinput = document.getElementById('bank');
       let textDocinput = document.getElementById('watts');

       form.addEventListener('submit', (event)  => {
        event.preventDefault();

        if (countryDocinput.value === 'Canada' && textDocinput.value === 'passport') {
            window.location.href = 'index5.html';
        } 
        form.reset()
         });

        


         
