// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

let totalPrice = 0;

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuCategoriesDiv = document.getElementById("menu");

    for (let category in menu) {        
        const categoryDiv = document.createElement("div");
        const categoryDivHeading = document.createElement('h3')

        // Set the text content of the category element to the category name
        categoryDivHeading.textContent = category;
        menuCategoriesDiv.appendChild(categoryDiv);
        categoryDiv.appendChild(categoryDivHeading);
        
        const categoryList = document.createElement('ul')
        categoryDiv.appendChild(categoryList);
        for (const item of menu[category]) {
            const categoryListItem = document.createElement('li');
            categoryListItem.textContent = item
            categoryListItem.addEventListener('click', () => addToOrder(item))
            categoryList.appendChild(categoryListItem)
        }      
        
    }               
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    let orderItemsList = document.getElementById('order-items')
    let orderTotal = document.getElementById('order-total')    

    // Create a list item for the order

    let orderItem = document.createElement('li');

    // Set the text content of the list item to the item name

    orderItem.textContent = itemName;

    // Append the list item to the order items list

    orderItemsList.appendChild(orderItem);

    // Calculate and update the total price

    
    totalPrice = totalPrice + 50

    // Update the text content of the order total element with the new total
    
    orderTotal.textContent = totalPrice;
}

// Function to initialize the menu system
function initMenuSystem(menu) {

    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
