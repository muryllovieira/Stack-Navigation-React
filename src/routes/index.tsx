import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import { BottomTabsRoutes } from './bottom-tabs.routes'
import { DrawerRoutes } from "./drawer.routes";

//CAIXA DE CONTEXTO
export function Routes() {
    return (

        /* NAVEGAÇÃO COM STACK */
        // <NavigationContainer>
        //    <StackRoutes />
        // </NavigationContainer>

        /* NAVEGAÇÃO COM TABS */
        //<NavigationContainer>
        //<BottomTabsRoutes />
        //</NavigationContainer> 

        /* NAVEGAÇÃO COM DRAWER */
        < NavigationContainer >
            <DrawerRoutes />
        </NavigationContainer >
    )

}