export type PlantNavigationProps = {
  id: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      signIn: undefined;
      signUp: undefined;
      home: undefined;
      plant: PlantNavigationProps;
      myPlants: undefined;
    }
  }
}
