```md
# Backend - Status Management Application

## Hosted Links
- **Frontend**: [LookOut Frontend](https://lookout-frontend-5vfs.onrender.com/)
- **Backend**: `http://localhost:2722/api/v1/` (Replace with hosted URL if available)

## Features
- RESTful APIs for managing service statuses.
- WebSocket support for real-time updates.
- Role-based access control using Clerk.
- Supports CRUD operations for service statuses.

## Technologies Used
- **Node.js**: Backend runtime.
- **Express.js**: Web framework.
- **WebSocket**: Real-time communication.
- **Clerk**: User authentication and role management.
- **MongoDB / PostgreSQL** (or any other database used).

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/AmitChinara/LookOut.git
    cd LookOut/backend
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Set up the environment variables in a `.env` file:
    ```env
    PORT=2722
    DATABASE_URL=mongodb://your-db-url
    CLERK_SECRET=your-clerk-secret-key
    ```

4. Start the server:
    ```sh
    npm start
    # or
    yarn start
    ```

## API Endpoints

### 1. Get All Statuses
**Endpoint:** `GET /api/v1/status`
- Fetches all service statuses.

### 2. Create a New Status
**Endpoint:** `POST /api/v1/status/createStatus`
- **Body Parameters:**
    ```json
    {
        "service": "Service Name",
        "createdBy": "Admin Name"
    }
    ```

### 3. Update a Service Status
**Endpoint:** `PUT /api/v1/status/updateStatus`
- **Body Parameters:**
    ```json
    {
        "id": "service-id",
        "status": "Operational"
    }
    ```

### 4. Delete a Service Status
**Endpoint:** `DELETE /api/v1/status/deleteStatus`
- **Body Parameters:**
    ```json
    {
        "id": "service-id"
    }
    ```

## WebSocket Communication
- **Connection URL:** `ws://localhost:2722/api/v1/status/getStatus`
- **Events:**
  - `INITIAL_LOAD` - Sends all statuses on connection.
  - `STATUS_UPDATED` - Updates status in real-time.
  - `SERVICE_CREATED` - Adds new service status.
  - `SERVICE_DELETED` - Removes deleted service from UI.

## Authentication & Authorization
- Uses **Clerk** for user authentication.
- Role-based access:
  - **Admins**: Create, update, and delete statuses.
  - **Regular Users**: View statuses only.

## Deployment
For deploying the backend, use **Render, AWS, Vercel, or another cloud platform**.

```sh
# Example for deploying to Render
render deploy --service lookout-backend
```

Ensure you set the correct **environment variables** in your hosting provider.

---

**Now your backend is ready for production! 🚀**
```
