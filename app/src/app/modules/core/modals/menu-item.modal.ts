export interface MenuItem{
    name:string;
    icon?:string;
    items:MenuItem;
    link?:string;
}