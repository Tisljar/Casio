export type AmbassadorType = {
    name: string;
    id: string;
    description: string;
    imgSrc: string;
}

export const ambassadors:Array<AmbassadorType> = [
    {
        name:'Denzel Washington',
        id: 'DW',
        description:'A symbol of timeless style and excellence, Denzel Washingtons presence reflects the precision and craftsmanship of Casio watches.',
        imgSrc:'denzel-washington.png',
    },
    {
        name:'Robert Lewandowski',
        id: 'RL',
        description:'Driven by success, Robert Lewandowski’s energy and leadership perfectly align with the performance and durability of Casio.',
        imgSrc:'robert-lewandowski.png',
    },
    {
        name:'Ed Sheeran',
        id: 'ES',
        description:'Creative and genuine, Ed Sheeran’s passion for music aligns with Casios bold innovation and playful unique designs.',
        imgSrc:'ed-sheeran.png',
    }

]