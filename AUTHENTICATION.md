# Authentication System Documentation

## Overview

The SHG Platform now includes a complete authentication system that ensures:
- Each member logs in with their unique Member ID and password
- Members can only see and access data from their own SHG
- Members cannot see other SHG names or switch between SHGs
- All API endpoints are protected and automatically filter by the authenticated user's SHG

## Default Passwords

Each member has a default password format:
- **Password = MemberID + "123"**
- Example: Member ID `SHG001` has password `SHG001123`

## Login Credentials Examples

| Member ID | Name | SHG Name | Password |
|-----------|------|----------|----------|
| SHG001 | Sita Devi | Shakti Mahila SHG | SHG001123 |
| SHG005 | Sunita Yadav | Ujjwala SHG | SHG005123 |
| SHG009 | Rekha Devi | Pragati SHG | SHG009123 |
| SHG013 | Savita Rao | Saraswati SHG | SHG013123 |
| SHG017 | Kamala Reddy | Nirmala SHG | SHG017123 |

## How It Works

### Backend Authentication

1. **Login Endpoint** (`POST /api/auth/login`)
   - Accepts `memberID` and `password`
   - Validates credentials against member data
   - Creates a session and returns a `sessionId`
   - Returns user info (without password)

2. **Session Management**
   - Sessions are stored in-memory (24-hour expiration)
   - Session ID is sent via `x-session-id` header
   - All protected endpoints require valid session

3. **Protected Endpoints**
   - All data endpoints automatically filter by authenticated user's SHG
   - Members cannot access data from other SHGs
   - Unauthorized requests return 401 status

### Frontend Authentication

1. **Login Page**
   - Users enter Member ID and password
   - On success, session is stored in localStorage
   - User is redirected to dashboard

2. **Auth Context**
   - Provides `user`, `isAuthenticated`, `login`, `logout` functions
   - Automatically checks for existing session on app load
   - All components can access user info via `useAuth()` hook

3. **Protected Routes**
   - App.tsx checks authentication status
   - Unauthenticated users see login page
   - Authenticated users see main application

## API Endpoints

### Public Endpoints
- `GET /api/health` - Health check
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/verify` - Verify session

### Protected Endpoints (Require Authentication)
- `GET /api/members` - Get members (only from user's SHG)
- `GET /api/members/:id` - Get member by ID (only if in same SHG)
- `GET /api/loans` - Get loans (only from user's SHG)
- `GET /api/dashboard/stats` - Get dashboard stats (only for user's SHG)
- `GET /api/shgs` - Get user's SHG name (not all SHGs)

## Security Features

1. **SHG Isolation**
   - Each user can only see data from their own SHG
   - API automatically filters all queries by user's SHG
   - No way to access other SHG data through the API

2. **Session Management**
   - Sessions expire after 24 hours
   - Session ID required for all protected endpoints
   - Logout invalidates session immediately

3. **Password Storage**
   - Currently using simple password format (MemberID + "123")
   - **Note**: In production, passwords should be hashed using bcrypt or similar
   - Consider implementing password reset functionality

## Usage in Components

```typescript
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, logout } = useAuth();
  
  if (!isAuthenticated) {
    return <div>Please login</div>;
  }
  
  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <p>Your SHG: {user.shgName}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

## Testing

1. Start the backend:
   ```bash
   npm run dev:server
   ```

2. Start the frontend:
   ```bash
   npm run dev
   ```

3. Login with any member credentials:
   - Member ID: `SHG001`
   - Password: `SHG001123`

4. Verify:
   - You can only see members from "Shakti Mahila SHG"
   - You cannot see other SHG names
   - All data is filtered to your SHG only

## Future Enhancements

1. **Password Hashing**: Implement bcrypt for secure password storage
2. **Password Reset**: Add forgot password functionality
3. **Session Persistence**: Use Redis or database for session storage
4. **Role-Based Permissions**: Different access levels for President, Treasurer, Secretary, Member
5. **Activity Logging**: Track user actions for audit purposes

