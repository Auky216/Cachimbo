/***
 * Agregar las rutas necesarias para las secciones para testear
 */
import React from "react";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LandingPage from "../pages/LandingPage";
import Principal from "../sections/Principal";
import Profile from "../sections/Profile";
import Library from "../sections/Library/Library";
import InteractionGroups from "../sections/InteractionGroups";
import ChatAssistant from "../sections/ChatAssistant";
import CourseMain from "../sections/infoCourse/CourseMain";
import PdfLibrary from "../sections/Library/PdfLibrary";
import TeacherMain from "../sections/TeacherMain";
import TeachersIndividualPage from "../sections/infoTeachers/teachersIndividualPage";
import NextCourses from "../sections/NextCourses";
import Events from "../sections/Events/Events";
import EventInfo from "../sections/Events/Eventinfo";
import Sugerencias from "../sections/sugerencias/Suggestions";
import SuggestionDetail from "../sections/sugerencias/SuggestionDetail";
import HomePage from "../pages/HomePage";

export const routerNormal = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/welcome",
    element: <LandingPage />,
  },
];

export const routerProtected = [
  {
    path: "/dashboard/main",
    element: <Principal />,
  },
  {
    path: "/dashboard/profile",
    element: <Profile />,
  },
  {
    path: "/dashboard/library",
    element: <Library />,
  },
  {
    path: "/dashboard/intergroups",
    element: <InteractionGroups />,
  },
  {
    path: "/dashboard/asistant",
    element: <ChatAssistant />,
  },
  {
    path: "/dashboard/main/course/:course",
    element: <CourseMain />,
  },
  {
    path: "/dashboard/library/pdf/:pdf",
    element: <PdfLibrary />,
  },
  {
    path: "/dashboard/main/teachers/",
    element: <TeacherMain />,
  },
  {
    path: "/dashboard/main/teachers/:name", 
    element: <TeachersIndividualPage />,
  },
  {
    path: "/dashboard/main/nextcourses",
    element: <NextCourses />,
  },
  {
    path: "/dashboard/main/events",
    element: <Events />,
  },
  {
    path: "/dashboard/main/events/:event",
    element: <EventInfo />,
  },
  {
    path: "/dashboard/main/Sugerencias",
    element: <Sugerencias />,
  },
  {
    path: "/dashboard/main/sugerencias/:id",
    element: <SuggestionDetail />,
  },
  {
    path: "*",
    element: <Navigate to="/dashboard/main" />,
  }
];