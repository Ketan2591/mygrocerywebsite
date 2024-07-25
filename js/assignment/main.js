let authToken = "";

function authenticateUser() {
    const loginId = document.getElementById("login_id").value;
    const password = document.getElementById("password").value;

    // Make a POST request to authenticate user
    // Update the URL with the correct path and handle the response
    fetch("https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "login_id": loginId,
            "password": password
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Authentication failed");
        }
        return response.json();
    })
    .then(data => {
        authToken = data.token;
        showCustomerListScreen();
    })
    .catch(error => {
        alert("Authentication failed. Check your credentials.");
    });
}

function getCustomerList() {
    // Make a GET request to get the list of customers
    // Update the URL with the correct path and handle the response
    fetch("https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=get_customer_list", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        displayCustomerList(data);
    })
    .catch(error => {
        alert("Error fetching customer list.");
    });
}

function displayCustomerList(customers) {
    // Display the list of customers in a table
    const table = document.getElementById("customerTable");
    table.innerHTML = "<tr><th>Name</th><th>Email</th><th>Action</th></tr>";

    customers.forEach(customer => {
        const row = table.insertRow();
        row.innerHTML = `<td>${customer.first_name} ${customer.last_name}</td>
                         <td>${customer.email}</td>
                         <td><button onclick="deleteCustomer('${customer.uuid}')">Delete</button>
                             <button onclick="showUpdateCustomerScreen('${customer.uuid}')">Update</button></td>`;
    });
}

function createNewCustomer() {
    // Extract data from the add customer form
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    // Add other form fields as needed

    // Make a POST request to create a new customer
    // Update the URL with the correct path and handle the response
    fetch("https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp?cmd=create", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${authToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "first_name": firstName,
            "last_name": lastName
            // Include other form fields in the body as needed
        })
    })
    .then(response => {
        if (response.status === 201) {
            alert("Customer created successfully!");
            showCustomerListScreen();
        } else if (response.status === 400) {
            alert("First Name or Last Name is missing.");
        } else {
            alert("Error creating customer.");
        }
    })
    .catch(error => {
        alert("Error creating customer.");
    });
}

// Implement other functions (deleteCustomer, updateCustomer, showUpdateCustomerScreen, showCustomerListScreen) similarly
