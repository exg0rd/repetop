import {
    NotebookPen,
    PersonStanding,
    CalendarClock,
    Settings,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { comforta } from "../layout";

// Menu items.
const items = [
    {
        title: "Тесты",
        icon: NotebookPen,
        url: '/dashboard/tests',
    },
    {
        title: "Ученики",
        url: "/dashboard/students",
        icon: PersonStanding,
    },
    {
        title: "Расписание",
        url: "/dashboard/timetable",
        icon: CalendarClock,
    },
    {
        title: "Настройки",
        url: "/profile/settings",
        icon: Settings,
    },
];

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent className={comforta.className}>
                <SidebarGroup>
                    <SidebarGroupLabel>Меню</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
