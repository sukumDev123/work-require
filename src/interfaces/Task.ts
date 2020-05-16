export interface Tash {
    
    id_task?: string
    name_task: string
    create_at: string
    id_team?: string
}
export interface SubTask {
    id_subTask?: string
    name_subTash: string
    status_task: string
    id_task?: string
    create_at?: string
}