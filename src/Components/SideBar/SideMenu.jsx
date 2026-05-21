import * as React from "react";
import './SideMenu.css'
import {
  Box,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Avatar,
} from "@mui/material";

// Icons 
import GridViewIcon from "@mui/icons-material/GridView"; // Dashboard
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong"; // Expenses
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined"; // Reports
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined"; // Analytics
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"; // Settings
import HelpOutlineIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout"; // Logout

 
export default function SideMenu({user}) {

  const [activeItem, setActiveItem] = React.useState("Expenses");

  const mainMenuItems = [
    { text: "Dashboard", icon: <GridViewIcon fontSize="small" /> },
    { text: "Expenses", icon: <ReceiptLongIcon fontSize="small" /> },
    { text: "Reports", icon: <DescriptionOutlinedIcon fontSize="small" /> },
    { text: "Analytics", icon: <AssessmentOutlinedIcon fontSize="small" /> },
    { text: "Settings", icon: <SettingsOutlinedIcon fontSize="small" /> },
  ];

  const footerItems = [
    { text: "Help", icon: <HelpOutlineIcon fontSize="small" /> },
    { text: "Logout", icon: <LogoutIcon fontSize="small" /> },
  ];

  // function logOutFunction(){
  //   user(localStorage.removeItem('userAccount'));
  // }


  return (
    <Drawer
    className="sideBarMenu"
      variant="permanent"
      sx={{
        width: 260,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 260,
          boxSizing: "border-box",
          borderRight: "none",
          padding: "20px 16px",
          backgroundColor: "#FFFFFF",
          border: '2px solid #E5E7EB',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.03)'
        },
      }}
    >
      {/* Header: Logo */}
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 1.5, px: 1, mb: 4 }}
      >
        <Avatar
          sx={{
            bgcolor: "transparent",
            color: "#374151",
            border: "2px solid #D1D5DB",
            width: 32,
            height: 32,
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          E
        </Avatar>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "#374151", fontSize: "1.3rem" ,fontFamily: 'Inter, sans-serif',fontWeight: 'bold', }}
        >
          Expensify Pro
        </Typography>
      </Box>

      {/* Main Navigation */}
      <List sx={{ flexGrow: 1 }}>
        {mainMenuItems.map((item) => {
          const isActive = activeItem === item.text;
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                onClick={() => setActiveItem(item.text)}
                sx={{
                  borderRadius: "8px",
                  backgroundColor: isActive ? "#F3F4F6" : "transparent",
                  "&:hover": { backgroundColor: "#ecedee" },
                  py: 1,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "40px",
                    color: isActive ? "#111827" : "#9CA3AF",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primarytypographyprops={{
                    fontSize: "0.95rem",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#111827" : "#6B7280",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

       
      {/* Bottom Navigation */}
      <div className="BottomNavigation">
        <button>
          <HelpOutlineIcon fontSize="small" className="nav-icon"/>
          <p>Help</p>
        </button>
        <button onClick={user}>
          <LogoutIcon fontSize="small" className="nav-icon" /> 
          <p>LogOut</p>
        </button>
      </div>
    </Drawer>
  );
}
