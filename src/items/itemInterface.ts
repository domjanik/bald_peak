export default interface itemInterface {
    name: string;
    id: string;
    inventory_id: string;
    equiped: boolean;

    action: () => Promise<any>;
}