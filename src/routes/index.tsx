import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";

//CAIXA DE CONTEXTO
export function Routes() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )

}