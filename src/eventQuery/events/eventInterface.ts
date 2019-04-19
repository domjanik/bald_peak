export default interface Event {
    callerId: string;
    action: () => Promise<any>;
}