# Role-Based UI Differences

## How to Test

### Test as a Member:
1. Login with: **SHG004** / **SHG004123** (Meena Devi - Member)
2. You should see:
   - **Sidebar**: Only shows Dashboard, Savings, Loans, Meetings, Notifications, Training
   - **NO** "Members", "Reports", "Insights", "NGO Locator" in sidebar
   - **Dashboard**: "My Dashboard" with personal stats only
   - **Savings Page**: "My Savings & Attendance" - personal view only
   - **Loans Page**: "My Loan" - only your own loan
   - **Meetings Page**: NO "Schedule Meeting" button
   - **Notifications**: "My Notifications" - filtered to your own

### Test as a Leader:
1. Login with: **SHG001** / **SHG001123** (Sita Devi - President)
2. You should see:
   - **Sidebar**: Shows ALL items including Members, Reports, Insights, NGO Locator
   - **Dashboard**: "Leader Dashboard" with full SHG overview
   - **Savings Page**: Full SHG savings view with all members
   - **Loans Page**: Full loan management with all members' loans
   - **Meetings Page**: "Schedule Meeting" button visible
   - **Notifications**: All SHG notifications

## Role Detection Logic

The system detects roles based on the `role` field from the CSV:
- **"President"** → `leader`
- **"Treasurer"** → `leader`
- **"Secretary"** → `leader`
- **"Member"** → `member`
- **"SuperAdmin"** → `superadmin`

## Debugging

If you see the same UI for both:
1. Open browser console (F12)
2. Look for: `🔍 User role detection:` log
3. Check what `userRole` and `detectedRole` values are
4. Verify the role from CSV matches what's shown

## Navigation Items by Role

### Member Navigation:
- ✅ Dashboard
- ✅ Savings & Attendance
- ✅ Loans
- ✅ Meetings
- ✅ Notifications
- ✅ Training
- ❌ Members (hidden)
- ❌ Reports (hidden)
- ❌ Insights (hidden)
- ❌ NGO Locator (hidden)

### Leader Navigation:
- ✅ Dashboard
- ✅ Members
- ✅ Savings & Attendance
- ✅ Loans
- ✅ Meetings
- ✅ Notifications
- ✅ Training
- ✅ NGO Locator
- ✅ Reports
- ✅ Insights

## Page Differences

### Dashboard
- **Member**: "My Dashboard" - personal stats, own savings, own loans
- **Leader**: "Leader Dashboard" - SHG overview, all members stats, group activities

### Savings Page
- **Member**: "My Savings & Attendance" - only own data, personal rank
- **Leader**: Full SHG savings table, all members, group statistics

### Loans Page
- **Member**: "My Loan" - only own loan details, EMI status
- **Leader**: Full loan management, all members' loans, approval actions

### Meetings Page
- **Member**: View meetings only, NO schedule button
- **Leader**: View meetings + "Schedule Meeting" button

### Notifications
- **Member**: Filtered to own notifications only
- **Leader**: All SHG notifications

