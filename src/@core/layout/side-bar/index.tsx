"use client";

import React, { memo, useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarProps } from "./types";
import Icon from "@/@core/components/icon";

const Sidebar: React.FC<SidebarProps> = ({ navItems, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <IconButton onClick={toggleSidebar}>
          <Icon icon="mdi:menu" />
        </IconButton>
      </Box>
      <Drawer variant="persistent" open={isOpen}>
        <Box
          sx={{
            display: "flex",
            justifyContent: isOpen ? "flex-end" : "center",
            alignItems: "center",
            padding: 1,
          }}
          width={180}
        >
          <IconButton onClick={toggleSidebar}>
            <Icon icon="mdi:close" />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} passHref prefetch>
              <ListItemButton
                selected={pathname === item.path}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "primary.main",
                    color: "white",
                    "& .MuiListItemIcon-root": { color: "white" },
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                {isOpen && <ListItemText primary={item.label} />}
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 2,
          marginLeft: isOpen ? 20 : 0,
          transition: "margin-left 0.3s",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default memo(Sidebar);
