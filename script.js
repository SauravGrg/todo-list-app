// Reference to buttons and the input field
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const userInput = document.getElementById("userInput");

// Attach click event listeners to buttons
addBtn.addEventListener("click", addItem);
clearBtn.addEventListener("click", clearItem);

// Function to add a new task when the "Add" button is clicked
function addItem() {
    var input = userInput.value.trim(); // Get and clean the user input
    if (input) {
        const taskList = document.getElementById("ulItems");
        const listItem = document.createElement("li"); // Create a new list item

        // Create a checkbox and add event to handle task completion
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox"
        checkBox.addEventListener("click", taskComplete);

        // Create a container for checkbox and task text
        const divTaskContent = document.createElement("div");
        divTaskContent.className = "taskContent";

        // Create and insert the task text
        const taskText = document.createElement("span");
        taskText.textContent = input;

        // Add checkbox and text to the container
        divTaskContent.appendChild(checkBox);
        divTaskContent.appendChild(taskText);

        // Create delete icon and add event to remove task
        const deleteIcon = document.createElement("img");
        deleteIcon.setAttribute("src", "delete.png");
        deleteIcon.setAttribute("width", "20");
        deleteIcon.setAttribute("height", "20");
        deleteIcon.addEventListener("click", deleteItem);

        // Append task content and delete icon to the list item
        listItem.appendChild(divTaskContent);
        listItem.appendChild(deleteIcon);

        // Add the list item to the task list
        taskList.append(listItem);

        // Clear the input field
        userInput.value = "";
    }
}

// Function to delete a task when the delete icon is clicked
function deleteItem(event) {
    const clickedIcon = event.target;
    const listItem = clickedIcon.parentElement;
    listItem.remove();
}

// Function to clear the input field when the "Clear" button is clicked
function clearItem() {
    userInput.value = "";
}

// Function to move a task to "Completed" or back to "Tasks"
// depending on whether the checkbox is checked or unchecked
function taskComplete(event) {
    const checkedBox = event.target;
    const completedTaskItem = checkedBox.closest("li");

    // Move to completed section
    if (checkedBox.checked) {
        const completedUlItems = document.getElementById("completedUlItems");
        completedUlItems.appendChild(completedTaskItem);
    }
    else {
        // Move back to tasks section
        const ulItems = document.getElementById("ulItems");
        ulItems.appendChild(completedTaskItem);
    }
    
}