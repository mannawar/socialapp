export interface Group {
    name: string;
    connections: Connection[];
} 

interface Connection {
    username: string;
    connectionId: string;
}