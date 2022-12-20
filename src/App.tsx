import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  NotificationsProvider,
  notificationProvider,
  MantineProvider,
  Global,
  Layout,
  LightTheme,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-mantine";

import { DataProvider } from "@pankod/refine-strapi-v4";
import routerProvider from "@pankod/refine-react-router-v6";

import { authProvider, axiosInstance } from "./authProvider";
import { API_URL } from "./constants";
import { TagList } from "pages/TagList";
import { TagCreate } from "pages/TagCreate";
import { TagEdit } from "pages/TagEdit";

function App() {
  return (
    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>
      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />
      <NotificationsProvider position="top-right">
        <Refine
          dataProvider={DataProvider(
            "https://api.fake-rest.refine.dev",
            axiosInstance
          )}
          notificationProvider={notificationProvider}
          Layout={Layout}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          routerProvider={routerProvider}
          resources={[
            {
              name: "tags",
              list: TagList,
              create: TagCreate,
              edit: TagEdit,
              canDelete: true,
            },
          ]}
        />
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default App;
