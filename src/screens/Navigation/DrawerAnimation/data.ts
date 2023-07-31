import DrawerScreen from "./components/DrawerScreen";
import { colors } from "./constant";

export const ScreensArray = [
  { route: 'Home', label: 'Home', icon: 'home', component: DrawerScreen, notification: 0, },
  { route: 'Inbox', label: 'My Inbox', icon: 'inbox', component: DrawerScreen, notification: 9, },
  { route: 'Calendar', label: 'My Calendar', icon: 'calendar', component: DrawerScreen, notification: 4, },
  { route: 'Documents', label: 'My Documents', icon: 'layers', component: DrawerScreen, notification: 0, },
  { route: 'Activity', label: 'My Activity', icon: 'run', component: DrawerScreen, notification: 2, },
  { route: 'Settings', label: 'Settings', icon: 'cog', component: DrawerScreen, notification: 0, },
];

export const ProjectsArray = [
  { title: "Personal", icon: "account", color: colors.icon1, iconType: 'home' },
  { title: "Travel", icon: "beach", color: colors.icon2, iconType: 'home' },
  { title: "Business", icon: "briefcase", color: colors.icon3, iconType: 'home' },
  { title: "Add", icon: "plus", color: colors.icon4, iconType: 'home' },
]

export const ProfileMenu = [
  { label: 'History', icon: 'history', iconType: 'home' },
  { label: 'Rate', icon: 'star', iconType: 'home' },
  { label: 'Share', icon: 'share', iconType: 'home' },
  { label: 'Logout', icon: 'logout', iconType: 'home' },
]
