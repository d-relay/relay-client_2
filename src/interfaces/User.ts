export interface User {
    id: string;
    login: string;
    email: string;
    type: string;
    token: string;
    description: string;
    display_name: string;
    profile_image_url: string;
    offline_image_url: string;
    broadcaster_type: string;
    view_count: number;
}