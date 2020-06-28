import { Comment } from './comment';

export class Dish {
id: string;
name: string;
images: string;
category: string;
featured: boolean;
label: string;
price: string;
description: string;
comments: Comment[];
}
