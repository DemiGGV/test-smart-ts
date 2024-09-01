**Requirements:**

1. Fetch All Users:
• Use the endpoint GET /users from JSONPlaceholder to retrieve the list of all
users. Documentation: JSONPlaceholder
2. Display Users in a Table:
• Implement a table with columns: name, username, email, and phone.
3. Implement Advanced Filtering:
• Add search input fields for each column (name, username, email, phone).
• Ensure that the table dynamically filters results based on user input in these
fields, with real-time updates.
4. State Management:
• Use Redux to manage the application state, including user data and filter
states. You can choose between Classic Redux or Redux Toolkit for this task.
5. Type Safety:
• Apply TypeScript comprehensively across the entire web application to ensure
proper typing and reduce potential runtime errors. This includes all aspects of
the application’s functionality.
6. Design and Styling:
Design the table and search inputs to be user-friendly and visually appealing. The styling
is up to you, aiming for a clean and effective user interface



**First of all, thanks for the opportunity to participate in this challenge.**

Here's a brief explanation of my approach to the task and some of the problems I encountered:
- I assumed a certain Redux state structure that includes a list of users, a set of filters, and a couple of flags. This is critical for creating selectors that work with the right parts of the state.
- I used the createSelector function from the redux-toolkit library to combine these simple selectors. This function allows you to combine multiple selectors into a single, more complex selector that performs a filtering operation. It also memoizes the result.
- In the combined selector, I implemented filter logic. This logic applies different filters to the list of users, either individually or in combination, ensuring that only users matching all criteria are returned.

Difficulties: In the process of declaring variables in the second parameter of the createSelector function, I mixed up their sequence, which led to a filtering bug, but the bug was found and fixed rather quickly.

I solved the issue of filtering phone numbers using regular expressions.

By addressing these issues, the final solution effectively combines Redux state management with memoized combo selectors to optimize performance and maintain clean and efficient code.
