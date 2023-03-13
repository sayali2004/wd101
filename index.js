

    function publishToTable() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const pass = document.getElementById('pass').value;
        const date = document.getElementById('date').value;
        const conditions = document.getElementById('conditions').value;
        const error = document.getElementById('error');
        error.innerHTML = (!name || !email) ? 'Name & Email both values are required.' : '';
        if (name && email) {
            const tableElement = document.getElementById('table');
            const trElement = document.createElement('tr');
            const tbodyElement = document.createElement('tbody');
            const nameEle = document.createElement('td');
            const emailEle = document.createElement('td');
            const passEle = document.createElement('td');
            const dateEle = document.createElement('td');
            const conditionsEle = document.createElement('td');
            nameEle.innerHTML = name;
            emailEle.innerHTML = email;
            passEle.innerHTML = pass;
            dateEle.innerHTML = date;
            conditionsEle.innerHTML = conditions;
            trElement.appendChild(nameEle);
            trElement.appendChild(emailEle);
            trElement.appendChild(passEle);
            trElement.appendChild(dateEle);
            trElement.appendChild(conditionsEle);
            tbodyElement.appendChild(trElement);
            tableElement.appendChild(tbodyElement);
           

    }
    }
    
