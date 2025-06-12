# The Wild Oasis

## Description

The Wild Oasis is a hotel management application built with React, Vite, and Supabase. It provides functionalities for managing bookings, cabins, users, and settings.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Supabase](https://supabase.com/)
- [styled-components](https://styled-components.com/)
- [react-query](https://tanstack.com/query/latest)
- [react-router-dom](https://reactrouter.com/en/main)
- [react-hook-form](https://www.react-hook-form.com/)
- [react-hot-toast](https://react-hot-toast.com/)
- [react-icons](https://react-icons.github.io/react-icons)
- [date-fns](https://date-fns.org/)
- [recharts](https://recharts.org/en-US/)

## Installation

1.  Clone the repository:

    ```sh
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```sh
    cd the-wild-oasis
    ```

3.  Install the dependencies:

    ```sh
    npm install
    ```

## Usage

1.  Create a Supabase project and update the `supabaseUrl` and `supabaseKey` in [`src/services/supabase.js`](src/services/supabase.js).
2.  Start the development server:

    ```sh
    npm run dev
    ```

3.  Open your browser and navigate to `http://localhost:5173`.

## Key Features

- **Dashboard:** Provides an overview of key hotel metrics, including total bookings, total sales revenue, check-ins, and occupancy rate. This feature helps hotel managers quickly assess the current state of the business (see [`src/features/dashboard/Stats.jsx`](src/features/dashboard/Stats.jsx)).
- **Booking Management:** Enables hotel staff to efficiently manage bookings. This includes creating new bookings, viewing booking details, updating existing bookings, and deleting bookings as needed. Streamlines the booking process and reduces manual effort (see [`src/features/bookings`](src/features/bookings)).
- **Cabin Management:** Allows administrators to manage hotel cabins effectively. They can add new cabins, edit cabin details (such as capacity and amenities), and remove cabins from the system. Ensures accurate and up-to-date information about available accommodations (see [`src/features/cabins`](src/features/cabins)).
- **User Management:** Offers tools to manage user accounts and settings. Administrators can create new user accounts, modify user roles and permissions, and handle user authentication. This ensures secure access and appropriate control over the application (see [`src/features/authentication`](src/features/authentication) and [`src/pages/Users.jsx`](src/pages/Users.jsx)).
- **Settings:** Provides a centralized location to update various application settings. This includes setting minimum and maximum booking lengths, defining the maximum number of guests per booking, and adjusting breakfast prices. Simplifies the configuration process and allows for easy adjustments to hotel policies (see [`src/features/settings`](src/features/settings)).
- **Authentication:** Implements a secure user authentication system. Users can sign up for new accounts, log in with existing credentials, and manage their passwords. Protects sensitive data and ensures that only authorized users can access the application (see [`src/features/authentication`](src/features/authentication)).
- **Dark Mode:** Enhances user experience by allowing users to toggle between light and dark themes. This feature reduces eye strain and provides a comfortable viewing experience, especially in low-light conditions (see [`src/context/DarkModeContext.jsx`](src/context/DarkModeContext.jsx) and [`src/ui/DarkModeToggle.jsx`](src/ui/DarkModeToggle.jsx)).
- **Check-in/Check-out:** Manages the check-in and check-out processes. Staff can add breakfast options, confirm payments, and finalize check-in/check-out procedures. Improves the efficiency of front desk operations and ensures accurate record-keeping (see [`src/features/check-in-out`](src.features/check-in-out)).
- **Today Activity:** Displays a summary of activities for the current day. This includes check-ins, check-outs, and other relevant events. Provides a quick overview of daily operations and helps staff stay informed (see [`src/features/check-in-out/TodayActivity.jsx`](src/features/check-in-out/TodayActivity.jsx)).
- **Pagination:** Implements pagination for handling large datasets, such as bookings and user lists. Improves performance and user experience by loading data in manageable chunks (see [`src/ui/Pagination.jsx`](src/ui/Pagination.jsx)).
