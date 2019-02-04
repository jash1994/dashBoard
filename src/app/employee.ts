export interface Employee {
  id: number;
  name: string;
  ppu: any;
  type: number;
  batters: {
    batter: {
      id: any;
      type: any;
    }
  };
  topping: {
    id: any;
    type: any;
  };
}


