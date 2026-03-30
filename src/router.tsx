import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import SpecialLayout from "./components/layout/SpecialLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import DocsPage from "./pages/DocsPage.tsx";
import AdminPage from "./pages/AdminPage.tsx";
import UnsubscribePage from "./pages/UnsubscribePage.tsx";
import ConfirmSubscriptionPage from "./pages/ConfirmSubscriptionPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'docs',
        element: <DocsPage />,
      },
      {
        path: 'admin',
        element: <AdminPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      }
    ],
  },
  {
    path: '/newsletter/unsubscribe',
    element: <SpecialLayout />,
    children: [
      {
        index: true,
        element: <UnsubscribePage />,
      },
    ],
  },
  {
    path: '/newsletter/verify',
    element: <SpecialLayout />,
    children: [
      {
        index: true,
        element: <ConfirmSubscriptionPage />,
      },
    ],
  }
])