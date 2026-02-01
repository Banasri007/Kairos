# Troubleshooting Login Issues

## Error: "Unexpected token '<', "<!DOCTYPE "... is not valid JSON"

This error means the frontend is receiving HTML instead of JSON from the API. This usually happens when:

1. **The Vite dev server proxy isn't working**
2. **The backend server isn't running**
3. **The dev server needs to be restarted after config changes**

## Solution Steps

### Step 1: Verify Backend is Running

Check if the backend is running on port 3001:
```bash
# Windows PowerShell
netstat -ano | findstr :3001

# Should show LISTENING status
```

If not running, start it:
```bash
npm run dev:server
```

### Step 2: Restart Both Servers

**Important**: After making changes to `vite.config.ts`, you MUST restart the Vite dev server.

1. Stop both servers (Ctrl+C)
2. Start backend:
   ```bash
   npm run dev:server
   ```
3. In a NEW terminal, start frontend:
   ```bash
   npm run dev
   ```

Or use the combined command:
```bash
npm run dev:all
```

### Step 3: Test the Backend Directly

Open your browser and go to:
```
http://localhost:3001/api/health
```

You should see JSON like:
```json
{"status":"ok","dataLoaded":true,"memberCount":20}
```

If you see HTML or an error, the backend isn't running correctly.

### Step 4: Check Browser Console

1. Open browser DevTools (F12)
2. Go to Console tab
3. Try to login
4. Check for error messages
5. Look for the log messages showing the request URL and response

### Step 5: Verify Proxy Configuration

Make sure `vite.config.ts` has:
```typescript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      changeOrigin: true,
      secure: false,
      ws: true,
    },
  },
}
```

### Step 6: Clear Browser Cache

Sometimes cached responses cause issues:
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Or clear browser cache

### Step 7: Check Port Conflicts

Make sure nothing else is using port 3001:
```bash
# Windows
netstat -ano | findstr :3001
```

If something else is using it, either:
- Stop that process
- Change the backend port in `server/index.js` and update vite.config.ts

## Test Credentials

- Member ID: `SHG001`
- Password: `SHG001123`

## Still Having Issues?

1. Check the browser Network tab to see what URL is being called
2. Check if the response is HTML (index.html) instead of JSON
3. Verify both servers are running in separate terminals
4. Make sure you're accessing the app through the Vite dev server (usually http://localhost:5173)

