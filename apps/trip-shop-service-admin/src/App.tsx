import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VoyagesList } from "./voyages/VoyagesList";
import { VoyagesCreate } from "./voyages/VoyagesCreate";
import { VoyagesEdit } from "./voyages/VoyagesEdit";
import { VoyagesShow } from "./voyages/VoyagesShow";
import { AccueilList } from "./accueil/AccueilList";
import { AccueilCreate } from "./accueil/AccueilCreate";
import { AccueilEdit } from "./accueil/AccueilEdit";
import { AccueilShow } from "./accueil/AccueilShow";
import { BoutiqueList } from "./boutique/BoutiqueList";
import { BoutiqueCreate } from "./boutique/BoutiqueCreate";
import { BoutiqueEdit } from "./boutique/BoutiqueEdit";
import { BoutiqueShow } from "./boutique/BoutiqueShow";
import { ServicesComplementairesList } from "./servicesComplementaires/ServicesComplementairesList";
import { ServicesComplementairesCreate } from "./servicesComplementaires/ServicesComplementairesCreate";
import { ServicesComplementairesEdit } from "./servicesComplementaires/ServicesComplementairesEdit";
import { ServicesComplementairesShow } from "./servicesComplementaires/ServicesComplementairesShow";
import { BlogList } from "./blog/BlogList";
import { BlogCreate } from "./blog/BlogCreate";
import { BlogEdit } from "./blog/BlogEdit";
import { BlogShow } from "./blog/BlogShow";
import { EspaceClientList } from "./espaceClient/EspaceClientList";
import { EspaceClientCreate } from "./espaceClient/EspaceClientCreate";
import { EspaceClientEdit } from "./espaceClient/EspaceClientEdit";
import { EspaceClientShow } from "./espaceClient/EspaceClientShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TripShopService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Voyages"
          list={VoyagesList}
          edit={VoyagesEdit}
          create={VoyagesCreate}
          show={VoyagesShow}
        />
        <Resource
          name="Accueil"
          list={AccueilList}
          edit={AccueilEdit}
          create={AccueilCreate}
          show={AccueilShow}
        />
        <Resource
          name="Boutique"
          list={BoutiqueList}
          edit={BoutiqueEdit}
          create={BoutiqueCreate}
          show={BoutiqueShow}
        />
        <Resource
          name="ServicesComplementaires"
          list={ServicesComplementairesList}
          edit={ServicesComplementairesEdit}
          create={ServicesComplementairesCreate}
          show={ServicesComplementairesShow}
        />
        <Resource
          name="Blog"
          list={BlogList}
          edit={BlogEdit}
          create={BlogCreate}
          show={BlogShow}
        />
        <Resource
          name="EspaceClient"
          list={EspaceClientList}
          edit={EspaceClientEdit}
          create={EspaceClientCreate}
          show={EspaceClientShow}
        />
      </Admin>
    </div>
  );
};

export default App;
