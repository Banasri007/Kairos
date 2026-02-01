# Login Credentials for All 20 Users

All users can login with their Member ID and password (format: MemberID + "123")

## Shakti Mahila SHG (4 members)

| Member ID | Name | Role | Password | UI Type |
|-----------|------|------|----------|---------|
| SHG001 | Sita Devi | President | SHG001123 | Leader UI |
| SHG002 | Rani Kumari | Treasurer | SHG002123 | Leader UI |
| SHG003 | Lakshmi Bai | Secretary | SHG003123 | Leader UI |
| SHG004 | Meena Devi | Member | SHG004123 | Member UI |

## Ujjwala SHG (4 members)

| Member ID | Name | Role | Password | UI Type |
|-----------|------|------|----------|---------|
| SHG005 | Sunita Yadav | President | SHG005123 | Leader UI |
| SHG006 | Anjali Patel | Treasurer | SHG006123 | Leader UI |
| SHG007 | Kavita Singh | Secretary | SHG007123 | Leader UI |
| SHG008 | Pooja Sharma | Member | SHG008123 | Member UI |

## Pragati SHG (4 members)

| Member ID | Name | Role | Password | UI Type |
|-----------|------|------|----------|---------|
| SHG009 | Rekha Devi | President | SHG009123 | Leader UI |
| SHG010 | Nirmala Joshi | Treasurer | SHG010123 | Leader UI |
| SHG011 | Asha Kumari | Secretary | SHG011123 | Leader UI |
| SHG012 | Radha Mishra | Member | SHG012123 | Member UI |

## Saraswati SHG (4 members)

| Member ID | Name | Role | Password | UI Type |
|-----------|------|------|----------|---------|
| SHG013 | Savita Rao | President | SHG013123 | Leader UI |
| SHG014 | Geeta Nair | Treasurer | SHG014123 | Leader UI |
| SHG015 | Latha Iyer | Secretary | SHG015123 | Leader UI |
| SHG016 | Rukmini Das | Member | SHG016123 | Member UI |

## Nirmala SHG (4 members)

| Member ID | Name | Role | Password | UI Type |
|-----------|------|------|----------|---------|
| SHG017 | Kamala Reddy | President | SHG017123 | Leader UI |
| SHG018 | Bhavya Jain | Treasurer | SHG018123 | Leader UI |
| SHG019 | Shobha Patil | Secretary | SHG019123 | Leader UI |
| SHG020 | Neha Kulkarni | Member | SHG020123 | Member UI |

## Super Admin

| Admin ID | Password | UI Type |
|----------|----------|---------|
| admin | admin123 | Super Admin UI |

## UI Differences

### Member UI
- Personal dashboard with own data
- Can view own loans, savings, attendance
- Can see notifications (filtered to their own)
- Cannot access: Members list, Reports, Insights, NGO Locator
- Cannot schedule meetings

### Leader UI (President, Treasurer, Secretary)
- Full SHG dashboard
- Can view all members in their SHG
- Can schedule meetings (creates notifications for all members)
- Can access: Members, Reports, Insights, NGO Locator
- Sees all notifications for the SHG

### Super Admin UI
- System-wide administration
- Can manage all SHGs
- Full system access

## Meeting Scheduling Feature

**For Leaders Only:**
1. Go to Meetings page
2. Click "Schedule Meeting" button
3. Fill in meeting details:
   - Title (required)
   - Date (required)
   - Time (required)
   - Location (optional)
   - Agenda items (one per line, optional)
4. Click "Schedule Meeting"
5. **Automatically creates notifications for ALL members in the SHG**
6. Notifications appear in both members' and leaders' notification pages

## Notification System

- **Meeting Notifications**: Created automatically when a leader schedules a meeting
- **EMI Reminders**: Generated from loan data (delayed payments)
- **Loan Updates**: Status changes
- **Savings Milestones**: When members reach savings goals

Notifications are:
- Filtered by SHG (users only see their SHG's notifications)
- For members: Only see notifications relevant to them
- For leaders: See all notifications for their SHG
- Auto-refreshed every 30 seconds

