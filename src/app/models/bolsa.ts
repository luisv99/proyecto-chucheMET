import { Item } from '../Servicios/conexion.service';

export interface Bolsa {
    isOpen: boolean;
    pesoMax: number;
    items: Item[];
}
